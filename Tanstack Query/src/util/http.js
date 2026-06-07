import { QueryClient } from "@tanstack/react-query";

import axios from "axios";
export let url = "http://localhost:3000/events";

export const queryClient = new QueryClient();

export async function fetchEvents({ signal, searchTerm }) {
  if (searchTerm) url = `${url}?search=${searchTerm}`;
  try {
    const res = await axios.get(url, { signal });
    return res.data.events;
  } catch (error) {
    const err = new Error("An error occurred while fetching the events");

    err.code = error.response?.status;
    err.info = error.response?.data;

    throw err;
  }
}

export async function fetchImages() {
  try {
    const res = await axios.get(`${url}/images`);
    return res.data.images;
  } catch (error) {
    const err = new Error("An error occurred while fetching images");

    err.code = error.response?.status;
    err.info = error.response?.data;

    throw err;
  }
}

export async function createEvent(eventData) {
  try {
    const res = await axios.post(url, { event: eventData });
    return res.data.event;
  } catch (error) {
    const err = new Error("An error occurred while creating a new event");

    err.code = error.response?.status;
    err.info = error.response?.data;

    throw err;
  }
}

export const fetchEvent = async (eventId) => {
  try {
    const res = await axios.get(`${url}/${eventId}`);
    return res.data.event;
  } catch (error) {
    const err = new Error("An error occurred while fetching the event details");
    err.code = err.response?.status;
    err.info = error.response?.data;
    throw err;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const res = await axios.delete(`${url}/${eventId}`);
    return res.data;
  } catch (error) {
    const err = new Error("An error occurred while deleting the event");
    err.code = err.response?.status;
    err.info = error.response?.data;
    throw err;
  }
};

export const updateEvent = async ({eventId, eventData}) => {
  try {
    const res = await axios.put(`${url}/${eventId}`,{event:eventData});
    return res.data.event;
  } catch (error) {
    const err = new Error("An error occurred while updating the event");
    err.code = err.response?.data;
    err.info = error.response?.data;
    throw err;
  }
};
