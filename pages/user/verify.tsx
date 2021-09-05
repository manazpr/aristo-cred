import Head from "next/head";
import React from "react";

import CustomLink from "../../components/common/CustomLink";
import LoginFormVerify from "../../components/profile/LoginFormVerify";

const Login = () => (
  <>
    <Head>
      <title>LOGIN | CRED</title>
      <meta name="description" content="Please login to use the full feature" />
    </Head>
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">sign in</h1>
            <p className="text-xs-center">
            </p>
            <LoginFormVerify />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Login;
