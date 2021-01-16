const loginModal = document.querySelector('.login-modal');
const overlay = document.querySelector('.overlay');
const userModal = document.querySelector('.user-modal');
const btnCloseModal = document.querySelector('.close-modal');

userModal.addEventListener('click', function () {
  console.log('Button Clicked');
  loginModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const closeModal = function () {
  loginModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
