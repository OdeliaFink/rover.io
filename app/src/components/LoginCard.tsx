import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../design/Logo.png'

const LoginCard = () => {
    const [email, setEmail] = React.useState<any>('')
    const [password, setPassword] = React.useState<any>('')
    const [accessToken, setAccessToken] = React.useState<any>('')
    const [refreshToken, setRefreshToken] = React.useState<any>('')

    const navigate = useNavigate()

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()
        const data = {
            email: email,
            password: password,
        }
        try {
            const response = await fetch('http://localhost:8080/api/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            if (response.ok) {
                const result = await response.json()
                console.log('Authentication successful', result)
                setAccessToken(result.accessToken)
                setRefreshToken(result.refreshToken)
                navigate('/products')
                setEmail('')
                setPassword('')
            } else {
                console.error('Authentication failed')
            }
        } catch (error) {
            console.error('Error during authentication:', error)
        }
    }
    return (
        <>
            <div className="w-[466px] mx-auto ml-auto mr-auto mt-7">
                <div className="rounded-[10px] w-full p-11 pb-13 bg-[#ffffff] shadow-xl">
                    <img src={Logo} className="pb-6" />
                    <h2 className="font-sans font-semibold leading-[4rem] text-3xl pb-2">Sign in</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="pb-7">
                            <h6 className="text-sm font-bold leading-[16px] pb-4">Email</h6>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="h-[40px] border border-[#cccccc] rounded-[2px] w-full px-[10px] border-solid focus:outline-none focus:border-black active:bg-transparent text-sm"
                            />
                        </div>
                        <div className="password-container">
                            <h6 className="text-sm font-bold leading-[16px] pb-4">Password</h6>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="h-[40px] border border-[#cccccc] rounded-[2px] w-full px-[10px] border-solid focus:outline-none focus:border-black active:bg-transparent text-sm"
                            />
                        </div>
                        <div className="flex flex-col py-6">
                            <input
                                type="submit"
                                value="Sign in"
                                className="bg-[#9a48d6] rounded-sm text-sm py-2 text-white font-bold hover:bg-purple-400 cursor-pointer ease-in-out duration-300"
                            />
                        </div>
                        <div className="text-center">
                            <button className="font-bold text-xs tracking-tighter">Forgot password?</button>
                        </div>
                    </form>
                </div>
                <div className="w-[450px] pt-4">
                    <p className="text-xs text-[#858484] tracking-tight text-center leading-[24px]">
                        ©2001-2019 All Right Reserved. Clip© is a registered trademark of Rover Labs. Cookie
                        Preferences, Privacy, and Terms.
                    </p>
                </div>
            </div>
        </>
    )
}

export default LoginCard
