var s = "Мы знаем, что монохромный цвет - это градации серого";
var txt = "хром";
var word;

var slicePos = s.indexOf( txt );

if ( slicePos != -1 )
{
  var startPos   = s.lastIndexOf( " ", slicePos ) + 1;
  var endPos = s.indexOf( " ", startPos );
  if ( endPos != -1 )
  {
    word = s.slice( startPos, endPos );
  }
  else
  {
    word = s.slice( startPos );
  }
    
  console.log( word );
}
else
{
  console.log( "The word is absent" );
}
