/**
 * Function for checking if two objects are the same
 * @param obj1
 * @param obj2
 */
const deepCompare = (obj1,
                     obj2) => JSON.stringify(obj1) == JSON.stringify(obj2);

const shallowCompare = (a, b, keys) => {
    if (a === undefined || b === undefined)
        return false;

    if (keys) {
        const l = keys.length;
        let key;
        for (let i = 0; i < l; i++) {
            key = keys[i];
            if (a[key] !== b[key]) {
                return false;
            }
        }
        ;
        return true;
    }
    for (let key in a) {
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
};
