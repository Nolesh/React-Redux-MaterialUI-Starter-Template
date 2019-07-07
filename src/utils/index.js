export function deepClone (obj) {
    var clone = {}
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var value = obj[key]
            switch (Object.prototype.toString.call(value)) {
                case '[object Object]': clone[key] = deepClone(obj[key]); break
                case '[object Array]' : clone[key] = value.slice(0); break
                default               : clone[key] = value
            }
        }
    }
    return clone
}