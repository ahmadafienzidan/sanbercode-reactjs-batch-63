// Run dengan "node index.js" pada terminal

// Soal 1 - Latihan Membuat variable dan valuenya
let namalengkap = "Ahmad Afien Zidan";
console.log(namalengkap);

// Soal 2 - Latihan Penggabungan variable
let word = "JavaScript";
let second = "is";
let third = "awesome";

let outputGabunganVariable = word + " " + second + " " + third;
console.log(outputGabunganVariable);

// Soal 3 - Latihan penggabungan variable Menggunakan Template Literals
let hello = "Hello ";
let world = "World!!";

let output = `${hello}${world}`;
console.log(output);

// Soal 4 - Latihan Mengubah tipe data
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let kelilingPersegiPanjang = 2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));

console.log(kelilingPersegiPanjang);

// Soal 5 - Latihan Mengurai Kalimat
let sentences = "wah javascript itu keren sekali";

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 18);
let fourthWords = sentences.substring(19, 24);
let fifthWords = sentences.substring(25, 31);

console.log("Kata Pertama: " + firstWords);
console.log("Kata Kedua: " + secondWords);
console.log("Kata Ketiga: " + thirdWords);
console.log("Kata Keempat: " + fourthWords);
console.log("Kata Kelima: " + fifthWords);

//Soal 6 - Akses karakter dalam string
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24];
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

// Soal 7 -  Latihan Mengambil sebuah Kalimat
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil);

// Soal 8 - membuat kondisi sederhana
var nilaiDoe = 50;

if (nilaiDoe >= 80) {
  console.log("Indeks: A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
  console.log("Indeks: B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
  console.log("Indeks: C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
  console.log("Indeks: D");
} else {
  console.log("Indeks: E");
}

// Soal 9 - conditional tipe tenary operator
let angka = 2;

hasil = angka === 2 ? "angka nya 2" : "bukan angka 2";
console.log(hasil);

// Soal 10 -  conditional tipe Switch Case
var traffic_lights = "red";

switch (traffic_lights) {
  case "red":
    console.log("berhenti");
    break;
  case "yellow":
    console.log("hati-hati");
    break;
  case "green":
    console.log("berjalan");
    break;
}
