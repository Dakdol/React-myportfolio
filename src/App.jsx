import MyNFT from "./images/PixeLion.png";

function App() {
  // 이렇게 주석을 작성하면 됩니다.

  return (
    <div className="bg-red-100 min-h-screen">
      {/* 이렇게 작성하셔야 합니다. */}
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div>JIN's Portfolio</div>
          {/* <div>
            <img className="w-12" src={MyNFT} alt="MyNFT" />
          </div> */}
          <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-red-300 btn-style">Portfolio</li>
            <li className="bg-green-300 btn-style ">Contact Me</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
