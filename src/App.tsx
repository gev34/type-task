import { LoginPage } from "./components/LoginPage";
import { CallLogin } from "./components/CallLogin";

function App() {
  return (
    <div className="App">
        <CallLogin>
          <LoginPage/>
        </CallLogin>
    </div>
  );
}

export default App;
