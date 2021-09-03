
import React, {useMemo} from "react";
import { mutate } from "swr";

import ListErrors from "../common/ListErrors";
import CredAPI from "../../lib/api/user";
import SendSol from "lib/utils/web3";
import Router from "next/router";




const Rewards = () => {
  const [isLoading, setLoading] = React.useState(false);
  

  const handleSendSol = async () => {
      await SendSol();
     try{
       const { data } = await CredAPI.burn();
       if (data?.success === true) {
        Router.push("/");
        }
      } catch (error) {
        console.error(error);
      }

  };

  return (
    <>

      <input type="hidden" name="action" value="submit" />
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            onClick={handleSendSol}
            disabled={isLoading}
          
         
          >
            Burn 10,000 Coins
          </button>
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            value="25000"
            disabled={isLoading}
            onClick={handleSendSol}
          >
            Burn 25,000 CRED Coins
          </button>
    </>
  );
};

export default Rewards;