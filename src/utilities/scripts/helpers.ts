type Func<T> = (x: T) => T;

export const repeatFunction = <T>(f: Func<T>): (n: number) => (x: T) => T => (n: number) => (x: T): T => {
    let result = x;
    for (let i = 0; i < n; i++ ) {
        result = f(result)
    }
    return result
}