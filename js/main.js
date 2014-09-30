var salesDetails = $('.sales__details');

var sales = $('.sales');

var salesButton = function () {
var isActive = salesDetails.attr('data-state');
    if (isActive == 'active') {
    salesDetails.attr('data-state','inactive');
    } else {
    salesDetails.attr('data-state','active');
    }
};

sales.on('click', salesButton);


var rightSalesDetails = $('.right-sales__details');

var rightSales = $('.right-sales');

var rightSalesButton = function () {
var isActive = rightSalesDetails.attr('data-state');
    if (isActive == 'active') {
    rightSalesDetails.attr('data-state','inactive');
    } else {
    rightSalesDetails.attr('data-state','active');
    }
};

rightSales.on('click', rightSalesButton);
