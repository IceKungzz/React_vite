import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Layout_Components/Sidebar';

function App() {
 

  return (
    <div className="flex h-screen">
      <div className="w-1/4 md:w-1/6 h-full bg-gray-800 text-white">
        <Sidebar/>
      </div>
      <main className='flex-grow bg-gray-100'>
        <Outlet/>
      </main>

    </div>
  );
}

export default App;
