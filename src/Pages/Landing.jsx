import React from 'react';
import Card from '../Components/Card.jsx';
import ReferenceImg from '../assets/references.svg';
import ForumImg from '../assets/forum.svg';
import ArticleImg from '../assets/article.svg';
import TutorialImg from '../assets/tutorial.svg';

const Landing = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight - 100, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="w-screen h-screen flex justify-center items-center text-white
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-t from-gray-600 to-white">
            CPLUSPLUS.com
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white mt-4">
            Your all-in-one hub for C++ tutorials, references, and expert guidance.
          </h2>
          <button className="border-2 border-blue-900 px-6 py-3 mt-6 rounded-full 
            hover:bg-blue-700 transition duration-300 text-lg md:text-xl"
            onClick={handleScrollDown}>
            Get Started
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-screen min-h-screen px-4 sm:px-6 md:px-[6vw] grid 
        sm:grid-cols-6 lg:grid-cols-12 xl:grid-cols-12 gap-10 
        [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)] py-10">
        <div className="col-start-2 col-span-5">
          <Card title="References" to="/references" img={ReferenceImg} />
        </div>
        <div className="col-span-5">
          <Card title="Articles" to="/articles" img={ArticleImg} />
        </div>
        <div className="col-start-2 col-span-5">
          <Card title="Tutorial" to="/tutorial" img={TutorialImg} />
        </div>
        <div className="col-span-5">
          <Card title="Forum" to="/forum" img={ForumImg} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
