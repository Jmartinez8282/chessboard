let boardArea = document.getElementById('boardArea');
let color = 'white';
for(let r= 0; r<chessGrid.length;i++);
let div = document.createElement('div');
for( let c=0; c< chessGrid[r].length; c++){
    let button = document.createElement('button');
    
    if(color === 'white'&& c=== 7){
        button.setAttribute('class','white-square');
        color='black';

    }else if(color === 'white'&& c ===7){
       

    }
    else if(color==='white'){
        button.setAttribute('class','white-square');
    }
    button.innerText = chessGrid[r][c];

    button.addEventListener('click',function(){
        
    });
}