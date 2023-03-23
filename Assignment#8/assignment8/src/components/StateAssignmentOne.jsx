
import { useState } from "react"
function StateAssignmentOne(){
    const [count, setCount] = useState(0);

    function add() {
        setCount(count + 1);
    }

    return(
        <section>
            <button onClick={add}>{count}</button>
        </section>
    )
}

export default StateAssignmentOne;