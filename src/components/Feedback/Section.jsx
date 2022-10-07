import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export const Section = ({ title, children }) => {
    return (
        <div className={css.titleBox} >
            <h2>{title}</h2>
            {children}
        </div>
    )
}

Section.protoTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};