import './App.css'
import { Route, Routes } from 'react-router-dom';
import { HomeContainer } from './containers/home/HomeContainer';
import { WithdrawConatiner } from './containers/withdraw/WithdrawContainer';
import { WithdrawDetailsContainers } from './containers/withdraw/WithdrawDetailsContainer';
import { NotFound } from './common/notfound/NotFound';
import { Navigation } from './common/navigation/Navigation';
import { ProfileEditContainer } from 'containers/profile/ProfileEditContainer';
import { ProfileConatiner } from 'containers/profile/ProfileContainer';
import { ArticlesContainer } from 'containers/profile/ArticlesContainer';
import { DonationListContainer } from 'containers/profile/DonationListContainer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>

        <Route path="profile/:nickname" element={<ProfileConatiner />}>
          <Route path="articles" element={<ArticlesContainer />} />
          <Route path="donations" element={<DonationListContainer />} />
        </Route>
        <Route path="profile/edit" element={<ProfileEditContainer />} />

        <Route path="withdraw" element={<WithdrawConatiner />}></Route>
        <Route path="withdraw/details" element={<WithdrawDetailsContainers />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
