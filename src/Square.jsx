import { useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Square({ index, onclick, appear}) {
  let [appear1, setAppear] = useState("disappearance");
  let showCell = () => {
    setAppear("appearance");
    if(index==-1){
        window.alert("You lose");
        location.reload();
    }
  };
  return (
    <div style={{ display: "inline-block" }} onClick={onclick&&showCell}>
      <button className={appear1}>
        {index}
      </button>
    </div>
  );
}

export default Square;
