var year = [2015];
var arable_land_brazil = 33.8100342899258;
var country_name_brazil = 'Brazil';

var arable_land_germany = 47.9592041483809;
var country_name_germany = 'Germany';

var arable_land_china = 56.2229587724434;
var country_name_china = 'China';

var trace1 = {
/* TODO: Use the country name and arable land data to make a bar chart */
x:[country_name_brazil, country_name_germany, country_name_china],
y:[arable_land_brazil, arable_land_germany, arable_land_china],
type:'bar',
};

var layout = {
 /* TODO: include a title for the chart */
 title:'Hectares Arable Land Per Person 2015',
 xaxis: {
     title:'country',
 },
 yaxis: {
     title:'hectares per person',
 }

};

var data = [trace1];

Plotly.newPlot('plot2', data, layout);