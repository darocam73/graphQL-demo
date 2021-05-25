import Card from './Card';

const Home = () => (
  <div className="container">
    <div className="row justify-content-center">
      <Card
        title="Movies"
        description="Top 10 as rated by IMDb Users"
        link={{ to: "/movies", text: "View" }}
        image="/003-popcorn.svg"
      />
      <Card
        title="Actors"
        description="List of actors"
        link={{ to: "/actors", text: "View" }}
        image="/004-actor.svg"
      />
      <Card
        title="Genres"
        description="List of genres"
        link={{ to: "/genres", text: "View" }}
        image="/001-theater.svg"
      />
    </div>
  </div>
);

export default Home;
