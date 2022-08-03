var empty_object = {};

var stooge = {
 "first-name": "Jerome",
 "last-name": "Howard"
}

stooge["first-name"];

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
    },
    arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
    }
   };

var middle=stooge["middle_name"] || "saad";
console.log(stooge["first-name"]='saad');


stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
 model: 'Boeing 777'
};
flight.status = 'overdue';
