import './msg-option.styles.css';

const MsgOption = ({ msg, order, index, options, setOptions }) => {
  const handleClick = (e) => {
    const userAnswer = e.currentTarget.querySelector('p').textContent;
    const pushOption = (arr) => {
      setOptions([...options, userAnswer, arr]);
    };
    // console.log(options[index]);
    // console.log('Order: ', order);
    // console.log(e.currentTarget.querySelector('p').textContent);
    // console.log(options);


    if (options[index][0] === 2) {
      // LAST STEP
      if (order === 0) {
        // Main menu
        pushOption([0]);
      } else {
        // Go back
        pushOption(options[index - 2]);
      }
    } else {
        //FIRST OR SECOND STEP 
      pushOption([options[index][0] + 1, order]);
    }
  };

  if (index === options.length - 1) {
    return (
      <div className="msg-option clickable" onClick={handleClick}>
        <p className="msg-option-text">{msg}</p>
      </div>
    );
  }
  return (
    <div className="msg-option">
      <p className="msg-option-text">{msg}</p>
    </div>
  );
};

export default MsgOption;
