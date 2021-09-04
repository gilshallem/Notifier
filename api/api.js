const sound = require("sound-play");
const say = require("say");
const path = require("path");

module.exports.test = function() {
    const filePath = path.join(__dirname, "file.wav");
    sound.play(filePath);

}

module.exports.test2 = function() {
    say.speak('Hello!','google')

}