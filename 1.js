const musicCollection = [{
        title: "Название альбома1",
        artist: "Исполнитель1",
        year: "1985"
    },
    {
        title: "Название альбома2",
        artist: "Исполнитель2",
        year: "2000"
    },
    {
        title: "Название альбома3",
        artist: "Исполнитель3",
        year: "2010"
    }
];

musicCollection[Symbol.iterator] = function() {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? {
                done: false,
                value: musicCollection[this.current++]
            } : { done: true };
        }
    }
}


for (let album of musicCollection) {
    console.log(`Название: ${album.title}; 
Автор: ${album.artist}; 
Год выпуска: ${album.year}`);
}