'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const actors = [
      {
        name: 'Joaquin Phoenix',
        birthday: '1974-10-28',
        bio: 'Joaquin Phoenix was born Joaquin Rafael Bottom in San Juan, Puerto Rico, to Arlyn (Dunetz) and John Bottom, and is the middle child in a brood of five. His parents, from the continental United States, were then serving as Children of God missionaries.',
        image: 'joaquin-phoenix.jpeg',
        movies: ['Joker'],
      },
      {
        name: 'Robert De Niro',
        birthday: '1943-08-17',
        bio: 'Born in Manhattan in New York City, De Niro studied acting at HB Studio, Stella Adler Conservatory, and Lee Strasberg\'s Actors Studio. His first major role was in Greetings (1968), and gained recognition with his role as a baseball player in the sports drama Bang the Drum Slowly (1973). His first collaboration with Scorsese was Mean Streets (1973), where he played small-time criminal "Johnny Boy". Stardom followed with his role as young Vito Corleone in Francis Ford Coppola\'s crime epic The Godfather Part II (1974), which won De Niro the Academy Award for Best Supporting Actor. For his portrayal of Travis Bickle in Taxi Driver (1976) and a soldier in the Vietnam War drama The Deer Hunter (1978) he earned two Academy Award nominations for Best Actor.',
        image: 'robert-de-niro.jpeg',
        movies: ['Joker'],
      },
      {
        name: 'Robert Downey Jr.',
        birthday: '1965-04-04',
        bio: 'Is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success in middle age. In 2008, Downey was named by Time magazine among the 100 most influential people in the world, and from 2013 to 2015, he was listed by Forbes as Hollywood\'s highest-paid actor.',
        image: 'robert-downey-jr.jpeg',
        movies: ['Avengers: Endgame'],
      },
      {
        name: 'Chris Evans',
        birthday: '1981-06-13',
        bio: 'Is an American actor, best known for his role as Captain America in the Marvel Cinematic Universe (MCU) series of films. Evans began his career with roles in television series, such as in Opposite Sex in 2000. Following appearances in several teen films including 2001\'s Not Another Teen Movie, he gained attention for his portrayal of Marvel Comics character Human Torch in 2005\'s Fantastic Four, and its sequel Fantastic Four: Rise of the Silver Surfer (2007). Evans made further appearances in film adaptations of comic books and graphic novels: TMNT (2007), Scott Pilgrim vs. the World (2010), and Snowpiercer (2013).',
        image: 'chris-evans.jpeg',
        movies: ['Avengers: Endgame'],
      },
      {
        name: 'Chris Hemsworth',
        birthday: '1981-06-13',
        bio: 'Is an Australian actor. He first rose to prominence in Australia playing Kim Hyde in the Australian television series Home and Away (2004–2007) before beginning a film career in Hollywood. Hemsworth is best known for playing Thor in eight Marvel Cinematic Universe films, beginning with Thor (2011) and appearing most recently in Avengers: Endgame (2019), which established him among the world\'s highest-paid actors',
        image: 'chris-hemsworth.jpeg',
        movies: ['Avengers: Endgame'],
      },
      {
        name: 'Song Kang-ho',
        birthday: '1967-02-25',
        bio: 'Is a South Korean actor who made his debut as a movie actor in The Day a Pig Fell into the Well in 1996, and came to national prominence with a series of critically acclaimed performances, including No. 3, Joint Security Area, Sympathy for Mr. Vengeance, Memories of Murder, The Host, and A Taxi Driver. Song rose to international prominence for his performances in Snowpiercer (2013) and Parasite (2019), the latter of which won the Palme d\'Or at the Cannes Film Festival and the Academy Award for Best Picture. In 2020, The New York Times ranked him #6 on its list of the 25 Greatest Actors of the 21st Century.',
        image: 'chris-hemsworth.jpeg',
        movies: ['Parasite'],
      },
      {
        name: 'Leonardo DiCaprio',
        birthday: '1974-11-11',
        bio: 'Is an American actor, film producer, and environmentalist. He has often played unconventional roles, particularly in biopics and period films. As of 2019, his films have grossed $7.2 billion worldwide, and he has placed eight times in annual rankings of the world\'s highest-paid actors.',
        image: 'leonardo-dicaprio.jpeg',
        movies: ['Once upon a time in hollywood'],
      },
      {
        name: 'Brad Pitt',
        birthday: '1963-12-18',
        bio: 'William Bradley Pitt (born December 18, 1963) is an American actor and film producer. He has received multiple awards, including two Golden Globe Awards and an Academy Award for his acting, in addition to another Academy Award, another Golden Globe Award and a Primetime Emmy Award as a producer under his production company, Plan B Entertainment.',
        image: 'brad-pitt.jpeg',
        movies: ['Once upon a time in hollywood'],
      },
      {
        name: 'Tom Hanks',
        birthday: '1956-07-09',
        bio: 'Thomas Jeffrey Hanks (born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, he is one of the most popular and recognizable film stars worldwide, and is regarded as an American cultural icon. Hanks\'s films have grossed more than $4.9 billion in North America and more than $9.96 billion worldwide, making him the fourth-highest-grossing actor in North America.',
        image: 'tom-hanks.jpeg',
        movies: ['Toy story 4'],
      },
      {
        name: 'Tom Holland',
        birthday: '1996-06-01',
        bio: 'Thomas Stanley Holland (born 1 June 1996)[1] is an English actor. A graduate of the BRIT School in London, he began his acting career on stage in the title role of Billy Elliot the Musical in the West End theatre from 2008 to 2010. He gained further recognition for his starring role in the disaster film The Impossible (2012), receiving the London Film Critics Circle Award for Young British Performer of the Year.',
        image: 'tom-holland.jpeg',
        movies: ['Spider-man: Far from home'],
      },
      {
        name: 'Joanna Kulig',
        birthday: '1982-06-24',
        bio: 'Joanna Kulig is a Polish film, stage and television actress, and singer. In 2018, she received the Best Actress Award at the 31st European Film Awards for her performance in Cold War. She is also a two-time Polish Film Award recipient for Best Supporting Actress (Elles) and Best Actress (Cold War).',
        image: 'joanna-kulig.jpeg',
        movies: ['Cold War'],
      },
      {
        name: 'Keanu Reeves',
        birthday: '1964-09-02',
        bio: 'Keanu Charles Reeves is a Canadian[b] actor. Born in Beirut and raised in Toronto, Reeves began acting in theatre productions and in television films before making his feature film debut in Youngblood (1986). He had his breakthrough role in the science fiction comedy Bill & Ted\'s Excellent Adventure (1989), and he later reprised his role in its sequels. He gained praise for playing a hustler in the independent drama My Own Private Idaho (1991), and established himself as an action hero with leading roles in Point Break (1991) and Speed (1994).',
        image: 'keanu-reeves.jpeg',
        movies: ['John Wick: Chapter 3 - Parabellum'],
      },
      {
        name: 'Jay Baruchel',
        birthday: '1982-04-09',
        bio: 'Jonathan Adam Saunders Baruchel is a Canadian actor, director, stand-up comedian, and screenwriter. He is known for his voice role as Hiccup Haddock in the How to Train Your Dragon franchise, and for his roles in comedy movies such as Knocked Up, Tropic Thunder, The Trotsky, Fanboys, She\'s Out of My League, Goon, This Is the End and the action-fantasy film The Sorcerer\'s Apprentice. He had lead roles as Josh Greenberg in the FXX comedy television series Man Seeking Woman and Steven Karp in Judd Apatow\'s comedy series Undeclared.',
        image: 'jay-baruchel.jpeg',
        movies: ['How to train your dragon 3'],
      },
      {
        name: 'Aaron Paul',
        birthday: '1979-08-27',
        bio: 'Aaron Paul Sturtevant (born August 27, 1979), known professionally as Aaron Paul, is an American actor and producer. He is best known for portraying Jesse Pinkman in the AMC series Breaking Bad (2008–2013), for which he won several awards, including the Critics\' Choice Television Award for Best Supporting Actor in a Drama Series (2014), Satellite Award for Best Supporting Actor – Series, Miniseries, or Television Film (2013), and Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series. This made him one of only two actors to win the latter category three times (2010, 2012, 2014), since its separation into comedy and drama.[note 1] He has also won the Saturn Award for Best Supporting Actor on Television three times (2009, 2011, 2013), more than any other actor in that category. He reprised the role of Jesse Pinkman six years after the end of the series in the 2019 Netflix film El Camino: A Breaking Bad Movie, earning further critical acclaim.',
        image: 'aaron-paul.jpeg',
        movies: ['El camino - A breaking bad movie'],
      },
      {
        name: 'Jonathan Banks',
        birthday: '1947-01-31',
        bio: 'Jonathan Ray Banks[1] (born January 31, 1947)[2] is an American actor. His first notable film roles were in the films Airplane! (1980), 48 Hrs. (1982), and Beverly Hills Cop (1984). He has received critical acclaim for his role as former police officer turned private investigator, fixer, and hitman Mike Ehrmantraut in the television series Breaking Bad (2009–2012), its spin-off series Better Call Saul (2015–present), and its sequel film, El Camino: A Breaking Bad Movie (2019). He is also known for his breakthrough role as Frank McPike in Wiseguy (1987–1990).',
        image: 'jonathan-banks.jpeg',
        movies: ['El camino - A breaking bad movie'],
      },
      {
        name: 'Florence Pugh',
        birthday: '1996-01-03',
        bio: 'Florence Pugh is an English actress. Born in Oxford, she made her acting debut in 2014 in the mystery film The Falling. Pugh gained recognition for her leading role as a violent young bride in the independent drama Lady Macbeth (2016), which won her a British Independent Film Award. After starring in the 2018 films King Lear and Outlaw King, she drew praise for her leading role in the 2018 miniseries The Little Drummer Girl. Pugh was nominated for the BAFTA Rising Star Award that same year.',
        image: 'florence-pugh.jpeg',
        movies: ['Midsommar'],
      },
      {
        name: 'Jack Reynor',
        birthday: '1992-01-23',
        bio: 'Jack Reynor is an Irish actor. His notable roles include the lead in Lenny Abrahamson\'s film What Richard Did (2012), for which he won an IFTA Award for Best Film Actor, the blockbuster Transformers: Age of Extinction, Glassland, for which he won the World Cinema Dramatic Special Jury Award for Acting at the Sundance Film Festival, Macbeth, Sing Street, Midsommar, and the CBS All Access streaming series Strange Angel.',
        image: 'jack-reynor.jpeg',
        movies: ['Midsommar'],
      },
    ];

    const actorsData = actors.map(({ movies, ...restProps }) => restProps);
    await queryInterface.bulkInsert('Actors', actorsData, {});
    const actorsDB = (await queryInterface.sequelize.query('SELECT id, name FROM Actors'))[0];
    const moviesDB = (await queryInterface.sequelize.query('SELECT id, name FROM Movies'))[0];

    let associations = [];

    for (let i = 0; actorsDB.length > i; i++) {
      const { id: actorId, name } = actorsDB[i];
      const actorMovies = actors.find(({ name: actorName }) => actorName === name).movies;
      for (let j = 0; actorMovies.length > j; j++) {
        const movie = actorMovies[j];
        const { id: movieId } = moviesDB.find(({ name: movieDB }) => movieDB === movie);
        associations = [ ...associations, { actorId, movieId } ];
      }
    }

    await queryInterface.bulkInsert('Movie_Actors', associations, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Actors', null, {});
     await queryInterface.bulkDelete('Movie_Actors', null, {});
  }
};
