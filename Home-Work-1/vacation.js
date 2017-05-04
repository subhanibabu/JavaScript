function rentalCarCost(days) {
    var rate = days * 40,disCount;
    if (days >= 7)
        disCount = 50;
    else if (days >= 3)
        disCount = 20;
    else
        disCount = 0;
    return rate - disCount;
}
