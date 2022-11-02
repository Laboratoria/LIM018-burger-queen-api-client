import './styles/App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Chef from './pages/Chef';
import NotFoundPage from './components/NotFoundPage';
import ProfileUser from './pages/ProfileUser';

// import Swal from 'sweetalert2';
// import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   showAlert();
  // }, [])

  // const showAlert = () => {
  //   Swal.fire("Mensaje de error")
  // }
 
  return (
    <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/profile' element={<ProfileUser/>} />
          <Route path='/chef' element={<Chef/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>

    </BrowserRouter>

  );
}

export default App;


