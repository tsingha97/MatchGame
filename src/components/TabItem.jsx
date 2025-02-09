const TabItem = ({ tabDetails, onClickTabItem, isActive }) => {
  const { tabId, displayText } = tabDetails;
  const onClickTab = () => onClickTabItem(tabId);
  const isActiveClass = isActive
    ? "underline underline-offset-8 text-[#fec653]"
    : "";
  return (
    <li className={`cursor-pointer ${isActiveClass}`} onClick={onClickTab}>
      {displayText}
    </li>
  );
};
export default TabItem;
