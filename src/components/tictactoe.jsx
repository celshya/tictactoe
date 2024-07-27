import React, { useState } from 'react'
import useTictactoe from './usetictactoe'



const Tictactoe = () => {

   

    const {handleClick,board,message,reset} = useTictactoe()
  return (
    <div className='game'>
    <h1>Tic Tac Toe</h1>
    <div className='head'>
    
    <h4>{message}</h4>
    <button className='reset' onClick={reset}>reset</button>

    </div>
    <div className='board'>
    {board.map((ele,ind)=>{
        return <button key={ind} onClick={()=>handleClick(ind)}>{ele}</button>
    })}

    </div>


    </div>
  )
}

export default Tictactoe