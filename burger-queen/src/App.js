// import logo from './logo.svg';
import './App.css';
import Login from './Login.jsx';
import Modal from './Modal';

function App() {
  
  return (
    <div className="App">
      
      <Login/>
      <Modal>
          <p> Error desde children </p>
      </Modal>
    </div>
  );
}

export default App;
