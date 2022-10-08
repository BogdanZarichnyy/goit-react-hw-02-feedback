import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.buttonBox}>
            {Object.keys(options).map(item => 
                <button className={css.button} key={item} onClick={onLeaveFeedback} type="button">{item}</button>
            )}
        </div>
    )
}

FeedbackOptions.FeedbackOptions = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
};