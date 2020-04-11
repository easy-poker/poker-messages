"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suit;
(function (Suit) {
    Suit["Diamonds"] = "Diamonds";
    Suit["Clubs"] = "Clubs";
    Suit["Hearts"] = "Heart";
    Suit["Spades"] = "Spades";
})(Suit || (Suit = {}));
var Face;
(function (Face) {
    Face["Two"] = "Two";
    Face["Three"] = "Three";
    Face["Four"] = "Four";
    Face["Five"] = "Five";
    Face["Six"] = "Six";
    Face["Seven"] = "Seven";
    Face["Eight"] = "Eight";
    Face["Nine"] = "Nine";
    Face["Ten"] = "Ten";
    Face["Jack"] = "Jack";
    Face["Queen"] = "Queen";
    Face["King"] = "King";
    Face["Ace"] = "Ace";
})(Face || (Face = {}));
exports.isServerMessage = function (x) {
    return typeof x.type === "string";
};
