import reversImg from '../../assets/images/Group 4.png'
import minusImg from '../../assets/images/Group 3.png'
import plusImg from '../../assets/images/Group 2.png'

function Buttons({counter, setCounter}) {

    const plus = () => {
        setCounter(counter + 3)
    }
    const revers = () => {
        setCounter(0)
    }
    const minus = () => {
        if (counter > 0) {
            if (counter === 1) {
                setCounter(counter - 1)
            } else {
                setCounter(counter - 2)
            }
        }
    }

    return(
        <div className="buttons">
            <div className={"plus"}  onClick={plus}>
                <img src={plusImg} alt=""/>
            </div>
            <div className="revers" onClick={revers}>
                <img src={reversImg} alt="" />
            </div>
            <div className="minus" onClick={minus}>
                <img src={minusImg} alt="" />
            </div>
        </div>
    )
}

export default Buttons;