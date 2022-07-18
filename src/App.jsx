import {Router} from "./router/Router";
import {GlobalContainer} from "./styles"


export default function App() {
  return (
    <div>
      <GlobalContainer/>
      <Router/>      
    </div>
  );
}