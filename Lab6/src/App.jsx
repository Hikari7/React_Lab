import { useEffect, useReducer } from "react";
import axios from "axios";
import { dataReducer } from "./dataReducer";
import { DataItems } from "./DataItems";

function App() {
  const initialState = {
    error: "",
    data: [],
    isLoading: true,
  };

  //reducerの形に変えていきます
  //const [state, dispatch] = useReducer(reducer,'初期値')の形でまずは設定(stateとdispatchの準備)
  //この第一引数はstateになる、ので複数オブジェクトあったらdata.errorみたいなk何時でアクセスする
  const [data, dispatchData] = useReducer(dataReducer, initialState);

  // const [data, setData] = useState();
  //const [error, setError] = useState();

  useEffect(() => {
    if (!data) {
      getPostsData();
    }
    console.log("Fetching...");
    console.log(data, "from useEffect");
  }, []);

  //何回レンダリングされたかカウントできる
  //  console.count();

  const getPostsData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(
        (data) =>
          //dispatch関数を呼び、type:には'FETCH_SUCCESS'、payloadには受け取ったデータを代入する
          dispatchData({ type: "DATA_FETCH_SUCCESS", payload: data.data })
        // dispatchData({ type: "DATA_FETCH_SUCCESS", payload: data.data || [] })
      )
      .catch((err) => dispatchData({ type: "DATA_FETCH_FAILURE" }));
    console.log(data, "from getPostsData");
  };

  //dataはとれてる
  console.log(data.data);

  return (
    <div className="App">
      <h1>React Lab 6</h1>
      <ul className="msg">
        {data.data.length > 0 ? (
          <DataItems childData={data.data} />
        ) : data.error ? (
          data.error
        ) : (
          "Pipipi! now lodaing!"
        )}
      </ul>
      <button className="btn" onClick={() => getPostsData()}>
        Refetch
      </button>
    </div>
  );
}

export default App;
