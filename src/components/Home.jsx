import { useAuth } from "../context/authContext"
import { db } from "../firebase"
import {collection, getDocs, getDoc, query, doc, addDoc, deleteDoc, updateDoc} from "firebase/firestore"
import * as React from 'react';
import {useState} from "react";
import { useNavigate } from "react-router-dom"


export function Home() {

      const {user, logout, loading} = useAuth()
      const navigate = useNavigate()

      const handleLogout = async () => {
            try {
                  await logout()
                  navigate("/11_socialnetwork/")
            } catch (error) {
                  console.log(error)
            }
      }
      if(loading) return <h1>loading...</h1>

      const handleSubmit = (e) => {
            e.preventDefault()
            console.log(e)
      }

/*const[user, setUser] = useState({
            title: "",
            story: ""
      })*/

      const createPost = ()  => {
            addDoc(collection(db, "social"), {})
      }


      return(
            <div>
                  Welcome, {user.displayName || user.email}
                  <button onClick={handleLogout}>logOut</button>

            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
                  <label htmlFor="title" className='block text-gray-700 text-sm font-fold mb-2'>Cuéntanos tu historia</label>
                  <input type="text" name="title" id="title" placeholder="título" className='shadow appareance-non border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            </div>

            <div className='mb-4'>
                  <input type="text" name="story" id="story" placeholder="Escribe tu historia" className='shadow appareance-non border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'className='shadow appareance-non border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            </div>
            <div className='flex items-center justify-between'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Create Post</button>


</div>
      </form> 

            </div>
      )
}