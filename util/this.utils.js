const bind = (thisObj, ...methods) => methods.forEach(method => thisObj[method.name] = method.bind(thisObj));