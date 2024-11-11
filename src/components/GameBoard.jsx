import { useState } from "react"

const initialGameBoard =
[
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard({onSelectSquare})
{
   const [gameBoard, setGameBoard] = useState(initialGameBoard)

   function handleSelectSquare(rowIndex, colIndex)
   {
    setGameBoard((prevGameBoard)=>
    {
        // We created a new array.
        //  Spread operator is used to create a new array of arrays
        //  The inner arrays are also copied using the spread operator
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedBoard[rowIndex][colIndex]= 'X'
        return updatedBoard;
    })
    // onSelectSquare()
   }


    return(
        <ol id="game-board">
            {/* Extracting the Row Arrays */}
            {gameBoard.map((row, rowIndex)=>
            (
                <li key={rowIndex}>
                    <ol>
                        {/* Extracting the Column(Row arrays elements) */}
                        {row.map((playerSymbol, colIndex)=>
                        (
                            <li key={colIndex}>
                                <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}
