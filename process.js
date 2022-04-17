const portforlioItems = document.querySelectorAll('.portfolio-item')
portforlioItems.forEach(portforlioItem => {
    portforlioItem.addEventListener('mouseover', () => {
        portforlioItem.childNodes[1].classList.add('img-blur');
    });
    portforlioItem.addEventListener('mouseout', () => {
        portforlioItem.childNodes[1].classList.remove('img-blur');
    });
})