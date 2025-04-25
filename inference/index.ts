// Why use Typescript?
// 1. Inferring types
// 2. Showing up properties of objects/variables/data
// 3. Protects us from ourselves.

// -----------------------------------------------------------------

// What's Inference?
// 
// Inference is Typescript's way of determining types based on your code.
// Example, this variable is assigned the value of an empty string. 
//  TS knows this and says str is type literal "".
const str = "TEST"

// If we declare the type, Typescript won't infer it on it's own. It listens to 
// our declaration.
const str1: string = ""

// The same goes for objects
const obj = { id: 'test-id' }

// But we can choose to declare the type of this object.
const obj1: object = { id: 'test-id' }

// The same goes for functions
// In this example, typescript can't infer the type of the function argument
// so it defaults to "any".
const fn = (arg) => arg

const strFn = (s: string) => s

// But if we add some logic to this function, see how Typescript handles it.
// Since we're returning a string, Typescript infers that correctly.
const fn1 = (arg) => `${arg}`

// We can get similar behavior by declaring the return type, but this just makes 
// Typescript happy, it doesn't guarantee the return type will actually be a string.
// In situations like this, Typescript will not protect us.
const fn2 = (arg): string => arg

// --------------------------------------------------------------

// What's a type-guard?
// 1. Telling typescript if variable is a type, do something.
// 2. OR telling typescript if variable is not type, do something.
const isArray = (myArr: unknown) => {
    // This if statement is our type guard.
    if (!Array.isArray(myArr)) return false

    // Typescript infers that the variable at this part of the function, must be an array.
    // myArr.
    return true
}

const n = ['test']
const valueIsArray = isArray(n)

// We can narrow union types too.
const MAGIC_STRING_ARRAY = ["Manager", "Admin"]

const doesMagicStringArrayIncludeString = (str: typeof MAGIC_STRING_ARRAY[number]): Boolean => {
    if (typeof str !== 'string') return false

    return MAGIC_STRING_ARRAY.includes(str)
}


// Note, if we have a readonly array, only values inside that array are valid.
const MAGIC_STRINGS = ["Manager", "Admin"] as const

const isMagicString = (str: unknown): Boolean => {
    if (typeof str !== 'string') return false

    // Fails
    // return MAGIC_STRINGS.includes(str)

    // But this would work
    return MAGIC_STRINGS.includes('Admin')
}

// --------------------------------------------------------------------

// What's a discriminated union?
// 1. A way we can narrow a type based on a unique property.

interface Animal {
    id: string
    name: string
    animal: "dog" | "cat"
}

interface Dog extends Animal {
    animal: "dog"
}

interface Cat extends Animal {
    animal: 'cat'
}

const isCatOrDog = (maybeDog: Animal): Cat | Dog => {
    switch (maybeDog.animal) {
        case "cat": return maybeDog
        case "dog": return maybeDog
        default: return maybeDog
    }
}

const cat: Cat = { id: '22ksdf2', name: "Casper", animal: 'cat' }
const dog: Dog = { id: "3iklsj9", name: "Willow", animal: 'dog' }

const isCat = isCatOrDog(cat) // typeof isCat === Cat 
const isDog = isCatOrDog(dog) // typeof isDog === Dog
