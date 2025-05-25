export type Animal = 'Cat' | 'Dog' | 'Bearded Dragon' | 'Jumping Spider' | 'Parrot'

export type Mammal = Exclude<Animal, 'Bearded Dragon' | 'Jumping Spider' | 'Parrot'>

export type Vertebrate = Exclude<Animal, 'Jumping Spider'>

// Accepts all union types from Animal
export const animals: Animal[] = []

// Accepts 'Cat' | 'Dog'
export const mammals: Mammal[] = []
