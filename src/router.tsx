import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { AppLayout } from "./AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <>error in layout</>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <>error in new post</>,
      },
      {
        path: "/post",
        element: <NewPost />,
        errorElement: <>error in new post</>,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
        errorElement: <>error in post page</>,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <>error in post page</>,
      },
      {
        path: "*",
        element: <Missing />,
        errorElement: <>Missing</>,
      },
    ],
  },
]);
