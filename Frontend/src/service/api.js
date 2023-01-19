import axios from "axios";

const url = "http://localhost:8000"; //our backend url

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data); //axios.post, which is used to send a POST request to a specified URL.to send data to backend.
  } catch (error) {
    console.log("Error while addUser API", error.message);
  }
};

export const getUsers = async () => {
  try {
    let responce = await axios.get(`${url}/users`);
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    console.log("Error while getUser API", error.message);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation API ", error);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation API ", error);
  }
};
export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newMessage api", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getMessage api", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling uploadFile api", error.message);
  }
};
