/**
 * Created by p5030 on 2017/6/22.
 */
var parser = require("./calculator").parser;

function exec (input) {
    return parser.parse(input);
}
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    console.log("you entered: [" +
        d.toString().trim() + "]");
    console.log("And soluation is "+exec(d.toString()))
});