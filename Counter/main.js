state = 0
const useState = () => {
    function setState(props) {
        state = props
        counter.textContent = state
        if(state > 0) {
            image.style.filter = `blur(${state}px)`
        }
        else {
            image.style.filter = "none"
        }
    }
    return {
        setState
    }
}

const { setState } = useState()

const btn_increment = document.querySelector('.btn_increment')
const btn_reset = document.querySelector('.btn_reset')
const btn_decrement = document.querySelector('.btn_decrement')
const counter = document.querySelector('.counter')
const image = document.getElementById('image')

btn_increment.addEventListener('click', () => setState(state + 1))
btn_reset.addEventListener('click', () => setState(0))
btn_decrement.addEventListener('click', () => setState(state - 1))
