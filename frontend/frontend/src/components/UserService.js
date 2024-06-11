import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

const addBookToUser = (userId, book) => {
    return axios.post(`${API_URL}/${userId}/books`, book);
};

const startReadingBook = (userId, bookId) => {
    return axios.post(`${API_URL}/${userId}/books/${bookId}/start`);
};

const finishReadingBook = (userId, bookId) => {
    return axios.post(`${API_URL}/${userId}/books/${bookId}/finish`);
};

const getBookStatus = (userId, bookId) => {
    return axios.get(`${API_URL}/${userId}/books/${bookId}/status`);
};

const getUserBooks = (userId) => {
    return axios.get(`${API_URL}/${userId}/books`);
};

export default {
    addBookToUser,
    startReadingBook,
    finishReadingBook,
    getBookStatus,
    getUserBooks
};
