import Number from "./number";
import Buttons from "./buttons";
import { useState } from "react";

function MainContent() {

    const [counter, setCounter] = useState(0)

    return(
        <div>
            <Number counter={counter}/>
            <Buttons counter={counter} setCounter= {setCounter}/>
        </div>
    )
}

export default MainContent;