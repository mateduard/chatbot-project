import answers from '../../answers';
import MsgOption from '../msg-option/msg-option.component';
import botIconBlue from '../../assets/bot-icon-blue.png';
import './message.styles.css';

const Message = ({ msgClass, msg, options, setOptions, index, ...others}) => {
  // msgClass : 'user' OR 'bot'
  if (msg) {
    return (
      <div className={msgClass}>
        <div className={`msg-container ${others.firstMsg && 'first-msg'}`}>
          <p>{msg}</p>
        </div>
      </div>
    );
  }

  if (options[index][0] === 0) {
    return (
      <div className="bot">
        <img src={botIconBlue} alt="bot-icon" className='bot-icon-blue' />
        <div className="msg-container">
          <p>Please select a Stock Exchange.</p>
          <div className="options-container">
            {answers.map((exchange, ind) => (
              <MsgOption
                msg={exchange.stockExchange}
                key={ind}
                order={ind}
                index={index}
                options={options}
                setOptions={setOptions}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (options[index][0] === 1) {
    return (
      <div className="bot">
        <img src={botIconBlue} alt="bot-icon" className='bot-icon-blue' />
        <div className="msg-container">
          <p>Please select a stock.</p>
          <div className="options-container">
            {answers[options[index][1]].topStocks.map((stock, ind) => (
              <MsgOption
                msg={stock.stockName}
                key={ind}
                order={ind}
                index={index}
                options={options}
                setOptions={setOptions}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (options[index][0] === 2) {
    const targetObj =
      answers[options[index - 2][1]].topStocks[options[index][1]];

    return (
      <div className="bot">
        <img src={botIconBlue} alt="bot-icon" className='bot-icon-blue' />
        <div className="msg-container">
          <p>
            Stock Price of {targetObj.stockName} is {targetObj.price}. Please
            select an option.
          </p>
          <div className="options-container">
            <MsgOption
              msg="Main menu"
              order={0}
              index={index}
              options={options}
              setOptions={setOptions}
            />
            <MsgOption
              msg="Go back"
              order={1}
              index={index}
              options={options}
              setOptions={setOptions}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Message;
