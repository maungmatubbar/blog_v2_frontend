import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes';
function App() {
  const router = createBrowserRouter(AppRoutes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
