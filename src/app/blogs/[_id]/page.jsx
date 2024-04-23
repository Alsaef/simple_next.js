import Link from 'next/link';
import React from 'react';
const page =async({params}) => {
    const res=await fetch(`https://codeblog-server.vercel.app/api/v1/blog/${params._id}`)
    const blog=await res.json()
    
    return (
        <div>
            <h2>deatils</h2>
            <div className="card  w-[70%] mx-auto h-[50%] bg-base-100 shadow-xl">
                    <figure><img src={blog.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{blog.name}</h2>
                      <p>{blog.detils}</p>
                      <Link href='/blogs'><div className="card-actions justify-end">
                   <button className="btn btn-primary">See More</button>
                      </div>
                      </Link>
                    </div>
                  </div>
        </div>
    );
};

export default page;