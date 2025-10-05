import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import PageTask from './pages/Pagetask.jsx'
import './App.css'

const rtr = createBrowserRouter([
  {
    'path': "/",
    'element': <App/>
  },
  {
    'path': "/tarefa",
    'element': <PageTask/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rtr} />
  </StrictMode>
);