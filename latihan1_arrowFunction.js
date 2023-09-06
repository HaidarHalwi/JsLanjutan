// Membuat arrow fuunction

// function expression
// const tampilNama = function(nama){
// 	return `halo, ${nama}`;
// }



// Mengubah code di atas menjadi Arrow Function
// test - 1 dengan 1 buah variabel
// buat variabel
// const tampilNama = (nama) => { return `halo, ${nama};`}
// console.log(`haidar halwi`);


// Implisit return
// 1 variabel itu sebenanrnya
// - tidak perlu return  - tidak perlu kurung kurawal   - tidak perlu kurun untuk varibel nya
// Cara ini sangat lebih ringkas
// const tampilNama = nama =>  `halo, ${nama};`
// console.log(`haidar halwi`);


// test - 2 dengan lebih dari 1 variabel
// const tampilNama = (nama, waktu) => {
// 	return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('haidar', 'pagi'));


// Tidak pakai parameter
// code bagian ini sangat lah lebih ringkas
// const tampilNama = () => `Hai Haidar`;
// console.log (tampilNama());






// Contoh dengan Array
// Menghitung huruf untuk setiap nama
// let mahasiswa = [`Haidar`, `Halwi`, `Faiz`];
// let jumlahHuruf = mahasiswa.map(function (nama) {
// 	return nama.length;
// });
// console.log(jumlahHuruf);

// VERSI LEBIH RINGKAS
// let mahasiswa = [`Haidar`, `Halwi`, `Faiz`];
// let jumlahHuruf = mahasiswa.map ( nama => nama.length);
// console.log(jumlahHuruf);


// Versi Object
// let mahasiswa = [`Haidar`, `Halwi`, `Faiz`];
// let jumlahHuruf = nama = mahasiswa.map( nama => ({
	// nama: nama, 
	// jmlHuruf: nama.length})); // untuk membuat object ingat! gunakan kurung kurawal di dalam kurung biasa ({})
// console.table(jumlahHuruf); // .table = untuk output menjadi bentuk table -> lebih rapih




















