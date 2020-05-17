function cmp( base )
{
  return function( nbr )
  {
    return ( nbr == base ) ? null : base > nbr; 
  }
}

console.log( cmp( 10 )( 9 ) );
console.log( cmp( 10 )( 10 ) );
console.log( cmp( 10 )( 11 ) );
