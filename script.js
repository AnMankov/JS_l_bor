var base =  2; 
var exp  = 10;
var res  =  1;

function power( base, exp )
{
  for ( var ctr = 0; ctr < exp ; ++ctr )
  {
    res *= base;
  } 

  return res;
}

console.log( power( base, exp ) );

