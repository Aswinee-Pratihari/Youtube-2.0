import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
import Channel from "./pages/Channel";

const AppLayout = () => {
  return (
    <div className="relative w-full ">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watch/:id",
        element: <Watch />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/channel/:channelId",
        element: <Channel />,
      },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
