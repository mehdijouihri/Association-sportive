import '../FirstPost/FirstPost.css'
import RedArrow from '../RedArrow/RedArrow'

const FirstPost = (props) => {
   return (
       <section className="firstpost">
           <img src={props.img} alt={props.title} className='firstpost_img'/>
           <div className="firstpost_box">
           <div className="firstpost_details">
               <p>{props.category}</p>
               <h1>{props.title}</h1>
               <RedArrow />
           </div>
           </div>
       </section>
   ) 
}

export default FirstPost;