import { ProfileHeader } from "components/profile/Profile/ProfileHeader";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function ProfileConatiner() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    navigate(`/profile/${params.nickname}/articles`)
  })

  return(
    <div>
      <ProfileHeader />
      <Outlet />
    </div>
  )
}