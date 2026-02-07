import axios from "axios";

const API = "http://localhost:8081/api/students";

export const getStudents = () => axios.get(API);

export const addStudent = (student) =>
  axios.post(API, student);

export const updateStudent = (id, student) =>
  axios.put(`${API}/${id}`, student);

export const deleteStudent = (id) =>
  axios.delete(`${API}/${id}`);
