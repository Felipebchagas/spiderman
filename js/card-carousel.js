function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); 
    const rotateYDeg = -120 * (Number(selectedItem) -1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.controller_button--active');

    activeButtonElement.classList.remove('controller_button--active');
    selectedButtonElement.classList.add('controller_button--active');

}