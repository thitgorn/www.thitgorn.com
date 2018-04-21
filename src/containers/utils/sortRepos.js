import Axios from 'axios'
import Moment from 'moment'

export function sortController (repos, sortBy, setButtonLoading) {
  switch (sortBy) {
    case 'Star': sortByStar(repos); break
    case 'Commit': sortByCommit(repos, setButtonLoading); break
    case 'Recent Commit': sortByRecentCommit(repos); break
    default: sortDefault(repos)
  }
}

function sortDefault (repos) {
  repos.sort((a, b) => b.size - a.size)
}

function sortByStar (repos) {
  repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
}

async function sortByCommit (repos, setButtonLoading) {
  let loading = true
  setButtonLoading(true)
  const token = '9f9e0672140bcfc71e7566364e498f81aa428caa'
  await repos.forEach(repo => {
    if (!repo.commit) {
      Axios.get(`https://api.github.com/repos/${repo.full_name}/contributors`, {
        params: {
          username: token,
        },
      }).then(res => {
        let commits = 0
        res.data.forEach(data => {
          commits += data.contributions
        })
        repo.commit = commits

        if (repo.id === repos[repos.length-1].id) {
          loading = false
        }
      }).catch(err => console.log(err))
    } else {
      loading = false
    }
  })
  const id = setInterval(() => {
    if (!loading) {
      setButtonLoading(false)
      repos.sort((a, b) => parseInt(b.commit, 10) - parseInt(a.commit, 10))
      clearInterval(id)
    }
  }, 100)
}

function sortByRecentCommit (repos) {
  repos.sort((a, b) => Moment(b.updated_at).diff(Moment(a.updated_at)))
}
