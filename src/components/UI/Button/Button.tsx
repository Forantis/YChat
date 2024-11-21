import React from 'react';
import './Button.scss';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;