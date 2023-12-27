import { useDispatch, useSelector } from "react-redux";

function State() {

    const dispatch = useDispatch()

    const number = useSelector(state => state)

    const handlerSubmit =() =>{
        dispatch({
            type: 'PLUS'
        })
    }
    const handlerMinus =() =>{
        dispatch({
            type: 'MINUS'
        })
    }
    return (
        <div className="container">
            {number}
            <button onClick={handlerSubmit}>+</button>
            <button onClick={handlerMinus}>-</button>
        </div>
    );
  }
  
export default State;