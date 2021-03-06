Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});


Handlebars.registerHelper('minus', function (v1, v2) {
    console.log(v1);
    console.log(v2);
    return parseInt(v1) - parseInt(v2);
});


Handlebars.registerHelper('isCurrent', function (v1) {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('province')) {
        let provinceFilter = searchParams.get('province');
        return provinceFilter === v1
    }
    return false;
});


Handlebars.registerHelper('urlEncode', function (v1) {
    return v1.replace(/[\W_]+/g, "");
});

Handlebars.registerHelper('urlEncodeComponent', function (v1) {
    return encodeURIComponent(v1);
});


$(document).ready(function () {
    if (
        location.protocol !== "https:" &&
        location.hostname !== "localhost" &&
        location.hostname !== "127.0.0.1" &&
        location.hostname !== "0.0.0.0"
    ) {
        location.replace(
            `https:${location.href.substring(location.protocol.length)}`
        );
    }
    var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1TvDQjbYOaIBCXUpN8g0Fa6rU3YCxBiBDQM5EtD9Tlv8/edit#gid=0';
    var HRTemplate = Handlebars.compile($('#hr-template').html());

    let searchParams = new URLSearchParams(window.location.search);
    let provinceFilter;
    if (searchParams.has('province')) {
        provinceFilter = searchParams.get('province');
        $('#provinceName').text(provinceFilter);
        console.log(provinceFilter);
    }
    else {
        provinceFilter = $("#hr").data("province");
    }
    var provinceColumn = "K"
    var query = "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O";
    if (provinceFilter) {
        query = "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O where " + provinceColumn + " = '" + provinceFilter + "'";
    }
    // Load top five HR leaders.
    $('#hr').sheetrock({
        url: mySpreadsheet,
        query: query,
        rowTemplate: HRTemplate,
        callback: function () {
            if (window.location.hash) {
                $(window).scrollTop($(window.location.hash).offset().top);
            }
        }
    });
    let provincesTemplate = Handlebars.compile($('#provinces-template').html());
    console.log(provincesTemplate);
    $('#provinces').sheetrock({
        url: mySpreadsheet,
        query: "select K, count(A) group by K",
        rowTemplate: provincesTemplate
    });
});



function sendWhatsapp() {
    let link = "https://www.praatbox.be/" + generatePraatboxURL(getParameterByName("wrd_a"), getParameterByName("wrd_b"), getParameterByName("wrd_c"));
    window.open("https://api.whatsapp.com/send?text=" + escape(link), '_blank');
}
