let heading = document.querySelector('h2');
let res = document.querySelector('.res');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let headingTag = 0

function decrease(){
    headingTag--
    heading.innerText = headingTag
    if(heading.innerText < 0){
        document.body.style.backgroundColor = 'red';
    }
}
dec.addEventListener('click',decrease)

//increase
function increase(){
    headingTag++
    heading.innerText = headingTag
   if(headingTag > 0){
    document.body.style.backgroundColor = 'green'
   }
}
inc.addEventListener('click', increase)

//reset
function reset(){
    headingTag = 0
    heading.innerText = headingTag
    document.body.style.backgroundColor = 'yellow'
}
res.addEventListener('click', reset) 