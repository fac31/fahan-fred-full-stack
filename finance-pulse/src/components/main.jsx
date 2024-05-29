import '../index.css';
import ChatContainer from './ChatContainer';
import NewsContainer from './NewsContainer';

function Main() {
  return (
    <main>
      <div id="chat-container">
        <ChatContainer />
      </div>
      <div className="cards-container">
        <NewsContainer />
      </div>
    </main>
  );
}

export default Main;