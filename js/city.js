function myCity() {
    let span2 = document.querySelector('.city2');
    let span3 = document.querySelector('.city3');
    function load() {
        let url = `//click.lucky.online/click/ip-location.html`;
        // let url = `http://ipwhois.app/json/`;
        fetch(url) 
            .then(function(response) {
                return response.json();
            })
            .then(function (data) {
                console.log('Data', data);
                span2.innerHTML = data.city;
                span3.innerHTML = data.city;
            });
    }
    load();
}
myCity();

