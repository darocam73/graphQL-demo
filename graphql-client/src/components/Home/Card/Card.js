import { Link } from 'react-router-dom';

const Card = ({ title, description, link, image }) => (
  <div className="card m-4" style={{ width: '18rem' }}>
    <img src={image} className="card-img-top p-5" alt={title} />
    <hr />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
    <div className="card-body text-center">
      <Link to={link.to} className="btn btn-info text-light px-5">
        <strong>{link.text}</strong>
      </Link>
    </div>
  </div>
);

export default Card;
