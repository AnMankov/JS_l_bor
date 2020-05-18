var a = [ 5, 12 ];
var b = [];

a[ 99 ] = 7;

for ( var ctr_src in a )
{
  b.push( Math.pow( a[ ctr_src ], 2 ) );
  
  console.log( "b[ " + ctr_src +  " ] = ", b[ ctr_src ] );
}
