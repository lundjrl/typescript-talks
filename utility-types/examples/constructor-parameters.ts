/**
 * Constructor Parameters
 * 
 * What is it?
 * - A type for returning a tuple of the parameters needed to create an object.
 * 
 * When to use:
 * - OOP; When you want to document the input variables of a class constructor.
 */
class C {
    // constructor() {

    // }
    x = 0
    y = 0
}

// There's no "constructor" in this class so we get an empty array.
export type ConstructorParams = ConstructorParameters<typeof C>

class ClassWithConstructor {
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    x: number
    y: number
}

// Returns an array of [x, y] types
export type ClassConstructorParams = ConstructorParameters<typeof ClassWithConstructor>
