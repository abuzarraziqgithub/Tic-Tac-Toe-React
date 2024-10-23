const initialGameBoard =
[
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard()
{
    return(
        <ol id="game-board">
            {/* Extracting the Row Arrays */}
            {initialGameBoard.map((row, rowIndex)=>
            (
                <li key={rowIndex}>
                    <ol>
                        {/* Extracting the Column(Row arrays elements) */}
                        {row.map((playerSymbol, colIndex)=>
                        (
                            <li key={colIndex}>
                                <button>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}
