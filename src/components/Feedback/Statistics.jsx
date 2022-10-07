import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <>
            <p>Cood: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total()}</p>
            <p>Positive feedbacks: {percentage()}%</p>
        </>
    )
}

Statistics.protoTypes = {
    good: PropTypes.string,
    neutral: PropTypes.string,
    bad: PropTypes.string,
    total: PropTypes.func,
    percentage: PropTypes.func,
};