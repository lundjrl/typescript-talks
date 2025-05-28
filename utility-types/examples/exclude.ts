/**
 * Exclude
 * 
 * What is it?
 * - A type for returning all properties of a type EXCEPT those in the second parameter's union.
 * 
 * When to use:
 * - When you have a union but only care about more than half of the types within it.
 */

export type Animal = 'Cat' | 'Dog' | 'Bearded Dragon' | 'Jumping Spider' | 'Parrot'

export type Mammal = Exclude<Animal, 'Bearded Dragon' | 'Jumping Spider' | 'Parrot'>

export type Vertebrate = Exclude<Animal, 'Jumping Spider'>

// Accepts all union types from Animal
export const animals: Animal[] = []

// Accepts 'Cat' | 'Dog'
export const mammals: Mammal[] = []
