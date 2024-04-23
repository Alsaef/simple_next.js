import React from 'react';

const loading = () => {
    return (
        <div className=' flex flex-col items-center mt-[250px] h-screen'>
        <div
            className="w-24 h-24 rounded-full animate-spin border-y-8 border-solid border-green-500 border-t-transparent shadow-md">
        </div>
            </div>
    );
};

export default loading;