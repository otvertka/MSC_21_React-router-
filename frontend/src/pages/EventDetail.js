import { Link, useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail PAge</h1>
      <p>Event ID: {params.eventId}</p>
      {/* <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p> */}
    </>
  );
}

export default EventDetailPage;
