// Pembahasan yaitu : Execution Context, Hoisting, Scope

// ada 2 fase Execution Context
// 1. Creation
// 2. Execution

// jika var di bwah console maka undefined, seperti :
// console.log (nama);
// var nama = 'faiz';

// jika var di atas console maka tidak undefined
// var nama = 'faiz';
// console.log (nama);

// proses yang terjadi yaitu :
// nama va = undefined
// nama function = fn()
// hoisting
// window = global obejct
// this = window

// proses di atas adalah berurutan
// jika ketik window saja atau this saja di console log, maka akan muncul fungsi2 yang bisa di liat







// execution phase

// console.log(sayHello());
// jika pakai () itu artinya eksekusi (simbol tersebut)

// variabel isinya undefined
// var nama = 'faiz';
// var umur = 33;


// // function isinya isi dari function
// function  sayHello() {
// 	return `halo, nama saya ${nama}, saya ${nama} tahun`;
// }


// function membuat local exection contect
// yang di dalamnya itu terdapat creation dan execution phase
// dan kita bisa akses window dan arguments
// window
// argument
// hoisting

 
//  contoh kasus - 1
// var nama = 'faiz';
// var  username  = 'haidra@gmail.com';

// function cetakURL(username) {
// 	// body...
// 	var instagramURL = 'http://haidar.com'
// 	return instagramURL + username;
// }

// console.log(cetakURL(username)); 


//  contoh kasus - 2
// tumpukan eksekusi code
// function a() {
// 	console.log('ini a');

// 	function b() {
// 	console.log('ini b');
		

// 		function b() {
// 		console.log('ini b');
			
// 		}
// 		c();
// 	}
// 	b();
// }
// a();



// contoh kasus - 3 - scope
// scope itu mencari variabel terdekat, jika tidak ada naik ke atas
// var nama = 'faiz';
// var username = 'faiz@gmail.com';

// function cetakURL() {
// 	var  instagramURL = 'http//haidar.com'
// 	return instagramURL + username;
	
// }

// console.log(cetakURL('@halwi', '@ffhaidar'));





// latihan
// function satu() {
// 	var nama = 'faiz';
// 	console.log(nama);
// }

// function dua(){
// 	console.log(nama);
// }

// console.log(nama);
// var nama = 'haidar';
// satu();
// dua('halwi');
// console.log(nama);











































