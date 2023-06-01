import React from 'react';

interface CustomAsideProps{
    title: string;
    children: any
}


const CustomAside = ({ title, children }:CustomAsideProps) => {
  return (
<aside className=" w-1/3 p-4">
     <h2 className="text-lg mb-6 pt-4 text-blue-700">{title}</h2>
     <div className=" h-10">
        {children}
      </div>
    </aside>
  );
};

export default CustomAside;