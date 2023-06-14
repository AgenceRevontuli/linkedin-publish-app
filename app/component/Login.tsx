"use client"
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {

  const { data: session, status } = useSession();

  return (
    <div>
        {!session ? 
            <button onClick={() => signIn()}>Me connecter</button> : 
            <button onClick={() => signOut()}>Me déconnecter</button>
        }
    </div>
  )
}

export default Login
