import {
    setBooks,
    isLoading
} from "./bookReducer";
import {
    BooksApi
} from "../api/booksApi";

export const getBook = () => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        let data = await BooksApi.getBook();
        if (data.success) {
            dispatch(setBooks(data.data));
            dispatch(isLoading(false));
            console.log("запрос");
        }
    };
};

export const createBook = (book) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        await BooksApi.createBook(book);

        dispatch(isLoading(false));
    };
};
export const deleteBook = (id) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        await BooksApi.deleteBook(id);
        dispatch(getBook());
        dispatch(isLoading(false));
    };
};
export const updateBook = (data) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        await BooksApi.updateBook(data);
        dispatch(getBook());
        dispatch(isLoading(false));
    };
};
