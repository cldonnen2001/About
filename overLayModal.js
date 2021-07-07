const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', (go) => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//gggggrrrrrrrrrrr
let count = 0;
// define this outside of function so it won't be defined over and over
let out = document.getElementById('output');
let message;
function go(e){
    e.preventDefault();
    count ++;
    if(count === 1) message = 'You pressed the button!';
    if(count === 2) message = 'You pressed the button again';
    if(count > 1 && count < 6) message = `You pressed the button ${count} times!`;
    if(count >= 6) message = 'Stop!';
    out.innerHTML = message;
}
 /*html looks like this:
<button type="button" id="btn1">Click Me</button>
	<p id="output">
	</p>
	
	<script src="button.js"></script>*/
