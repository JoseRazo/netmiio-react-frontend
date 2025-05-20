import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="p-10 text-center bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind está funcionando</h1>
      <p className="text-gray-700 mt-4">Si ves este texto con estilos, TailwindCSS está bien configurado 🎉</p>
    </div>
    </>
  );
}

export default App;
