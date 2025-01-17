import { Link, useRouteError } from "react-router-dom";
import StatusCodes from "http-status-codes";
import img from "../assets/not-found.svg";

const SinglePageError = () => {
  const error = useRouteError();

  return (
    <h3>{error.message}</h3>
  );
}

export default SinglePageError;