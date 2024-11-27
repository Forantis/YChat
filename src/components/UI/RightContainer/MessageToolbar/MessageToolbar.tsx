import './styles.scss'

export default function MessageToolbar() {
    return (
        <div className="message-toolbar">
            <button className="message-toolbar__button">
                <img src="/images/icons/attach.svg" alt="Attach file" />
            </button>
            <input type="text" className="message-toolbar__input" placeholder="Type a message" />
            <button className="message-toolbar__button">
                <img src="/images/icons/mic.svg" alt="Record voice message" />
            </button>
        </div>
    );
}