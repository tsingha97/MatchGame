import Header from "./Header";
import { imagesList, tabsList } from "../data/List";
import { useEffect, useState } from "react";
import ImageDisplay from "./ImageDisplay";
import TabItem from "./TabItem";
import Thumbnail from "./Thumbnail";
import ResultDisplay from "./ResultDisplay";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(imagesList[0]);
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  const filteredImageList = imagesList.filter(
    (image) => image.category === activeTabId
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        tick();
      } else {
        setGameOver(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const onClickTabItem = (tabId) => {
    setActiveTabId(tabId);
  };

  const onClickThumbnail = (id) => {
    if (id === currentImage.id) {
      setCurrentImage(
        imagesList[Math.floor(Math.random() * imagesList.length)]
      );
      setScore((prevScore) => prevScore + 1);
    }
  };

  const tick = () => {
    setSeconds((prevSeconds) => prevSeconds - 1);
  };

  const resetGame = () => {
    setCurrentImage(imagesList[0]);
    setScore(0);
    setSeconds(60);
    setGameOver(false);
  };

  return (
    <>
      <Header score={score} seconds={seconds} />
      <div className="pb-20 flex flex-col gap-5 justify-center items-center min-h-[calc(100vh-80px)] bg-[url('https://assets.ccbp.in/frontend/react-js/match-game-bg.png')] bg-cover">
        {gameOver ? (
          <ResultDisplay score={score} resetGame={resetGame} />
        ) : (
          <>
            <ImageDisplay currentImage={currentImage} />
            <ul className="flex list-none justify-around items-center font-bold text-white w-[200px]">
              {tabsList.map((tab) => (
                <TabItem
                  key={tab.tabId}
                  tabDetails={tab}
                  onClickTabItem={setActiveTabId}
                  isActive={activeTabId === tab.tabId}
                />
              ))}
            </ul>
            <ul className="flex flex-wrap justify-center items-center gap-2 w-[500px]">
              {filteredImageList.map((image) => (
                <Thumbnail
                  key={image.id}
                  details={image}
                  onClickThumbnail={onClickThumbnail}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};
export default Home;
