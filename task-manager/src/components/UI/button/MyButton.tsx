import { type FC, type ButtonHTMLAttributes } from 'react';
import classes from './MyButton.module.css';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type: 'submit' | 'button';
    buttonText: string;
    onClick?: () => void
}

export const MyButton: FC<MyButtonProps> = ({type, buttonText, onClick, ...props}) => {
    return (
        <button 
            type={type} 
            className={classes.button}
            onClick={onClick}>
                {buttonText}
        </button>
    );
};

// export default MyButton;