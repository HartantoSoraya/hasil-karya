const adminMaterialMovementSolidVolumeEstimateRoutes = [
  {
    path: 'material-movement-solid-volume-estimates',
    component: () => import('../pages/admin/material-movement-solid-volume-estimate/material-movement-solid-volume-estimates.vue'),
    name: 'admin-material-movement-solid-volume-estimates',
  },
  {
    path: 'material-movement-solid-volume-estimate/:id',
    component: () => import('../pages/admin/material-movement-solid-volume-estimate/material-movement-solid-volume-estimate.vue'),
    name: 'admin-material-movement-solid-volume-estimate-view',
  },
  {
    path: 'material-movement-solid-volume-estimate/create',
    component: () => import('../pages/admin/material-movement-solid-volume-estimate/create-material-movement-solid-volume-estimate.vue'),
    name: 'admin-material-movement-solid-volume-estimate-create',
  },
  {
    path: 'material-movement-solid-volume-estimate/:id/edit',
    component: () => import('../pages/admin/material-movement-solid-volume-estimate/edit-material-movement-solid-volume-estimate.vue'),
    name: 'admin-material-movement-solid-volume-estimate-edit',
  },
]

export default adminMaterialMovementSolidVolumeEstimateRoutes