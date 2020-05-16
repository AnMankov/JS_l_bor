var nbr      = 1123;
var ending   = "";
var msgStart = "На ветке сидит ";
var msgEnd   = " ворон";
var resMsg   = "";

switch ( nbr % 100 )
{
  case 11:
  case 12:
  case 13:
  case 14:
       break;
  default: 
       switch ( nbr % 10 )
       {
         case 1:
              ending = "а";
              break;
         case 2:
         case 3:
         case 4:
              ending = "ы";
              // break;
         default:
              break;
       }
       break;
}

resMsg = msgStart + nbr + msgEnd + ending;

console.log( resMsg );
