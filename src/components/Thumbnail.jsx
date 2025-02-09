const Thumbnail = ({ details, onClickThumbnail }) => {
  const { thumbnailUrl, id } = details;
  return (
    <li>
      <img
        src={details.thumbnailUrl}
        alt={details.category}
        className="w-20 h-20"
        onClick={() => onClickThumbnail(id)}
      />
    </li>
  );
};

export default Thumbnail;
