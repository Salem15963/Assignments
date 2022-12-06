const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
    // an array of pokémon objects where the id is evenly divisible by 3
    const x = pokémon.filter( val=> val.id % 3 === 0 );
    console.log(x);
    
    // an array of pokémon objects that are "fire" type
    const y = pokémon.filter( val=> val.types.includes ("fire") );
    console.log(y);


    // an array of pokémon objects that have more than one type
    const z = pokémon.filter( val=> val.types.length >1);
    console.log(z);


    // an array with just the names of the pokémon
    const omar = pokémon.map( val=> val.name);
    console.log(omar);


    // an array with just the names of pokémon with an id greater than 99
    const Hasan = pokémon.filter( val=> val.id > 99).map(val => val.name);
    console.log(Hasan);


    // an array with just the names of the pokémon whose only type is poison
    const jundob = pokémon.filter( val=> val.types == ("poison")).map(val => val.name);
    console.log(jundob);


    // an array containing just the first type of all the pokémon whose second type is "flying"
    const zan = pokémon.filter( val=> val.types[1] == ("flying"));
    console.log(zan);


    // a count of the number of pokémon that are "normal" type
    const ban = pokémon.filter( val=> val.types.includes ("normal")).length;
    console.log(ban);









