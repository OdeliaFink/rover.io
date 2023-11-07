import { useNavigate } from 'react-router-dom'
import Logo from '../design/Logo.png'

function Login() {
    const navigate = useNavigate()

    const handleSignInClick = () => {
        navigate('/login')
    }
    return (
        <div className="w-[20%] mx-auto mt-[10rem] shadow-xl p-4 text-left">
            <div className="py-3 ml-auto mr-auto ml-3">
                <img src={Logo} />

                <div className="w-[200px]">
                    <p className="text-xl py-3">Welcome to Judo! Sign in to get your saved list.</p>
                </div>
                <div>
                    <button
                        className="bg-[#9a48d6] rounded-sm text-sm py-2 w-1/2 text-white font-bold hover:bg-purple-400 cursor-pointer ease-in-out duration-300"
                        onClick={handleSignInClick}
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
