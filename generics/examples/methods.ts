
// Available
// fn([0])
// fn(null)

export const fn = <T>(arg: T[] | null): T => {
    // Type guard
    if (arg === null) throw new Error('we cannot handle null')
    return arg[0]
}