import { Route, Routes } from 'react-router-dom';
import { HomeContainer } from './containers/home/HomeContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
