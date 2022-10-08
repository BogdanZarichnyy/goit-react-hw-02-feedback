import PropTypes from 'prop-types';

export const Notification = ({ title }) => {
    return (
        <>
            <p>{title}</p>
        </>
    )
}

Notification.protoTypes = {
    title: PropTypes.string,
};