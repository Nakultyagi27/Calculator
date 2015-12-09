(function () {
    'use strict';
    (function () {

        var clicked, finalresult, str, strarr;
        function calculate() {
            str = $(".join").html();
            strarr = str.split(clicked);
            if (clicked === '+') {
                finalresult = parseInt(strarr[0], 10) + parseInt(strarr[1], 10);
            } else if (clicked === '-') {
                finalresult = parseInt(strarr[0], 10) - parseInt(strarr[1], 10);
            } else if (clicked === '*') {
                finalresult = parseInt(strarr[0], 10) * parseInt(strarr[1], 10);
            } else if (clicked === '/') {
                finalresult = parseInt(strarr[0], 10) / parseInt(strarr[1], 10);
            }

            $('.result').html(finalresult);
        }
        $(".unique").click(function () {
            var a = $(".join").html() + $(this).val();
            $('.join').html(a);
        });
        $(".arsign").click(function () {
            clicked = $(this).val();
        });
        $('.rescalculate').click(calculate);
        $(".clear").click(function () {
            document.location.reload(true);
        });
    }());
}());


