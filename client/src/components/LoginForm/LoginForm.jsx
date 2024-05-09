import './loginForm.css'
export default function LoginForm({ username, password, setUsername, setPassword, doLogin }) {
    const handleLogin = (e) => {
        e.preventDefault()
        doLogin();
    }
    return (

        <div className="loginForm">
            <span>Benvenuto!</span>
            <span>Inserisci le credenziali per accedere</span>
            <form onSubmit={handleLogin}>

                <div>
                    <input placeholder="Username"type="text" name="username" value={username} onChange={({ target }) => setUsername(target.value)} />
                    <input placeholder="Password" type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} />

                </div>
                <div><button type="submit">Accedi</button></div>

            </form>
        </div>

    )
}
