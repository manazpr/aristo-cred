import Router from "next/router";
import React from "react";
import { Button } from "../buttons/SynthButton.style"
import ListErrors from "../common/ListErrors";
import CredAPI from "../../lib/api/user";

const RegisterForm = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [first_name, setFirstname] = React.useState("");
  const [last_name, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleFirstnameChange = React.useCallback(
    (e) => setFirstname(e.target.value),
    []
  );
  const handleLastnameChange = React.useCallback(
    (e) => setLastname(e.target.value),
    []
  );
  const handleEmailChange = React.useCallback(
    (e) => setEmail(e.target.value),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, status } = await CredAPI.register(
        first_name,
        last_name,
        email,
      );
      if (data?.success == true) {
        Router.push("/");
      }
      if (data?.success == false) {
        Router.push("/user/register");
      }
      if (status !== 200 && data?.errors) {
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
              type="text"
              placeholder="enter your first name"
              value={first_name}
              onChange={handleFirstnameChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="enter your last name"
              value={last_name}
              onChange={handleLastnameChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
            />
          </fieldset>

          <Button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={isLoading}
          >
            Sign up
          </Button>
        </fieldset>
      </form>
    </>
  );
};

export default RegisterForm;
