import React from "react";

export default function Button2({
  onClick
}) {
  return (
    <button
      onClick={onClick}
    >
      Hello2
      {/* {<img style={{
         flex: 1,
         width: 200,
         height: 300,
         resizeMode: 'contain'
         }} alt="Hunter" src="https://i.pinimg.com/originals/04/91/4f/04914f739d2a3cbfd2dc958eabe7e886.png"></img>} */}
    </button>
  );
}
