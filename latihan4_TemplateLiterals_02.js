// Html Fragments
// const dataMhs = {
// 	namaLengkap : `Faiz Haidar Halwi`,
// 	namaPanggilan : `Haidar`,
// 	jurusan : `Teknik Informatika`,
// 	univ : `Universitas Islam Negeri Jakarta`
// };


// const htmlData = `<div class = data>
// 	<h1>${dataMhs.namaLengkap}<h1>
// 	<h2>${dataMhs.namaPanggilan}</h2>
// 	<span>${dataMhs.jurusan}<span>
// 	<p>${dataMhs.univ}</p>
// </div>`
// document.body.innerHTML = htmlData;

// Looping
// const mhs = [
// 	{
// 		nama: 'haidar',
// 		Email: 'haidar@gmail.com'

// 	},
// 	{
// 		nama: `Halwi`,
// 		Email: 'haidar@gmail.com'

// 	},
// 	{
// 		nama: 'Faiz',
// 		Email: 'haidar@gmail.com'

// 	}
// ];

// const element = `<div class = "data">
// 	${mhs.map(m => `<h1>${m.nama}<h1>
// 	<h2>${m.Email}</h2>`)}
// </div>`;



// document.body.innerHTML = element;





// Concitionals
// const lagu = {
// 	judul: 'ini adalah dunia',
// 	tema: 'langit',
// 	feat: 'ahmad ludy'
// }

// const element = `<div class = "data">
// 	<ul>
// 		<li>${lagu.judul}</li>
// 		<li>${lagu.tema}</li>
// 		<li>${lagu.feat}</li>
// 	</ul>
// </div>`;

// Atau pakai kondisional

// const element = `<div class = "data">
// 	<ul>
// 		<li>${lagu.judul}</li>
// 		<li>${lagu.tema} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
// 	</ul>
// </div>`;

// document.body.innerHTML = element;


// Nested
// HTML fragments bersarang
const data = {
	nama: 'haidar',
	umur: 19,
	matakuliah: [
		'pemrograman',
		'Matematika',
		'Aljabar'
		]
};

function cetakMK(matakuliah) {
	// body...
	// .join untuk menghilangkan koma 
	return `
	<ol>
		${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
	</ol>
	`;
}

const element = `<div class = "data">
	<h2>${data.nama}</h2>
	<span>Umur : ${data.umur}</span>
	<h4>Mata kuliah :</h4>
	${cetakMK(data.matakuliah)}
</div>`;



document.body.innerHTML = element;