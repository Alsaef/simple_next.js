import Contact from '@/components/ContactComponent/Contact';
import React from 'react';
export const metadata = {
    title: "Contact | Developer Ratul",
    description: "AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management.",
    openGraph: {
        images: 'https://i.ibb.co/6nLnzyq/ratul-bg.png',
      },
  };
const page = () => {

    return (
        <div>
    <Contact></Contact>
        </div>
    );
};

export default page;