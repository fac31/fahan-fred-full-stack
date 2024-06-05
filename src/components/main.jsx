import '../index.css';
import '../theme-overrides.css';
import ChatContainer from './ChatContainer';
import NewsContainer from './newsContainer';

function Main() {
  return (
    <main>
      <ChatContainer />
      <NewsContainer />
    </main>
  );
}

export default Main;