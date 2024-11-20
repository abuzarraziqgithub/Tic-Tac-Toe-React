import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {

    setIsEditing((editing) => !editing)
    // setIsEditing(!isEditing);
    // setIsEditing((prevIsEditing) => !prevIsEditing);

    if (isEditing)
    {
      onChangeName(symbol, playerName)
    }
  }


  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let buttonCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      //? Two way binding is done here by setting the value of the input field to the playerName and then updating the playerName with the onChange event handler which is triggered when the input field value is changed. 
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // buttonCaption = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
