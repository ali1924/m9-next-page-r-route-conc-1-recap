import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BeakerIcon, BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='bg-gray-100 flex justify-between items-center'>
            {/* logo section */}
            <Link to='/' className='inline-flex items-center g-4'>
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span>
            </Link>

            {/* nav section */}
            
        </div>
    );
};

export default Header;