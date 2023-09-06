// Konsep this pada arrow function

// Constructor function
// const mahasiswa = function () {
// 	this.nama = `haidar`;
// 	this.umur = 19;
// 	this.sayHallo = function () {
// 		console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 	}
// }
// const halwi = new mahasiswa();



// Arrow function
// const mahasiswa = function () {
// 	this.nama = `haidar`;
// 	this.umur = 19;
// 	this.sayHallo = () => {
// 		console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 	}
// }
// const halwi = new mahasiswa();



//Object literal
// akan tetapi ada perbedaan nya dan problem
// const mhs1  = {
// 	nama: `haidar`,
// 	umur: 19,
// 	sayHallo: function ()  {
// 		console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 	}
// } 

// yaitu
// ketika function di ubah menjadi arrow function, this ttidak di temukan maka = undefined
// const mhs1  = {
// 	nama: `haidar`,
// 	umur: 19,
// 	sayHallo:  () => {
// 		console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 	}
// } 






// Contoh -1 
// const mahasiswa = function () {
// 	this.nama = `haidar`;
// 	this.umur = 19;
// 	this.sayHallo = function () {
// 		console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 	}

	// gunakan arrrow function
	// arrow function hanya bisa digunakan uuntuk kebutuhan tertentu, tidak bisa semua bisa
// 	setInterval( () => {
// 		console.log(this.umur++);
// 	},500);

// }
// const halwi = new mahasiswa();



// CONTOH PENERAPAN DI DUNIA NYATA
// struktur code - 1
const box =  document.querySelector('.box');
box.addEventListener('click', function () {

	let satu = 'size';
	let dua = 'caption';;


	if (this.classList.contains(satu)){
		// gunakan syntac js baru
		[satu, dua] = [dua, satu];
	}



	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
});


// struktur code - 2
// const box =  document.querySelector('.box');
// box.addEventListener('click', function () {
// 	this.classList.toggle('size');
// 	setTimeout(() => {
// 		this.classList.toggle('caption');
// 	}, 600);
// });
