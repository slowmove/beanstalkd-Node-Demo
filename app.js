var person = {
  "_id": "559238ed768ea605eaba16af",
  "index": 0,
  "guid": "d743d152-5659-4c96-be6d-ac4bbcb76031",
  "isActive": true,
  "balance": "$3,797.95",
  "picture": "http://placehold.it/32x32",
  "age": 37,
  "eyeColor": "blue",
  "name": {
    "first": "Sara",
    "last": "Dunn"
  },
  "company": "ATGEN",
  "email": "sara.dunn@atgen.net",
  "phone": "+1 (800) 437-2993",
  "address": "760 Tabor Court, Kenvil, Massachusetts, 5447",
  "about": "Adipisicing mollit id occaecat officia eu eiusmod proident. Ad cupidatat aute eiusmod consectetur id eu eiusmod sint. Lorem qui nisi Lorem aute ullamco nisi elit id nulla laborum Lorem reprehenderit nisi. Cillum enim exercitation nisi deserunt magna veniam sint aliquip. Sunt aliquip labore pariatur occaecat culpa. Cillum dolore consequat laborum enim aute in ad sit dolore laborum magna ea quis. Pariatur dolore consectetur reprehenderit sunt cillum pariatur veniam laborum.\r\n",
  "registered": "Sunday, December 14, 2014 5:41 PM",
  "latitude": 89.16756,
  "longitude": -91.037443,
  "tags": [
    "irure",
    "quis",
    "magna",
    "quis",
    "exercitation",
    "sunt",
    "est"
  ]
};

var bs = require('nodestalker'),
    client = bs.Client('0.0.0.0:11300');

client.use('testChannel').onSuccess(function(data) {
    console.log(data);

    for(var i = 0; i< 5; i++){
        putData(JSON.stringify(person));
    }
    //client.disconnect();
});

function putData(data) {
   client.put(data).onSuccess(function(data) {
       console.log(data);
       // client.disconnect();
   });
}