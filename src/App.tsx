import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes';
import './styles/globals.css'
import { Provider } from 'react-redux';
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Spin } from 'antd';

const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter(AppRoutes);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate
          loading={
            <div className='flex justify-center py-10'>
              <Spin  />
            </div>
          }
          persistor={persistor}
          onBeforeLift={() => new Promise((resolve) => setTimeout(resolve, 1000))}
          >
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
