import PropTypes from 'prop-types';
import { Btn, WrapBtn } from './FeedbackOptions.steled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapBtn>
      {options.map(option => (
        <Btn
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Btn>
      ))}
    </WrapBtn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
