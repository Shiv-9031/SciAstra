import "./card2.css";
export const Card2 = ({ image, title, subtitle, info, dimension }) => {
  return (
    <div className="card2">
      <img src={image} className="card2-img" />
      <div className="card2-body">
        <h1 className="card2-title">{title}</h1>
        <p className="card2-sub-title">{subtitle}</p>
        <p className="card2-info">{info}</p>
      </div>
    </div>
  );
};
