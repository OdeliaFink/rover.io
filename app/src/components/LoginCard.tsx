import * as React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Logo from '../design/Logo.png'
import userActions from '../helpers/userActions'
import { useAuth } from '../hooks/useAuth'

const LoginCard = () => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const { user, login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const authData = await userActions.login(email, password)
        //calling api
        login({
            email: email,
            tokens: { access: authData.accessToken, refresh: authData.refreshToken, expiresAt: authData.expiresAt },
        })
        navigate('/products')
    }

    return user ? (
        <Navigate to="/products" />
    ) : (
        <>
            <div className="w-[466px] mx-auto ml-auto mr-auto my-3">
                <div className="rounded-[10px] w-full p-12 pb-13 bg-[#ffffff] shadow-[0_0_6px_0_rgba(0,0,0,0.2)]">
                    <img src={Logo} className="pb-7" />
                    <div className="pb-5">
                        <h2 className="font-semibold leading-[4rem] text-3xl">Sign in</h2>
                    </div>

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
                        <button
                            className="bg-[#9a48d6] rounded-sm text-[14px] py-2 text-[#FFF] font-bold hover:bg-purple-400 cursor-pointer ease-in-out duration-300"
                            onClick={handleSubmit}
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="text-center">
                        <button className="font-bold text-[14px] text-[#000000] tracking-tighter">
                            Forgot password?
                        </button>
                    </div>
                </div>
                <div className="w-[390px] pt-4 mx-auto bg-transparent">
                    <p className="text-[14px] text-[#858484]  tracking-tight text-center leading-[24px] bg-transparent">
                        ©2001-2019 All Right Reserved. Clip® is a registered trademark of Rover Labs. Cookie
                        Preferences, Privacy, and Terms.
                    </p>
                </div>
            </div>
        </>
    )
}

export default LoginCard
