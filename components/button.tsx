declare interface ButtonProps {
    title: string,
    type: ButtonType
}

export enum ButtonType {
    primary = 'btn-primary',
    secondary = 'btn-secondary',
    success = 'btn-success',
    danger = 'btn-danger',
}

const Button = ({ title, type }: ButtonProps) => {
    return (
        <button type={"button"} className={`btn ${type}`}>{title}</button>
    );
}

export default Button;
