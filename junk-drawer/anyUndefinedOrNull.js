export default anyUndefinedOrNull = (...args) => args.some(arg => typeof arg === 'undefined' || arg === null);
