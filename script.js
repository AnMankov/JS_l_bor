var re1 = /^\d\d?-\d\d?-\d{4}$/;
var re2 = /^\d{1,2}-\d{1-2}-\d{4}$/
var re3 = /^[0-3]?\d-[0-1]?\d-[1-2]\d{3}$ /

var str =
[
  "25-02-2012",
  "25-2-2012",
  "01-12-2011",
  "2-12-1978"
];

for ( let ctr = 0; ctr < str.length; ++ctr )
{
  console.log( re1.test( str[ ctr ] ) );
}

