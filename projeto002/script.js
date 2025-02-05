const share = document.querySelector('#share');
const sharePopup = document.querySelector('.share__popup');
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    //console.log(e);
    if (e.target !== share) {
        sharePopup.classList.remove('aparecer');
    }
});

share.addEventListener('click', (e) => {
    // console.log(e);

    if (sharePopup.classList.contains('aparecer')) {
        sharePopup.classList.remove('aparecer');
    }else {
        sharePopup.classList.add('aparecer');
    }
});
