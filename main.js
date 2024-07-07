let turn ='x';
let title=document.querySelector ('.title');
let square=[];

function end( num1,num2,num3){
title.innerHTML=`${square[num1]} winner`;
document.getElementById('item'+num1).style.background='black';
document.getElementById('item'+num2).style.background='black';
document.getElementById('item'+num3).style.background='black';
setInterval(function(){title.innerHTML +='.'},1000);
setTimeout(function(){location.reload()},4000);
}


function game (id){
    let element =document.getElementById(id)
    if(turn==='x' && element.innerHTML == '' ){
        element.innerHTML='X'
        turn='o'
        title.innerHTML='o'
    }
    else if(turn==='o' && element.innerHTML == ''){
        element.innerHTML='O'
        turn='x'
        title.innerHTML='x'
    }
    winner();

}
function winner()
{
for(let i=1; i<10 ;i++){
   square[i]= document.getElementById('item'+i).innerHTML ;
}
   if(square[1]== square[2] && square[2]==square[3] && square[1] !=''){
    end(1,2,3)
   }
   else if(square[4]== square[5] && square[5]==square[6] && square[6] !=''){
   end(4,5,6)
       }
       else if(square[7]== square[8] && square[7]==square[9] && square[9] !=''){
       end(7,8,9)
           }
           else if(square[1]== square[4] && square[4]==square[7] && square[1] !=''){
           end(1,4,7)
               }
               else if(square[2]== square[5] && square[5]==square[8] && square[8] !=''){
                end(2,5,8)
                   }
                   else if(square[3]== square[6] && square[6]==square[9] && square[6] !=''){
                   end(3,6,9)
                       }
                       else if(square[1]== square[5] && square[5]==square[9] && square[9] !=''){
                    end(1,5,9)
                           }
                           else if(square[3]== square[5] && square[5]==square[7] && square[7] !=''){
                           end(3,5,7)
                               }
}
