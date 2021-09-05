
import React from "react";
import CredAPI from "../../lib/api/user";
import SendSol from "lib/utils/SendSol";
import SendNFT from "lib/utils/SendNFT";

import Router from "next/router";



const Rewards = () => {
if (typeof window === "undefined") return {};

  const [isLoading, setLoading] = React.useState(false);

  const handleSendSol = async (event, data) => {
    const coins = event.target.value;
    console.log(coins);
  
    await SendSol();
     try{ 
       
       const { data } = await CredAPI.burn(coins);
       if (data?.success === true) {
        Router.push("/");
        }
      } catch (error) {
        console.error(error);
      }

  };

  const handleSendNFT = async (event, data) => {
    const coins = event.target.value;
    console.log(coins);
    await SendNFT();
     try{ 
       
       const { data } = await CredAPI.burn(coins);
       if (data?.success === true) {
        Router.push("/");
        }
      } catch (error) {
        console.error(error);
      }

  };

  return (
    <>

     
          <button id="sendSol" 
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            onClick={(event) => handleSendSol(event, '1000')} value ='CRED Coins'>
        
          
            Burn 10,000 Coins
          </button>
          <button id="sendNFT" 
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            onClick={(event) => handleSendNFT(event, '2000')} value ='CRED Coins'>
            Burn 25,000 CRED Coins
          </button>
        
    </>
  );
};

export default Rewards;