declare interface AlertProps {
    message: string,
    type: AlertType
}

export enum AlertType {
    success = 'alert-success',
    danger = 'alert-danger',
    warning = 'alert-warning',
    info = 'alert-info',
}

const Alert = ({ message, type }: AlertProps) => {
    return (
        <div className={`alert ${type}`} role={"alert"}>
            {message}
        </div>
    );
}

export default Alert;