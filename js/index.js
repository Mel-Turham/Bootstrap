const modal = document.querySelector('.modal__wrapper');
const openModal = document.querySelector('.open_modal');
const overley = document.querySelector('.modal__overely');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
	const body = document.querySelector('body');
	body.style.overflow = 'hidden';
	modal.classList.add('open');
	overley.classList.add('show');
});
const iconCloseModal = document.querySelector('.icon__close');
iconCloseModal.addEventListener('click', () => {
	modal.classList.remove('open');
    overley.classList.remove('show');
});

closeModal.addEventListener('click', () => {
	modal.classList.remove('open');
	overley.classList.remove('show');
	const body = document.querySelector('body');
	body.style.overflow = 'auto';
});
