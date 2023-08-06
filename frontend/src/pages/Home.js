import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/events");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="events"> list of events</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}

export default HomePage;
