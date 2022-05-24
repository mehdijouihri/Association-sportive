import ArrowSvg from '../../assets/icons/red-arrow.svg';
import '../RedArrow/RedArrow.css'

const RedArrow = (props) => {
    return (
        <button className='red_arrow'><img src={ArrowSvg} /></button>
    );
};

export default RedArrow;
