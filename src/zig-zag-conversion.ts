function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    const rows = Array.from(Array(Math.min(numRows, s.length))).fill('');
    let currentRow = 0, isGoingDown = false, convertedString = '';

    for (const char of s) {
        rows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1) isGoingDown = !isGoingDown;
        currentRow += isGoingDown ? 1 : -1;
    }

    for (const row of rows) convertedString += row;

    return convertedString;
};
