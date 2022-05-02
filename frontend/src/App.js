import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeContainer } from './containers/home/HomeContainer';
import { LoginConatiner } from './containers/user/LoginConatiner';
import { AuthContainer } from './containers/user/AuthContainer';
import { SignupContainer } from './containers/user/SignupContainer';
import { WithdrawConatiner } from './containers/withdraw/WithdrawContainer';
import { WithdrawDetailsContainers } from './containers/withdraw/WithdrawDetailsContainer';
import { NotFound } from './common/notfound/NotFound';
import { Navigation } from './common/navigation/Navigation';
import { ProfileEditContainer } from 'containers/profile/ProfileEditContainer';
import { ProfileConatiner } from 'containers/profile/ProfileContainer';
import { PaymentContainer } from 'containers/payment/PaymentContainer';
import { PaymentDetailsContainer } from 'containers/payment/PaymentDetailsContainer';
import { ArticlesContainer } from 'containers/profile/ArticlesContainer';
import { DonationListContainer } from 'containers/profile/DonationListContainer';
import { GuideContainer } from './containers/guide/GuideContainer';
import { ArticleContainer } from 'containers/profile/ArticleContainer';
import { ArticleCreateContainer } from 'containers/profile/ArticleCreateContainer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>
        <Route path="/user/login" element={<LoginConatiner />}></Route>
        <Route path="/user/kakao/callback" element={<AuthContainer />}></Route>
        <Route path="/user/signup" element={<SignupContainer />}></Route>

        <Route path="profile/:nickname" element={<ProfileConatiner />}>
          <Route path="articles" element={<ArticlesContainer />} />
          <Route path="donations" element={<DonationListContainer />} />
        </Route>
        <Route path="profile/edit" element={<ProfileEditContainer />} />

        <Route
          path="profile/:nickname/articles/:article_id"
          element={<ArticleContainer />}
        />
        <Route path="articles/create" element={<ArticleCreateContainer />} />

        <Route path="withdraw" element={<WithdrawConatiner />}></Route>
        <Route
          path="withdraw/details"
          element={<WithdrawDetailsContainers />}
        />

        <Route path="payment" element={<PaymentContainer />}></Route>
        <Route path="payment/details" element={<PaymentDetailsContainer />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/guide" element={<GuideContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
