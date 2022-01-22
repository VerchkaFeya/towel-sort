
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];

    if (arguments.length === 0) {
        return []
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i%2 === 0) {
                for (let item of matrix[i]) {
                    result.push(item);
                }
            } else {
                let a = matrix[i].reverse();
                for (let item of a) {
                    result.push(item);
                }
            }
        }
        return result;
    }
}
