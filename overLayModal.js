const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
let count = 0;
let stories = ["She traveled the whole world. Well so far Scotland, England, Europe, Australia, Egypt and Mexico.  Working on other parts but than covid happened, so yeah.", "She's a blackbelt in karate", "She was Army Reserves, Hooah!", "Whose has an awesome son."]; /*array literary syntact*/


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
    document.querySelector (".modal-body").textContent = stories[count]
    if (count == stories.length-1){
      count = 0
    }
      else{
        count++;
      }
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

/*gggggrrrrrrrrrrr ggggrrrrrrrrrrrrrrrrrrrrrr
let count = 0;
// define this outside of function so it won't be defined over and over
let out = btn1.getElementById('output');
let message;
function go(e){
    e.preventDefault();
    count ++;
    if(count === 1) message = 'Not a button – I do not think it means what you think it means.';
    if(count === 2) message = 'I bet when Siri says turn you go straight';
    if(count === 3) message = `The definition of insanity is doing the same thing over and over again, but expecting different results.`;
    if(count === 4) message = 'I don not think not a button means what you think it means';
    if(count === 5) message = `The definition of insanity is doing the same thing over and over again, but expecting different results.`;
    if(count >= 6) message = 'Inconceivable!';
    out.innerHTML = message;
}
 // For the following to work add id="btn1" to your button and remove the onclick handler

 btn1.getElementById('btn1').addEventListener('click', go);
*/

