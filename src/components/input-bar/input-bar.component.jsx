import './input-bar.styles.css';

const InputBar = () => {
  return (
    <div className="input-container">
      <form action="">
        <input
          placeholder="Please pick an option."
          className="chatbot-input"
          type="text"
          disabled
        />
        <button className="send-btn" disabled>
          &#9992;
        </button>
      </form>
    </div>
  );
};

export default InputBar;
