import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes';
import './styles/globals.css'
import { Provider } from 'react-redux';
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  const router = createBrowserRouter(AppRoutes);
  return (
    <>
      <Provider store={store}>
        <PersistGate
        loading={<div>Loading...</div>}
         persistor={persistor}
         onBeforeLift={() => new Promise((resolve) => setTimeout(resolve, 1000))}
        >
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
