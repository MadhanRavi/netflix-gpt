import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    // errorElement: <Error />,
  },
  {
    path: "/browse",
    element: <Browse />,
    // errorElement: <Error />,
  },
]);

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
