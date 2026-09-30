import PropTypes from "prop-types";

const Toast = ({ message }) => {
  if (!message) {
    return null;
  }

  return <div className="toast">{message}</div>;
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Toast;
