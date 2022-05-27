import './CardActu.css';

const CardActu = (props) => {
    return (
        <article className="card_actu" key={props.key}>
            <img src={props.img} alt="" />
            <div className="actu_details">
                <p className="actu_category">{props.category}</p>
                <p className="actu_date">{props.date}</p>
            </div>
            <h2>{props.title}</h2>
        </article>
    );
};

export default CardActu;