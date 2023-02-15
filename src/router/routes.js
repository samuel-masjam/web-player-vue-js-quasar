

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
    ]
  },
  {
    path: '/access_token=:access_token',
    component: () => import('../layouts/AppLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/HomePage.vue')}
    ]
  },
  // {
  //   path: '/app',
  //   component: () => import('../layouts/AppLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('../pages/HomePage.vue')}
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
