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
    const genres = (await queryInterface.sequelize.query('SELECT id, name FROM Genres'))[0];

    await queryInterface.bulkInsert('Movies', [
      {
        name: 'Joker',
        year: 2019,
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
        rating: 8.4,
        duration: 122,
        image: 'joker.jpg',
        genreId: genres.find(({ name }) => name === 'Crime-Mystery').id,
      },
      {
        name: 'Avengers: Endgame',
        year: 2019,
        description: 'After the devastating events of Vengadores: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
        rating: 8.4,
        duration: 181,
        image: 'avengers.jpg',
        genreId: genres.find(({ name }) => name === 'Action').id,
      },
      {
        name: 'Parasite',
        year: 2019,
        description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        rating: 8.6,
        duration: 132,
        image: 'parasite.jpg',
        genreId: genres.find(({ name }) => name === 'Drama').id,
      },
      {
        name: 'Once upon a time in hollywood',
        year: 2019,
        description: 'A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood\'s Golden Age in 1969 Los Angeles.',
        rating: 7.6,
        duration: 161,
        image: 'hollywood.jpg',
        genreId: genres.find(({ name }) => name === 'Comedy').id,
      },
      {
        name: 'Toy story 4',
        year: 2019,
        description: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
        rating: 7.7,
        duration: 100,
        image: 'toy-story.jpeg',
        genreId: genres.find(({ name }) => name === 'Comedy').id,
      },
      {
        name: 'Spider-man: Far from home',
        year: 2019,
        description: 'Following the events of Vengadores: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.',
        rating: 7.5,
        duration: 129,
        image: 'spider-man.png',
        genreId: genres.find(({ name }) => name === 'Action').id,
      },
      {
        name: 'Cold War',
        year: 2019,
        description: 'In the 1950s, a music director falls in love with a singer and tries to persuade her to flee communist Poland for France.',
        rating: 7.6,
        duration: 89,
        image: 'cold-war.jpeg',
        genreId: genres.find(({ name }) => name === 'Drama').id,
      },
      {
        name: 'John Wick: Chapter 3 - Parabellum',
        year: 2019,
        description: 'John Wick is on the run after killing a member of the international assassins\' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.',
        rating: 7.4,
        duration: 130,
        image: 'john-wick.jpg',
        genreId: genres.find(({ name }) => name === 'Thriller').id,
      },
      {
        name: 'How to train your dragon 3',
        year: 2019,
        description: 'When Hiccup discovers Toothless isn\'t the only Night Fury, he must seek "The Hidden World", a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.',
        rating: 7.5,
        duration: 104,
        image: 'train-your-dragon.jpeg',
        genreId: genres.find(({ name }) => name === 'Fantasy').id,
      },
      {
        name: 'El camino - A breaking bad movie',
        year: 2019,
        description: 'Fugitive Jesse Pinkman runs from his captors, the law, and his past.',
        rating: 7.3,
        duration: 122,
        image: 'el-camino.jpeg',
        genreId: genres.find(({ name }) => name === 'Fantasy').id,
      },
      {
        name: 'Midsommar',
        year: 2019,
        description: 'A couple travels to Scandinavia to visit a rural hometown\'s fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.',
        rating: 7.1,
        duration: 148,
        image: 'midsommar.jpg',
        genreId: genres.find(({ name }) => name === 'Horror').id,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Movies', null, {});
  }
};
