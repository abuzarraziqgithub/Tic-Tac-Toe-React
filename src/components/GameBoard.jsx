// import { useState } from "react"

const initialGameBoard =
[
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard({onSelectSquare, board})
{
    // let gameBoard = initialGameBoard;

    // for(const turn of turns)
    // {
    //     const { square, player } = turn;
    //     const {row, col } = square;


    //     gameBoard[row][col] = player;
    // }
//    const [gameBoard, setGameBoard] = useState(initialGameBoard)

//    function handleSelectSquare(rowIndex, colIndex)
//    {
//     setGameBoard((prevGameBoard)=>
//     {
         // We created a new array.
         //  Spread operator is used to create a new array of arrays
         //  The inner arrays are also copied using the spread operator
//         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//         updatedBoard[rowIndex][colIndex]= activePlayerSymbol;
//         return updatedBoard;
//     })
//     onSelectSquare()
//    }


    return(
        <ol id="game-board">
            {/* Extracting the Row Arrays */}
            {board.map((row, rowIndex)=>
            (
                <li key={rowIndex}>
                    <ol>
                        {/* Extracting the Column(Row arrays elements) */}
                        {row.map((playerSymbol, colIndex)=>
                        (
                            <li key={colIndex}>
                                <button onClick={()=> onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}
