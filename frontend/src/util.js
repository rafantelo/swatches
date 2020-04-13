export const resolvePath = (object, path, defaultValue) => path
.split(/[.[\]'"]/)
.filter(p => p)
.reduce((o, p) => o ? o[p] : defaultValue, object);

export const setPath = (object, path, value) => path
.split('.')
.reduce((o,p,i) => o[p] = path.split('.').length === ++i ? value : o[p] || {}, object)
