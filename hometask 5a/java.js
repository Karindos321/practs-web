const clickLeft = () => {
    const slider = document.getElementsByClassName('slider-item');
    let prev = null;
    for (let i = 0; i < slider.length; i += 1) {
    if (slider[i].classList.contains('selected')) {
        prev = i - 1;
    if (prev == -1) {
    prev = slider.length - 1;
   }
  }
 }
    const [selected] = document.getElementsByClassName('selected');
    selected.classList.toggle('selected');
    slider[prev].classList.toggle('selected');
};

document.getElementById('left')
    .addEventListener('click', clickLeft);


const clickRight = () => {
    const slider = document.getElementsByClassName('slider-item');
    let selected = document.getElementsByClassName('selected')[0];
    for (let i = 0; i < slider.length; i += 1) {
        if (slider[i] === selected) {
            let nextIndex = (i + 1) % slider.length;
            selected.classList.remove('selected');
            slider[nextIndex].classList.toggle('selected');
            return;
        }
    }
};
let selected = document.getElementsByClassName('selected')[0];  

document.getElementById('right')
    .addEventListener('click', clickRight);