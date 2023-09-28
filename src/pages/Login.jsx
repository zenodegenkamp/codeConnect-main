import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../../api.js"
import { getAuth } from 'firebase/auth';

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from || "/host";

    React.useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        console.log(user)

        if (user) {
            navigate(from, { replace: true });
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="z-[5] flex flex-col items-center justify-start text-white login-container h-screen ">
            {location.state?.message && (
                <h3 className="login-error flex flex-col items-center justify-start text-white">{location.state.message}</h3>
            )}
            <h1 className="text-2xl font-semibold mt-8 mb-6">Sign in to your account</h1>
            {error?.message && <h3 className="login-error">{error.message}</h3>}

            <form onSubmit={handleSubmit} className=" max-w-md login-form">

                <div className="flex flex-col items-center justify-center">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    className="w-[250px] mb-4 px-4 py-2 border-b border-gray-100 rounded-none bg-gray-900 text-white focus:outline-none focus:border-purple-600"
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    className="w-[250px] mb-4 w-100 px-4 py-2 border-b border-gray-100 rounded-none bg-gray-900 text-white focus:outline-none focus:border-purple-600"
                />
                </div>
               
                <button
                    disabled={status === "submitting"}
                    className={`w-[200px] flex justify-center items-center button-gradient text-white mt-6 md:mb-0 py-2 px-4 font-poppins font-medium text-[12px] text-primary  rounded-[10px] outline-none ml-6`}
                >
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </form>

                    {/* gradient start */}
          <div className="absolute z-[0] top-0 right-0 w-[30%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>

    )

}