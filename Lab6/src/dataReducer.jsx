//reducerを作成、stateとactionを渡して、新しいstateを返すように実装
export const dataReducer = (state, action) => {
  //if elseをここで書いてもいいけど、わかりにくいので
  //actionがマッチした時っていうのがわかりやすいswtich構文を使うのが一般的ぽいです for useReducer
  //type is just a convention name for referring to what you need to do
  // //payload is also a convention name

  switch (action.type) {
    //COMMAND
    case "DATA_FETCH_SUCCESS":
      //   return action.payload;
      // ...stateはprevious state
      return {
        ...state,
        error: "",
        data: action.payload,
      };

    case "DATA_FETCH_FAILURE":
      return {
        ...state,
        error: "Something went wrong",
      };
    // default:
    //   throw new Error();
  }
};
