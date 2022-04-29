import { ProfileHeader } from 'components/profile/ProfileHeader';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function ProfileConatiner() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    navigate(`/profile/${params.nickname}/articles`);
  }, []);

  return (
    <div className="container">
      <ProfileHeader />
      <Outlet />
    </div>
  );
}
