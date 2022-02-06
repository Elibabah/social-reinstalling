import React from "react"
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import { AuthProvider } from "./context/authContext"
import {ProtectedRoute} from "./components/ProtectedRoute"

function App() {
    return ( 
<div className="bg-slate-300 h-screen flex">
    <AuthProvider>
        <Routes>
            <Route path="/11_socialnetwork" element={
            <ProtectedRoute>
            <Home />
            </ProtectedRoute>
        } />

            <Route path="/11_socialnetwork/login" element={<Login/>} />
            <Route path="/11_socialnetwork/register" element={<Register/>} />
        </Routes>
    </AuthProvider>
    </div>
    );
}

export default App;