// eslint-disable-next-line no-unused-vars
import React from 'react';
import banner from '/banner.jpg'

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage:`url(${banner})`  }}
    >
      <div className="text-center text-[#100f0f]">
        <h1 className="text-5xl font-bold">Taste Our Delicious Best Foods</h1>
        <p className="text-xl mt-4">Welcome to our food website We serve what you love.Explore our website to find your favorite food</p>
      </div>
    </section>
    
  );
};

export default Hero;
