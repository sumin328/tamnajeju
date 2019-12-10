document.querySelector('.btn-learn').addEventListener('click', (event) => {
    event.preventDefault();
    const path = event.target.href;
    const id = path.split('#')[1];
    const y = document.getElementById(id).offsetTop;
    window.scrollTo(0, y);
});
