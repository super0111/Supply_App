const Card = ({ cardName, imageName }) => {
  return (
    <div className="miniCard">
      <img src={imageName} alt="stock" />
      <button className="buttonStyle">{cardName}</button>
    </div>
  );
};
export default Card;
