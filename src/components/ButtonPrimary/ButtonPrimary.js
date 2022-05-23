import '../ButtonPrimary/ButtonPrimary.css'

const ButtonPrimary = (props) => {
    return (
        <a href={props.href} className="button_primary">{props.value}</a>
    );
};

export default ButtonPrimary;