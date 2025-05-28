/**
 * This Parameter Type
 * 
 * What is it?
 * - A utility type that infers the "this" parameter type of a function or unknown if there is no "this" parameter.
 * 
 * When to use:
 * - When you want to infer the "this" parameter type in a function. 
 */

function toString(this: number) {
    return this.toString(this)
}

type Param = ThisParameterType<typeof toString>

export function numToString(param: Param) {
    return toString.apply(param)
}
