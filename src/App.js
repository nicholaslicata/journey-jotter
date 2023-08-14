import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {

  const [page, setPage] = useState('login');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="App">
      {page === 'login' && <Login page={page} setPage={setPage} error={error} setError={setError} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
      {page === 'register' && <Register page={page} setPage={setPage} error={error} setError={setError} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
      {page === 'home' && <Home />}
    </div>
  );
}

export default App;
