 const anyUndefinedOrNull = (...args) => args.some(arg => typeof arg === 'undefined' || arg === null);

 export default anyUndefinedOrNull;