const IS_LOADING = `IS_LOADING`;
const SET_BOOKS = `SET_BOOKS`;
const SET_FILTER = `SET_FILTER`;
const SET_IMG= `SET_IMG`;

let initialState = {
  books: "",
  isLoading: false,
  filterWord: "",
  img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdictionary.cambridge.org%2Fru%2Fimages%2Fthumb%2Fbook_noun_001_01679.jpg%3Fversion%3D5.0.128&imgrefurl=https%3A%2F%2Fdictionary.cambridge.org%2Fru%2F%25D1%2581%25D0%25BB%25D0%25BE%25D0%25B2%25D0%25B0%25D1%2580%25D1%258C%2F%25D0%25B0%25D0%25BD%25D0%25B3%25D0%25BB%25D0%25B8%25D0%25B9%25D1%2581%25D0%25BA%25D0%25B8%25D0%25B9%2Fbook&tbnid=35Su7QK-1hGk1M&vet=12ahUKEwjm1qCatsPsAhVSuKQKHepNB_UQMygGegUIARC1AQ..i&docid=5rqIqaQZhWxOZM&w=200&h=200&q=book&ved=2ahUKEwjm1qCatsPsAhVSuKQKHepNB_UQMygGegUIARC1AQ'
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: [...action.books],
      };
    case SET_IMG:
      return {
        ...state,
        img: [action.img],
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_FILTER:
      return {
        ...state,
        filterWord: action.filterWord,
      };
    default:
      return state;
  }
};

export const setFilter = (filterWord) => ({ type: SET_FILTER, filterWord });
export const setBooks = (books) => ({ type: SET_BOOKS, books });
export const setImg = (img) => ({ type: SET_IMG, img });
export const isLoading = (isLoading) => ({ type: IS_LOADING, isLoading });

export default bookReducer;
