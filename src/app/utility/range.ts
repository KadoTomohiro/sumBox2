/**
 * Returns an array of numbers from start to end, inclusive.
 * @param start{number}
 * @param end{number}
 */
export function range(start: number, end: number) {
    return [...Array(end - start + 1)].map((_, i) => start + i);
}
