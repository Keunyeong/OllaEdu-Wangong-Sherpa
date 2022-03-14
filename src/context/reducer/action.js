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

export const loadData = () => async (dispatch, state) => {
  dispatch(setLoading(true));

  const data = await fetch(
    "https://kimcodi.kr/external_api/report/resultSearch.php?%20mem_id=0909okdor"
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
  console.log(응시내역);
  console.log(응시월);
  dispatch(setData({ 응시월, 응시내역, 년월, 년 }));
  dispatch(setLoading(false));
};

export const tryLogin = userData => async (dispatch, state, navigate) => {
  dispatch(setLoading(true));

  await fetch("https://kimcodi.kr/external_api/report/login.php", {
    method: "POST",
    body: JSON.stringify({
      api_key: "EZVrTC4VVKNeeGQ7wbxdP4NzMNpgEmC2",
      user_id: userData.id,
      user_pw: userData.pw
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch(setLogin(true));
    });

  dispatch(setLoading(false));
  navigate("/rating");
};
