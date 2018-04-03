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
  constructor( sentence, angle, left ) {
    this.DOM = null;
    this.sentence = sentence;
    this.angle = angle;
    this.left = left;
  }
  draw( container_DOM ) {
    var DOM = document.createElement( "span" );
    DOM.innerText = this.sentence;
    DOM.style.transform = "rotate(" + this.angle + "deg)";
    DOM.style.marginLeft = this.left + "px";
    container_DOM.appendChild( DOM );
    this.DOM = DOM;
  }
}

class RowGenerator {
  constructor( words_range, angle_range, left_range ) {
    this.words_range0 = words_range[0];
    this.words_num_range = words_range[1] - words_range[0];

    this.angle_range0 = angle_range[0];
    this.angle_range = angle_range[1] - angle_range[0];

    this.left_range0 = left_range[0];
    this.left_range = left_range[1] - left_range[0];

    this.word_generator = new WordGenerator();

  }
  get_row() {
    var words_num = Math.round( Math.random() * this.words_num_range ) + this.words_range0;
    var word_list = [];
    for ( var i = 0; i < words_num; i++ ) {
      var word = this.word_generator.get_word();
      word_list.push(word);
    }
    var sentence = word_list.join( " " );

    var angle = Math.random() * this.angle_range + this.angle_range0;

    var left = Math.random() * this.left_range + this.left_range0;

    var row = new Row( sentence, angle, left );
    return row;
  }
}

class MultiRowsGenerator {
  constructor( container_DOM, rows_num_range, words_range, angle_range, left_range ) {
    this.row_generator = new RowGenerator( words_range, angle_range, left_range );
    this.rows_num = Math.round( Math.random() * ( rows_num_range[1] - rows_num_range[0] ) ) + rows_num_range[0];
    this.container_DOM = container_DOM;
  }
  draw() {
    this.container_DOM.innerHTML = "";
    for ( var i = 0; i < this.rows_num; i++ ) {
      var row = this.row_generator.get_row();
      row.draw( this.container_DOM );
    }
  }
}


