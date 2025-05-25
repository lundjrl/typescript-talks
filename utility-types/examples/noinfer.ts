// https://www.totaltypescript.com/noinfer
// ☝️ Helped me understand this better

const fn = <T>(value: T) => value

// The type of val is "test"
const val = fn('test')

const hiddenFn = <T>(value: NoInfer<T>) => value

// The type of hiddenVal is unknown 
const hiddenVal = hiddenFn('test')


// More on this here => https://www.totaltypescript.com/noinfer#the-problem-noinfer-solves
