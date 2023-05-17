

let pauseDuration = 5000;
let isPaused = false;
//Function to change sliding images
let counter = 1;
function slideInterValFunc(){
  if(!isPaused){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
  }
}
let intervalId;

//Start interval, gets called from body onload of index.html
function startInterval(){
  //every time the page is loaded, the first radio button is checked
  document.getElementById("radio1").checked = true;
  intervalId = setInterval(slideInterValFunc, 6000);
}
function stopInterval(){
  clearInterval(intervalId);
}

// If user manually selects a radio button, reset interval
const radioButtons = document.querySelectorAll('input[type="radio"][name="radio-btn"]');
radioButtons.forEach(radioButton => {
radioButton.addEventListener('change', () =>{
  isPaused = true;
  setTimeout(() => {
    isPaused = false;
  }, pauseDuration);
});
});

//Function to download PDF
function downloadPDF(x) {
  var link = document.createElement('a');
  link.href = 'Resources/SDCU-Case-History-' + x + '.pdf';
  link.target = '_blank';
  //Uncomment the line below to also download the PDF
  //link.download = 'SDCU-Case-History-' + x + '.pdf';
  link.dispatchEvent(new MouseEvent('click'));
}
