type Direction = 'up' | 'down' | 'left' | 'right';

function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length || !matrix[0].length) {
        return [];
    } else if (matrix.length === 1) {
        return matrix[0];
    }

    const positionCheckMap = new Map();

    let height = matrix.length,
        width = matrix[0].length,
        area = height * width,
        newArray = [],
        currentRowIndex = 0,
        currentColumnIndex = 0,
        bottomRowIndex = height - 1,
        leftColumnIndex = 0,
        direction = 'right';

    for (let i = 1; i <= area; i++) {
        const visited = positionCheckMap.get(`${currentRowIndex},${currentColumnIndex}`);

        if (visited) {
            direction = 'right';
            --height;
            --width;

            ++currentRowIndex;
            ++currentColumnIndex;

            --bottomRowIndex;
            ++leftColumnIndex;
        }

        newArray.push(matrix[currentRowIndex][currentColumnIndex]);
        positionCheckMap.set(`${currentRowIndex},${currentColumnIndex}`, true);

        if (currentRowIndex === height - 1 && currentColumnIndex === width - 1) {
            // Reached bottom
            direction = 'left';
        } else if (currentColumnIndex === width - 1) {
            // Reached right side
            direction = 'down';
        } else if (currentColumnIndex === leftColumnIndex && currentRowIndex === bottomRowIndex) {
            // Reached left side
            direction = 'up';
        }

        switch (direction) {
            case 'right':
                ++currentColumnIndex;
                break;
            case 'down':
                ++currentRowIndex;
                break;
            case 'left':
                --currentColumnIndex;
                break;
            case 'up':
                --currentRowIndex;
                break;
        }
    }

    return newArray;
}

const m1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
];

const m2 = [[1,2,3],[4,5,6],[7,8,9]];

const m3 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];

const m4 = [[1, 2]];

console.log(spiralOrder(m4));

