

# What's a generic?

A TS Generic function can look like this:
```typescript
const returnThing = <FirstParam>(arg: FirstParam): FirstParam => {
	return arg
}
```

TS Generics allow us to write "generic code", meaning we don't need to use `any` or `unknown` in our function definition. 

If we use generics, we can keep the type information of a parameter without casting it to another type. Consider the above code snippet, what if we used `any` instead?

``` typescript
const returnThing = (arg: any): any => {
	return arg
}
```

Though this may look cleaner, it's actually problematic. 

The new return type is `any` which isn't going to be the same as the input type. We've lost type information here.
# Can I name it whatever I want?

Yes! Typescript interprets generics by using `< >` around a name. The name of the generic can be whatever we want. 

Typically generic types are capitalized. 
``` typescript
type FN = <T>(arg: T) => T 
```

# How do I know which methods I can use on a generic?

The only methods you'll have type-inference for are ones that can be used on any type of your generic. 

That sounds confusing, what do I mean?

``` typescript
const fn = <T | null>(arg: T[] | null): T => {
	if (arg.length) return arg[0]
	return null
}
```

The above function can only be invoked (without TS errors) if we pass an array to it. 

``` typescript
const val = fn([0, 1])
```

Works but we'd get `null` and a type error if we passed:

``` typescript
const val = fn(1)
```

This is because  `1.length` === `undefined` which resolves to a falsey conditional. Therefore `null` is returned.

## Specifying Allowed Properties

What if we wanted to guard against certain types being passed to a function?

```typescript
interface UserLike {
	id: string
	firstName: string
	lastName: string
	age: number
}

// T is our generic type

const getUserId = <T extends UserLike>(user: T): UserLike['id'] | null => {
	if (!user?.id) return null

	return user.id
}
```


---

# Other Examples

A common generic type I like to use is `Nullable`.
`Nullable` takes in a type and returns null in addition to that type.

```typescript
export type Nullable<T> = T | null
```

This is handy for defining API/DB responses where you're not sure if a property will return it's type or null.

Example:
``` typescript
export type User = {
	id: string
	name: string
	phone: Nullable<string>
}
```

:point_up: Assuming phone is an optional field when users are created in this theoretical.

