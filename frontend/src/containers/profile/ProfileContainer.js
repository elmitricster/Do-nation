import { ProfileHeader } from 'components/profile/ProfileHeader';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiInstance } from 'api'

export function ProfileConatiner() {
  const [profileInfo, setProfileInfo] = useState();
  const navigate = useNavigate();
  const api = apiInstance();
  const params = useParams();

  useEffect(() => {
    const getProfileInfo = async () => {
      const response = await api.get(`/search?mode=nickname&searchKeyword=${params.nickname}`);
      return response.data
    }

    getProfileInfo()
      .then((datas) => {
        datas.map((data) => {
          if (data.nickname === params.nickname) {
            setProfileInfo(data)
            console.log(data)
          } else {
            navigate('/')
          }
        })
      })
  }, []);

  return (
    <div className="container">
      <ProfileHeader profileInfo={profileInfo}/>
      <Outlet context={profileInfo}/>
    </div>
  );
}
