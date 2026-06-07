import { Link, Outlet } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Header from "../Header.jsx";
import { fetchEvent, deleteEvent } from "../../util/http.js";
import { useParams, useNavigate } from "react-router-dom";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.js";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: () => fetchEvent(id),
  });

  const {
    mutate,
    isPending: isDeleting,
    isError: isDeleteError,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none", //mark the data as stale but don't send a behind the scenes request to fetch the data immediately(refetch the next a component mounts that uses the data)
      });
      navigate("/events");
    },
  });

  const handleDelete = () => {
    mutate(id);
  };

  let content;
  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }
  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message} />
    );
  }

  if (isDeleteError) {
    content = (
      <ErrorBlock
        title="Failed to delete the event"
        message={deleteError.info?.message}
      />
    );
  }

  if (data) {
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={() => setShowModal(true)}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
      {showModal && (
        <Modal>
          <p>Are you sure you want to delete this event?</p>
          <div className="modal-actions">
            <button onClick={() => setShowModal(false)} className="button-text">
              No, cancel
            </button>
            <button
              onClick={handleDelete}
              className="button"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Yes, delete"}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
