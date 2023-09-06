// Tagged Tamplates

// const nama = 'faiz haidar';
// const jurusan = 'Teknik Informatika';

// function coba(strings, ...data) {
	// body...
	// pakai reduce untuk lebih simple dan ringkas
// 	return strings.reduce((hasil1, hasil2, i) => `${hasil1}${hasil2}${data[i] || ''}`, '')
// }

// const tampil = coba `Hai nama saya ${nama}, saya dari jurusan ${jurusan}`;
// console.log(tampil);





// Highlight
const nama = 'faiz haidar';
const jurusan = 'Teknik Informatika';
const nim = 9004;

function Highlight(strings, ...data) {
	// body...
	return strings.reduce((hasil1, hasil2, i) => `${hasil1}${hasil2}<span class = data>${data[i] || ''}</span>`, '')
}

const tampil = Highlight `Hai nama saya ${nama}, saya dari jurusan ${jurusan}, dan nim saya ${nim}`;
document.body.innerHTML = tampil;