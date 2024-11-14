// Imports nécessaires et styles
import "./Modal.scss";

// Props du composant
interface ModalProps {
    show: boolean;
    setShow: (show: boolean) => void;
    children: React.ReactNode;
}

interface ModalChildrenProps {
    children: React.ReactNode;
}

// Composant Modal
const Modal: React.FC<ModalProps> = (props) => {
    return (
        <div className={`modal ${props.show ? 'active' : ''}`}>
            <div className="modal__content">
                <span className="modal__close" onClick={() => props.setShow(false)}>
                    &times;
                </span>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;

// Composants enfants
export const ModalHeader: React.FC<ModalChildrenProps> = (props) => {
    return (
        <div className="modal__header">
            {props.children}
        </div>
    );
}

export const ModalBody: React.FC<ModalChildrenProps> = (props) => {
    return (
        <div className="modal__body">
            {props.children}
        </div>
    );
}

export const ModalFooter: React.FC<ModalChildrenProps> = (props) => {
    return (
        <div className="modal__footer">
            {props.children}
        </div>
    );
}

