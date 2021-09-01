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
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <CustomLink href="/user/register" as="/user/register">
                Create new CRED Profile?
              </CustomLink>
            </p>
            <LoginFormVerify />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Login;
