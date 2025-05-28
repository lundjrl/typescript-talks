/**
 * NonNullable
 * 
 * What is it?
 * - A utility type that strips null from the passed type.
 * 
 * When to use:
 * - When you have a type and want to ensure that it's not null.
 * - When you have a type guard and want to ensure to the user that they'll get back a non-null type.
 */

type NullType = null

// NonNullable returns the generic without nulls
export type NonNullArray = NonNullable<string[] | NullType>


const typeCheck = <T>(val: T): NonNullable<T> => {
    if (typeof val === 'undefined' || val === null) throw new Error('VAL MUST NOT BE NULL.')

    return val
}

typeCheck('test')
typeCheck(null) // Returns never because we throw an error.
