
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import User from './Pages/User';
import EditUser from './Pages/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/edituser' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
