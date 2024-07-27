import React ,{useState}from 'react'
const initialboard = ()=> new Array(9).fill(null)

const useTictactoe = () => {
    const [board,setBoard] = useState(initialboard())
    const [isXnext,setX] = useState(true)
    const [message,setMessage] = useState("Player X Turn")
    const [winner,setWinner] =  useState(null)


    const WINNING = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]

    const handleClick = (ind)=>{
        if(winner ||board[ind]!=null) return

        const newboard = [...board]
        newboard[ind] = isXnext?"X":"O"

        const winnerboard = checkwinning(newboard)
       const draw = newboard.every(element=>element!=null)
        if(winnerboard){
            setMessage(`Player ${winnerboard} Wins!`)
        }
       else if(draw){

        console.log("Im here")
        setMessage("It's a Draw Match! ")
       }
        else{
            setMessage(isXnext?"Player O turn":"Player X turn")
        }

        setBoard(newboard)
        setX(!isXnext)

       

    }

    const checkwinning = (newboard) =>{
        for(const [a,b,c] of WINNING){
            if(newboard[a] && newboard[a]===newboard[b] && newboard[a]===newboard[c]){
                setWinner(newboard[a])
                return newboard[a]
            }

        }
    }

    const reset = () =>{
        setBoard(initialboard())
        setMessage("Player X Turn!")
        setWinner(null)
        setX(true)
    }

  return {
    handleClick,board,message,reset
  }
}

export default useTictactoe