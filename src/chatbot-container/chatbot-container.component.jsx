import ChatWindow from '../components/chat-window/chat-window.component';
import './chatbot-container.styles.css';
import InputBar from '../components/input-bar/input-bar.component';
import WindowBar from '../components/window-bar/window-bar.component';

const ChatbotContainer = () => {
  return (
    <div className="chatbot-container">
      <WindowBar />
      <ChatWindow />
      <InputBar />
    </div>
  );
};

export default ChatbotContainer;
