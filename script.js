var a = [ 5, 12 ];
var b = [];

a[ 99 ] = 7;

for ( var ctr_src = 0, ctr_dest = 0; ctr_src < a.length; ++ctr_src, ++ctr_dest )
{
  if ( a[ ctr_src ] !== undefined )
  {
    b[ ctr_dest ] = Math.pow( a[ ctr_src ], 2 );
    console.log( "b[ " + ctr_dest + " ] = ", b[ ctr_dest ] );
  }
  else
  {
    b[ ctr_dest ] = undefined;
  }
}
