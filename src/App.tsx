import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// import { useState } from "react";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
