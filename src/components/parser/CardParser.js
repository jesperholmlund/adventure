import "../../dist/css/Parser.css";

const CardParser = (props) => {
  const handleClick = () => {
    const value = props.text;
    //setCardStack((cardStack) => [...cardStack, value]);
    props.callBack(value);
  };
  return (
    <div
      className="card-body cardParser"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></div>
  );
};
export default CardParser;
