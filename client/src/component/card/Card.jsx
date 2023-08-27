import "./Card.css";

export const Card = ({ image, title, subtitle, info, dimension }) => {
  return (
    <div className="card" style={{ width: dimension, height: dimension }}>
      <img src={image} className="card-img" />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-sub-title">{subtitle}</p>
        <p className="card-info">{info}</p>
      </div>
    </div>
  );
};
