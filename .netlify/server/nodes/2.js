

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.HmK31FiI.js","_app/immutable/chunks/disclose-version.DgzDudld.js","_app/immutable/chunks/runtime.DZ-JPRgp.js"];
export const stylesheets = ["_app/immutable/assets/2.DKzHFjLC.css"];
export const fonts = [];
