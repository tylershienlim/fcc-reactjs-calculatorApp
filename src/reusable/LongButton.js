import './LongButton.css'

const LongButton = ({children, size="Zero"}) => {
    return (
        <button className={`button${size}`}>
            {children}
        </button>
    )
}

export default LongButton;