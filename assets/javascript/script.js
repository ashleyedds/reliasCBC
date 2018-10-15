$(document).ready(function () {

    $(document).keypress(function (event) {

        if (event.charCode === 49) {
            $(".brianCard").animate({ "opacity": "1" }, 2000);
        }
        if (event.charCode === 50) {
            $(".charlieCard").animate({ "opacity": "1" }, 2000);
        }
        if (event.charCode === 51) {
            $(".ashleyCard").animate({ "opacity": "1" }, 2000);
        }
        if (event.charCode === 52) {
            $(".brittaCard").animate({ "opacity": "1" }, 2000);
        }
        if (event.charCode === 53) {
            $(".passionCard").animate({ "opacity": "1" }, 2000);

            setTimeout(function () {
                $(".pCharlie").animate({ "opacity": "1" }, 2000);
            }, 1000);

            setTimeout(function () {
                $(".pBritta").animate({ "opacity": "1" }, 2000);
            }, 2000);

            setTimeout(function () {
                $(".pAshley").animate({ "opacity": "1" }, 2000);
            }, 3000);

            setTimeout(function () {
                $(".pBrian").animate({ "opacity": "1" }, 2000);
            }, 4000);
        }
    });
})