import Axios from "axios";

const url = Axios.create({
    baseURL: " http://localhost:3000/api/",
});

export const BooksApi = {
    getBook() {
        return url.get(`/books`).then(
            (response) => response.data,
            (error) => alert(error.response.data.message)
        );
    },
    deleteBook(id) {
        return url.delete(`book/${id}`).then(
            (response) => response.data,
            (error) => alert(error.response.data.message)
        );
    },
    createBook(data) {
        return url.post(`book`, {
            data
        }).then(
            (response) => response.data,
            (error) => alert(error.response.data.message)
        );
    },
    updateBook(data) {
        return url.put(`book/${data._id}`, {
            data
        }).then(
            (response) => response.data,
            (error) => alert(error.response.data.message)
        );
    },
};
