import Authorization from "../components/screens/Authorization/Authorization";
import Documents from "../components/screens/Documents/Documents";
import Lessons from "../components/screens/lessons/Lessons";
import News from "../components/screens/News/News";
import Payments from "../components/screens/Payments/Payments";
import Reference from "../components/screens/Reference/Reference";
import Profile from './../components/screens/Profile/Profile';

export const routes = [
	{
		path: '/',
		component: Authorization,
		auth: false
	},
	{
		path: '/auth',
		component: Authorization,
		auth: false
	},
	{
		path: '/profile',
		component: Profile,
		auth: true
	},
	{
		path: '/reference',
		component: Reference,
		auth: true
	},
	{
		path: '/news',
		component: News,
		auth: true
	},
	{
		path: '/documents',
		component: Documents,
		auth: true
	},
	{
		path: '/payments',
		component: Payments,
		auth: true
	},
	{
		path: '/lessons',
		component: Lessons,
		auth: true
	},
]
