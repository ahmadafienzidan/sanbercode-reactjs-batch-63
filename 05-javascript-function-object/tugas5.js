//  Run "cd 05-javascript-function-object => node tugas5.js"
// Soal 1 -  Membuat Function dengan return String
function cetakFunction() {
  return "Hallo nama saya Ahmad Afien Zidan";
}

console.log(cetakFunction());

// Soal 2 - Membuat Function dengan rumus penjumlahan didalamnya
function myFunction(a, b) {
  let hasil = a + b;
  return hasil;
}

let angka1 = 20;
let angka2 = 7;

let output = myFunction(angka1, angka2);
console.log(output);

// Soal 3 -  Mengubah dalam bentuk arrow function
let Hello = () => {
  return "Hello";
};

console.log(Hello());

//  Soal 4 - Memanggil key dalam sebuah object
let obj = {
  nama: "john",
  umur: 22,
  bahasa: "indonesia",
};

console.log(obj.bahasa);

// Soal 5 - mengubah array menjadi object
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3],
};

console.log(objDaftarPeserta);

// Soal 6 -  Membuat sebuah array of object dan melakukan filter
let arrayDaftarBuah = [
  {
    nama: "Nanas",
    warna: "Kuning",
    adaBijinya: false,
    harga: 9000,
  },
  {
    nama: "Jeruk",
    warna: "Oranye",
    adaBijinya: true,
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau dan Merah",
    adaBijinya: true,
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000,
  },
];

let buahWarnaKuning = arrayDaftarBuah.filter((item) => item.warna === "Kuning");
console.log(buahWarnaKuning);

// Soal 7 - Destructuring pada Object
let phone = {
  name: "Galaxy Fold 5",
  brand: "Samsung",
  year: 2023,
};

const { name, brand, year } = phone;
console.log(name, brand, year);

// Soal 8 - Spred Operator pada Object
let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
};

let objOutput = { ...dataBukuTambahan, ...buku };

console.log(objOutput);

// Soal 9 - Penggunaan Function dan Object
let mobil = {
  merk: "bmw",
  color: "red",
  year: 2002,
};

const functionObject = (param) => {
  return param;
};

console.log(functionObject(mobil));
