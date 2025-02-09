const ImageDisplay = ({ currentImage }) => {
  return (
    <img
      src={currentImage.imageUrl}
      alt="match"
      className="w-[450px] h-[250px]"
    />
  );
};
export default ImageDisplay;
