// Percobaan - 1
// const cobaAwait = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 1000);
// });

// cobaAwait.then(() => console.log(cobaAwait));

// Percobaan - 2
function newCoba() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("selesai");
    }, 1000);
  });
}

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan!");
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.error(error); // console.error = mengubah teks menjadi merah
  }
}

cobaAsync();
