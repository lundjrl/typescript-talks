export type Animal = 'Cat' | 'Dog' | 'Bearded Dragon' | 'Jumping Spider' | 'Parrot'

export type Mammal = Extract<Animal, 'Cat' | 'Dog'>

export type InVertebrate = Extract<Animal, 'Jumping Spider'>

// Accepts all union types from Animal
export const animals: Animal[] = []

// Accepts 'Cat' | 'Dog'
export const mammals: Mammal[] = []

