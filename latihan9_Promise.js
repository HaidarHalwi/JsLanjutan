// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=8f87f00e&s=marvel",
//   success: (movies) => console.log(movies),
// });

// Promise (janji)
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asnyncronous di masa yang akan datang
// janji -> terpenuhi / ingkar / menunggu janji
// states -> fullfilled / rehected / pending
// callback -> resolve / reject / finally
// aksi -> then / catch

// Contoh - 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji sudah di tepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// janji1
//   .then((Response) => console.log("OK! : " + Response))
//   .catch((Response) => console.log("NOT OK! : " + Response));

// Contoh - 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("sudah di berikan beberapa waktu dan sudah di tepati! ");
//     }, 3000);
//   } else {
//     setTimeout(() => {
//       reject("tidak di tepati, padahal sudah di beri waktu");
//     }, 3000);
//   }
// });

// console.log("mulai");
// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then((Response) => console.log("Baik! : " + Response))
//   .catch((Response) => console.log("Tidak Baik! :" + Response));
// console.log("selesai");

// Method promise yaitu Promise.all
// berfungsi untuk menjalankan promise sekaligus banyak
const nama = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        nama: "faiz",
        ttl: 19,
        tahun: "juli",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "jakarta",
        temp: 19,
        kondisi: "Berawan",
      },
    ]);
  }, 500);
});

Promise.all([nama, cuaca]).then((Response) => {
  const [film, cuaca] = Response;
  console.log(film);
  console.log(cuaca);
});
