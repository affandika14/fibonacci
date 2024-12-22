function tampilkanFibonacci(n) {
    let fib = [0, 1];
    while (fib.length < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    console.log(`Deret Fibonacci sebanyak ${n} angka:`);
    console.log(fib.slice(0, n));
}


function urutkanArray(arr) {
    arr.sort((a, b) => a - b); 
    console.log("Array setelah diurutkan:");
    console.log(arr);
}


function cekPalindrom(kalimat) {
    kalimat = kalimat.replace(/\s+/g, '').toLowerCase(); 
    let reversed = kalimat.split('').reverse().join('');
    if (kalimat === reversed) {
        console.log(`"${kalimat}" adalah palindrom.`);
    } else {
        console.log(`"${kalimat}" bukan palindrom.`);
    }
}


tampilkanFibonacci(10);


let arr = [5, 2, 9, 1, 5, 6];
urutkanArray(arr);


cekPalindrom("kasur rusak");
cekPalindrom("hello");
