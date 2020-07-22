document.onload=start();
let win=[[0,1,2,],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
 function start()
{
    let squares=document.getElementsByClassName("squares")
    document.getElementById('result').style.visibility="invisible"
    let gameOver=false;
    let player=true;
for(let i=0;i<9;i++)
{
    squares[i].innerHTML=""
    squares[i].style.backgroundColor="#f1efef"
}

for(let i=0;i<squares.length;i++)
{
        squares[i].addEventListener("click",()=>
        {
        if((squares[i].innerHTML!="X"&&squares[i].innerHTML!="O"))
        {
            if(gameOver===false)
            {
                    squares[i].innerHTML="X"
                    checkWindCondition();
                    if(gameOver===false)
                    {
                            let winMove=false
                            let count=0,flag=0;
                            for(let i=0;i<win.length;i++)
                            {
                                for(let j=0;j<3;j++)
                                {
                                    if(squares[win[i][j]].innerHTML==="O")
                                    {
                                    count++;
                                    }
                                    if(count==2)
                                    flag=1;
                                }                                                     
                            if(count===2&&flag==1)
                            {
                                for(let j=0;j<3;j++)
                                {
                                        if(squares[win[i][j]].innerHTML!=="X"&&squares[win[i][j]].innerHTML!=="O")
                                        {
                                            setTimeout(() => {
                                                squares[win[i][j]].innerHTML="O"
                                                checkWindCondition() 
                                            }, 100);
                                            
                                            winMove=true
                                               
                                            break
                                        }                           
                                }
                                count=0;
                                flag=0;
                                break;
                            }
                            else
                            {
                                count=0;

                            }
                            }
                            if(winMove==false)
                            {
                                let flag=0;
                                for(let i=0;i<win.length;i++)
                                {
                                    for(let j=0;j<3;j++)
                                    {
                                        if(squares[win[i][j]].innerHTML==="X")
                                        {
                                        count++;
                                        }
                                        if(count==2)
                                        flag=1;
                                        
                                    }                                                     
                                if(count===2&&flag==1)
                                {
                                    for(let j=0;j<3;j++)
                                    {
                                            if(squares[win[i][j]].innerHTML!=="X"&&squares[win[i][j]].innerHTML!=="O")
                                            {
                                                setTimeout(() => {
                                                    squares[win[i][j]].innerHTML="O"
                                                    checkWindCondition()  
                                                }, 100);
                                                
                                                winMove=true
                                                  
                                                break
                                            }                           
                                    }
                                    count=0;
                                    flag=0;
                                    break;
                                }
                                else
                                {
                                    count=0;
                                }
                                }
                            }
                            if(winMove===false)
                            {
                                for(let i=0;i<9;i++)
                                {
                                if(squares[i].innerHTML!=='X'&&squares[i].innerHTML!=='O')
                                {
                                    setTimeout(() => {

                                        squares[i].innerHTML='O'
                                        checkWindCondition()
                                    }, 100);
                                    

                                    
                                    winMove=true
                                    break;
                                }
                                }   
                            }
                    
                }
            }
            }  
            let k=0;
            for(k=0;k<9;k++)
            {
                if(squares[k]!=='X'&&squares[k]!=='O')
                {
                    break
                }
            }
            if(k==9)
            {
                document.getElementById('result').innerHTML="Match Draw !"
                document.getElementById('result').style.visibility="visible"
            }
    })

}
function checkWindCondition()
{
        for(let i=0;i<win.length;i++)
        {
            let checkFlag=0;
            let check=squares[win[i][0]].innerHTML;
            for(let j=0;j<win[i].length;j++)
            {
          
                if(squares[win[i][j]].innerHTML!='X'&&squares[win[i][j]].innerHTML!="O")
                    break
                if(squares[win[i][j]].innerHTML===check)
                {
                    checkFlag++;
                }
                else
                {
                    break;
                }
            }    
            console.log(checkFlag)
            if(checkFlag==3)
            {
                gameOver=true
                let color="tomato"
                document.getElementById('result').style.visibility="visible"

                if(squares[win[i][0]].innerHTML=='X')
                {
                    color=" rgba(0, 128, 0, 0.815)"  
                  document.getElementById('result').innerHTML="You Win"
                  document.getElementById('result').style.visibility="visible"
                }
                else
                document.getElementById('result').innerHTML="You Lose"                    
                for(let k=0;k<3;k++)
                squares[win[i][k]].style.backgroundColor=color
                // break;
                document.getElementById('start').innerHTML="Restart Game !"
                break

            }
            checkFlag=0;
        }
}

}
