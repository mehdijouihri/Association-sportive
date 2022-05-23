import '../ButtonSecondary/ButtonSecondary.css'

const ButtonSecondary = (props) => {
    return (
        <a href={props.href} className="button_secondary">{props.value}</a>
    );
};

export default ButtonSecondary;