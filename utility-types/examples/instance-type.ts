// Class Constructor 
class C {
    x = 0
    y = 0
}

// ConstructorType is essentially an object type of a class
export type ConstructorType = InstanceType<typeof C>

// We can access properties of the class like so
export type X = ConstructorType['x']
export type Y = ConstructorType['y']



const N = () => { }

// Will throw an error because functions are not constructors
type FnType = InstanceType<typeof N>
