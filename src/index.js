// IMPORTS
const Algorithms = require("./Algorithms");
const path = require("node:path");
const songs = require("./songs.json");
const fs = require("node:fs");

// CONFIG 
// Check the "Algorithms" folder for possible shuffles algorithms (index is not an algorithm) 
const Algorithm = "random";
const shuffle_amount = 100;
// END OF CONFIG

if (Algorithm === "index") return console.log("Index isn't an algorithm, it's just used to organize them for the script.");
if (!Object.keys(Algorithms).includes(Algorithm)) return console.log("Invalid algorithm name, maybe you misspelled it?");

for (let i = 1; i < shuffle_amount+1; i++) {
    console.log(`Shuffle: ${i}`);
    const output_file = path.join(__dirname, "out", `${Algorithm} (${i}).json`);
    const out = Algorithms[Algorithm](songs);
    fs.writeFileSync(output_file, JSON.stringify(out, null, 4));
}