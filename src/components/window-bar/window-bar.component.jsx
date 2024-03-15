import './window-bar.styles.css';
import botIconWhite from '../../assets/bot-icon-white.png';

const WindowBar = () => {
  return (
    <div className="window-bar">
        <img src={botIconWhite} alt="bot-icon" />
      <p>LSEG chatbot</p>
    </div>
  );
};

export default WindowBar;
