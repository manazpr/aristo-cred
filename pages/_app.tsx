import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import Head from "next/head";
import React from "react";

import Layout from "components/common/Layout";
import "styles.css";


const MyApp = ({ Component}) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
   
  
          <Layout>
          
          <Component />
          
        </Layout>
       
        
 
  </>
);

export default MyApp;
