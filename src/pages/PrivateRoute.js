import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
// import { useUserContext } from "../context/user_context"; //older version
// ... here is not spread operator, but rest operator. fill in the rest
// here we collect them
const PrivateRoute = ({ children, ...rest }) => {
  // const { myUser } = useUserContext(); // older version
  const { user } = useAuth0();
  // here it is spread operator
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
