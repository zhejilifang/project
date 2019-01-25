/** When your routing user is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/list',
  name: 'User',
  meta: {
    title: 'User',
    icon: 'peoples'
  },
  children: [{
    path: 'list',
    component: () =>
      import ('@/views/user/list'),
    name: 'UserList',
    meta: { title: 'UserList' }
  }]
}
export default userRouter