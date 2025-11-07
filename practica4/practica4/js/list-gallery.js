const galleries = [
    { id: 51, name: "Albright-Knox Art Gallery", location: { city: "Buffalo", country: "USA" }, url: "http://www.albrightknox.org/"  },
    { id: 18, name: "Kunsthistorisches Museum", location: { city: "Vienna", country: "Austria" }, url: "http://www.khm.at/"  },
    { id: 22, name: "Belvedere Gallery", location: { city: "Vienna", country: "Austria" }, url: "http://www.belvedere.at/"  },
    { id: 42, name: "Brooklyn Museum", location: { city: "New York", country: "USA" }, url: "http://www.brooklynmuseum.org/"  },
    { id: 52, name: "Detroit Institute of Arts", location: { city: "Detroit", country: "USA" }, url: "http://www.dia.org/"  },
    { id: 27, name: "J. Paul Getty Museum", location: { city: "Los Angeles", country: "USA" }, url: "http://www.getty.edu/museum/"  },
    { id: 16, name: "Louvre Museum", location: { city: "Paris", country: "France" }, url: "http://www.louvre.fr/"  },
    { id: 6, name: "Metropolitan Museum of Art", location: { city: "New York", country: "USA" }, url: "http://www.metmuseum.org/"  },
    { id: 19, name: "Musee d'Orsay", location: { city: "Paris", country: "France" }, url: "http://www.musee-orsay.fr/"  },
    { id: 30, name: "Rijksmuseum", location: { city: "Amsterdam", country: "Netherlands" }, url: "http://www.rijksmuseum.nl/"  },
    { id: 32, name: "Royal Picture Gallery Mauritshuis", location: { city: "The Hague", country: "Netherlands" }, url: "http://www.mauritshuis.nl/"  }
];

let list="";

galleries.forEach((gallery)=>{
    list += `<li><a href="${gallery.url}">${gallery.name}</a></li>`
})

document.write(`<ul>${list}</ul>`)
