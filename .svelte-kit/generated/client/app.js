export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/(app)": [4,[2]],
		"/livescores": [~10],
		"/livescores/countdown": [11],
		"/(app)/register": [5,[3]],
		"/(app)/register/all-terrain": [~6,[3]],
		"/(app)/register/autonomous": [~7,[3]],
		"/(app)/register/junior": [~8,[3]],
		"/(app)/register/linefollower": [~9,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';