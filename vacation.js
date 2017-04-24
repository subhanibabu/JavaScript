function rentalCarCost(days) {
  var TotalAmount;
  if ( days>=7)
    {
    TotalAmount =((days*40)-50);
    }
  else if (days >=3)
    {
    TotalAmount =((days*40)-20);
    }
  else
    {
    TotalAmount =((days*40));
    }
  return TotalAmount ;
}
