import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();
  // console.log(error);

  return (
    <div className="px-4 py-3">
      <h1 className="font-semibold">Something went wrong 😢</h1>
      <p className="font-semibold">{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
