

import { useState, useEffect} from "react"
const BOARD = [
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
  [{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}],
]

const BLOCKS = [
  [
    [
      [0,0,1,0],
      [0,1,1,0],
      [0,1,0,0],
      [0,0,0,0],
    ],
    [
      [0,1,1,0],
      [0,0,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,1],
      [0,0,1,1],
      [0,0,1,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [0,1,1,0],
      [0,0,1,1],
      [0,0,0,0],
    ],
  ],
  [
    [
      [0,0,1,0],
      [0,1,1,0],
      [0,0,1,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,0],
      [0,1,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,0],
      [0,0,1,1],
      [0,0,1,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [0,1,1,1],
      [0,0,1,0],
      [0,0,0,0],
    ],
  ],
  [
    [
      [0,1,0,0],
      [0,1,1,0],
      [0,0,1,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,1],
      [0,1,1,0],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,0],
      [0,0,1,1],
      [0,0,0,1],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [0,0,1,1],
      [0,1,1,0],
      [0,0,0,0],
    ],
  ],
  [
    [
      [0,0,1,1],
      [0,0,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,1],
      [0,0,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,1],
      [0,0,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,1],
      [0,0,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
  ],
  [
    [
      [0,0,0,0],
      [0,1,1,1],
      [0,1,0,0],
      [0,0,0,0],
    ],
    [
      [0,1,1,0],
      [0,0,1,0],
      [0,0,1,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,1],
      [0,1,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,1],
      [0,0,0,0],
    ],
  ],
  [
    [
      [0,1,0,0],
      [0,1,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,1],
      [0,0,1,0],
      [0,0,1,0],
      [0,0,0,0],
    ],
    [
      [0,0,0,0],
      [0,1,1,1],
      [0,0,0,1],
      [0,0,0,0],
    ],
    [
      [0,0,1,0],
      [0,0,1,0],
      [0,1,1,0],
      [0,0,0,0],
    ],
  ],
  [
    [
      [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0],
    ],
    [
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0],
      [0,0,1,0],
    ],
    [
      [0,0,0,0],
      [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
    ],
    [
      [0,1,0,0],
      [0,1,0,0],
      [0,1,0,0],
      [0,1,0,0],
    ],
  ],
]
const COLORS = ["cyan", "blue", "orange", "yellow", "green", "purple", "red"]





export async function getStaticProps() {

  let board = BOARD
  console.log(board)
  let nextBlock = BLOCKS[parseInt(Math.random() * (7 - 0) + 0)]
  let currBlock = BLOCKS[/*parseInt(Math.random() * (7 - 0) + 0)*/1]
  let currColor = COLORS[parseInt(Math.random() * (7 - 0) + 0)]
  let nextColor = COLORS[parseInt(Math.random() * (7 - 0) + 0)]
  return {
    props: {
      board,
      nextBlock,
      currBlock,
      currColor,
      nextColor
    }
  }
}

export default function Home(props){
  const [board, setBoard] = useState(props.board)
  const [lines, setLines] = useState(0)
  const [status, setStatus] = useState("start")
  const [currColor, setCurrColor] = useState(props.currColor)
  const [nextColor, setNextColor] = useState(props.nextColor)
  const [currBlock, setCurrBlock] = useState(props.currBlock)
  const [nextBlock, setNextBlock] = useState(props.nextBlock)
  const [blockIndex, setBlockIndex] = useState(0)
  const [rowPosition, setRowPosition] = useState(0)
  const [colPosition, setColPosition] = useState(3)
  const [turnedBlock, setTurnedBlock] = useState(true)

  useEffect(()=>{
    addListener()
  },[])
  const addListener = () => {
    window.interval_right = false
    window.interval_left = false
    window.addEventListener('keydown', (e) => {
      if (e.key === "ArrowRight"){
        document.getElementById("right").click()
      }
      if (e.key === "ArrowLeft"){
        document.getElementById("left").click()
      }
      if (e.key === "ArrowUp"){
        document.getElementById("turn").click()
      }
    })

  }

  const startGame = () => {
    setStatus("playing")
    setLines(0)
    document.getElementById("play").click()
  }


  const Play = async () => {
    if (checkLost() === false){
      document.getElementById("down").click()
      setTimeout(()=>{document.getElementById("play").click()},400)
    }
    else{
      setStatus("lost")
      setBoard(BOARD)
      setCurrBlock(nextBlock)
      setNextBlock(BLOCKS[parseInt(Math.random() * (7 - 0) + 0)])
      setCurrColor(nextColor)
      setNextColor(COLORS[parseInt(Math.random() * (7 - 0) + 0)])
      setRowPosition(0)
      setColPosition(3)
      setTurnedBlock(true)
      setBlockIndex(0)
    }
  }
  const checkLost = () => {
    if (rowPosition === 0){
      for (let i = 0; i < 4; i++){
        for (let y = 0; y < 4; y++){
          if (board[i+rowPosition][y+colPosition].number === 1 && currBlock[blockIndex][i][y] === 1){
            return true
          }
        }
      }    
    }
    return false
  } 

  const turnBlock = () => {
    if (status != "playing"){
      return
    }
    if (turnedBlock){
      return
    }
    let newBoard = JSON.parse(JSON.stringify(board))
    for (let i = 0; i < 4; i++){
      for (let y = 0; y < 4; y++){
        if (currBlock[blockIndex][i][y] === 1){
          if (rowPosition === 0){
            newBoard[i+rowPosition][y+colPosition].number = 0
            newBoard[i+rowPosition][y+colPosition].color = ""
          }else{
            newBoard[i+rowPosition-1][y+colPosition].number = 0
            newBoard[i+rowPosition-1][y+colPosition].color = ""
          }
        }
      }
    }
    for (let i = 0; i < 4; i++){
      for (let y = 0; y < 4; y++){
        if (i+rowPosition <= 0){
          return
        }
        if (i+rowPosition >= 20 || y+colPosition >= 10 || y+colPosition < 0){
            if (currBlock[(blockIndex+1)%4][i][y] === 1){
              return
            }
            continue
        }
        if (newBoard[i+rowPosition][y+colPosition].number === 1 && currBlock[(blockIndex+1)%4][i][y] === 1){
          return
        }
        if (currBlock[(blockIndex+1)%4][i][y] === 1){
          newBoard[i+rowPosition][y+colPosition].number = 1
          newBoard[i+rowPosition][y+colPosition].color = currColor
        }
      }
    }
    setBoard(newBoard)
    setBlockIndex((blockIndex+1)%4)
    setTurnedBlock(true)
  }

  const moveLeft = () => {
    if (status != "playing"){
      return
    }
    let free = 0
    for (let y = 0; y < 4; y++){
      let check = false
      for (let i = 0; i < 4; i++){
        if (currBlock[blockIndex][i][y] === 1){
          check = true
        }
      }
      if (check){
        break
      }
      free += 1
    }
    if (colPosition <= 0-free){
      return
    }
    let newBoard = JSON.parse(JSON.stringify(board))
    for (let i = 0; i < 4; i++){
      for (let y = 0; y < 4; y++){

        if (currBlock[blockIndex][i][y] === 1){
          if (rowPosition === 0){
            newBoard[i+rowPosition][y+colPosition].number = 0
            newBoard[i+rowPosition][y+colPosition].color = ""
          }else{
            newBoard[i+rowPosition-1][y+colPosition].number = 0
            newBoard[i+rowPosition-1][y+colPosition].color = ""
          }
        }
      }
    }
    for (let i = 0; i < 4; i++){
      for (let y = 0; y < 4; y++){
        if (i+rowPosition-1 < 0){
          return
        }
        if (i+rowPosition-1 >= 20  || y+colPosition-1 >= 10 || y+colPosition-1 < 0){
          continue
        }
        if (newBoard[i+rowPosition-1][y+colPosition-1].number === 1 && currBlock[blockIndex][i][y] === 1){
          return
        }
        if (currBlock[blockIndex][i][y] === 1){
          newBoard[i+rowPosition-1][y+colPosition-1].number = 1
          newBoard[i+rowPosition-1][y+colPosition-1].color = currColor
        }
      }
    }
    setBoard(newBoard)
    setColPosition(colPosition-1)
    
  }

  const moveRight = () => {
    if (status != "playing"){
      return
    }
    let free = 4 
    for (let y = 3; y >= 0; y--){
      let check = false
      for (let i = 0; i < 4; i++){
        if (currBlock[blockIndex][i][y] === 1){
          check = true
        }
      }
      if (check){
        break
      }
      free -= 1
    }
    if (colPosition >= 10-free){
      return
    }
    let newBoard = JSON.parse(JSON.stringify(board))
    for (let i = 0; i < 4; i++){
      for (let y = 0; y < 4; y++){

        if (currBlock[blockIndex][i][y] === 1){
          if (rowPosition === 0){
            newBoard[i+rowPosition][y+colPosition].number = 0
            newBoard[i+rowPosition][y+colPosition].color = ""
          }else{
            newBoard[i+rowPosition-1][y+colPosition].number = 0
            newBoard[i+rowPosition-1][y+colPosition].color = ""
          }
        }
      }
    }
    for (let i = 0; i < 4; i++){
      for (let y = 0; y < 4; y++){
        if (i+rowPosition-1 < 0){
          return
        }
        if (i+rowPosition-1 >= 20  || y+colPosition+1 >= 10 || y+colPosition+1 < 0){
          continue
        }
        if (newBoard[i+rowPosition-1][y+colPosition+1].number === 1 && currBlock[blockIndex][i][y] === 1){
          return
        }
        if (currBlock[blockIndex][i][y] === 1){
          newBoard[i+rowPosition-1][y+colPosition+1].number = 1
          newBoard[i+rowPosition-1][y+colPosition+1].color = currColor
        }
      }
    }
    setBoard(newBoard)
    setColPosition(colPosition+1)
  

  }

  const moveDown = () => {
    if (status != "playing"){
      return
    }
    setTurnedBlock(false)
    if (window.interval_right != false || window.interval_left != false){
      return
    }
    let i = 3
    while (currBlock[blockIndex][i].includes(1) === false){
      i -= 1
    }
    if (rowPosition === 20-i){
      let free = []
          let newBoard = JSON.parse(JSON.stringify(board))
          for (let i = 0; i < 20; i++){
            let check = true
            for (let y = 0; y < 10; y++){
              if (newBoard[i][y].number === 0){
                check = false
                break
              }
            }
            if (check === true){
              free.push(i)
            }
          }
      for (let i = 0; i < free.length; i++){
        newBoard.splice(free[i], 1)
        newBoard.splice(0,0,[{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}])
      }
      setLines(lines+free.length)
      setBoard(newBoard)
      setCurrBlock(nextBlock)
      setNextBlock(BLOCKS[parseInt(Math.random() * (7 - 0) + 0)])
      setCurrColor(nextColor)
      setNextColor(COLORS[parseInt(Math.random() * (7 - 0) + 0)])
      setRowPosition(0)
      setColPosition(3)
      setTurnedBlock(false)
      setBlockIndex(0)
      return
    }
    let newBoard = JSON.parse(JSON.stringify(board))
    if (rowPosition > 0){
      for (let i = 0; i < 4; i++){
        for (let y = 0; y < 4; y++){
          if (i+rowPosition-1 > 20 || y+colPosition >= 10 || y+colPosition < 0){
            continue
          }
          if (currBlock[blockIndex][i][y] === 1){
            if (turnedBlock){
              newBoard[i+rowPosition][y+colPosition].number = 0
              newBoard[i+rowPosition][y+colPosition].color = ""
            }else{
              newBoard[i+rowPosition-1][y+colPosition].number = 0
              newBoard[i+rowPosition-1][y+colPosition].color = ""
            }
          }
          
        }
      }
    }
    for (let i = 0; i < 4; i++){
      for (let y = 0; y < 4; y++){
        if (i+rowPosition >= 20 || y+colPosition >= 10 || y+colPosition < 0){
          continue
        }
        if (newBoard[i+rowPosition][y+colPosition].number === 1 && currBlock[blockIndex][i][y] === 1){
          let free = []
          let newBoard = JSON.parse(JSON.stringify(board))
          for (let i = 0; i < 20; i++){
            let check = true
            for (let y = 0; y < 10; y++){
              if (newBoard[i][y].number === 0){
                check = false
                break
              }
            }
            if (check === true){
              free.push(i)
            }
          }
          for (let i = 0; i < free.length; i++){
            newBoard.splice(free[i], 1)
            newBoard.splice(0,0,[{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""},{number: 0, color:""}])
          }
          setLines(lines+free.length)
          setBoard(newBoard)
          setCurrBlock(nextBlock)
          setNextBlock(BLOCKS[parseInt(Math.random() * (7 - 0) + 0)])
          setCurrColor(nextColor)
          setNextColor(COLORS[parseInt(Math.random() * (7 - 0) + 0)])
          setRowPosition(0)
          setColPosition(3)
          setTurnedBlock(false)
          setBlockIndex(0)
          return
        }
        if (currBlock[blockIndex][i][y] === 1){
          newBoard[i+rowPosition][y+colPosition].number = 1
          newBoard[i+rowPosition][y+colPosition].color = currColor
        }
      }
    }
    setBoard(newBoard)
    setRowPosition(rowPosition+1)
    setTurnedBlock(false)

  }

  return (
    <>
      <h1>Tetris</h1>
      <h2>Lines: {lines}</h2>
      <div>
        {status != "playing" && <button onClick={()=>{startGame()}}>Start</button>}
        {status === "lost" && <h1>You Lost</h1>}
      </div>
      {status === "playing" && 
      <div className={"grid-next"}>
        {nextBlock[0].map((row, i) => row.map((e, y) => nextBlock[0][i][y] === 1 && <div key={`${i}/${y}`} className={`cell ${nextColor}`}></div> || <div key={`${i}/${y}`} className={"cell"}></div>))}
      </div>
      }
      <div className={"grid"}>
        {board.map((row, i) => row.map((e, y) => board[i][y].number === 1 && <div key={`${i}/${y}`} className={`cell ${board[i][y].color}`}></div> || <div key={`${i}/${y}`} className={"cell"}></div>))}
      </div>
      <div>
        <button id={"left"} className={"not-visible"} onClick={()=>{moveLeft()}}></button>
        <button id={"right"} className={"not-visible"} onClick={()=>{moveRight()}}></button>
        <button id={"down"} className={"not-visible"} onClick={()=>{moveDown()}}></button>
        <button id={"play"} className={"not-visible"} onClick={()=>{Play()}}></button>
        <button id={"turn"} className={"not-visible"} onClick={()=>{turnBlock()}}></button>
      </div>
      <h3>Dont press left, right or up a the same time</h3>
    </>
  )
}
