import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Wishlist = () => {
    const[user] = useAuthState(auth)
    const[wishlists, setWishlist] = useState([])
    useEffect(()=>{
        const email = user.email;
        const url = `http://localhost:5000/order?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setWishlist(data))

    },[wishlists])

    return (
        <div className='text-center'>
            Your favorite product={wishlists.length}
            {
                wishlists.map(wish =><div className='text-center'>
                    <p className='text-primary fw-bold'>Favorite -{wish.productName}</p>
                </div>)
            }
        </div>
    );
};

export default Wishlist;