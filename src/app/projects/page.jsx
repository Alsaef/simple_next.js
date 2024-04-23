import Card from '@/components/Card/Card';
import React from 'react';
export const metadata = {
    title: "Project | Developer Ratul",
    description: "AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management.",
    openGraph: {
        images: 'https://i.ibb.co/6nLnzyq/ratul-bg.png',
      },
  };
const page =async() => {

    const res=await fetch('https://developer-server.vercel.app/projects',{
        next:{
            revalidate:1
        }
    })
    const data=await res.json()
    return (
        <div className='h-screen'>
             <div className=' bg-orange-100 h-screen '>
               <div className='py-5'>
               <h2 className=' text-4xl font-bold text-center py-3'>My Realtime Project</h2>
            <p className='text-xl text-orange-600 text-center py-2'>What I Know</p>
               </div>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-6 mb-2'>
                {
                    data.map((project,index) =>(
                       <Card project={project} key={index}></Card>
                    ))
                }
            </div>
        </div>  
        </div>
    );
};

export default page;