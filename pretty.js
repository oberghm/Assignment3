const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input',()=>{
    const ugly = input.value;
    const object = JSON.parse(ugly);
    const pretty = JSON.stringify(object, null, '\t');
    output.value = pretty;
});


    function CreateTableFromJSON() {
        var employees = [
            {
                "userId":"rirani",
                "jobTitleName":"Developer",
                "firstName":"Romin",
                "lastName":"Irani",
                "preferredFullName":"Romin Irani",
                "employeeCode":"E1",
                "region":"CA",
                "phoneNumber":"408-1234567",
                "emailAddress":"romin.k.irani@gmail.com"
            },
                
            {
                "userId":"nirani",
                "jobTitleName":"Developer",
                "firstName":"Neil",
                "lastName":"Irani",
                "preferredFullName":"Neil Irani",
                "employeeCode":"E2",
                "region":"CA",
                "phoneNumber":"408-1111111",
                "emailAddress":"neilrirani@gmail.com"
            },
            {
                "userId":"thanks",
                "jobTitleName":"Program Directory",
                "firstName":"Tom",
                "lastName":"Hanks",
                "preferredFullName":"Tom Hanks",
                "employeeCode":"E3",
                "region":"CA",
                "phoneNumber":"408-2222222",
                "emailAddress":"tomhanks@gmail.com"
            }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < employees.length; i++) {
            for (var key in employees[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < employees.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = employees[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var output = document.getElementById("showData");
        output.innerHTML = "";
        output.appendChild(table);


    }