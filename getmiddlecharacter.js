function getMiddle(Word)
{
  var length = Word.length,output;

if(length % 2 == 0)
{
output = Word[(length/2)-1] + Word[(length/2)];
}
else
{
  if(length==1)
  {
  output = Word;
  }
  else
  {
  output = Word[Math.floor((length/2))];
  }
}

return output ;
}
