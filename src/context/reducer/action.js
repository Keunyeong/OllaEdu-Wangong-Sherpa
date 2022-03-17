export const setData = data => ({
  type: "LOAD_DATA",
  payload: data
});

export const setLoading = isLoad => ({
  type: "SET_LOADING",
  payload: isLoad
});

export const setLogin = isLogin => ({
  type: "SET_LOGIN",
  payload: isLogin
});

export const setError = error => ({
  type: "SET_ERROR",
  payload: error
});

export const setUserInfo = userInfo => ({
  type: "SET_USERINFO",
  payload: userInfo
});

export const LogOut = () => {
  localStorage.removeItem("isLogin");
  localStorage.removeItem("userInfo");
  return {
    type: "LOGOUT"
  };
};

export const loadData = () => async (dispatch, state) => {
  dispatch(setLoading(true));

  const data = await fetch(
    "https://gist.githubusercontent.com/himchan94/74258d92c0af3f9d0cce70202f17f406/raw/0dd3abeca38b805cf0525a14a6da98fc89892b52/fastcampus1%2525data"
  )
    .then(res => res.json())
    .then(data => data.result)
    .catch(error => console.log(error));

  const groups = data.reduce((groups, list) => {
    const date = list["응시년월"];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(list);
    return groups;
  }, {});

  const 응시월 = Object.keys(groups);

  const 응시내역 = 응시월.reduce((group, key) => {
    groups[key].forEach(grade => {
      const 응시년월 = key;
      if (!group[응시년월]) {
        group[응시년월] = {};
      }

      const 시험명 = grade["시험명"];
      if (!group[응시년월][시험명]) {
        group[응시년월][시험명] = [];
      }
      group[응시년월][시험명].push(grade);
    });

    return group;
  }, {});

  const 년월 = 응시월.reduce((group, yymm) => {
    const [year, month] = yymm.match(/.{1,4}/g);

    if (!group[year]) {
      group[year] = [];
    }

    group[year].push(month);
    return group;
  }, {});

  const 년 = Object.keys(년월);
  dispatch(setData({ 응시월, 응시내역, 년월, 년 }));
  dispatch(setLoading(false));
};

export const tryLogin = userData => async (dispatch, state, navigate) => {
  dispatch(setLoading(true));

  const { id, pw } = userData;
  try {
    if (id === "fastcampus1" && Number(pw) === 1234) {
      await fetch(
        "https://gist.githubusercontent.com/himchan94/8abfadc76052ee4cf393ce7abf0662b9/raw/021ce418e4876da198cad3faf48291d5e237a44d/login%2525id=fastcampus1%2525pw=1234"
      )
        .then(res => res.json())
        .then(res => {
          dispatch(setLogin(true));
          dispatch(setUserInfo(res));
        });

      dispatch(setLoading(false));
      navigate("/rating");
      return;
    }

    if (id === "fastcampus2" && Number(pw) === 1234) {
      await fetch(
        "https://gist.githubusercontent.com/himchan94/6469896107892d5e54f6233f64b7f987/raw/887c258017ba1a1f2ca4ba15bfbb9367121e1900/login%2525id=fastcampus2%2525pw=1234"
      )
        .then(res => res.json())
        .then(res => {
          dispatch(setLogin(true));
          dispatch(setUserInfo(res));
        });

      dispatch(setLoading(false));
      navigate("/rating");
      return;
    }
    dispatch(setError("invalid id or password"));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error));
    dispatch(setLoading(false));
  }
};
