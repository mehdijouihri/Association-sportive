import ArrowSvg from '../../assets/icons/arrow.svg';
import '../CircleArrow/CircleArrow.css'

const CircleArrow = (props) => {
    return (
        <button className='circle_arrow'><img src={ArrowSvg} /></button>
    );
};

export default CircleArrow;
