let block = document.getElementById("block")
let hole = document.getElementById("hole")
let character = document.getElementById("character")
let score = document.getElementById("score")
let c = 0;
let newc=0;

hole.addEventListener("animationiteration", function (){
    randomNumber = -((Math.random()* 600) + 300)
    hole.style.top = randomNumber + "px"
})

let div = document.createElement('div')
div.innerHTML = `<p>Score: ${c} </p>`
document.body.appendChild(div)


let dieAudio= new Audio('./sfx_hit.wav')
let flyAudio = new Audio('./sfx_wing.wav')

setInterval(()=>{
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    character.style.top = (characterTop + 1) + "px"

  
    let characterBottom = character.getBoundingClientRect().bottom


    let holeTop= hole.getBoundingClientRect().top
    let holeBottom= hole.getBoundingClientRect().bottom
    let blockLeft = block.getBoundingClientRect().left

    c++
    newc = c
    if(characterTop>871){
        alert("gameover")
        character.style.top = 100 + "px";
        dieAudio.play()
        window.location.reload();
        }

    if(blockLeft<140 && characterTop < holeTop){
        alert("gameover")
        dieAudio.play()
        window.location.reload();
        }

    if(blockLeft<140 && characterBottom > holeBottom ){
        alert("gameover")
        dieAudio.play()
        window.location.reload();
    }
  
  div.innerHTML = `<p>Score: ${c} </p>`
  


},1)
    newc = c

    document.body.addEventListener("click" , ()=>{
    let x = parseInt(character.getBoundingClientRect().top)
       character.style.top= (x - 130) + "px"  
       flyAudio.play()
   })


   localStorage.setItem(newc, c)
   localStorage.getItem(newc)

   let div1 = document.createElement('div')
   div.innerHTML = `<p>BestScore: ${newc} </p>`
   document.body.appendChild(div)
   
   





