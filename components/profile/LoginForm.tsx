import Router from "next/router";
import React from "react";
import { mutate } from "swr";
import { Button } from "../../components/buttons/SynthButton.style";

import ListErrors from "../common/ListErrors";
import CredAPI from "../../lib/api/user";

const LoginForm = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [phone, setPhone] = React.useState("");

  const handlePhoneChange = React.useCallback(
    (e) => setPhone(e.target.value),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, status } = await CredAPI.login(phone);

      if (data?.token) {
        window.localStorage.setItem("user", JSON.stringify(data));
        mutate("user", data?.token);
        Router.push("/user/verify");
      }
      if (status !== 200) {
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

      <form onSubmit={handleSubmit}>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="tel"
              placeholder="enter your phone number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </fieldset>

          <Button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={isLoading}
          >
            Send OTP
          </Button>
        </fieldset>
      </form>
    </>
  );
};

export default LoginForm;
