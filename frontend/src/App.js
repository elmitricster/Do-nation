import { Route, Routes } from 'react-router-dom';
import { HomeContainer } from './containers/home/HomeContainer';
import { LoginConatiner } from './containers/user/LoginConatiner';
import { AuthContainer } from './containers/user/AuthContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>
        <Route path="/user/login" element={<LoginConatiner />}></Route>
        <Route path="/user/kakao/callback" element={<AuthContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
