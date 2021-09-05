import Head from "next/head";
import React from "react";
import LoginForm from "../../components/profile/LoginForm";
import styled from "styled-components";

const IndexPageContainer = styled("div")`
background: #212426
`;


const Login = () => (
  <>
    <Head>
      <title>LOGIN | CRED</title>
      <meta name="description" content="Please login to use the full feature" />
    </Head>
    <IndexPageContainer>
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">sign in</h1>
            <p className="text-xs-center">
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
    </IndexPageContainer>
  </>
);

export default Login;
