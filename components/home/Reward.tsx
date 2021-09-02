
import React from "react";
import { mutate } from "swr";

import ListErrors from "../common/ListErrors";
import CredAPI from "../../lib/api/user";

const Rewards = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [coins, setCoins ] = React.useState([]);
  

  
  const handleSubmit = async (e) => {
    setLoading(true);

    try {
      const { data, status } = await CredAPI.burn(coins);
      if (data?.success == true) {
        console.log(JSON.stringify(data));
        }

      if (status !== 200 && data?.errors) {
        setErrors(data.errors);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ListErrors errors={errors} />

      <input type="hidden" name="action" value="submit" />
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            value={coins}
            disabled={isLoading}
          
         
          >
            Burn 10,000 Coins
          </button>
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            value="25000"
            disabled={isLoading}
          >
            Burn 25,000 CRED Coins
          </button>
    </>
  );
};

export default Rewards;