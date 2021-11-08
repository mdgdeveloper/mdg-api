// MDG Global Api Universe
// --------------------------
// Dune API v1.0
// Created by Sergio Madrigal
// Original information obtained from Internet
//

const houses = [
  {
    id: 0,
    name: "Atreides",
    symbol: "",
    symbolImg: "",
    formLeader: "Leto Atreides",
    leader: "Paul Atreides",
    leaderTitle: "Duke",
    colors: ["green", "black", "red"],
    formPlanet: "Caladan",
    planet: "Arrakis",
    status: "House Major",
    army: ["regular", "Fremen"],
  },
  {
    id: 1,
    name: "Harkonnen",
    symbol: "Griffin",
    symbolImg: "",
    formLeader: "Vladimir Harkonnen",
    leader: "Feyd-Rautha Harkonnen",
    leaderTitle: "Baron",
    colors: ["blue", "orange"],
    formPlanet: "Giedi Prime",
    planet: "Giedi Prime",
    status: "House Major",
    army: ["Regular Great House", "Mercenaries"],
  },
  {
    id: 2,
    name: "Corrino",
    symbol: "Golden Lion",
    symbolImg: "",
    formLeader: "Shaddam IV",
    leader: "Farad'n Corrino",
    leaderTitle: "Padishah Emperor",
    colors: ["black ", "grey", "yellow"],
    formPlanet: "Kaitain",
    planet: "Salusa Secundus",
    status: "House Major",
    army: ["Sardaukar"],
  }
];


const characters = [
  {
    id: 0,
    name: "Paul Atreides",
    house_id: 0,
  },
  {
    id: 1,
    name: "Leto Atreides",
    house_id: 0,
  }
];

const books = [
  {
    id: 0,
  }
]


const galaxy = [
  {
    id: 0,
  }
]

const religions = [
  {
    id: 0,
  }
]

module.exports = { houses, characters }