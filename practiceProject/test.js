const arry = [20, 41, 22, [32, 56, 89], [[123, 2, 56, 77]]];

Array.prototype.myFlat = function (level = 1) {
    const result = [];

    function flatten(array, currentLevel) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i]) && currentLevel < level) {
                flatten(array[i], currentLevel + 1);
            } else {
                result.push(array[i]);
            }
        }
    }

    flatten(this, 0);

    return result;
};


const data = arry.myFlat(4);
console.log(data);