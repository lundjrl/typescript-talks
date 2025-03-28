type Mappable = {
    id: string
}

// Won't work
// mapFn([0, 1, {id: 'thing'}]) 

// Works 
// const arr = [{id: 'ksdfd'}, {id: 'ksdf', name: 'John'}]

export const mapFn = <T extends Mappable>(array: T[]): Mappable['id'][] => {
    return array.map(el => el.id)
}