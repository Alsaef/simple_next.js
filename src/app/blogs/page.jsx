import Link from 'next/link';
import React from 'react';

const page = async() => {
    const response=await fetch('https://codeblog-server.vercel.app/api/v1/blog',{
       next:{
        revalidate:5,
       }
    })
    const data=await response.json()
    return (
        <div>
            <h2 className='text-xl text-center'>total blogs:{data.length}</h2>
            <div>
                {
                    data.map(blog=>(<div key={blog._id} className="card  w-[70%] mx-auto h-[50%] bg-base-100 shadow-xl">
                    <figure><img src={blog.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{blog.name}</h2>
                      <p>{blog.detils?.slice(0,50)}</p>
                      <Link href={`/blogs/${blog._id}`}><div className="card-actions justify-end">
                   <button className="btn btn-primary">See More</button>
                      </div>
                      </Link>
                    </div>
                  </div>))
                }
            </div>
        </div>
    );
};

export default page;