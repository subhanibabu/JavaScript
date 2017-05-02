function rentalCarCost(days) {
    var Rate = days * 40;
    if (days >= 7)
        Discount = 50;
    else if (days >= 3)
        Discount = 20;
    else
        Discount = 0;
    return Rate - Discount;
}
