const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || null,
  error: null,
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || null
};

export default INITIAL_STATE;
