/* eslint-disable react/jsx-no-undef */
import Header from'./components/header.jsx';
import ContainerWaiter from './components/ContainerWaiter.js';
import OrderSheet from './components/orderSheet.js';
import style from './App.module.css';

function App() {
  return (
    <div>
      <Header></Header>
      <div className = {style.container}>
      <ContainerWaiter></ContainerWaiter>
      <OrderSheet></OrderSheet>
      </div>
    </div>
  );
}

export default App;
