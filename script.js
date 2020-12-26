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
            (data.Countries).forEach(element => {
                $('#country').append(`<option value="${idx++}"> ${element.Country} </option>`);
                // console.log((idx++)+ " " + element.Country);
            });

            // get data for the country selected
            $("#country").change(function(){
                let countryIdx = $("#country").val();
                console.log(data.Countries[countryIdx]);
                data = `
                    <td> ${data.Countries[countryIdx].TotalConfirmed} </td>
                    <td> ${data.Countries[countryIdx].TotalDeaths} </td>
                    <td> ${data.Countries[countryIdx].TotalRecovered} </td>

                `;

                // show data
                $("#data").html(data);
            });

        });
    }

});