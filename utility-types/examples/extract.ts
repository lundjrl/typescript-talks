/**
 * Extract
 * 
 * What is it?
 * - A type for returning a sub-union from a union type.
 * 
 * When to use:
 * - When you have a union that you only want less than 50% of the properties from. 
 */


export type Animal = 'Cat' | 'Dog' | 'Bearded Dragon' | 'Jumping Spider' | 'Parrot'

export type Mammal = Extract<Animal, 'Cat' | 'Dog'>

export type InVertebrate = Extract<Animal, 'Jumping Spider'>

// Accepts all union types from Animal
export const animals: Animal[] = []

// Accepts 'Cat' | 'Dog'
export const mammals: Mammal[] = []

