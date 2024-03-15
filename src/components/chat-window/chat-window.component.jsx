import Message from '../message/message.component';
import './chat-window.styles.css';
import answers from '../../answers';
import { useEffect, useState, useRef } from 'react';

const ChatWindow = () => {
  const [options, setOptions] = useState([[0]]);

  const containerRef = useRef(null);
  useEffect(() => {
    // Scroll to the bottom of the container when "options" state is changed (the component re-renders)
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [options]);

  if (!answers) {
    return <h2>{`Sorry! Bot not available this time. :'(`}</h2>;
  }

  return (
    <div className="chat-window" ref={containerRef}>
      <Message
        msgClass="bot"
        msg="Hello! Welcome to LSEG. I&#39;m here to help you!"
        firstMsg={1}
      />
      {options.map((option, ind) =>
        typeof option === 'string' ? (
          <Message
            msgClass="user" // index par => msj de la bot. Primul mesaj de la bot este static.
            msg={option}
            options={options}
            setOptions={setOptions}
            index={ind}
            key={ind}
          />
        ) : (
          <Message
            msgClass="bot"
            options={options}
            setOptions={setOptions}
            index={ind}
            key={ind}
          />
        )
      )}
    </div>
  );
};

export default ChatWindow;
