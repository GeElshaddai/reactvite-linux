import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";

import RoutingComponent from "./components/RoutingComponent";

function App() {
  return (
    <>
      <NavComponent />
      <main>
        <RoutingComponent />
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
