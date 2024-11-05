import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","pp-3.png","pp-3.webp","pp-4.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.kQQpI2fT.js","app":"_app/immutable/entry/app.CuFgON0g.js","imports":["_app/immutable/entry/start.kQQpI2fT.js","_app/immutable/chunks/entry.ByglqaAm.js","_app/immutable/chunks/runtime.DZ-JPRgp.js","_app/immutable/entry/app.CuFgON0g.js","_app/immutable/chunks/runtime.DZ-JPRgp.js","_app/immutable/chunks/store.WQtzy-za.js","_app/immutable/chunks/disclose-version.DgzDudld.js","_app/immutable/chunks/props.DCWFtVb7.js","_app/immutable/chunks/index-client.B-SJ56y4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
