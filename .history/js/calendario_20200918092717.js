mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light',
    display: 'bubble'
};

$(function () {

    $('#demo-app-date').mobiscroll().calendar();

    $('#demo-app-date-time').mobiscroll().calendar({
        controls: ['calendar', 'time']
    });

    $('#demo-app-date-non-form').mobiscroll().calendar();

    var instance = $('#demo-app-date-external').mobiscroll().calendar({
        showOnTap: false,
        showOnFocus: false,
        controls: ['calendar', 'time'],
        onInit: function (event, inst) {
            inst.setVal(new Date(), true);
        }
    }).mobiscroll('getInst');

    $('#show-demo-app-date-external').click(function () {
        instance.show();
        return false;
    });

});