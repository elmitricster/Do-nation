import { ProfileHeader } from 'components/profile/ProfileHeader';
import { Outlet } from 'react-router-dom';

export function ProfileConatiner() {
  return (
    <div className="container">
      <ProfileHeader />
      <Outlet />
    </div>
  );
}
