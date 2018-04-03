var container_DOM = document.querySelector( "#para" );
var multi_rows_generator = new MultiRowsGenerator( container_DOM, [8, 10], [1, 2], [-2, 2], [100, 200] );

var run_once = function( prefix, i ) {
  multi_rows_generator.draw();
  html2canvas( document.querySelector( "#container" ) ).then( function( canvas ) {
    var link = document.querySelector( '#saveAs' );
    link.href = canvas.toDataURL();
    link.download = prefix + i + '.png';
    link.click();
  } );
}

var run = function( prefix, total ) {
  var num = 0;
  var interval = setInterval( function() {
    num ++;
    run_once( prefix, num );
    if ( num >= total ) {
      clearInterval( interval );
    }
  }, 1 );
}

var get_annotations = function() {
  var spans_list = document.querySelectorAll( "span" );
  for ( var span in spans_list) {
  }
}

document.querySelector( "#run" ).addEventListener( "click", function() {
  run( "", 1 );
} );
