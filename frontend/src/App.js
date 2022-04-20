import './App.css'
import { Route, Routes } from 'react-router-dom';
import { HomeContainer } from './containers/home/HomeContainer';
import { WithdrawConatiner } from './containers/withdraw/WithdrawContainer';
import { WithdrawDetailsContainers } from './containers/withdraw/WithdrawDetailsContainer';
import { NotFound } from './common/notfound/NotFound';
import { Navigation } from './common/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>

        <Route path="withdraw" element={<WithdrawConatiner />}></Route>
        <Route path="withdraw/details" element={<WithdrawDetailsContainers />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
