const getRoutes = (platform) => ({
  login: platform === 'native' ? 'Login' : '/login',
  drawer: platform === 'native' ? 'Drawer' : '/',
  home: platform === 'native' ? 'Home' : '/',
  tableView: platform === 'native' ? 'TableView' : '/table-view',
  detailView: platform === 'native' ? 'DetailView' : '/detail-view',
});

export default getRoutes;
