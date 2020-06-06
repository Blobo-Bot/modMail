const path = require('path');

/**
 * @author Sora
 * @param module
 * @return {*}
 */

im = (...module) => {
    if (module[0] && module[0].startsWith('.')) {
        return require(path.resolve(...module));
    }
    return require(module[0]);
};
/**
 * @type {Collection<K, Holds> | Collection<Snowflake, Role> | Collection<Snowflake, Message> | boolean | RequestCache}
 */
im.cache = require.cache;
/**
 * @type {}
 */
im.main = require.main;
/**
 * @param request
 * @param options
 * @return {any}
 */
im.resolve = (request, options = null) => {
    if (request.startsWith('.')) {
        return require.resolve(path.resolve(request), options);
    }
    return require.resolve(request, options);
};
/**
 * @param request
 * @return {*}
 */
im.resolve.paths = request => {
    if (request.startsWith('.')) {
        return require.resolve.paths(path.resolve(request));
    }
    return require.resolve.paths(request);
};
