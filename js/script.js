document.querySelector('.left-arrow').addEventListener('click', () => {
    document.querySelector('.gallery-container').scrollBy({
        left: -window.innerWidth / 2, // Scrolls half the viewport width to the left
        behavior: 'smooth'
    });
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    document.querySelector('.gallery-container').scrollBy({
        left: window.innerWidth / 2, // Scrolls half the viewport width to the right
        behavior: 'smooth'
    });
});
