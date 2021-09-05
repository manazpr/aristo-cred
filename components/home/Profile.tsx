import React from "react";

import LoadingSpinner from "../common/LoadingSpinner";
import useSWR from "swr";
import { SERVER_BASE_URL } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";
import ErrorMessage from "../common/ErrorMessage";

const Profile = () => { 
  const { data, error } = useSWR(`${SERVER_BASE_URL}/profile`, fetcher);
  if (error) return <ErrorMessage message="Sign in to CRED" />;
  if (!data) return <LoadingSpinner />;
  const profile = data;

  return (  
<div> <br /><h4>{profile.first_name} {profile.last_name}</h4>
<h5>{profile.email} </h5>
<h5>{profile.phone} </h5>
<div className = "trust score">Trust Score<h5>{profile.trust_score}</h5></div>
<div>CRED Coins<h5>{profile.coins}</h5></div>
</div>


  );
};

export default Profile;
