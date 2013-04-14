GameBomb.filter('highlightText', function () {
    return function (text, search) {
        var re = new RegExp(search, 'gi');
        return text.replace(re, '<strong>$&</strong>');
    }
});

GameBomb.filter('displayDate', function () {
    return function (date) {
        var d = new Date(date);
        return (d.getDay() < 10 ? "0" : "") + d.getDay() + "." +
            (d.getMonth() < 10 ? "0" : "") + d.getMonth() + "." + (d.getYear() < 1999 ? d.getYear() + 1900 : d.getYear());
    }
});