function getMiddle(Word)
{
  var length = Word.length,output;

  if(length % 2 == 0)
    {
    output = Word.slice((length/2)-1,(length/2)+1);
    }
  else
    {
      output = Word.charAt((length/2));
    }
return output ;
}
