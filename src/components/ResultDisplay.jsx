const ResultDisplay = ({ score, resetGame }) => {
  return (
    <div className="font-sans text-white pt-28 h-[800px] w-[800px] mx-auto bg-cover bg-[url('https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png')] flex flex-col gap-3 justify-center items-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt=""
        className="w-1/2 h-[300px] object-contain mt-6"
      />
      <h1 className="text-3xl">Your Score</h1>
      <p className="text-4xl font-medium mb-2">{score}</p>
      <button
        onClick={resetGame}
        className="flex justify-around items-center gap-2 px-4 py-2 rounded-md font-medium bg-[#cf60c8]"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt=""
          className="w-5 h-5 object-contain"
        />
        Play Again
      </button>
    </div>
  );
};
export default ResultDisplay;
