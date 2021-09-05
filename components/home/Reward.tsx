
import React from "react";
import CredAPI from "../../lib/api/user";
import SendSol from "lib/utils/SendSol";
import SendNFT from "lib/utils/SendNFT";
import Router from "next/router";
import { Button } from "../buttons/SynthButton.style";


const Rewards = () => {
if (typeof window === "undefined") return {};

  const [isLoading, setLoading] = React.useState(false);

  const handleSendSol = async (event, data) => {
    const coins = event.target.value;   
     try{ 
        const { data } = await CredAPI.burn(coins);
       if (data?.success === true) {
        await SendSol();
        Router.push("/");
        }
      } catch (error) {
        console.error(error);
      }

  };

  const handleSendNFT = async (event, data) => {
    const coins = event.target.value;
     try{      
       const { data } = await CredAPI.burn(coins);
       if (data?.success === true) {
        await SendNFT();
        Router.push("/");
        }
      } catch (error) {
        console.error(error);
      }

  };

  return (
    <>
  
          <Button id="sendSol" 
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            onClick={(event) => handleSendSol(event, '1000')} value ='1000'>
            Burn 10,000 Coins
          </Button>
          
          <Button id="sendNFT" 
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            onClick={(event) => handleSendNFT(event, '2000')} value ='2000'>
            Burn 25,000 CRED Coins
          </Button>
        
    </>
  );
};

export default Rewards;