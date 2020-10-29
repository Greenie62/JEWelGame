
let diceColumn = document.querySelector(".diceColumn")
let playColumn = document.querySelector(".playColumn")

let colors = ['violet','pink','purple','lightgreen','skyblue','red','orange','blue','gray'];
let currentId;

for(let i=0;i<5;i++){
    let diceDiv = document.createElement("div");
    let jewelRow = document.createElement("div");
    let playBtn = document.createElement("button");
    playBtn.innerText="Roll"
    playBtn.id = i;
    playBtn.onclick = playRow;
    diceDiv.className = 'dice'
    jewelRow.className = "jewelRow"
    for (let j=0;j<6;j++){
    let dotDiv = document.createElement("div")
    let jewel = document.createElement("div")
    dotDiv.className = "dot"
    jewel.className = "jewel"
    dotDiv.id = j + 1;
    jewel.id = j + 1;
    diceDiv.appendChild(dotDiv);
    jewelRow.appendChild(jewel);
    }
    jewelRow.appendChild(playBtn)
    diceColumn.appendChild(diceDiv)
    playColumn.appendChild(jewelRow)
    // playColumn.appendChild(playBtn)
}


function playRow(){

    let currentRow = this.id
    currentId = this.id

    let jewelRow = document.getElementsByClassName("jewelRow")[currentRow];
    let jewels = jewelRow.querySelectorAll('.jewel')

    console.log(jewels)

    let counter = (Math.random() * 10 | 0 + 3);
    console.log("Counter: " + counter)

    colorJewels(jewels,counter)



}


function colorJewels(jewels,counter){
    console.log("colorjewels!!")

    jewels.forEach(j=>{
        j.style.backgroundColor=colors[Math.random() * colors.length | 0]
    })

    if(counter > 0){
        setTimeout(()=>{
            colorJewels(jewels,counter -1)
        },500)
      
    }
    else{
            checkJewels(jewels)
        
    }

  }

  function checkJewels(jewels){
      console.log('checkJewels fired')
      jewels.forEach(j=>{
          console.log(j.style.backgroundColor)
          let dice = document.querySelectorAll('.dice')
          Array.from(dice[currentId].children).forEach(c=>{
              if(Math.random() > .5){
              c.style.backgroundColor='black'
              }
          })
      })
  }