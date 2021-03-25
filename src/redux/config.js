export const CONFIG_IS_DATA_LOADING = 'CONFIG_IS_DATA_LOADING';
export const CONFIG_CLEAN = 'CONFIG_CLEAN';

export const configDataLoading = data => ({
  type: CONFIG_IS_DATA_LOADING,
  data,
});

export const configClean = () => ({
  type: CONFIG_CLEAN,
});

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_IS_DATA_LOADING:
      return {
        ...state,
        isLoading: action.data,
      };
    case CONFIG_CLEAN:
      return initialState;
    default:
      return state;
  }
};
