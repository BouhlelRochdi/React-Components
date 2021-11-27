import "./App.css";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div>
      <FullName/>
      <Address/>
      <ProfilePhoto/>
    </div> 
  );
}

export default App;
