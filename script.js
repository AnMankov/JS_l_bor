/*
Draw the right triangle:
*
**
***
****
*****
*/

var sym     = "*";
var cur_row =   1;
var ROW_QTY =   5;
var res     =  "";

while ( cur_row++ <= ROW_QTY )
{
  res += sym;
  console.log( res );
}

