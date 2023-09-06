// // contoh 1
// // function init() {
// // 	let nama = 'faiz';
// // 	function tampilNama() {
// // 		console.log(nama);
// // 	}
// // 	tampilNama();
// // }
// // init();

// // contoh 2
// // function init() {
// // 	// let nama = 'faiz';
// // 	function tampilNama(nama) {
// // 		console.log(nama);
// // 	}
// // 	return tampilNama;
// // }
// // let panggilNama = init();
// // panggilNama('haidar');


// // contoh 3
// function init() {
// 	// let nama = 'faiz';
// 	return function(nama) {
// 		console.log(nama);
// 	}
// }
// let panggilNama = init();
// panggilNama('haidar');
// panggilNama('halwi')




// contoh 4
// function ucapkanSalam(waktu) {
// 	// body...
// 	return function (nama){
// 		console.log(`Hai ${nama}, selamat ${nama}, semoga harimu menyenangkan`);
// 	}
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam('haidar'));



// contoh - membuat sudah berapa kali tombol di klik
let add = (function () {
	let counter = 0;
	return function () {
		// body...
		return ++counter;
	}
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());



































