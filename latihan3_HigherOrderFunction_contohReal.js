// Ambil semua element video
// cara mengubah sebuah nilau menjadi array dengan menambahkan Array.from
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang "JAVASCRIPT"
// Arrow function
// includes('') artinya untuk berfungsi dengan cara baca "yang isi nya apa?", bisa di isi dengan sebuah teks
let jsLanjut = videos.filter(video => video.textContent. includes('JAVA SCRIPT'))

// ambil durasi masing2 video
// gunakan atribute js yaitu dataset
// dataset untuk mengambil data di HTML yaitu data-duration
	.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
	// durasi itu 10:30 ubah jadi array [10,20,46] dan ini di sebut dengan split
	.map(waktu =>{
		const parts = waktu.split(':').map(part => parseFloat(part));
		return(parts[0] * 60) + parts[1];
	})


// jumlahkan semua detik
	.reduce((total, detik) => detik + total); 

// ubah formatnya jadi jam menit detik
	// ambil pembulatan ke bawha dengan gunakan atribute Math.floor
	// Math.shilling itu pembulatan atas
	// Math.rownd itu pembulatan terdekat
	const jam = Math.floor(jsLanjut / 3600);
	jsLanjut = jsLanjut - jam * 3600;
	const menit = Math.floor(jsLanjut / 60);
	const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVA SCRIPT')).length;
const pJmlhVideo = document.querySelector('.jumlah-video');
pJmlhVideo.textContent = `${jmlVideo} video.`;




console.table(jmlVideo);