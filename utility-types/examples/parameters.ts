/**
 * Parameters
 * 
 * What is it?
 * - Returns a tuple of the parameters to a function. 
 * 
 * When to use:
 * - When you want to create a wrapper around a shared function. Ex: an object mapper.
 */

export const toString = <T>(str: T, index: number): string => {
    // Index is just here as a placeholder.
    return `${str}`
}

// Returns a tuple type of the function's params.
export type FNParams<T> = Parameters<typeof toString<T>>


export const mapToString = <T>(...args: FNParams<T>) => {
    // Guard against falsy values.
    if (!args) return ''

    return toString(...args)
}

const data = ['test', 'test2', null, 0, false, 'test3']

// refinedData becomes a string array
const refinedData = data.map(mapToString).filter(el => !!el)
