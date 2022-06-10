/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "aried"];
  var gateway = [".com", ".net", ".us", ".io", ".ed"];
  var link = [];

  for (var i = 0; i < pronoun.length; i++) {
    for (var u = 0; u < adj.length; u++) {
      for (var x = 0; x < noun.length; x++) {
        for (var y = 0; y < gateway.length; y++) {
          if (
            noun[x].charAt(noun[x].length - 2) === "e" &&
            noun[x].charAt(noun[x].length - 1) === "d" &&
            gateway[y] === ".ed"
          ) {
            var new_word = noun[x].substring(noun[x].length - 2);
            console.log(gateway[y]);
            link.push(pronoun[i] + adj[u] + new_word + gateway[y]);
          } else {
            link.push(pronoun[i] + adj[u] + noun[x] + gateway[y]);
          }
        }
      }
    }
  }

  console.log(link);
};
