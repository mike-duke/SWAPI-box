const mockData = {
  people: {
    "count": 87,
    "next": "https://swapi.co/api/people/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/14/",
                "https://swapi.co/api/vehicles/30/"
            ],
            "starships": [
                "https://swapi.co/api/starships/12/",
                "https://swapi.co/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.co/api/people/1/"
        },
        {
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:10:51.357000Z",
            "edited": "2014-12-20T21:17:50.309000Z",
            "url": "https://swapi.co/api/people/2/"
        },
        {
            "name": "R2-D2",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, blue",
            "eye_color": "red",
            "birth_year": "33BBY",
            "gender": "n/a",
            "homeworld": "https://swapi.co/api/planets/8/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:11:50.376000Z",
            "edited": "2014-12-20T21:17:50.311000Z",
            "url": "https://swapi.co/api/people/3/"
        },
        {
            "name": "Darth Vader",
            "height": "202",
            "mass": "136",
            "hair_color": "none",
            "skin_color": "white",
            "eye_color": "yellow",
            "birth_year": "41.9BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/13/"
            ],
            "created": "2014-12-10T15:18:20.704000Z",
            "edited": "2014-12-20T21:17:50.313000Z",
            "url": "https://swapi.co/api/people/4/"
        },
        {
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "gender": "female",
            "homeworld": "https://swapi.co/api/planets/2/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/30/"
            ],
            "starships": [],
            "created": "2014-12-10T15:20:09.791000Z",
            "edited": "2014-12-20T21:17:50.315000Z",
            "url": "https://swapi.co/api/people/5/"
        },
        {
            "name": "Owen Lars",
            "height": "178",
            "mass": "120",
            "hair_color": "brown, grey",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "52BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:52:14.024000Z",
            "edited": "2014-12-20T21:17:50.317000Z",
            "url": "https://swapi.co/api/people/6/"
        },
        {
            "name": "Beru Whitesun lars",
            "height": "165",
            "mass": "75",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "47BBY",
            "gender": "female",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:53:41.121000Z",
            "edited": "2014-12-20T21:17:50.319000Z",
            "url": "https://swapi.co/api/people/7/"
        },
        {
            "name": "R5-D4",
            "height": "97",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, red",
            "eye_color": "red",
            "birth_year": "unknown",
            "gender": "n/a",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:57:50.959000Z",
            "edited": "2014-12-20T21:17:50.321000Z",
            "url": "https://swapi.co/api/people/8/"
        },
        {
            "name": "Biggs Darklighter",
            "height": "183",
            "mass": "84",
            "hair_color": "black",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "24BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/12/"
            ],
            "created": "2014-12-10T15:59:50.509000Z",
            "edited": "2014-12-20T21:17:50.323000Z",
            "url": "https://swapi.co/api/people/9/"
        },
        {
            "name": "Obi-Wan Kenobi",
            "height": "182",
            "mass": "77",
            "hair_color": "auburn, white",
            "skin_color": "fair",
            "eye_color": "blue-gray",
            "birth_year": "57BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/20/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/38/"
            ],
            "starships": [
                "https://swapi.co/api/starships/48/",
                "https://swapi.co/api/starships/59/",
                "https://swapi.co/api/starships/64/",
                "https://swapi.co/api/starships/65/",
                "https://swapi.co/api/starships/74/"
            ],
            "created": "2014-12-10T16:16:29.192000Z",
            "edited": "2014-12-20T21:17:50.325000Z",
            "url": "https://swapi.co/api/people/10/"
        }
    ]
  }, 
  planets: {
    "count": 61,
    "next": "https://swapi.co/api/planets/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Alderaan",
            "rotation_period": "24",
            "orbital_period": "364",
            "diameter": "12500",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grasslands, mountains",
            "surface_water": "40",
            "population": "2000000000",
            "residents": [
                "https://swapi.co/api/people/5/",
                "https://swapi.co/api/people/68/",
                "https://swapi.co/api/people/81/"
            ],
            "films": [
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:35:48.479000Z",
            "edited": "2014-12-20T20:58:18.420000Z",
            "url": "https://swapi.co/api/planets/2/"
        },
        {
            "name": "Yavin IV",
            "rotation_period": "24",
            "orbital_period": "4818",
            "diameter": "10200",
            "climate": "temperate, tropical",
            "gravity": "1 standard",
            "terrain": "jungle, rainforests",
            "surface_water": "8",
            "population": "1000",
            "residents": [],
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:37:19.144000Z",
            "edited": "2014-12-20T20:58:18.421000Z",
            "url": "https://swapi.co/api/planets/3/"
        },
        {
            "name": "Hoth",
            "rotation_period": "23",
            "orbital_period": "549",
            "diameter": "7200",
            "climate": "frozen",
            "gravity": "1.1 standard",
            "terrain": "tundra, ice caves, mountain ranges",
            "surface_water": "100",
            "population": "unknown",
            "residents": [],
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "created": "2014-12-10T11:39:13.934000Z",
            "edited": "2014-12-20T20:58:18.423000Z",
            "url": "https://swapi.co/api/planets/4/"
        },
        {
            "name": "Dagobah",
            "rotation_period": "23",
            "orbital_period": "341",
            "diameter": "8900",
            "climate": "murky",
            "gravity": "N/A",
            "terrain": "swamp, jungles",
            "surface_water": "8",
            "population": "unknown",
            "residents": [],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:42:22.590000Z",
            "edited": "2014-12-20T20:58:18.425000Z",
            "url": "https://swapi.co/api/planets/5/"
        },
        {
            "name": "Bespin",
            "rotation_period": "12",
            "orbital_period": "5110",
            "diameter": "118000",
            "climate": "temperate",
            "gravity": "1.5 (surface), 1 standard (Cloud City)",
            "terrain": "gas giant",
            "surface_water": "0",
            "population": "6000000",
            "residents": [
                "https://swapi.co/api/people/26/"
            ],
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "created": "2014-12-10T11:43:55.240000Z",
            "edited": "2014-12-20T20:58:18.427000Z",
            "url": "https://swapi.co/api/planets/6/"
        },
        {
            "name": "Endor",
            "rotation_period": "18",
            "orbital_period": "402",
            "diameter": "4900",
            "climate": "temperate",
            "gravity": "0.85 standard",
            "terrain": "forests, mountains, lakes",
            "surface_water": "8",
            "population": "30000000",
            "residents": [
                "https://swapi.co/api/people/30/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:50:29.349000Z",
            "edited": "2014-12-20T20:58:18.429000Z",
            "url": "https://swapi.co/api/planets/7/"
        },
        {
            "name": "Naboo",
            "rotation_period": "26",
            "orbital_period": "312",
            "diameter": "12120",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grassy hills, swamps, forests, mountains",
            "surface_water": "12",
            "population": "4500000000",
            "residents": [
                "https://swapi.co/api/people/3/",
                "https://swapi.co/api/people/21/",
                "https://swapi.co/api/people/36/",
                "https://swapi.co/api/people/37/",
                "https://swapi.co/api/people/38/",
                "https://swapi.co/api/people/39/",
                "https://swapi.co/api/people/42/",
                "https://swapi.co/api/people/60/",
                "https://swapi.co/api/people/61/",
                "https://swapi.co/api/people/66/",
                "https://swapi.co/api/people/35/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:52:31.066000Z",
            "edited": "2014-12-20T20:58:18.430000Z",
            "url": "https://swapi.co/api/planets/8/"
        },
        {
            "name": "Coruscant",
            "rotation_period": "24",
            "orbital_period": "368",
            "diameter": "12240",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "cityscape, mountains",
            "surface_water": "unknown",
            "population": "1000000000000",
            "residents": [
                "https://swapi.co/api/people/34/",
                "https://swapi.co/api/people/55/",
                "https://swapi.co/api/people/74/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:54:13.921000Z",
            "edited": "2014-12-20T20:58:18.432000Z",
            "url": "https://swapi.co/api/planets/9/"
        },
        {
            "name": "Kamino",
            "rotation_period": "27",
            "orbital_period": "463",
            "diameter": "19720",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "ocean",
            "surface_water": "100",
            "population": "1000000000",
            "residents": [
                "https://swapi.co/api/people/22/",
                "https://swapi.co/api/people/72/",
                "https://swapi.co/api/people/73/"
            ],
            "films": [
                "https://swapi.co/api/films/5/"
            ],
            "created": "2014-12-10T12:45:06.577000Z",
            "edited": "2014-12-20T20:58:18.434000Z",
            "url": "https://swapi.co/api/planets/10/"
        },
        {
            "name": "Geonosis",
            "rotation_period": "30",
            "orbital_period": "256",
            "diameter": "11370",
            "climate": "temperate, arid",
            "gravity": "0.9 standard",
            "terrain": "rock, desert, mountain, barren",
            "surface_water": "5",
            "population": "100000000000",
            "residents": [
                "https://swapi.co/api/people/63/"
            ],
            "films": [
                "https://swapi.co/api/films/5/"
            ],
            "created": "2014-12-10T12:47:22.350000Z",
            "edited": "2014-12-20T20:58:18.437000Z",
            "url": "https://swapi.co/api/planets/11/"
        }
    ]
  }, 
  films: {
    "count": 7,
    "next": null,
    "previous": null,
    "results": [
        {
            "title": "A New Hope",
            "episode_id": 4,
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            "director": "George Lucas",
            "producer": "Gary Kurtz, Rick McCallum",
            "release_date": "1977-05-25",
            "characters": [
                "https://swapi.co/api/people/1/",
                "https://swapi.co/api/people/2/",
                "https://swapi.co/api/people/3/",
                "https://swapi.co/api/people/4/",
                "https://swapi.co/api/people/5/",
                "https://swapi.co/api/people/6/",
                "https://swapi.co/api/people/7/",
                "https://swapi.co/api/people/8/",
                "https://swapi.co/api/people/9/",
                "https://swapi.co/api/people/10/",
                "https://swapi.co/api/people/12/",
                "https://swapi.co/api/people/13/",
                "https://swapi.co/api/people/14/",
                "https://swapi.co/api/people/15/",
                "https://swapi.co/api/people/16/",
                "https://swapi.co/api/people/18/",
                "https://swapi.co/api/people/19/",
                "https://swapi.co/api/people/81/"
            ],
            "planets": [
                "https://swapi.co/api/planets/2/",
                "https://swapi.co/api/planets/3/",
                "https://swapi.co/api/planets/1/"
            ],
            "starships": [
                "https://swapi.co/api/starships/2/",
                "https://swapi.co/api/starships/3/",
                "https://swapi.co/api/starships/5/",
                "https://swapi.co/api/starships/9/",
                "https://swapi.co/api/starships/10/",
                "https://swapi.co/api/starships/11/",
                "https://swapi.co/api/starships/12/",
                "https://swapi.co/api/starships/13/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/4/",
                "https://swapi.co/api/vehicles/6/",
                "https://swapi.co/api/vehicles/7/",
                "https://swapi.co/api/vehicles/8/"
            ],
            "species": [
                "https://swapi.co/api/species/5/",
                "https://swapi.co/api/species/3/",
                "https://swapi.co/api/species/2/",
                "https://swapi.co/api/species/1/",
                "https://swapi.co/api/species/4/"
            ],
            "created": "2014-12-10T14:23:31.880000Z",
            "edited": "2015-04-11T09:46:52.774897Z",
            "url": "https://swapi.co/api/films/1/"
        },
        {
            "title": "Attack of the Clones",
            "episode_id": 2,
            "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
            "director": "George Lucas",
            "producer": "Rick McCallum",
            "release_date": "2002-05-16",
            "characters": [
                "https://swapi.co/api/people/2/",
                "https://swapi.co/api/people/3/",
                "https://swapi.co/api/people/6/",
                "https://swapi.co/api/people/7/",
                "https://swapi.co/api/people/10/",
                "https://swapi.co/api/people/11/",
                "https://swapi.co/api/people/20/",
                "https://swapi.co/api/people/21/",
                "https://swapi.co/api/people/22/",
                "https://swapi.co/api/people/33/",
                "https://swapi.co/api/people/36/",
                "https://swapi.co/api/people/40/",
                "https://swapi.co/api/people/43/",
                "https://swapi.co/api/people/46/",
                "https://swapi.co/api/people/51/",
                "https://swapi.co/api/people/52/",
                "https://swapi.co/api/people/53/",
                "https://swapi.co/api/people/58/",
                "https://swapi.co/api/people/59/",
                "https://swapi.co/api/people/60/",
                "https://swapi.co/api/people/61/",
                "https://swapi.co/api/people/62/",
                "https://swapi.co/api/people/63/",
                "https://swapi.co/api/people/64/",
                "https://swapi.co/api/people/65/",
                "https://swapi.co/api/people/66/",
                "https://swapi.co/api/people/67/",
                "https://swapi.co/api/people/68/",
                "https://swapi.co/api/people/69/",
                "https://swapi.co/api/people/70/",
                "https://swapi.co/api/people/71/",
                "https://swapi.co/api/people/72/",
                "https://swapi.co/api/people/73/",
                "https://swapi.co/api/people/74/",
                "https://swapi.co/api/people/75/",
                "https://swapi.co/api/people/76/",
                "https://swapi.co/api/people/77/",
                "https://swapi.co/api/people/78/",
                "https://swapi.co/api/people/82/",
                "https://swapi.co/api/people/35/"
            ],
            "planets": [
                "https://swapi.co/api/planets/8/",
                "https://swapi.co/api/planets/9/",
                "https://swapi.co/api/planets/10/",
                "https://swapi.co/api/planets/11/",
                "https://swapi.co/api/planets/1/"
            ],
            "starships": [
                "https://swapi.co/api/starships/21/",
                "https://swapi.co/api/starships/39/",
                "https://swapi.co/api/starships/43/",
                "https://swapi.co/api/starships/47/",
                "https://swapi.co/api/starships/48/",
                "https://swapi.co/api/starships/49/",
                "https://swapi.co/api/starships/32/",
                "https://swapi.co/api/starships/52/",
                "https://swapi.co/api/starships/58/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/4/",
                "https://swapi.co/api/vehicles/44/",
                "https://swapi.co/api/vehicles/45/",
                "https://swapi.co/api/vehicles/46/",
                "https://swapi.co/api/vehicles/50/",
                "https://swapi.co/api/vehicles/51/",
                "https://swapi.co/api/vehicles/53/",
                "https://swapi.co/api/vehicles/54/",
                "https://swapi.co/api/vehicles/55/",
                "https://swapi.co/api/vehicles/56/",
                "https://swapi.co/api/vehicles/57/"
            ],
            "species": [
                "https://swapi.co/api/species/32/",
                "https://swapi.co/api/species/33/",
                "https://swapi.co/api/species/2/",
                "https://swapi.co/api/species/35/",
                "https://swapi.co/api/species/6/",
                "https://swapi.co/api/species/1/",
                "https://swapi.co/api/species/12/",
                "https://swapi.co/api/species/34/",
                "https://swapi.co/api/species/13/",
                "https://swapi.co/api/species/15/",
                "https://swapi.co/api/species/28/",
                "https://swapi.co/api/species/29/",
                "https://swapi.co/api/species/30/",
                "https://swapi.co/api/species/31/"
            ],
            "created": "2014-12-20T10:57:57.886000Z",
            "edited": "2015-04-11T09:45:01.623982Z",
            "url": "https://swapi.co/api/films/5/"
        },
        {
            "title": "The Phantom Menace",
            "episode_id": 1,
            "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
            "director": "George Lucas",
            "producer": "Rick McCallum",
            "release_date": "1999-05-19",
            "characters": [
                "https://swapi.co/api/people/2/",
                "https://swapi.co/api/people/3/",
                "https://swapi.co/api/people/10/",
                "https://swapi.co/api/people/11/",
                "https://swapi.co/api/people/16/",
                "https://swapi.co/api/people/20/",
                "https://swapi.co/api/people/21/",
                "https://swapi.co/api/people/32/",
                "https://swapi.co/api/people/33/",
                "https://swapi.co/api/people/34/",
                "https://swapi.co/api/people/36/",
                "https://swapi.co/api/people/37/",
                "https://swapi.co/api/people/38/",
                "https://swapi.co/api/people/39/",
                "https://swapi.co/api/people/40/",
                "https://swapi.co/api/people/41/",
                "https://swapi.co/api/people/42/",
                "https://swapi.co/api/people/43/",
                "https://swapi.co/api/people/44/",
                "https://swapi.co/api/people/46/",
                "https://swapi.co/api/people/48/",
                "https://swapi.co/api/people/49/",
                "https://swapi.co/api/people/50/",
                "https://swapi.co/api/people/51/",
                "https://swapi.co/api/people/52/",
                "https://swapi.co/api/people/53/",
                "https://swapi.co/api/people/54/",
                "https://swapi.co/api/people/55/",
                "https://swapi.co/api/people/56/",
                "https://swapi.co/api/people/57/",
                "https://swapi.co/api/people/58/",
                "https://swapi.co/api/people/59/",
                "https://swapi.co/api/people/47/",
                "https://swapi.co/api/people/35/"
            ],
            "planets": [
                "https://swapi.co/api/planets/8/",
                "https://swapi.co/api/planets/9/",
                "https://swapi.co/api/planets/1/"
            ],
            "starships": [
                "https://swapi.co/api/starships/40/",
                "https://swapi.co/api/starships/41/",
                "https://swapi.co/api/starships/31/",
                "https://swapi.co/api/starships/32/",
                "https://swapi.co/api/starships/39/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/33/",
                "https://swapi.co/api/vehicles/34/",
                "https://swapi.co/api/vehicles/35/",
                "https://swapi.co/api/vehicles/36/",
                "https://swapi.co/api/vehicles/37/",
                "https://swapi.co/api/vehicles/38/",
                "https://swapi.co/api/vehicles/42/"
            ],
            "species": [
                "https://swapi.co/api/species/1/",
                "https://swapi.co/api/species/2/",
                "https://swapi.co/api/species/6/",
                "https://swapi.co/api/species/11/",
                "https://swapi.co/api/species/12/",
                "https://swapi.co/api/species/13/",
                "https://swapi.co/api/species/14/",
                "https://swapi.co/api/species/15/",
                "https://swapi.co/api/species/16/",
                "https://swapi.co/api/species/17/",
                "https://swapi.co/api/species/18/",
                "https://swapi.co/api/species/19/",
                "https://swapi.co/api/species/20/",
                "https://swapi.co/api/species/21/",
                "https://swapi.co/api/species/22/",
                "https://swapi.co/api/species/23/",
                "https://swapi.co/api/species/24/",
                "https://swapi.co/api/species/25/",
                "https://swapi.co/api/species/26/",
                "https://swapi.co/api/species/27/"
            ],
            "created": "2014-12-19T16:52:55.740000Z",
            "edited": "2015-04-11T09:45:18.689301Z",
            "url": "https://swapi.co/api/films/4/"
        },
        {
            "title": "Revenge of the Sith",
            "episode_id": 3,
            "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
            "director": "George Lucas",
            "producer": "Rick McCallum",
            "release_date": "2005-05-19",
            "characters": [
                "https://swapi.co/api/people/1/",
                "https://swapi.co/api/people/2/",
                "https://swapi.co/api/people/3/",
                "https://swapi.co/api/people/4/",
                "https://swapi.co/api/people/5/",
                "https://swapi.co/api/people/6/",
                "https://swapi.co/api/people/7/",
                "https://swapi.co/api/people/10/",
                "https://swapi.co/api/people/11/",
                "https://swapi.co/api/people/12/",
                "https://swapi.co/api/people/13/",
                "https://swapi.co/api/people/20/",
                "https://swapi.co/api/people/21/",
                "https://swapi.co/api/people/33/",
                "https://swapi.co/api/people/46/",
                "https://swapi.co/api/people/51/",
                "https://swapi.co/api/people/52/",
                "https://swapi.co/api/people/53/",
                "https://swapi.co/api/people/54/",
                "https://swapi.co/api/people/55/",
                "https://swapi.co/api/people/56/",
                "https://swapi.co/api/people/58/",
                "https://swapi.co/api/people/63/",
                "https://swapi.co/api/people/64/",
                "https://swapi.co/api/people/67/",
                "https://swapi.co/api/people/68/",
                "https://swapi.co/api/people/75/",
                "https://swapi.co/api/people/78/",
                "https://swapi.co/api/people/79/",
                "https://swapi.co/api/people/80/",
                "https://swapi.co/api/people/81/",
                "https://swapi.co/api/people/82/",
                "https://swapi.co/api/people/83/",
                "https://swapi.co/api/people/35/"
            ],
            "planets": [
                "https://swapi.co/api/planets/2/",
                "https://swapi.co/api/planets/5/",
                "https://swapi.co/api/planets/8/",
                "https://swapi.co/api/planets/9/",
                "https://swapi.co/api/planets/12/",
                "https://swapi.co/api/planets/13/",
                "https://swapi.co/api/planets/14/",
                "https://swapi.co/api/planets/15/",
                "https://swapi.co/api/planets/16/",
                "https://swapi.co/api/planets/17/",
                "https://swapi.co/api/planets/18/",
                "https://swapi.co/api/planets/19/",
                "https://swapi.co/api/planets/1/"
            ],
            "starships": [
                "https://swapi.co/api/starships/48/",
                "https://swapi.co/api/starships/59/",
                "https://swapi.co/api/starships/61/",
                "https://swapi.co/api/starships/32/",
                "https://swapi.co/api/starships/63/",
                "https://swapi.co/api/starships/64/",
                "https://swapi.co/api/starships/65/",
                "https://swapi.co/api/starships/66/",
                "https://swapi.co/api/starships/74/",
                "https://swapi.co/api/starships/75/",
                "https://swapi.co/api/starships/2/",
                "https://swapi.co/api/starships/68/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/33/",
                "https://swapi.co/api/vehicles/50/",
                "https://swapi.co/api/vehicles/53/",
                "https://swapi.co/api/vehicles/56/",
                "https://swapi.co/api/vehicles/60/",
                "https://swapi.co/api/vehicles/62/",
                "https://swapi.co/api/vehicles/67/",
                "https://swapi.co/api/vehicles/69/",
                "https://swapi.co/api/vehicles/70/",
                "https://swapi.co/api/vehicles/71/",
                "https://swapi.co/api/vehicles/72/",
                "https://swapi.co/api/vehicles/73/",
                "https://swapi.co/api/vehicles/76/"
            ],
            "species": [
                "https://swapi.co/api/species/19/",
                "https://swapi.co/api/species/33/",
                "https://swapi.co/api/species/2/",
                "https://swapi.co/api/species/3/",
                "https://swapi.co/api/species/36/",
                "https://swapi.co/api/species/37/",
                "https://swapi.co/api/species/6/",
                "https://swapi.co/api/species/1/",
                "https://swapi.co/api/species/34/",
                "https://swapi.co/api/species/15/",
                "https://swapi.co/api/species/35/",
                "https://swapi.co/api/species/20/",
                "https://swapi.co/api/species/23/",
                "https://swapi.co/api/species/24/",
                "https://swapi.co/api/species/25/",
                "https://swapi.co/api/species/26/",
                "https://swapi.co/api/species/27/",
                "https://swapi.co/api/species/28/",
                "https://swapi.co/api/species/29/",
                "https://swapi.co/api/species/30/"
            ],
            "created": "2014-12-20T18:49:38.403000Z",
            "edited": "2015-04-11T09:45:44.862122Z",
            "url": "https://swapi.co/api/films/6/"
        },
        {
            "title": "Return of the Jedi",
            "episode_id": 6,
            "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
            "director": "Richard Marquand",
            "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
            "release_date": "1983-05-25",
            "characters": [
                "https://swapi.co/api/people/1/",
                "https://swapi.co/api/people/2/",
                "https://swapi.co/api/people/3/",
                "https://swapi.co/api/people/4/",
                "https://swapi.co/api/people/5/",
                "https://swapi.co/api/people/10/",
                "https://swapi.co/api/people/13/",
                "https://swapi.co/api/people/14/",
                "https://swapi.co/api/people/16/",
                "https://swapi.co/api/people/18/",
                "https://swapi.co/api/people/20/",
                "https://swapi.co/api/people/21/",
                "https://swapi.co/api/people/22/",
                "https://swapi.co/api/people/25/",
                "https://swapi.co/api/people/27/",
                "https://swapi.co/api/people/28/",
                "https://swapi.co/api/people/29/",
                "https://swapi.co/api/people/30/",
                "https://swapi.co/api/people/31/",
                "https://swapi.co/api/people/45/"
            ],
            "planets": [
                "https://swapi.co/api/planets/5/",
                "https://swapi.co/api/planets/7/",
                "https://swapi.co/api/planets/8/",
                "https://swapi.co/api/planets/9/",
                "https://swapi.co/api/planets/1/"
            ],
            "starships": [
                "https://swapi.co/api/starships/15/",
                "https://swapi.co/api/starships/10/",
                "https://swapi.co/api/starships/11/",
                "https://swapi.co/api/starships/12/",
                "https://swapi.co/api/starships/22/",
                "https://swapi.co/api/starships/23/",
                "https://swapi.co/api/starships/27/",
                "https://swapi.co/api/starships/28/",
                "https://swapi.co/api/starships/29/",
                "https://swapi.co/api/starships/3/",
                "https://swapi.co/api/starships/17/",
                "https://swapi.co/api/starships/2/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/8/",
                "https://swapi.co/api/vehicles/16/",
                "https://swapi.co/api/vehicles/18/",
                "https://swapi.co/api/vehicles/19/",
                "https://swapi.co/api/vehicles/24/",
                "https://swapi.co/api/vehicles/25/",
                "https://swapi.co/api/vehicles/26/",
                "https://swapi.co/api/vehicles/30/"
            ],
            "species": [
                "https://swapi.co/api/species/1/",
                "https://swapi.co/api/species/2/",
                "https://swapi.co/api/species/3/",
                "https://swapi.co/api/species/5/",
                "https://swapi.co/api/species/6/",
                "https://swapi.co/api/species/8/",
                "https://swapi.co/api/species/9/",
                "https://swapi.co/api/species/10/",
                "https://swapi.co/api/species/15/"
            ],
            "created": "2014-12-18T10:39:33.255000Z",
            "edited": "2015-04-11T09:46:05.220365Z",
            "url": "https://swapi.co/api/films/3/"
        },
        {
            "title": "The Empire Strikes Back",
            "episode_id": 5,
            "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
            "director": "Irvin Kershner",
            "producer": "Gary Kurtz, Rick McCallum",
            "release_date": "1980-05-17",
            "characters": [
                "https://swapi.co/api/people/1/",
                "https://swapi.co/api/people/2/",
                "https://swapi.co/api/people/3/",
                "https://swapi.co/api/people/4/",
                "https://swapi.co/api/people/5/",
                "https://swapi.co/api/people/10/",
                "https://swapi.co/api/people/13/",
                "https://swapi.co/api/people/14/",
                "https://swapi.co/api/people/18/",
                "https://swapi.co/api/people/20/",
                "https://swapi.co/api/people/21/",
                "https://swapi.co/api/people/22/",
                "https://swapi.co/api/people/23/",
                "https://swapi.co/api/people/24/",
                "https://swapi.co/api/people/25/",
                "https://swapi.co/api/people/26/"
            ],
            "planets": [
                "https://swapi.co/api/planets/4/",
                "https://swapi.co/api/planets/5/",
                "https://swapi.co/api/planets/6/",
                "https://swapi.co/api/planets/27/"
            ],
            "starships": [
                "https://swapi.co/api/starships/15/",
                "https://swapi.co/api/starships/10/",
                "https://swapi.co/api/starships/11/",
                "https://swapi.co/api/starships/12/",
                "https://swapi.co/api/starships/21/",
                "https://swapi.co/api/starships/22/",
                "https://swapi.co/api/starships/23/",
                "https://swapi.co/api/starships/3/",
                "https://swapi.co/api/starships/17/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/8/",
                "https://swapi.co/api/vehicles/14/",
                "https://swapi.co/api/vehicles/16/",
                "https://swapi.co/api/vehicles/18/",
                "https://swapi.co/api/vehicles/19/",
                "https://swapi.co/api/vehicles/20/"
            ],
            "species": [
                "https://swapi.co/api/species/6/",
                "https://swapi.co/api/species/7/",
                "https://swapi.co/api/species/3/",
                "https://swapi.co/api/species/2/",
                "https://swapi.co/api/species/1/"
            ],
            "created": "2014-12-12T11:26:24.656000Z",
            "edited": "2017-04-19T10:57:29.544256Z",
            "url": "https://swapi.co/api/films/2/"
        },
        {
            "title": "The Force Awakens",
            "episode_id": 7,
            "opening_crawl": "Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the support of the\r\nREPUBLIC, General Leia Organa\r\nleads a brave RESISTANCE.\r\nShe is desperate to find her\r\nbrother Luke and gain his\r\nhelp in restoring peace and\r\njustice to the galaxy.\r\n \r\nLeia has sent her most daring\r\npilot on a secret mission\r\nto Jakku, where an old ally\r\nhas discovered a clue to\r\nLuke's whereabouts....",
            "director": "J. J. Abrams",
            "producer": "Kathleen Kennedy, J. J. Abrams, Bryan Burk",
            "release_date": "2015-12-11",
            "characters": [
                "https://swapi.co/api/people/1/",
                "https://swapi.co/api/people/3/",
                "https://swapi.co/api/people/5/",
                "https://swapi.co/api/people/13/",
                "https://swapi.co/api/people/14/",
                "https://swapi.co/api/people/27/",
                "https://swapi.co/api/people/84/",
                "https://swapi.co/api/people/85/",
                "https://swapi.co/api/people/86/",
                "https://swapi.co/api/people/87/",
                "https://swapi.co/api/people/88/"
            ],
            "planets": [
                "https://swapi.co/api/planets/61/"
            ],
            "starships": [
                "https://swapi.co/api/starships/77/",
                "https://swapi.co/api/starships/10/"
            ],
            "vehicles": [],
            "species": [
                "https://swapi.co/api/species/3/",
                "https://swapi.co/api/species/2/",
                "https://swapi.co/api/species/1/"
            ],
            "created": "2015-04-17T06:51:30.504780Z",
            "edited": "2015-12-17T14:31:47.617768Z",
            "url": "https://swapi.co/api/films/7/"
        }
    ]
  }, 
  species: {
    "count": 37,
    "next": "https://swapi.co/api/species/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Hutt",
            "classification": "gastropod",
            "designation": "sentient",
            "average_height": "300",
            "skin_colors": "green, brown, tan",
            "hair_colors": "n/a",
            "eye_colors": "yellow, red",
            "average_lifespan": "1000",
            "homeworld": "https://swapi.co/api/planets/24/",
            "language": "Huttese",
            "people": [
                "https://swapi.co/api/people/16/"
            ],
            "films": [
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T17:12:50.410000Z",
            "edited": "2014-12-20T21:36:42.146000Z",
            "url": "https://swapi.co/api/species/5/"
        },
        {
            "name": "Yoda's species",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "66",
            "skin_colors": "green, yellow",
            "hair_colors": "brown, white",
            "eye_colors": "brown, green, yellow",
            "average_lifespan": "900",
            "homeworld": "https://swapi.co/api/planets/28/",
            "language": "Galactic basic",
            "people": [
                "https://swapi.co/api/people/20/"
            ],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-15T12:27:22.877000Z",
            "edited": "2014-12-20T21:36:42.148000Z",
            "url": "https://swapi.co/api/species/6/"
        },
        {
            "name": "Trandoshan",
            "classification": "reptile",
            "designation": "sentient",
            "average_height": "200",
            "skin_colors": "brown, green",
            "hair_colors": "none",
            "eye_colors": "yellow, orange",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/29/",
            "language": "Dosh",
            "people": [
                "https://swapi.co/api/people/24/"
            ],
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "created": "2014-12-15T13:07:47.704000Z",
            "edited": "2014-12-20T21:36:42.151000Z",
            "url": "https://swapi.co/api/species/7/"
        },
        {
            "name": "Mon Calamari",
            "classification": "amphibian",
            "designation": "sentient",
            "average_height": "160",
            "skin_colors": "red, blue, brown, magenta",
            "hair_colors": "none",
            "eye_colors": "yellow",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/31/",
            "language": "Mon Calamarian",
            "people": [
                "https://swapi.co/api/people/27/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-18T11:09:52.263000Z",
            "edited": "2014-12-20T21:36:42.153000Z",
            "url": "https://swapi.co/api/species/8/"
        },
        {
            "name": "Ewok",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "100",
            "skin_colors": "brown",
            "hair_colors": "white, brown, black",
            "eye_colors": "orange, brown",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/7/",
            "language": "Ewokese",
            "people": [
                "https://swapi.co/api/people/30/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-18T11:22:00.285000Z",
            "edited": "2014-12-20T21:36:42.155000Z",
            "url": "https://swapi.co/api/species/9/"
        },
        {
            "name": "Sullustan",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "180",
            "skin_colors": "pale",
            "hair_colors": "none",
            "eye_colors": "black",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/33/",
            "language": "Sullutese",
            "people": [
                "https://swapi.co/api/people/31/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-18T11:26:20.103000Z",
            "edited": "2014-12-20T21:36:42.157000Z",
            "url": "https://swapi.co/api/species/10/"
        },
        {
            "name": "Neimodian",
            "classification": "unknown",
            "designation": "sentient",
            "average_height": "180",
            "skin_colors": "grey, green",
            "hair_colors": "none",
            "eye_colors": "red, pink",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/18/",
            "language": "Neimoidia",
            "people": [
                "https://swapi.co/api/people/33/"
            ],
            "films": [
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:07:31.319000Z",
            "edited": "2014-12-20T21:36:42.160000Z",
            "url": "https://swapi.co/api/species/11/"
        },
        {
            "name": "Gungan",
            "classification": "amphibian",
            "designation": "sentient",
            "average_height": "190",
            "skin_colors": "brown, green",
            "hair_colors": "none",
            "eye_colors": "orange",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/8/",
            "language": "Gungan basic",
            "people": [
                "https://swapi.co/api/people/36/",
                "https://swapi.co/api/people/37/",
                "https://swapi.co/api/people/38/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:30:37.341000Z",
            "edited": "2014-12-20T21:36:42.163000Z",
            "url": "https://swapi.co/api/species/12/"
        },
        {
            "name": "Toydarian",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "120",
            "skin_colors": "blue, green, grey",
            "hair_colors": "none",
            "eye_colors": "yellow",
            "average_lifespan": "91",
            "homeworld": "https://swapi.co/api/planets/34/",
            "language": "Toydarian",
            "people": [
                "https://swapi.co/api/people/40/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:48:56.893000Z",
            "edited": "2014-12-20T21:36:42.165000Z",
            "url": "https://swapi.co/api/species/13/"
        },
        {
            "name": "Dug",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "100",
            "skin_colors": "brown, purple, grey, red",
            "hair_colors": "none",
            "eye_colors": "yellow, blue",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/35/",
            "language": "Dugese",
            "people": [
                "https://swapi.co/api/people/41/"
            ],
            "films": [
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:53:11.214000Z",
            "edited": "2014-12-20T21:36:42.167000Z",
            "url": "https://swapi.co/api/species/14/"
        }
    ]
  }, 
  vehicles: {
    "count": 37,
    "next": "https://swapi.co/api/species/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Hutt",
            "classification": "gastropod",
            "designation": "sentient",
            "average_height": "300",
            "skin_colors": "green, brown, tan",
            "hair_colors": "n/a",
            "eye_colors": "yellow, red",
            "average_lifespan": "1000",
            "homeworld": "https://swapi.co/api/planets/24/",
            "language": "Huttese",
            "people": [
                "https://swapi.co/api/people/16/"
            ],
            "films": [
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T17:12:50.410000Z",
            "edited": "2014-12-20T21:36:42.146000Z",
            "url": "https://swapi.co/api/species/5/"
        },
        {
            "name": "Yoda's species",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "66",
            "skin_colors": "green, yellow",
            "hair_colors": "brown, white",
            "eye_colors": "brown, green, yellow",
            "average_lifespan": "900",
            "homeworld": "https://swapi.co/api/planets/28/",
            "language": "Galactic basic",
            "people": [
                "https://swapi.co/api/people/20/"
            ],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-15T12:27:22.877000Z",
            "edited": "2014-12-20T21:36:42.148000Z",
            "url": "https://swapi.co/api/species/6/"
        },
        {
            "name": "Trandoshan",
            "classification": "reptile",
            "designation": "sentient",
            "average_height": "200",
            "skin_colors": "brown, green",
            "hair_colors": "none",
            "eye_colors": "yellow, orange",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/29/",
            "language": "Dosh",
            "people": [
                "https://swapi.co/api/people/24/"
            ],
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "created": "2014-12-15T13:07:47.704000Z",
            "edited": "2014-12-20T21:36:42.151000Z",
            "url": "https://swapi.co/api/species/7/"
        },
        {
            "name": "Mon Calamari",
            "classification": "amphibian",
            "designation": "sentient",
            "average_height": "160",
            "skin_colors": "red, blue, brown, magenta",
            "hair_colors": "none",
            "eye_colors": "yellow",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/31/",
            "language": "Mon Calamarian",
            "people": [
                "https://swapi.co/api/people/27/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-18T11:09:52.263000Z",
            "edited": "2014-12-20T21:36:42.153000Z",
            "url": "https://swapi.co/api/species/8/"
        },
        {
            "name": "Ewok",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "100",
            "skin_colors": "brown",
            "hair_colors": "white, brown, black",
            "eye_colors": "orange, brown",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/7/",
            "language": "Ewokese",
            "people": [
                "https://swapi.co/api/people/30/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-18T11:22:00.285000Z",
            "edited": "2014-12-20T21:36:42.155000Z",
            "url": "https://swapi.co/api/species/9/"
        },
        {
            "name": "Sullustan",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "180",
            "skin_colors": "pale",
            "hair_colors": "none",
            "eye_colors": "black",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/33/",
            "language": "Sullutese",
            "people": [
                "https://swapi.co/api/people/31/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-18T11:26:20.103000Z",
            "edited": "2014-12-20T21:36:42.157000Z",
            "url": "https://swapi.co/api/species/10/"
        },
        {
            "name": "Neimodian",
            "classification": "unknown",
            "designation": "sentient",
            "average_height": "180",
            "skin_colors": "grey, green",
            "hair_colors": "none",
            "eye_colors": "red, pink",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/18/",
            "language": "Neimoidia",
            "people": [
                "https://swapi.co/api/people/33/"
            ],
            "films": [
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:07:31.319000Z",
            "edited": "2014-12-20T21:36:42.160000Z",
            "url": "https://swapi.co/api/species/11/"
        },
        {
            "name": "Gungan",
            "classification": "amphibian",
            "designation": "sentient",
            "average_height": "190",
            "skin_colors": "brown, green",
            "hair_colors": "none",
            "eye_colors": "orange",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/8/",
            "language": "Gungan basic",
            "people": [
                "https://swapi.co/api/people/36/",
                "https://swapi.co/api/people/37/",
                "https://swapi.co/api/people/38/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:30:37.341000Z",
            "edited": "2014-12-20T21:36:42.163000Z",
            "url": "https://swapi.co/api/species/12/"
        },
        {
            "name": "Toydarian",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "120",
            "skin_colors": "blue, green, grey",
            "hair_colors": "none",
            "eye_colors": "yellow",
            "average_lifespan": "91",
            "homeworld": "https://swapi.co/api/planets/34/",
            "language": "Toydarian",
            "people": [
                "https://swapi.co/api/people/40/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:48:56.893000Z",
            "edited": "2014-12-20T21:36:42.165000Z",
            "url": "https://swapi.co/api/species/13/"
        },
        {
            "name": "Dug",
            "classification": "mammal",
            "designation": "sentient",
            "average_height": "100",
            "skin_colors": "brown, purple, grey, red",
            "hair_colors": "none",
            "eye_colors": "yellow, blue",
            "average_lifespan": "unknown",
            "homeworld": "https://swapi.co/api/planets/35/",
            "language": "Dugese",
            "people": [
                "https://swapi.co/api/people/41/"
            ],
            "films": [
                "https://swapi.co/api/films/4/"
            ],
            "created": "2014-12-19T17:53:11.214000Z",
            "edited": "2014-12-20T21:36:42.167000Z",
            "url": "https://swapi.co/api/species/14/"
        }
    ]
  }, 
  starships: {
    "count": 37,
    "next": "https://swapi.co/api/starships/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Executor",
            "model": "Executor-class star dreadnought",
            "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
            "cost_in_credits": "1143350000",
            "length": "19000",
            "max_atmosphering_speed": "n/a",
            "crew": "279144",
            "passengers": "38000",
            "cargo_capacity": "250000000",
            "consumables": "6 years",
            "hyperdrive_rating": "2.0",
            "MGLT": "40",
            "starship_class": "Star dreadnought",
            "pilots": [],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-15T12:31:42.547000Z",
            "edited": "2017-04-19T10:56:06.685592Z",
            "url": "https://swapi.co/api/starships/15/"
        },
        {
            "name": "Sentinel-class landing craft",
            "model": "Sentinel-class landing craft",
            "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
            "cost_in_credits": "240000",
            "length": "38",
            "max_atmosphering_speed": "1000",
            "crew": "5",
            "passengers": "75",
            "cargo_capacity": "180000",
            "consumables": "1 month",
            "hyperdrive_rating": "1.0",
            "MGLT": "70",
            "starship_class": "landing craft",
            "pilots": [],
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T15:48:00.586000Z",
            "edited": "2014-12-22T17:35:44.431407Z",
            "url": "https://swapi.co/api/starships/5/"
        },
        {
            "name": "Death Star",
            "model": "DS-1 Orbital Battle Station",
            "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
            "cost_in_credits": "1000000000000",
            "length": "120000",
            "max_atmosphering_speed": "n/a",
            "crew": "342953",
            "passengers": "843342",
            "cargo_capacity": "1000000000000",
            "consumables": "3 years",
            "hyperdrive_rating": "4.0",
            "MGLT": "10",
            "starship_class": "Deep Space Mobile Battlestation",
            "pilots": [],
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T16:36:50.509000Z",
            "edited": "2014-12-22T17:35:44.452589Z",
            "url": "https://swapi.co/api/starships/9/"
        },
        {
            "name": "Millennium Falcon",
            "model": "YT-1300 light freighter",
            "manufacturer": "Corellian Engineering Corporation",
            "cost_in_credits": "100000",
            "length": "34.37",
            "max_atmosphering_speed": "1050",
            "crew": "4",
            "passengers": "6",
            "cargo_capacity": "100000",
            "consumables": "2 months",
            "hyperdrive_rating": "0.5",
            "MGLT": "75",
            "starship_class": "Light freighter",
            "pilots": [
                "https://swapi.co/api/people/13/",
                "https://swapi.co/api/people/14/",
                "https://swapi.co/api/people/25/",
                "https://swapi.co/api/people/31/"
            ],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/7/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T16:59:45.094000Z",
            "edited": "2014-12-22T17:35:44.464156Z",
            "url": "https://swapi.co/api/starships/10/"
        },
        {
            "name": "Y-wing",
            "model": "BTL Y-wing",
            "manufacturer": "Koensayr Manufacturing",
            "cost_in_credits": "134999",
            "length": "14",
            "max_atmosphering_speed": "1000km",
            "crew": "2",
            "passengers": "0",
            "cargo_capacity": "110",
            "consumables": "1 week",
            "hyperdrive_rating": "1.0",
            "MGLT": "80",
            "starship_class": "assault starfighter",
            "pilots": [],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-12T11:00:39.817000Z",
            "edited": "2014-12-22T17:35:44.479706Z",
            "url": "https://swapi.co/api/starships/11/"
        },
        {
            "name": "X-wing",
            "model": "T-65 X-wing",
            "manufacturer": "Incom Corporation",
            "cost_in_credits": "149999",
            "length": "12.5",
            "max_atmosphering_speed": "1050",
            "crew": "1",
            "passengers": "0",
            "cargo_capacity": "110",
            "consumables": "1 week",
            "hyperdrive_rating": "1.0",
            "MGLT": "100",
            "starship_class": "Starfighter",
            "pilots": [
                "https://swapi.co/api/people/1/",
                "https://swapi.co/api/people/9/",
                "https://swapi.co/api/people/18/",
                "https://swapi.co/api/people/19/"
            ],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-12T11:19:05.340000Z",
            "edited": "2014-12-22T17:35:44.491233Z",
            "url": "https://swapi.co/api/starships/12/"
        },
        {
            "name": "TIE Advanced x1",
            "model": "Twin Ion Engine Advanced x1",
            "manufacturer": "Sienar Fleet Systems",
            "cost_in_credits": "unknown",
            "length": "9.2",
            "max_atmosphering_speed": "1200",
            "crew": "1",
            "passengers": "0",
            "cargo_capacity": "150",
            "consumables": "5 days",
            "hyperdrive_rating": "1.0",
            "MGLT": "105",
            "starship_class": "Starfighter",
            "pilots": [
                "https://swapi.co/api/people/4/"
            ],
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-12T11:21:32.991000Z",
            "edited": "2014-12-22T17:35:44.549047Z",
            "url": "https://swapi.co/api/starships/13/"
        },
        {
            "name": "Slave 1",
            "model": "Firespray-31-class patrol and attack",
            "manufacturer": "Kuat Systems Engineering",
            "cost_in_credits": "unknown",
            "length": "21.5",
            "max_atmosphering_speed": "1000",
            "crew": "1",
            "passengers": "6",
            "cargo_capacity": "70000",
            "consumables": "1 month",
            "hyperdrive_rating": "3.0",
            "MGLT": "70",
            "starship_class": "Patrol craft",
            "pilots": [
                "https://swapi.co/api/people/22/"
            ],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/"
            ],
            "created": "2014-12-15T13:00:56.332000Z",
            "edited": "2014-12-22T17:35:44.716273Z",
            "url": "https://swapi.co/api/starships/21/"
        },
        {
            "name": "Imperial shuttle",
            "model": "Lambda-class T-4a shuttle",
            "manufacturer": "Sienar Fleet Systems",
            "cost_in_credits": "240000",
            "length": "20",
            "max_atmosphering_speed": "850",
            "crew": "6",
            "passengers": "20",
            "cargo_capacity": "80000",
            "consumables": "2 months",
            "hyperdrive_rating": "1.0",
            "MGLT": "50",
            "starship_class": "Armed government transport",
            "pilots": [
                "https://swapi.co/api/people/1/",
                "https://swapi.co/api/people/13/",
                "https://swapi.co/api/people/14/"
            ],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-15T13:04:47.235000Z",
            "edited": "2014-12-22T17:35:44.795405Z",
            "url": "https://swapi.co/api/starships/22/"
        },
        {
            "name": "EF76 Nebulon-B escort frigate",
            "model": "EF76 Nebulon-B escort frigate",
            "manufacturer": "Kuat Drive Yards",
            "cost_in_credits": "8500000",
            "length": "300",
            "max_atmosphering_speed": "800",
            "crew": "854",
            "passengers": "75",
            "cargo_capacity": "6000000",
            "consumables": "2 years",
            "hyperdrive_rating": "2.0",
            "MGLT": "40",
            "starship_class": "Escort ship",
            "pilots": [],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-15T13:06:30.813000Z",
            "edited": "2014-12-22T17:35:44.848329Z",
            "url": "https://swapi.co/api/starships/23/"
        }
    ]
  }
}

export default mockData; 