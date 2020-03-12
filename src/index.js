exports.min = function min(array) {
    return Array.isArray(array) && array.length > 0
        ? array.reduce((acc, elem) => (acc > elem ? elem : acc))
        : 0;
};

exports.max = function max(array) {
    return Array.isArray(array) && array.length > 0
        ? array.reduce((acc, elem) => (acc < elem ? elem : acc))
        : 0;
};

exports.avg = function avg(array) {
    return Array.isArray(array) && array.length > 0
        ? array.reduce((acc, elem) => acc + elem) / array.length
        : 0;
};
