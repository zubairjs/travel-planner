const countryInfo = {
  italy: {
    emoji: '🗼',
    info: "Italy's Leaning Tower of Pisa took over 190 years to finish!",
  },
  australia: {
    emoji: '🦘',
    info: 'Australia has more kangaroos than people over 50 million kangaroos to 26 million humans!',
  },
  canada: {
    emoji: '🏖',
    info: 'Canada has the longest coastline in the world (over 202,000 kilometers) enough to circle the Earth five times!',
  },
  brazil: {
    emoji: '🌲',
    info: "The Amazon Rainforest in  Brazil produces about 20% of the world's oxygen and contains 10% of all known species on Earth!",
  },
  netherlands: {
    emoji: '🌊',
    info: 'About a quarter of The Netherlands is actually below sea level!',
  },
  egypt: {
    emoji: '🏗',
    info: "Ancient Egypt's Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.",
  },
  sweden: {
    emoji: '♻',
    info: 'Sweden recycles 99% of its household waste.',
  },
  japan: {
    emoji: '🗻',
    info: "Japan's KAGRA, located deep underground in the Kamioka mine, is the world's first cryogenic gravitational wave detector built in Asia",
  },
};

function getCountryInfo(country) {
  return countryInfo[country];
}

export { getCountryInfo };
