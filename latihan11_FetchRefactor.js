// // Fungsi Search
// $(".search-button").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=8f87f00e&s=" + $(".input-keyword").val(),
//     success: (results) => {
//       const movies = results.Search;
//       let cards = ``;
//       movies.forEach((m) => {
//         cards += showCard(m);
//       });
//       $(".movie-container").html(cards);

//       // ketika tombol detail di-klik
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=8f87f00e&i=" +
//             $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(".modal-body").html(movieDetail);
//           },
//           //   Jika Error
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     //   Jika Error
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// Cara metode lainnya yaitu Fetch
// Method fetch yaitu :
// clone(), error(), redirect(), blob(). formData(), json(), text() => semua method ini mengembalikan promise
// Data Card Film
// Gunakan - Fetch
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=8f87f00e&s=" + inputKeyword.value)
//     .then((Response) => Response.json())
//     .then((Response) => {
//       const movies = Response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCards(m)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       // ketika tombol detail di klik
//       const modalDetailButton = document.querySelectorAll(
//         ".modal-detail-button"
//       );
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=8f87f00e&i=" + imdbid)
//             .then((Response) => Response.json())
//             .then((m) => {
//               const movieDetail = showMovieDetail(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// MELAKUKAN REFACTOR PADA CODE - Code menjadi lebih rapih
// ketika tombol search di klik
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

// start event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateDetail(movieDetail);
  }
});

function getMovieDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}
// finish event binding

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=8f87f00e&s=" + keyword)
    .then((Response) => Response.json())
    .then((Response) => Response.Seacrh);
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

function showCards(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
            <img src="${m.Poster}" class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
            </div>
            </div>
        </div>`;
}

function showMovieDetail(m) {
  return `<div class="modal-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid" />
                    </div>
                    <div class="col-md">
                    <div class="list-group">
                        <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                        <li class="list-group-item">
                            Director : <strong> ${m.Director} </strong>
                        </li>
                        <li class="list-group-item">
                            Actors : <strong>${m.Actors}</strong>
                        </li>
                        <li class="list-group-item">
                            Writer : <strong> ${m.Writer} </strong>
                        </li>
                        <li class="list-group-item">
                            Plot :
                            <strong>
                            <br />
                            ${m.Plot}</strong
                            >
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>`;
}
