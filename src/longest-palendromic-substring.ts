function longestPalindrome(s: string) {
    if (s.length < 1 || !s) {
        return s;
    }

    let leftIndex = 0;
    let rightIndex = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = traverseFromIndices(s, i, i);
        const len2 = traverseFromIndices(s, i, i + 1);
        const largest = Math.max(len1, len2);

        if (Math.max(len1, len2) > rightIndex - leftIndex) {
            leftIndex = Math.ceil(i - (largest - 1) / 2);
            rightIndex = Math.floor(i + largest / 2);
        }
    }

    return s.substring(leftIndex, rightIndex + 1);
}

function traverseFromIndices(s: string, left: number, right: number): number {
    if (s === null || left > right) {
        return 0;
    }

    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }

    return right - left - 1;
}
