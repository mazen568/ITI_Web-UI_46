import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: event,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["events", id],
    queryFn: () => fetchEvent(id),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: ["events"],
    //   });
    //   navigate("../");
    // }

    onMutate: async (data) => {
      const { eventData: newEvent } = data;
      await queryClient.cancelQueries({ queryKey: ["events", id] });
      const previousEvent = queryClient.getQueryData(["events", id]);
      queryClient.setQueryData(["events", id], (old) => ({
        ...old,
        ...newEvent,
      }));

      return  previousEvent ;
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", id], context);//rolling back to the previous data if the mutation fails
    },
    //onSettled runs no matter if the mutation succeeds or fails(to make sure the data is up to date)
    onSettled:()=>{
      queryClient.invalidateQueries({ queryKey: ["events", id] });
    }
  });

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
      <div className="center">
        <ErrorBlock title="An error occurred" message={error.info?.message} />
      </div>
    );
  }

  // if (isUpdateError) {
  //   content = (
  //     <div className="center">
  //       <ErrorBlock
  //         title="Failed to update the event"
  //         message={updateError.info?.message}
  //       />
  //     </div>
  //   );
  // }

  if (event) {
    content = (
      <EventForm inputData={event} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  function handleSubmit(formData) {
    mutate({ eventId: id, eventData: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
