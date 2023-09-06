const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka yang >= 3
// gunakan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
// 	if(angka[i] >= 3){
// 		newAngka.push(angka[i]);
// 	}
// }
// console.log(newAngka);


// Versi filter
// const newAngka = angka.filter (function (a) {
// 	return a >= 3
// });
// console.log (newAngka);

// Versi filter di gabung dengan Arrow function
// filter combo Arrow function
// Menjadi lebih ringkas dan simpel
// const newAngka = angka.filter (a => a >= 3);
// console.log (newAngka);



// Versi map
// const newAngka =  angka.map(a => a * 2);
// console.log(newAngka);


// Versi reduce
// reduce mempunyai 2  parameter, parameter nya bebas mau apa saja
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 26
//const  newAngka = angka.reduce((angka1, angka2) => angka1 + angka2); 
//sebenarnya setelah  angka1 + angka2 itu ada  koma dan angka yang di mana seperti ini :
// const  newAngka = angka.reduce((angka1, angka2) => angka1 + angka2, 0);
// angka 0 bisa di ubah menjadi angka yang kita mau, maka sebenarnya yang terjadi itu :
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 26
// jadi ada angka tambahan di awal
// console.log(newAngka);



// Versi method chaining (berantai)
// cari angka yang lebih besar dari > 5
// hasilnya di kali 3
// dan jumlahkan
const hasil = angka.filter(a => a > 5) // yaitu 8,9,9
	.map(a => a * 3) // yaitu 24, 27, 27
	.reduce((hasil1, hasil2) => hasil1 + hasil2) // hasilnya =  78
console.log(hasil);










































