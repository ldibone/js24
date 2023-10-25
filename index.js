
Array.prototype.customFilter = function (callback) {
    return this.reduce((acc, current, index, array) => {
        if (callback(current, index, array)) {
            acc.push(current);
        }
        return acc;
    }, []);
};


Array.prototype.customSome = function (callback) {
    return this.reduce((acc, current, index, array) => {
        if (!acc) {
            return callback(current, index, array);
        }
        return acc;
    }, false);
};


Array.prototype.customEvery = function (callback) {
    return this.reduce((acc, current, index, array) => {
        if (acc) {
            return callback(current, index, array);
        }
        return acc;
    }, true);
};

const lista = [1, 2, 3, 4, 5];

const fiecareNumar = lista.customFilter((num) => num % 2 === 0);
console.log(fiecareNumar);

const cifreNegative = lista.customSome((num) => num < 0);
console.log(cifreNegative);

const cifrePozitive = lista.customEvery((num) => num > 0);
console.log(cifrePozitive);

//
let p = new Promise((resolve, reject) => {
    let a = 2 + 2
    if (a === 4) {
        resolve('success')
    } else {
        reject('fail')
    }
})

p.then((message) => {
    console.log('This is in then:' + message)
}).catch((message) => {
    console.log('This in in catch' + message)
}).finally(() => {
    console.log('Will be implemeted no matter what')
})

//
const promise1 = new Promise((res, rej) => res('promise1'))
const promise2 = new Promise((res, rej) => res('promise2'))
const promise3 = new Promise((res, rej) => res('promise3'))
const promise4 = new Promise((res, rej) => res('promise4'))


Promise.all([
    promise1,
    promise2,
    promise3,
    promise4,
]). then((mess) => {
console.log(mess)
})
