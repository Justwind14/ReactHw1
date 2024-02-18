import './Message.css'

function Message(props) {
    return (
        <div>
            <p className={"Monkeyfact"} style={{color: (props.text.length < 100) ? 'red' : 'green'}}>{props.text} </p>
        </div>
    );
}

export default Message;