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
   await queryInterface.bulkInsert('Genres', [
    {
      name: 'Action',
      description: 'An action story is similar to adventure, and the protagonist usually takes a risky turn, which leads to desperate situations (including explosions, fight scenes, daring escapes, etc.). Action and adventure are usually categorized together (sometimes even as "action-adventure") because they have much in common, and many stories fall under both genres simultaneously (for instance, the James Bond series can be classified as both).',
    },
    {
      name: 'Comedy',
      description: 'Comedy is a story that tells about a series of funny, or comical events, intended to make the audience laugh. It is a very open genre, and thus crosses over with many other genres on a frequent basics.',
    },
    {
      name: 'Drama',
      description: 'In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera (operatic drama), police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy).',
    },
    {
      name: 'Fantasy',
      description: 'A fantasy story is about magic or supernatural forces, as opposed to technology as seen in science fiction. Depending on the extent of these other elements, the story may or may not be considered to be a "hybrid genre" series; for instance, even though the Harry Potter series canon includes the requirement of a particular gene to be a wizard, it is referred to only as a fantasy series.',
    },
    {
      name: 'Horror',
      description: 'A horror story is told to deliberately scare or frighten the audience, through suspense, violence or shock. H. P. Lovecraft distinguishes two primary varieties in the "Introduction" to Supernatural Horror in Literature: 1) Physical Fear or the "mundanely gruesome;" and 2) the true Supernatural Horror story or the "Weird Tale." The supernatural variety is occasionally called "dark fantasy," since the laws of nature must be violated in some way, thus qualifying the story as "fantastic".',
    },
    {
      name: 'Crime-Mystery',
      description: 'A crime story is often about a crime that is being committed or was committed, but can also be an account of a criminal\'s life. A mystery story follows an investigator as they attempt to solve a puzzle (often a crime). The details and clues are presented as the story continues and the protagonist discovers them and by the end of the story the mystery is solved. For example, in the case of a crime mystery, the perpetrator and motive behind the crime are revealed and the perpetrator is brought to justice. Mystery novels are often written in series, which facilitates a more in-depth development of the primary investigator.',
    },
    {
      name: 'Romance',
      description: 'a romance is understood to be "love stories," emotion-driven stories that are primarily focused on the relationship between the main characters of the story. Beyond the focus on the relationship, the biggest defining characteristic of the romance genre is that a happy ending is always guaranteed, perhaps marriage and living "happily ever after," or simply that the reader sees hope for the future of the romantic relationship.',
    },
    {
      name: 'Thriller',
      description: 'A thriller is a story that is usually a mix of fear and excitement. It has traits from the suspense genre and often from the action, adventure or mystery genres, but the level of terror makes it borderline horror fiction at times as well. It generally has a dark or serious theme, which also makes it similar to drama.',
    },
    {
      name: 'Western',
      description: 'Stories in the Western genre are set in the American West, between the time of the Civil war and the early 20th century. The setting of a wilderness or uncivilized area is especially important to the genre, and the setting is often described richly and in-depth. They focus on the adventure of the main character(s) and the contrast between civilization or society and the untamed wilderness, often featuring the characters working to bring civilization to the wilderness.',
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
     await queryInterface.bulkDelete('Genre', null, {});
  }
};
