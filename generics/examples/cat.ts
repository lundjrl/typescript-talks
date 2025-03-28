import type { Nullable } from "./nullable"
import type { Nullish } from "./nullish"
import type { Optional } from "./optional"

export type Cat = {
    id: string
    name: string
    isCute: boolean
    isGoodCat: boolean
    jumpsOnCounter: unknown
    favoriteToy: Optional<string>
    likesTypescript: Nullable<boolean>
    dataPropertyMightExistIdk?: Nullish<number>
}


const casper: Cat = {
    id: 'kdfskf-kasljfd-2kjsdf-329ksd',
    name: 'Casper',
    isCute: true,
    isGoodCat: true,
    jumpsOnCounter: false,
    favoriteToy: 'avocado with catnip',
    likesTypescript: false
}

const mandy: Cat = {
    id: 'kfkdsf-i32iks-ksdmns-3s9dknl',
    name: "Mandy",
    isCute: true,
    isGoodCat: false,
    jumpsOnCounter: true,
    favoriteToy: 'ribbon',
    likesTypescript: false,
    dataPropertyMightExistIdk: null // 0, undefined, null
}