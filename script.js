$(document).ready(function(){
    init();

    // $('button').click(function(){
    //     $("#data").empty();
    //     init();
    // });  

    function init() {
        let url = "https://api.covid19api.com/summary"

        let data = ""

        $.get(url, function(data){

            // adding options in the dropdown menu
            let idx = 0;
            let Countries = data.Countries;
            (Countries).forEach(element => {
                $('#country').append(`<option value="${idx++}"> ${element.Country} </option>`);
                // console.log((idx++)+ " " + element.Country);
            });

            data = `
                <td> ${data.Global.TotalConfirmed} </td>
                <td> ${data.Global.TotalDeaths} </td>
                <td> ${data.Global.TotalRecovered} </td>
            `;
            $("#data").html(data);

            

            // console.log(Countries);

            // get data for the country selected
            $("#country").change(function(){
                let countryIdx = $("#country").val();
                // console.log(Countries[countryIdx]);
                data = `
                    <td> ${Countries[countryIdx].TotalConfirmed} </td>
                    <td> ${Countries[countryIdx].TotalDeaths} </td>
                    <td> ${Countries[countryIdx].TotalRecovered} </td>

                `;

                // show data
                $("#data").html(data);
            });

        });
    }

});