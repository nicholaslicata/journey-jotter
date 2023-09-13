import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {

  const [userId, setUserId] = useState();
  const [page, setPage] = useState('login');
  const [subPage, setSubPage] = useState('list');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [list, setList] = useState([]);

  return (
    <div className="App">
      {page === 'login' && <Login page={page} setPage={setPage} error={error} setError={setError} errorMessage={errorMessage} setErrorMessage={setErrorMessage} setUserId={setUserId} />}
      {page === 'register' && <Register page={page} setPage={setPage} error={error} setError={setError} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
      {page === 'home' && <Home setPage={setPage} subPage={subPage} setSubPage={setSubPage} list={list} setList={setList} userId={userId} />}
    </div>
  );
}

export default App;
