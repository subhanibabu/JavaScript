function rentalCarCost(days) {
    var rate = days * 40,
        disCount = 0;
    if (days >= 7)
        disCount = 50;
    else if (days >= 3)
        disCount = 20;
    return rate - disCount;
}
