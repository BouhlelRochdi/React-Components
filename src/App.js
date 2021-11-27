import "./App.css";
import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilePhoto";
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
