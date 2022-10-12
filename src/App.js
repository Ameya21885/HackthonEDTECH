import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './components/config';
import MessageParser from './components/MessageParser';
import ActionProvider from './components/ActionProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Hello world */}
        <Chatbot 
          config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
      </header>
    </div>
  );
}

export default App;
