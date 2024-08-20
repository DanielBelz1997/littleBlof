import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Home from "./Home.tsx";
import NewPost from "./NewPost.tsx";
import PostPage from "./PostPage.tsx";
import About from "./About.tsx";
import Missing from "./Missing.tsx";
import Footer from "./Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <>error</>,
  },
  {
    path: "/post",
    element: <NewPost />,
    errorElement: <>error</>,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
    errorElement: <>error</>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Nav />

    <About />
    <Missing />
    <Footer />
  </StrictMode>
);
