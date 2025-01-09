//  Run "cd 04-javascript-loop-array => node tugas4.js"
//Soal 1 - Membuat Looping sederhana
for (let a = 1; a <= 9; a++) {
  console.log(a);
}

//Soal 2 - Membuat Looping dengan conditional angka ganjil
for (let a = 0; a <= 9; a++) {
  if (a % 2 != 0) {
    console.log(a);
  }
}

// Soal 3 - Membuat Looping dengan conditional angka genap
for (let a = 0; a <= 9; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

// Soal 4 - Mengakses element array
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1[5]);

// Soal 5 - Mengurutkan element array
let array2 = [5, 2, 4, 1, 3, 5];
array2.sort();
console.log(array2);

// Soal 6 - Mengeluarkan element array
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];
for (let a = 1; a < array3.length; a++) {
  console.log(array3[a]);
}
for (let b of array3) {
  console.log(b);
} // CARA LAIN

//Soal 7 - Mengeluarkan element array dan dengan kondisi
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let a = 1; a < array4.length; a++) {
  if (a % 2 !== 0) {
    console.log(array4[a]);
  }
}

// Soal 8 -  menggabungkan element menjadi string
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
let hasil = kalimat.join(" ");
console.log(hasil);

// Soal 9 -  Menambahkan element array
var sayuran = [];
sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

console.log(sayuran);
