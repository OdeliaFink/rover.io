import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/Error'
// import App from './App'
import Login from './components/Login'
import LoginCard from './components/LoginCard'
import { Products } from './components/Products'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        element: <LoginCard />,
    },
    {
        path: '/products',
        element: <Products />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
