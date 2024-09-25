import { useState } from 'react';
import { signIn } from 'next-auth/react';
import FrontendHeader from '../components/frontend/FrontendHeader';
import FrontendFooter from '../components/frontend/FrontendFooter';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router'; // Import useRouter

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(null); 
    const router = useRouter(); // Initialize useRouter

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setErrorMessage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(null);

        if (isLogin) {
            // Handle login
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });

            if (result?.error) {
                setErrorMessage(result.error);
            } else {
                console.log('Login successful');
                router.push('/admin/dashboard'); // Redirect to the dashboard
            }
        } else {
            // Handle registration
            const response = await fetch('/api/auth?action=register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Registration successful:', data);
                // Optionally log in the user after registration
                await signIn('credentials', {
                    redirect: false,
                    email,
                    password,
                });
                // Redirect or handle successful registration
            } else {
                setErrorMessage(data.message || 'Registration failed');
            }
        }
    };

    const handleGoogleLogin = () => signIn('google');
    const handleFacebookLogin = () => signIn('facebook');
    const handleGitHubLogin = () => signIn('github');

    return (
        <div>
            <FrontendHeader />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Register'}</h2>

                    {errorMessage && (
                        <div className="mb-4 text-red-600">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="mb-4">
                                <label className="block text-gray-700" htmlFor="name">Name</label>
                                <input
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="password">Password</label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                        <button
                            type="button"
                            onClick={toggleForm}
                            className="w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none"
                        >
                            {isLogin ? 'Create an account' : 'Already have an account?'}
                        </button>
                    </form>
                    <hr className="my-4" />
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center w-full py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none"
                        >
                            <FaGoogle className="mr-2" />
                            Login with Google
                        </button>
                        <button
                            onClick={handleFacebookLogin}
                            className="flex items-center justify-center w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            <FaFacebook className="mr-2" />
                            Login with Facebook
                        </button>
                        <button
                            onClick={handleGitHubLogin}
                            className="flex items-center justify-center w-full py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none"
                        >
                            <FaGithub className="mr-2" />
                            Login with GitHub
                        </button>
                    </div>
                </div>
            </div>
            <FrontendFooter />
        </div>
    );
};

export default LoginPage;
