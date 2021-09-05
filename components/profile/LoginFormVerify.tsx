import Router from "next/router";
import React from "react";
import { mutate } from "swr";
import { Button } from "../../components/buttons/SynthButton.style";
import ListErrors from "../common/ListErrors";
import CredAPI from "../../lib/api/user";

const LoginFormVerify = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [otp, setOtp] = React.useState("");

  const handleOtpChange = React.useCallback(
    (e) => setOtp(e.target.value),
    []
  );
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, status } = await CredAPI.verify(otp);
      

      if (data?.access_token && data?.existing_user == true) {
        window.localStorage.setItem("user", JSON.stringify(data));
        mutate("user", data?.access_token);
        Router.push("/");
        }
      
      if (data?.access_token && data?.existing_user == false) {
        window.localStorage.setItem("user", JSON.stringify(data));
        mutate("user", data?.access_token);
        Router.push("/user/register");
      }
      if (status !== 200) {
        setErrors(data.errors);
        Router.push("/user/login")
      }   
    } catch (error) {
      console.error(error);
      Router.push("/user/login")
    } finally {
      setLoading(false);
    }
  };

 
  return (
    <>
      <ListErrors errors={errors} />

      <form onSubmit={handleSubmit}>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="enter your 4-digit OTP"
              value={otp}
              onChange={handleOtpChange}
            />
          </fieldset>

          <Button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={isLoading}
          >
            Submit
          </Button>
        </fieldset>
      </form>
    </>
  );
};

export default LoginFormVerify;
