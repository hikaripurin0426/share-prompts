'use client';

import {useState, useEffect} from 'react';

import Profile from '@components/Profile';
import { useSearchParams } from 'next/navigation';

const UserProfile = ({params}) => {
    const [posts, setPosts] = useState([])
    const searchParams = useSearchParams();
    const username = searchParams.get('name');
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();
            setPosts(data);
        }
        if(params?.id) fetchPosts();
    }, [])

    return (
    <Profile
        name={username}
        desc='This should be implemented'
        data={posts}
    />
    )
}

export default UserProfile