// membuat object pada js
// 1. object literall
//run (pilih di bawah ini) :
//murid, muurid.minum(angka)

// let murid1 = {          // let itu variabel dan sering digunakan
// 	// ini object

// 	// property
// 	nama: 'haidar',    //string    
// 	kekuatan: 10,      //integer
// 	minum: function(porsi){   //method
// 		//ketika nambah porsi, maka akan menambah kekuatam
// 		this.kekuatan = this.kekuatan + porsi;
// 		console.log(`hai ${this.nama}, selamat minum`)
// 	}
// }

// //jika ingin mengcopy, tidak bisa dengan let yang sama, harus beda


// let murid2 = {          // let itu variabel dan sering digunakan
// 	// ini object

// 	// property
// 	nama: 'haidar',    //string    
// 	kekuatan: 10,      //integer
// 	minum: function(porsi){   //method
// 		//ketika nambah porsi, maka akan menambah kekuatam
// 		this.kekuatan = this.kekuatan + porsi;
// 		console.log(`hai ${this.nama}, selamat minum`)
// 	}
// }





// 2. function declaration
// run (pilih di bawah ini):
// haidar, haidar.main(angka), haidar.minum(angka)

// langsung BUAT TEMPLATE

// ini template
// function murid(nama, kekuatan){
	//variabel atau object
	// let murid = {};

	// pproperty 
	// lalu isinya parameter yang di atas
	// murid.nama = nama;
	// murid.kekuatan = kekuatan;

	// method
	// murid.minum = function(porsi){
		// cara singkat susunan code untuk isi method
	// 	this.kekuatan += porsi;
	// 	console.log (`hai ${this.nama}, selamat makan`)

	// }

	// mau tambah method lagi? bisa. sama saja seperti di atas
// 	murid.main = function(jam){
// 		this.kekuatan -= jam;
// 		console.log(`yah ${this.nama}, kekuatan kamu berkurang`)
// 	}

// 	return murid;

// }

// object literasi atau pemnggilan
// let haidar = murid (`haidar`, 10);

//bagaimana mau buat murid baru lagi?  gampang
// tinggal buat object literal atau panggilanlagi yg sama seperti di atas
// let halwi = murid (`halwi`, 20)





// 3. constructor function (keyword neww)
// run (pilih salah satu kata):
// haidar, haidar.main(angka), haidar.minum(angka)

// sama seperti function declaration
// cuman tidak pakai let (variabel) dan return
// lalu ganti nama let nya itu menjadi this
// dan tamabahin new setelah sama dengan pada Saat code Panggilan

// function murid(nama, kekuatan){
	// variabel atau object
	// let murid = {};  --> karena tidak perlu

	// property 
	// lalu isinya parameter yang di atas
	// this.nama = nama;
	// this.kekuatan = kekuatan;

	// method
	// this.minum = function(porsi){
	// 	// cara singkat susunan code untuk isi method
	// 	this.kekuatan += porsi;
	// 	console.log (`hai ${this.nama}, selamat makan`)

	// }

	// mau tambah method lagi? bisa. sama saja seperti di atas
	// this.main = function(jam){
	// 	this.kekuatan -= jam;
	// 	console.log(`yah ${this.nama}, kekuatan kamu berkurang`)
	// }

	// return murid;  --> karena tidak perlu

// }

// object literasi atau pemnggilan
// let haidar = new murid (`haidar`, 10); // tambah new






// 4. object.create 

// const methodMurid = {
// 		// method
// 	minum: function(porsi){
// 		this.kekuatan += porsi;
// 		console.log (`hai ${this.nama}, selamat makan`);

// 	},

// 	main: function(jam){
// 		this.kekuatan -= jam;
// 		console.log(`yah ${this.nama}, kekuatan kamu berkurang`);
// 	},

// 	istirahat: function(jam){
// 		this.kekuatan += jam * 2;
// 		console.log(`wah ${this.nama}, kekuatan kamu bertambah 2x lipat`);
// 	}


// }; 

// function murid(nama, kekuatan){
// 	//variabel atau object
// 	let murid = Object.create(methodMurid);

// 	// pproperty 
// 	murid.nama = nama;
// 	murid.kekuatan = kekuatan;
// 	// murid.minum = methodMurid.minum;
// 	// murid.main = methodMurid.main;
// 	// murid.tidur = methodMurid.tidur;

// 	return murid;

// }

// let haidar = murid (`haidar`, 10);
// let halwi = murid (`halwi`, 20);














// Video Ke 3
// Prototype - versi obejct dengan prototype
// function murid(nama, kekuatan){
// 	this.nama = nama;
// 	this.kekuatan = kekuatan;
// }

// murid.prototype.minum = function(porsi) {
// 	this.kekuatan += porsi;
// 	return `Hai ${this.nama}, selamat minum`
// }

// murid.prototype.main = function (jam){
// 	this.kekuatan -= jam;
// 	return `hai ${this.nama}, selamat bermain`
// }

// murid.prototype.tidur = function(jam){
// 	this.kekuatan += jam * 2;
// 	return `hai ${this.nama}, selamat tidur`
// }

// let haidar = new murid ('haidar', 10);




// prototype - versi class
// class  murid{
// 	constructor (nama, kekuatan){
// 		this.nama = nama;
// 		this.kekuatan = kekuatan;
// 	}

// 	minum(porsi) {
// 	this.kekuatan += porsi;
// 	return `Hai ${this.nama}, selamat minum`;
// 	}

// 	main(jam){
// 		this.kekuatan -= jam;
// 		return `hai ${this.nama}, selamat bermain`;
// 	}

// 	tidur(jam){
// 		this.kekuatan += jam * 2; 
// 		return `hai ${this.nama}, selamat tidur`;
// 	}

// }

// let haidar = new murid ('haidar', 10);



// CARA MENGETAHUI FUNGSI - FUNGSI (TAG) APA SAJA

// bisa cek semua fungsi array dengan mengentik ini di console :
// Array.prototype lalu enter

// bisa cek semua fungsi object dengan mengentik ini di console :
// Object.prototype lalu enter

// bisa cek semua type angka dengan mengentik ini di console :
// Number.prototype lalu enter




  























