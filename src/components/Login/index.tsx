import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormState = {
    username: string;
    password: string; 
}

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<FormState>({
        username: '',
        password: '',
    });
    const [error, setError] = useState<string | null>(null);

    const USERNAME:string = "user";
    const PASSWORD:string = "movie";

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {username, password} = form;

        if(username === USERNAME && password === PASSWORD) {
            navigate('/movies')
        } else {
            setError("El usuario o contraseña es invalido")
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value }))
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Login MovieApp</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-xs p-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input 
                        type='text' 
                        name='username' 
                        value={form.username} 
                        onChange={(e) => handleInputChange(e)}
                        className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none"}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input 
                        type='password' 
                        name = 'password'
                        value={form.password} 
                        onChange={(e) => handleInputChange(e)}
                        className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none"}
                    />    
                </div>
                <button 
                    type="submit" 
                    className="
                    w-full 
                    bg-blue-500 hover:bg-blue-700 
                    text-white font-bold 
                    py-2 px-4 rounded 
                    focus:outline-none">Login</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </section>
    )
}

export default Login;