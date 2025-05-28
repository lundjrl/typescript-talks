/**
 * Return Type
 * 
 * What is it?
 * - A utility to return the return type of a function.
 * 
 * When to use:
 * - When you have a function and need to use it's return type later in your codebase. 
 */


export const fn = (val: string) => {
    if (!val) return null
    return val
}

export type FnReturn = ReturnType<typeof fn>
