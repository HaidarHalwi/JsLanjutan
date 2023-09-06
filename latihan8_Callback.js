// Fungsi Search
$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=8f87f00e&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = ``;
      movies.forEach((m) => {
        cards += showCard(m);
      });
      $(".movie-container").html(cards);

      // ketika tombol detail di-klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=8f87f00e&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
          //   Jika Error
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    //   Jika Error
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

// Data Card Film

function showCard(m) {
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
