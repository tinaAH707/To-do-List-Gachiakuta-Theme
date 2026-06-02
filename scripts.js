//when you hover over an area the image will pop up

const rightArrow = document.getElementById("rightArrow");
const leftArrow =document.getElementById("leftArrow");

const rightIcon = document.getElementById("icon-right");
const leftIcon = document.getElementById("icon-left");
console.log(rightArrow)

document.addEventListener('DOMContentLoaded', () => {
    arrowHover();
    charcterSelection();
    
})

function arrowHover(){
    rightArrow.addEventListener("mouseover",() => {
            rightIcon.style.display = 'block';
        })

        rightArrow.addEventListener("mouseout",() => {
            rightIcon.style.display = 'none';
        })

    leftArrow.addEventListener("mouseover",() => {
            leftIcon.style.display = 'block';
        })

        leftArrow.addEventListener("mouseout",() => {
            leftIcon.style.display = 'none';
        })
}

//click the arrow and ittl loop through one by one with each click..click back and loop through back?

function charcterSelection(){
    const body = document.body

    const characters = [ 'rudoTheme', 'zankaTheme', 'riyoTheme', 'enjinTheme'];
    let currentIndex = 0;
    
    rightArrow.addEventListener("click", ()=>{
        body.classList.remove(characters[currentIndex]); //remove class
        currentIndex = (currentIndex + 1) % characters.length;
        body.classList.add(characters[currentIndex])//add
    })
    
}
