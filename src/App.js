import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {

  const [page, setPage] = useState('login');

  return (
    <div className="App">
      {page === 'login' && <Login page={page} setPage={setPage} />}
      {page === 'register' && <Register page={page} setPage={setPage} />}
      {page === 'home' && <Home />}
    </div>
  );
}

export default App;
