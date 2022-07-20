import { Router } from "./router/Router";
import { GlobalContainer } from "./styles";
import GlobalProvider from "./providers/GlobalProvider";


export default function App() {

  return (
      <GlobalProvider>
        <GlobalContainer />
        <Router />
      </GlobalProvider>
  );
}
