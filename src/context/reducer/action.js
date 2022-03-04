export const setData = data => ({
  type: "LOAD_DATA",
  payload: data
});

export const setLoading = isLoad => ({
  type: "SET_LOADING",
  payload: isLoad
});

export const loadData = () => async (dispatch, state) => {
  dispatch(setLoading(true));
  const data = await fetch(
    "https://kimcodi.kr/external_api/report/resultSearch.php?%20mem_id=0909okdor"
  )
    .then(res => res.json())
    .then(data => data.result);

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

  console.log(응시월);
  console.log(응시내역);
  dispatch(setLoading(false));
  dispatch(setData({ 응시월, 응시내역 }));
};
