// const forex_coach = {
//     name: "Ukombe",
//     role: "Mentor",
//     age: 27
// }
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Adaobi",
    artist: "Mavins Crew",
    numStreams: 2000000,
    credits: {
        producer: "Don Jazzy",
        writer: "Rema"
    }
};

calculatePayout(mySong);
printSong(mySong);
