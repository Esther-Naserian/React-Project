import Login from "./Login";
import Users from "./Users";

const App = (_) => {
  const baseUrl= process.env.REACT_APP_BASE_URL;
  console.log({baseUrl});

return(
  <div>
    
    <Login></Login>
    <Users/>
  </div>
)
}
export default App;
