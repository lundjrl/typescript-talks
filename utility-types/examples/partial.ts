/**
 * Partial
 * 
 * What is it?
 * - A type for returning the generic type with every key as an optional value.
 * 
 * When to use:
 * - When you have a model that is not guaranteed to have all of it's properties. 
 */


interface User {
    id: string
    name: string
    age: number
    phone: string
}

export type MaybeUserModel = Partial<User>

