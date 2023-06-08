
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import User from './Pages/User';
import EditUser from './Pages/EditUser';
import List from './Pages/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/edituser/:id' element={<EditUser />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
