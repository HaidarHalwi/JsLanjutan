// #Asynchronous Javascript

// pengertian



// mempelajari hal ini akan membantu 
// supaya tidak bingung ketika mempelajari :
// - Callback
// - Promise
// - ajax
// - Async & Await

// Asynchronous + Sigle-threaded = Concurrency
// Asynchronous + Multi-threaded = Parallesism



// #Callback
// adalah Function yang dikirimkan sebagai pamrameter pada function yang lain

// Callback


// Synchronous Callback
// function halo(nama) {
// 	// body...
// 	alert(`halo, ${nama}`);
// }

// function tampil(callback){
// 	const nama = prompt('masukan nama :');
// 	callback(nama);
// }

// tampil(halo);

// atau

// function tampil(callback){
// 	const nama = prompt('masukan nama :');
// 	callback(nama);
// }

// tampil(nama => alert(`Halo, ${nama}`));





// Contoh 1
// const mhs = [{

// 		"nama" : "faiz",
// 		"ttl" : "19 juli 2004",
// 		"tempat" : "tangerang",
// 		"no" : 1
// 	},
// 	{
// 		"nama" : "haidar",
// 		"ttl" : "7 january 2003",
// 		"tempat" : "bandung",
// 		"no" : 2	
// 	},
// 	{
// 		"nama" : "halwi",
// 		"ttl" : "22 maret 2000",
// 		"tempat" : "jakarta",
// 		"no" : 3
// 	}
// ];

// console.log('mulai');
// mhs.forEach(m => {
// 	for (let i = 0; i < 10000000; i++) {
// 		let date = new Date();
// 	}
// 	console.log(m.nama)
// });
// console.log('selesai');

 







// Asynchronous Callback
// menit 16.00
// butuh json, live server, jalanin di vsCod, install Extension Live server di vsCode

// pakai javascript murni / vanila javascript
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if (xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);

//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//  const mhs = JSON.parse(results);
//  mhs.forEach(m => console.log(m.nama));
// }, () => {

// }); 
// console.log('selesai');



// atau
// gunakan jQuery
// lebih simpel

// cara baca yaitu:
// $ = jQuery tolong panggil ajax
console.log('mulai');
$.ajax({
    // mau kemana url nya? panggil file jsonnya
    url: 'data/mahasiswa.json',
    // success: = mau di apakan
    success: (mhs) => { 
        mhs.forEach(m => console.log(m.nama));
    },
    // error: = mau di apakan
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');









