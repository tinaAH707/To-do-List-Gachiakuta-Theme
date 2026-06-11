//when you hover over an area the image will pop up

const rightArrow = document.getElementById("rightArrow");
const leftArrow =document.getElementById("leftArrow");

const rightIcon = document.getElementById("icon-right");
const leftIcon = document.getElementById("icon-left");
console.log(rightArrow)

document.addEventListener('DOMContentLoaded', () => {
    arrowHover();
    charcterSelection();
    addTask();
    
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

    const characters = [ 'body', 'zankaTheme', 'riyoTheme', 'enjinTheme'];
    let currentIndex = 0;
    
    rightArrow.addEventListener("click", ()=>{
        body.classList.remove(characters[currentIndex]); //remove class
        currentIndex = (currentIndex + 1) % characters.length;
        body.classList.add(characters[currentIndex])//add
    })

    leftArrow.addEventListener("click", ()=>{
        body.classList.remove(characters[currentIndex]); //remove class
        if (currentIndex === 0) {
            currentIndex = characters.length - 1;
        }else{
        currentIndex = (currentIndex - 1) % characters.length;
        }
        body.classList.add(characters[currentIndex])//add
    })
    
}

//type into the input box so when you press add it takes that and adds a ul

const addTaskButton = document.getElementById("addTask");
const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");

function addTask(){

    addTaskButton.addEventListener("click", ()=>{
 
        event.preventDefault();

        if(inputBox.value === ""){
            alert("add a freaking task >:3 !");
        } else{
            const li = document.createElement("li");
            li.innerHTML = inputBox.value;
            taskList.appendChild(li);  
            

            const span = document.createElement("span");
            span.innerHTML="x";
            li.appendChild(span);

            li.addEventListener("click", ()=>{
                li.classList.toggle("checked")
            })            

            span.addEventListener("click", ()=>{
                li.remove();
            })
        }
        inputBox.value = '';

        

    })

    



}

