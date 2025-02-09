const Header = ({ score, seconds }) => {
  return (
    <div className="flex justify-between items-center bg-[#2c0e3a] text-white p-4">
      <div>
        <img
          className="w-52"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <div className="flex gap-4 items-center">
        <p>Score: {score}</p>
        <div className="flex items-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt=""
            className="w-6 h-6"
          />
          <p>{seconds}sec</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
