export default {
  siteRoot: 'http://www.thitgorn.com',
  getSiteData: () => ({
    title: 'Thitiwat Thongbor | Software Developer',
  }),
  getRoutes: async () =>
    [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/repos',
        component: 'src/containers/Repos',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ],
}
