function rentalCarCost(days) {
  var TotalAmount,Discount=0,Rate = days*40;
  if ( days>=7)
    {
    Discount =50;
    }
  else if (days >=3)
    {
    Discount =20;
    }
    TotalAmount = Rate- Discount;
  return TotalAmount ;
}
