// Destructuring Variabel
// contoh-1
// function tambahKali(a, b) {
// 	return  [a + b, a * b];
// }

// const [tambah, kali] = tambahKali(2, 3);
// console.log(tambah);
// console.log(kali);




// contoh-2
// function kakulasi(a, b) {
// 	return  [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kakulasi(2, 3);
// jika bagi tidak ada utk return nya, maka bisa seperti ini:
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kakulasi(2, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);





// contoh-3
// function kalkulasi(a, b) {
// 	return{
// 		tambah: a + b,
// 		kurang: a - b,
// 		kali: a * b,
// 		bagi: a / b
// 	}
// }
// urutan bebas jika gunakan object
// const {tambah, bagi, kurang, kali} = kalkulasi(2, 3);
// console.log(kali);






// Destructuring function Arguments
const mhs2 = {
	nama: 'faiz',
	jurusan: 'Teknik Informatika',
	angkatan: 22,
	nilai: {
		tugas: 90,
		uts: 90,
		uas: 95
	}
}

// function cetakMhs(nama, jurusan, angkatan){
// 	return `hai nama saya ${nama}, dari jurusan ${jurusan} dan saya angkatan ${angkatan}`;
// }

// console.log(cetakMhs(mhs2.nama, mhs2.jurusan, mhs2.angkatan));

// atau cara ke 2 yaitu ;
// function cetakMhs(mhs){
// 	return `hai nama saya ${mhs.nama}, dari jurusan ${mhs.jurusan} dan saya angkatan ${mhs. angkatan}`;
// }

// console.log(cetakMhs(mhs2));

// cara ke 3 yaitu
// function cetakMhs({nama, jurusan, angkatan}){
// 	return `hai nama saya ${nama}, dari jurusan ${jurusan} dan saya angkatan ${ angkatan}`;
// }

// console.log(cetakMhs(mhs2));

// cara ke 4 yaitu
function cetakMhs({nama, jurusan, angkatan, nilai: { tugas, uts, uas}}){
	return `hai nama saya ${nama}, dari jurusan ${jurusan} dan saya angkatan ${ angkatan} serta nilai uas saya yaitu ${uas}`;
}

console.log(cetakMhs(mhs2));