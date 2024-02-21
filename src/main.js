const refs = {
  sliderContainer: document.querySelector('.slider-container'),
  slideRight: document.querySelector('.right-slide'),
  slideLeft: document.querySelector('.left-slide'),
  upButton: document.querySelector('.up-button'),
  downButton: document.querySelector('.down-button'),
};

const slidesLength = refs.slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

refs.slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

refs.upButton.addEventListener('click', () => changeSlide('up'));
refs.downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = direction => {
  const sliderHeight = refs.sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  refs.slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  refs.slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
