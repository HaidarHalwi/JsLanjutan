// #for..of
// Itarable Object
// - String
// - Array
// - Arguments / NodeList
// - TypedArray
// - Map
// - Set
// - User-defined Iterables

// for.. of
// Versi Array
// const mhs = ['faiz', 'haidar', 'halwi'];

// menggunakan for biasa
// for (i = 0; i < mhs.length; i++) {
// 	console.log(mhs[i]);
// }

// menggunakan cara lebih simple yaitu pakai forEach
// m = nama variabel dan itu bebas
// mhs.forEach(m => console.log(m));

// menggunakan forOf
// m = nama variabel dan itu bebas
// for ( const m of mhs){
// 	console.log(m);
// }

 






// Versi String
// String tidak bisa pakai forEach, jika pakai akan error


// n = nama variabel dan itu bebas
// const nama = 'haidar';
// for (const n of nama){
// 	console.log(n);
// }

// contoh 1
// cara-1
// const mhs = ['faiz', 'haidar', 'halwi'];
// mhs.forEach((m, i) => {
// 	console.log(`${m} adalaha mahasiswa ke-${i + 1}`);
// });


// cara - 2
// const mhs = ['faiz', 'haidar', 'halwi'];
// for(const [i, m] of mhs.entries()){
//  	console.log(`${m} adalaha mahasiswa ke-${i + 1}`);
// }






// NodeList
// const liNama = document.querySelectorAll('.nama');

// bisa pakai innerHTML
// liNama.forEach(n => console.log(n.innerHTML));
// bisa pakai textContent
// liNama.forEach(n => console.log(n.textContent));
// bisa pakai for
// for (n of liNama){
// 	console.log(n.innerHTML);
// }







// Arguments
// function jumlahAngka() {
	// body...
	// bisa pakai reduce, tapi argument ganti ke array dulu yaitu :
	// return [1,2,3,4,5].reduce((a, i) => a + i);	
	// bisa pakai forOf 
// 	let jumlah = 0;
// 	for (a of arguments){
// 		jumlah += a;
// 	}
// 	return jumlah;

// }

// console.log(jumlahAngka(1,2,3,4,5));














// for..in
// const mhs = {
// 	nama: 'Rizki',
// 	umur: 13,
// 	sekolah: 'smp negri mauk'
// }

// for (m in mhs){
// 	console.log(mhs[m]);
// }

// atau bisa di tampilkan object nya saja:
// for (m in mhs){
// 	console.log(m);
// }





