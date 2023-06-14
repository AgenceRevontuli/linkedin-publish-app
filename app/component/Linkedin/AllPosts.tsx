"use client"
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState();
  const { data: session, status } = useSession();

  console.log(session)

  return (
    <div>
        <p>Tous les posts LinkedIn</p>
    </div>
  )
}

export default AllPosts
