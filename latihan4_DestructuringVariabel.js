// Destructuring Variabel / Assignment

// Destructuring Variabel - Array
// const perkenalan = [`Hai`, `Saya`, `Faiz`, `19Tahun`];

// Full item
// const [salam, diri, nama, umur] = perkenalan;

// Skipping item
// const [salam, , , umur] = perkenalan;
// console.log(umur);




// Swap items / menukar
// let a  = 20;
// let b = 50;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);





// Return value pada function
// function coba() {
// 	// body...
// 	return [1,2];
// }

// const a = coba();
// console.log(a[1]);

// atau di balik

// const [a,b] = coba();
// console.log(a);





// Rest parameter
// const [a, b, c, d] = [1, 2, 3, 4];
// console.log(a);
// console.log(b);

// cara mudah menampung nilai lebih dari 2
// const [a, ...nilai] = [1, 2, 3, 4];
// console.log(a);
// console.log(nilai);







// Destructuring Variabel pada - Object
// const mhs = {
// 	nama : 'faiz',
// 	angkatan : 22,
// }

// const { nama, angkatan} = mhs;
// console.log(nama);




//  Assigment tanpa deklarasi Object
// lebih ringkas
// ({ nama, angkatan} = {
// 	nama : 'faiz',
// 	angkatan : 22,
// });
//  bahkan bisa jadi 1 baris
// ({ nama, angkatan} = { nama : 'faiz', angkatan : 22,});
// console.log(nama);



// Assigment ke variabel baru
// jika nama variabel ada yang sama
// const mhs = {
// 	nama : 'faiz',
// 	angkatan : 22,
// }

// const { nama: n, angkatan: k} = mhs;
// console.log(k);


// Memberikan Default Value
// const mhs = {
// 	nama : 'faiz',
// 	angkatan : 22,
// }

// const { nama, angkatan, email = 'haidar@gmail.com'} = mhs;
// console.log(email);






// Memberi nilai default + assign ke variabel baru
// const mhs = {
// 	nama : 'faiz',
// 	angkatan : 22,
// 	email: 'faiz@gmail.com'
// }

// const { nama: n, angkatan: k, email: e = 'haidar@gmail.com'} = mhs;
// console.log(e);




// Rest parameter
// const mhs = {
// 	nama : 'faiz',
// 	angkatan : 22,
// 	email: 'faiz@gmail.com'
// }

// const { nama, ...data} = mhs;
// console.log(data);






// Mengambil field pada object, setelah di kirim sebagai parameter untuk function
// const mhs = {
// 	id: 233,
// 	nama : 'faiz',
// 	angkatan : 22,
// 	email: 'faiz@gmail.com'
// }

// function IdMhs({id}) {
// 	return id;
// }
// console.log(IdMhs(mhs));