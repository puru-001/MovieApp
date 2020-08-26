//jQuery 

// jQuery(document).ready(() => {
//     jQuery('#form').on("submit", e =>{
//         e.preventDefault();

//         let searchText = jQuery('#search').val();

//         console.log(searchText);

//     });
// });


let form = document.getElementById('form')
let search = document.getElementById('search')

form.addEventListener("submit", e => {
    e.preventDefault();
    let searchText = document.getElementById("search").value;
    //console.log(search.value);
    getMovies(searchText);
});

function getMovies(searchText) {
    let imdbAPIUrl = `http://www.omdbapi.com/?s=${searchText}&apikey=c7ce72b5`;

    window.fetch(imdbAPIUrl)
        .then(data => {
            data.json().then(movies => {
               let MovieData = movies.Search;
               console.log(MovieData)
                let output = "";
                for (let movie of MovieData) {
                    output += `
                   <div class="card">
                       <img src="${movie.Poster}"class="card-img-top" alt="...">
                       <div class="card-body">
                           <h5 class="card-title">${movie.Title}</h5>
                           <p class="card-text">
                               <span class="badge badge-danger float-right">${movie.imdbID}</span>
                               <span class="badge badge-dark">${movie.Type}</span>
                               <span class="badge badge-primary">${movie.Year}</span>
                           </p>
                           <a href="#" class="btn btn-primary">Go Somewhere</a>
                           </div>
                   </div>
                   `;
                    document.getElementById("template").innerHTML = output;
                }


            })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}; //...API......
