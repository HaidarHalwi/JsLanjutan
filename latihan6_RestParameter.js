// Rest Parameter

// function my(){
	// return `a = ${a}, b = ${b}, sisa = ${myAngka}`;
	// atau bisa
	// return myAngka;
	// atau bisa
	// return Array.from(arguments);
	// atau bisa 
	// return [...arguments];
// }


// console.log(my(1,2,3,4,5));










// Contoh - 1
// function jumlahkan(...angka) {
	// let total = 0;
	// for (const a of angka){
	// 	total += a;
	// }	

	// return total;

	// atau bisa yanhg lebih simple
	// return angka.reduce((a,b) => a+b);
// }


// console.log(jumlahkan(1,2,3,4,5))













// Array destructuring
// contoh menentukan ketua, wakil dan anggota kelompok
// const kelompok = [`faiz`, `haidar`, `halwi`, `reza`, `agil`];
// const[ketua, wakil, ...anggota] = kelompok;

// console.log(wakil);







// Object destructuring
// const team ={
// 	ketua : `haidar`,
// 	frontEnd : `faiz`,
// 	backEnd : `halwi`,
// 	ux : `reza`,
// 	ui : `agil`,
// 	devOps : `holil`,
// }

// const{ketua, ...myTeam} = team;
// console.log(myTeam);











// Filtering
function filter(type, ...values){
	return values.filter(v => typeof v === type);
}
// ganti 'boolen' menjadi = string atau number 
console.log(filter('boolean', 1, 2, 'faiz', false, 77, true, 'haidar'));




