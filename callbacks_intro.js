var chocolateBars = [
    {name: "Galaxy", manufacturer: "Mars"},
    ];

/* not needed after array_helper introduced
var marsChocolate = [];
for(var x=0; x<chocolatebars .length; x++){
    if(chocolateBars[x].manufacturer == "Mars")
        marsChocolate.push(chocolateBars[x]);
}*/


var array_helper = {
    filter: function(list, filter)
    {
        var matches = [];
        for(var x=0; x<list .length; x++)
        {
            if(filter(list[x]))
                matches.push(list[x]);
        }
        return matches;
    }
};

var marsChocolate = array_helper.filter(chocolateBars,
     function(item) { return item.manufacturer == "Mars"
});

/*var naughtyList = array_helper.filter(childrenOfTheWorld,
    function(item) { return item.naughtiness &gt; 50;
});

var niceList = array_helper.filter(childrenOfTheWorld,
    function(item) { return item.naughtiness &lt;= 50;
});*/

console.log(marsChocolate);


