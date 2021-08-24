import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
