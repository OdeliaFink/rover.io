import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import userActions from '../helpers/userActions'
import { useAuth } from '../hooks/useAuth'

export const Products = () => {
    const [products, setProducts] = React.useState<string[]>([])
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    const fetchProducts = () => {
        userActions
            .fetchProducts(user?.tokens.access)
            .then(response => {
                if (response?.status === 401) {
                    userActions
                        .refreshSession(user?.tokens.refresh)
                        .then(newAccessToken => {
                            return userActions.fetchProducts(newAccessToken)
                        })
                        .then(response => {
                            if (response?.ok) {
                                return response.json()
                            } else {
                                console.error('Error fetching data after token refresh:', response?.statusText)
                                throw new Error('Failed to fetch data after token refresh')
                            }
                        })
                        .then(data => {
                            return data
                        })
                        .catch(error => {
                            console.error('Error fetching data after token refresh:', error)
                        })
                } else if (response?.ok) {
                    return response.json()
                }
            })
            .then(data => {
                setProducts(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            })
    }

    React.useEffect(() => {
        fetchProducts()
    }, [])

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <div>
            <div className="py-2 last:pb-10 w-[90%] mx-auto">
                <div className="mt-6 text-xl font-light text-center flex justify-between w-[30%] mx-auto items-center border-sm">
                    <h1>Product List</h1>
                    <button
                        onClick={handleLogout}
                        className="border py-1 px-5 border-pink-500 rounded-sm hover:bg-pink-200 cursor-pointer ease-in-out duration-300 "
                    >
                        Logout
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-7">
                    {products &&
                        products.length > 0 &&
                        products.map(({ id, title, description, price }: any) => (
                            <div
                                key={id}
                                className="border w-full mx-auto rounded-sm text-center py-2 mt-2 hover:bg-[#9a48d6] hover:text-white hover:opacity-70 ease-in-out duration-300 cursor-pointer bg-purple-200 shadow-md"
                            >
                                <h3 className="text-lg font-bold">{title}</h3>
                                <p className="font-light w-1/2 mx-auto">{description}</p>
                                <p className="font-semibold text-lg">$ {price}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
