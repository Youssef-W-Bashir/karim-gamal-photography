import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Layout";
import Gallery from "./Pages/Gallery";
import FilterImgContextProvider from "./Context/FilterImgContext";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "gallery", element: <Gallery /> },
    ],
  },
]);

function App() {
  return (
    <>
      <FilterImgContextProvider>
        <RouterProvider router={routers}></RouterProvider>
      </FilterImgContextProvider>
    </>
  );
}

export default App;
