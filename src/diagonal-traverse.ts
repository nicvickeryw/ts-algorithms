/**
 * Diagonally traverses a matrix where the number of elements will not exceed 10,000.
 *
 * @see https://leetcode.com/explore/learn/card/array-and-string/202/introduction-to-2d-array/1167/
 *
 * @param matrix
 */
function findDiagonalOrder(matrix: number[][]): number[] {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    const returnArr = [],
        yMax = (matrix.length - 1),
        xMax = (matrix[0].length - 1),
        flatLength = matrix[0].length * matrix.length;
    let direction = 'up',
        x = 0,
        y = 0;

    function getEdge(x: number, y: number) {
        if (y === 0 && x === xMax && direction === 'up') {
            return 'top-right';
        } else if (y === yMax && x === 0 && direction === 'down') {
            return 'bottom-left';
        } else if (x === xMax && direction === 'up') {
            return 'right';
        } else if (y === yMax && direction === 'down') {
            return 'bottom';
        } else if (y === 0 && direction === 'up') {
            return 'top';
        } else if (x === 0 && direction === 'down') {
            return 'left';
        }

        return null;
    }

    while (returnArr.length !== flatLength) {
        returnArr.push(matrix[y][x]);
        const edge = getEdge(x, y);

        // Not at an edge, no turn necessary
        if (!edge) {
            switch (direction) {
                case 'up':
                    --y;
                    ++x;
                    break;
                case 'down':
                    ++y;
                    --x;
                    break;
            }

        } else {
            switch (edge) {
                case 'top-right':
                    if (direction === 'up') {
                        ++y;
                        direction = 'down';
                    }
                    break;
                case 'bottom-left':
                    if (direction === 'down') {
                        ++x;
                        direction = 'up';
                    }
                    break;
                case 'right':
                    ++y;
                    direction = 'down';
                    break;
                case 'left':
                    ++y
                    direction = 'up';
                    break;
                case 'top':
                    ++x;
                    direction = 'down';
                    break;
                case 'bottom':
                    ++x;
                    direction = 'up';
            }
        }
    }

    return returnArr;
}
