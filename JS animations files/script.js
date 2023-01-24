console.log('Hello World!');

const btn = document.querySelector('.btn');

function myAnimation() {
    const element = document.querySelector('.box'),
          id = setInterval(frame, 10);
    let position = 0;

    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            element.style.top = position +  'px';
            element.style.left = position + 'px';
        }
    }

    btn.addEventListener('click', myAnimation);
}

btn.addEventListener('click', myAnimation);