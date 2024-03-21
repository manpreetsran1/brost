import ApiConstants from "../../../Themes/ApiConstants";

const editState = {
  isLoading: false,

  movieList: [],
};

export const investReducer = (state = editState, action) => {
  switch (action.type) {
    case ApiConstants.movieList:
      return { ...state, isLoading: true, error: null };

    case ApiConstants.movieListSuccess:
      // window.location.reload()
      return {
        ...state,
        movieList: action.result.list,
        isLoading: false,
      };

    case ApiConstants.movieListFail:
      return {
        ...state,
        isLoading: false,
      };

    case ApiConstants.createPayment:
      return { ...state, isLoading: true, error: null };

    case ApiConstants.createPaymentSuccess:
      // window.location.reload()
      return {
        ...state,

        isLoading: false,
      };

    case ApiConstants.createPaymentFail:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
