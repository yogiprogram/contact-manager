import axios from "axios";
import {FETCH_CONTACTS} from "./types";

export const fetchContacts = () => async dispatch => {
    const res = await axios.get("http://localhost:8088/contacts");
    dispatch({
        type: FETCH_CONTACTS,
        payload: res.data
    });
};

export const addContact = (data, history) => async dispatch => {
    const res = await axios.post("http://localhost:8088/contacts", data);
    fetchContacts();
    history.push("/");
};

export const updateContact = (data, history) => async dispatch => {
    const res = await axios.put("http://localhost:8088/contacts/" + data.id, data);
    fetchContacts();
    history.push("/");
};

export const deleteContact = (data, history) => async dispatch => {
    const res = await axios.delete("http://localhost:8088/contacts/" + data.id);
    fetchContacts();
    history.push("/");
};
