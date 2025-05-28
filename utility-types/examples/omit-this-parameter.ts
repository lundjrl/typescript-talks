/**
 * Omit This Parameter
 * 
 * What is it?
 * - A utility type that omits the "this" param of functions.
 * 
 * When to use:
 * - When you want to omit the this parameter of a function.
 */
function toString(this: number) {
    return this.toString(this)
}

type Param = OmitThisParameter<typeof toString>

export const defaultToString: Param = toString.bind(0)
