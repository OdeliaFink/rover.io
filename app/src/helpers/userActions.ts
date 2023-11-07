export default {
    login: async (email: string, password: string) => {
        try {
            const res = await fetch('http://localhost:8080/api/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
            const result = await res.json()

            if (res.ok) {
                console.log('Logged in')
            } else {
                console.log(result.errors)
            }
            return result
        } catch (error) {
            console.error(error)
        }
    },
    refreshSession: (refreshToken: string | undefined) => {
        return fetch('http://localhost:8080/api/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refreshToken,
            }),
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.error('Token refresh failed:', response.statusText)
                    throw new Error('Token refresh failed')
                }
            })
            .then(data => {
                const newAccessToken = data.accessToken
                return newAccessToken
            })
            .catch(error => {
                console.error('Error refreshing access token:', error)
                throw error
            })
    },
    fetchProducts: async (accessToken: string | undefined | null) => {
        try {
            const response = await fetch('http://localhost:8080/api/products', {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            })
            return await response
        } catch (error) {
            console.error(error)
        }
    },
}
