let mySum: (x: number, y: number) => number = function (x: number, y: number) {
    return x + y
}
console.log(mySum(1, 2))

interface SearchFunc {
    (sources: string, subString: string): boolean
}

let muSearch: SearchFunc
muSearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
}
console.log(muSearch('abc', 'a'));

function push(array: any[], ...items: any[]) {
    items.forEach(item => array.push(item))
}

let a = [] as any[]
push(a, 1, 2, 3)
console.log(a)

function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else {
        return x.split('').reverse().join('');
    }
}

console.log(reverse(123))