import './Message.css'

function Message(props) {
    const propsBool = true;
    return (
        <div>
            <p className={"Monkeyfact"} style={{color: (props.text.length < 100) ? 'red' : 'green'}}>{props.text} </p>
        </div>
    );
}

export default Message;