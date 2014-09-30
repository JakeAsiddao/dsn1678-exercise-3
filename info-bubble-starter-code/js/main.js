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