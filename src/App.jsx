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
            <Route path="/social-reinstalling" element={
            <ProtectedRoute>
            <Home />
            </ProtectedRoute>
        } />

            <Route path="/social-reinstalling/login" element={<Login/>} />
            <Route path="/social-reinstalling/register" element={<Register/>} />
        </Routes>
    </AuthProvider>
    </div>
    );
}

export default App;