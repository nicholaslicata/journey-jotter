import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const [page, setPage] = useState('login');

  return (
    <div className="App">
      {page === 'login' && <Login page={page} setPage={setPage} />}
      {page === 'register' && <Register page={page} setPage={setPage} />}
    </div>
  );
}

export default App;
