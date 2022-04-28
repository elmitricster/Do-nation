import { Route, Routes } from 'react-router-dom';
import { HomeContainer } from './containers/home/HomeContainer';
import { LoginConatiner } from './containers/user/LoginConatiner';
import { AuthContainer } from './containers/user/AuthContainer';
import { SignupContainer } from './containers/user/SignupContainer';
import { GuideContainer } from './containers/guide/GuideContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>
        <Route path="/user/login" element={<LoginConatiner />}></Route>
        <Route path="/user/kakao/callback" element={<AuthContainer />}></Route>
        <Route path="/user/signup" element={<SignupContainer />}></Route>
        <Route path="/guide" element={<GuideContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;