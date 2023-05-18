import React,{useState} from "react";


const Login = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log('email', email);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    }
    return (
        <>
            <div class="card m-5" style={{width:400}}>
            <h1 className="text-center mt-2">Login</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" class="btn btn-success w-100" disabled={!email.trim() || !password.trim()}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;