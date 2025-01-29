export function search() {
    document.addEventListener('DOMContentLoaded', function () {
        const searchButton = document.querySelector('.search__btn');
        const searchInput = document.querySelector('.form__input');

        searchButton.addEventListener('click', function () {
            if (searchInput.style.display === 'none' || searchInput.style.display === '') {
                searchInput.style.display = 'block';
                searchInput.focus();
            } else {
                searchInput.style.display = 'none';
            }
        });
    });
}

