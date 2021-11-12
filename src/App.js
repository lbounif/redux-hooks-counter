
import './App.css';
import allActions from "./redux/actions"
import { useSelector, useDispatch} from "react-redux"

function App() {
  const count = useSelector(state => state.counterReducer.count)
  const userState = useSelector(state => state.userReducer)
  const dispatch = useDispatch() 

  const user = {
    name: "Sara"
  }
  return (
    <div className="App">
      {
        userState.loggedIn ?
        <>
          <h1> Hello,{userState.user.name} </h1>
          <button onClick={()=> dispatch(allActions.userActions.logOut())}>Logout</button>
        </>
        :
        <>
          <h1> Login </h1>
          <button onClick={()=> dispatch(allActions.userActions.logIn(user))}>Login</button>
        </>
      }
      <h1>Counter: {count}</h1>
      <button onClick={()=> dispatch(allActions.counterActions.decrement())} disabled={count <= 0}>-</button>
      <button onClick={()=> dispatch(allActions.counterActions.increment())}>+</button>
    </div>
  );
}

export default App;
