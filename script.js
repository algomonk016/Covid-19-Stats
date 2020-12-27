$(document).ready(function(){
    init();

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

            // displaying datas in cards
            $('#newCases').html(data.Global.NewConfirmed);
            $('#totalCases').html(data.Global.TotalConfirmed);

            $('#newRecovered').html(data.Global.NewRecovered);
            $('#recoveredCases').html(data.Global.TotalRecovered);

            let activeCases = data.Global.TotalConfirmed - data.Global.TotalRecovered - data.Global.TotalDeaths;
            $('#activeCases').html(activeCases);

            $('#newDeaths').html(data.Global.NewDeaths);
            $('#totalDeaths').html(data.Global.TotalDeaths);

            console.log(Countries);

            // get data for the country selected
            $("#country").change(function(){
                let countryIdx = $("#country").val();
                // console.log(Countries[countryIdx]);

                // displaying datas in cards
                $('#newCases').html(Countries[countryIdx].NewConfirmed);
                $('#totalCases').html(Countries[countryIdx].TotalConfirmed);

                $('#newRecovered').html(Countries[countryIdx].NewRecovered);
                $('#recoveredCases').html(Countries[countryIdx].TotalRecovered);

                activeCases = Countries[countryIdx].TotalConfirmed - Countries[countryIdx].TotalRecovered -Countries[countryIdx].TotalDeaths;
                $('#activeCases').html(activeCases);

                $('#newDeaths').html(Countries[countryIdx].NewDeaths);
                $('#totalDeaths').html(Countries[countryIdx].TotalDeaths);
            });
        });
    }
});