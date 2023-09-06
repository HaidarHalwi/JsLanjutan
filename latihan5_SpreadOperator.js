// Spread Operator (...)
// memecah itarbles menjadi single element

// const mhs = ['faiz', 'haidar', 'halwi'];
// console.log(...mhs[0]);
// atau
// console.log(...mhs);


// Menggabungkan 2 array
// menggunakan concat
// const mhs1 = ['faiz', 'haidar', 'halwi'];
// const mhs2 = ['reza', 'agil', 'fahri'];
// bisa gunakan spred
// dengan menggunakan ini, bisa menambahkan array
// const orang = [...mhs1, 'ahmad', ...mhs2];
// atau gunakan concat, tapi gak bisa kaya di atas
// const orang = mhs1.concat(mhs2);
// console.log(orang)





// mengcopy array
// const mhs = ['faiz', 'haidar', 'halwi'];
// const mhs1 = [...mhs];
// mhs1[0] = 'agil';
// console.log(mhs1);
// atau
// console.log(mhs);







// contoh - 1
// const liMhs  = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);





// contoh-2
const nama = document.querySelector('.nama');
const huruf  = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;



