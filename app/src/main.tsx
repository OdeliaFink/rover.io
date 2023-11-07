import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/Error'
import Login from './components/Login'
import LoginCard from './components/LoginCard'
import { Products } from './components/Products'
import AuthContextProvider from './context/AuthContext'
import { RequireAuth } from './helpers/RequireAuth'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        index: true,
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        element: <LoginCard />,
    },
    {
        path: '/products',
        element: (
            <RequireAuth>
                <Products />
            </RequireAuth>
        ),
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthContextProvider>
        <RouterProvider router={router} />
    </AuthContextProvider>
)
