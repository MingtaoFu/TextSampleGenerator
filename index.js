"use strict";

class WordGenerator {
  constructor() {
    var paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    self.word_list = paragraph.split(" ");
    self.num_of_words = self.word_list.length;
  }
  get_word() {
    var index = Math.round( Math.random() * (self.num_of_words - 1 ) );
    return self.word_list[index];
  }
}


class Row {
  constructor( word_list, angle, left ) {
    this.DOM = null;
  }
  draw( container_DOM ) {
    var DOM = document.createElement( "span" );
    DOM.style.transform = "rotate(" + self.a;
  }
}

class RowGenerator {
  constructor( words_range, angle_range ) {
    this.words_range0 = words_range[0];
    this.words_num_range = words_range[1] - words_range[0];

    this.angle_range0 = angle_range[0];
    this.angle_range = angle_range[1] - angle_range[0];

    this.word_generator = new WordGenerator();

  }
  get_row() {
    words_num = Math.round( Math.random() * this.words_num_range ) + this.words_range0;
    word_list = [];
    for ( var i = 0; i < words_num; i++ ) {
      word = this.word_generator.get_word();
      word_list.push(word);
    }
    sentence = word_list.join( " " );

    var angle = Math.random() * this.angle_range + this.angle_range0;
    var row = new Row( sentence, angle, left );
  }

}

var row_generator = new RowGenerator( [0, 5], [43, 47] );
var container_DOM = document.querySelector( "#para" );
