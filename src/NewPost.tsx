import { Outlet } from "react-router-dom";

const NewPost = () => {
  return (
    <main>
      <h1>NewPost</h1>
      <Outlet />
    </main>
  );
};

export default NewPost;
