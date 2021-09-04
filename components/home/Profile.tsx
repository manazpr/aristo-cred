import React from "react";

import LoadingSpinner from "../common/LoadingSpinner";
import useSWR from "swr";
import { SERVER_BASE_URL } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";
import ErrorMessage from "../common/ErrorMessage";
import Maybe from "components/common/Maybe";
import checkLogin from "lib/utils/checkLogin";
import storage from "lib/utils/storage";

const Profile = () => { 
  const { data, error } = useSWR(`${SERVER_BASE_URL}/profile`, fetcher);
  if (error) return <ErrorMessage message="Sign in to CRED" />;
  if (!data) return <LoadingSpinner />;
  const profile = data;

  return (  
<div> <br /><h5>first Name - {profile.first_name}</h5>
<h5>last name - {profile.last_name}</h5>
<h5>email - {profile.email} </h5>
<h5>phone - {profile.phone} </h5>
<h5>trust score - {profile.trust_score}</h5>
<h5>coins - {profile.coins}</h5>
</div>


  );
};

export default Profile;
