import PropTypes from 'prop-types';
import sectionCss from '../assets/css/Section.module.css'

export function SectionInverted(props){
    return (
        <>
            <section className={sectionCss.big_box}>
                <img src={props.img} alt="" className={sectionCss.box_img}/>
                <div className={sectionCss.box}>
                    <h1><strong>{props.strong}</strong> {props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </section>
        </>
    )
}

SectionInverted.propTypes = {
    strong: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    img: PropTypes.string,
};