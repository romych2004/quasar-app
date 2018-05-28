export default [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('layouts/home'),
		children: [
			{
				path: '',
				name: 'home',
				component: () => import('pages/home/feed/')
			},
			{
				path: 'messages',
				name: 'home/messages',
				component: () => import('pages/home/messages/')
			},
			{
				path: 'users',
				name: 'home/users',
				component: () => import('pages/home/users/')
			},
			{
				path: 'profile',
				name: 'home/profile',
				component: () => import('pages/home/profile/')
			},
			{
				path: 'groups',
				name: 'home/groups',
				component: () => import('pages/home/groups/')
			},
			{
				path: 'files',
				name: 'home/files',
				component: () => import('pages/home/files/')
			}
		]
	},

	{
		// Always leave this as last one
		path: '*',
		component: () => import('pages/404')
	}
]
