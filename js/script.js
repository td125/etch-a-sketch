let ground=document.getElementById('ground');
let div,x, btnBlack, btnGrey, btnRand, btnReset;


function makegrid(x){
    ground.style.gridTemplateColumns=`repeat(${x} , 1fr)`;
    ground.style.gridTemplateRows=`repeat(${x}, 1fr)`;
    for(let i=0; i<x**2; i++){
        div=document.createElement('div')
        ground.appendChild(div);
        div.classList.add('exp');
        div.classList.add('multi');
        
    }  
}

makegrid(5);


btnBlack=document.getElementById('black');
btnGrey=document.getElementById('grey');
btnRand=document.getElementById('random');
btnReset=document.getElementById('reset');

//Adding events to buttons
        //please always be aware of the diff between nodelist and html collection
//let divList=document.querySelectorAll('.multi');

btnBlack.addEventListener('click', goBlack);

function goBlack(){
    let divList=document.querySelectorAll('.multi');
    divList.forEach(function(div){
        div.addEventListener('mouseenter', function(){   
            if(div.classList.contains('multi')){
                div.style.backgroundColor='black';
            }    
        })
    })
}


btnGrey.addEventListener('click', goGrey);

function goGrey(){
    let divList=document.querySelectorAll('.multi');
    divList.forEach(function(div){
        div.addEventListener('mouseenter', function(){   
            if(div.classList.contains('multi')){
                div.style.backgroundColor='grey';
            }    
        })
    })
}


btnRand.addEventListener('click', randomise);


function randomise(){
    let divList=document.querySelectorAll('.multi');
    function rand(){
        let randy= Math.floor(Math.random()*256);
        return randy;
    };
    
    divList.forEach(function(div){
         let divList=document.querySelectorAll('.multi');
        div.addEventListener('mouseenter', function(){   
            if(div.classList.contains('multi')){
                div.style.backgroundColor=`rgb(${rand()}, ${rand()}, ${rand()})`;
            }    
        })
    })
}

btnReset.addEventListener('click', reset);
function resete(){
    let divList=document.querySelectorAll('.multi');
    divList.forEach(function(div){
        div.remove();
    })
}

function reset(){
    resete();
    let x=parseInt(prompt("Enter Size grid you (0-100)"));
    makegrid(x);
}


