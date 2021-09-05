import React, { FC } from 'react';
import styled from "@emotion/styled";
import Head from "next/head";
import Profile from "components/home/Profile";
import dynamic from 'next/dynamic';
import SendReward from 'components/home/SendReward';


const WalletConnect = dynamic(
  () => import('../components/home/ConnectWallet'),
  {ssr: false }
)

const Rewards = dynamic(
  () => import('../components/home/Reward'),
  {ssr: false }
)





const IndexPageContainer = styled("div")`
background: #212426;
font-face: Gilroy-Bold;
`;

const IndexPagePresenter = styled("div")`
  margin: 1.5rem auto 0;
  font-face: Gilroy-Bold;
  padding: 45px 45px; 
  background: #212426;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MainContent = styled("div")`
  font-face: Gilroy-Bold;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px
`;

const ConnectWalletContainer = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
padding: 80px 100px; 
width: 630px;
height: 300px;
background: #212426;
box-shadow: inset -6px -6px 12px rgba(255, 255, 255, 0.08), inset 6px 6px 12px rgba(0, 0, 0, 0.18);
border-radius: 32px;  
margin-bottom: 30px       
  }
`;

const ConnectWalletPresenter = styled("div")`
padding: 0px 10px 10px;
background: #212426;
border-radius: 10px;
`;

const ConnectWalletTitle = styled("p")`
font-face: Gilroy-Bold;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 40px;
margin-top: 0;
  margin-bottom: 0.2rem;
  letter-spacing: 0.005em;
  color: #CFD0D0;
`;


const RewardsContainer = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
padding: 100px 100px; 
width: 630px;
height: 300px;
background: #212426;
box-shadow: inset -6px -6px 12px rgba(255, 255, 255, 0.08), inset 6px 6px 12px rgba(0, 0, 0, 0.18);
border-radius: 32px;            
  }
`;

const RewardsPresenter = styled("div")`
padding: 5px 10px 10px;
background: #f3f3f3;
border-radius: 4px;
`;

const RewardsTitle = styled("p")`
font-face: Gilroy-Bold;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 20px;
margin-top: 0;
  margin-bottom: 0.2rem;
  letter-spacing: 0.005em;
  color: #CFD0D0;
`;

const SidebarContainer = styled("div")`
padding: 20px 50px; 
flex: 0 0 25%;
max-width: 25%;
height: 360px;
background: #212426;
box-shadow: inset -6px -6px 12px rgba(255, 255, 255, 0.08), inset 6px 6px 12px rgba(0, 0, 0, 0.18);
border-radius: 32px;  
margin-left: 50px          
  }
`;

const SidebarPresenter = styled("div")`
  padding: 0px 0px 0px;
  font-size: 10px;
  background: #0000;
  color: #CFD0D0;
`;


const SidebarTitle = styled("p")`
font-face: Gilroy-Bold;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 20px;
margin-top: 0;
  margin-bottom: 0.2rem;
  letter-spacing: 0.005em;
  color: #CFD0D0;
`;




const IndexPage = () => (

 
  <>
    <Head>
      <title>HOME | ARISTO-CRED</title>
      <meta
        name="description"
        content="SOLANA HACKATHON"
      />
    </Head>
    <IndexPageContainer className="home-page">
      <IndexPagePresenter>
        <MainContent>

          <ConnectWalletContainer>
         <ConnectWalletPresenter>
          <ConnectWalletTitle>connect wallet</ConnectWalletTitle>
         
    < WalletConnect/>
    </ConnectWalletPresenter>
          </ConnectWalletContainer>

          
      
          <SidebarContainer>
          <SidebarPresenter>
              <SidebarTitle>profile</SidebarTitle>
              <Profile />
            </SidebarPresenter>
          </SidebarContainer>
         
          <RewardsContainer>
         
          <RewardsTitle>cred rewards</RewardsTitle>
      <Rewards />
          </RewardsContainer>

        </MainContent> 

      </IndexPagePresenter>
    </IndexPageContainer>
  </>
);

export default IndexPage;
