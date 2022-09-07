function combine<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2)
}

const arr = combine<string | number>([1, 2, 3], ['string'])
console.log(arr)

