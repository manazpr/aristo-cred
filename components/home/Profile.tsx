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

  const { profile } = data;
  console.log(data);
  return (
<div> <br /><h5>First Name</h5>
<h5>Last Name</h5>
<h5>Email </h5>
<h5>Trust Score</h5>
<h5>Coins</h5>

  </div>
  );
};

export default Profile;
