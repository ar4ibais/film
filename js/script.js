"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const sortArr = (arr) => {
        arr.sort();
    }
    

    const adv = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          poster = document.querySelector('.promo__bg'),
          list = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (favourite) {
            console.log('Добавляем любимый фильм');
        }

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, list);
    
            event.target.reset();
        }
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };


    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${item} 
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }





    
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, list);
    
});