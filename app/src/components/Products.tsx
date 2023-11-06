import * as React from 'react'

export const Products = () => {
    const [products, setProducts] = React.useState<any[]>([])
    // const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const fetchProducts = () => {
        fetch('http://localhost:8080/api/products', {
            headers: {
                authorization: `Bearer`,
            },
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Received data:', data)
                setProducts(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            })
    }
    React.useEffect(() => {
        fetchProducts()
        // console.log(products, 'fetched')
    }, [])

    return (
        <>
            <div>
                <div className="w-1/2 mx-auto mt-6 text-xl font-bold text-center">
                    <h1>Product List</h1>
                </div>
                {products.map(({ id, title, description, price }: any) => (
                    <>
                        <div
                            key={id}
                            className="border rounded-sm w-1/2 ml-auto mr-auto mt-5 text-center py-1 hover:bg-[#9a48d6] hover:text-white ease-in-out duration-300 cursor-pointer"
                        >
                            <h3 className="text-lg font-bold">{title}</h3>
                            <p className="font-light w-1/2 mx-auto">{description}</p>
                            <p className="font-semibold text-lg">$ {price}</p>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
