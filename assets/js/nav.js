(() => {
    updateNav();
    $(document).on('scroll', updateNav)
    function updateNav() {
        let nav = $("nav")
        if (nav.attr('static') == null) {
            if (window.scrollY <= 50) {
                nav.attr("fixed", false);
            } else {
                nav.attr("fixed", true);
            }
        }
    }

    function scrollPastLanding() {
        let isFixed = pageArrow.attr("fixed") != null && pageArrow.attr("fixed") == "true";
        if (isFixed) {
            window.scrollTo(0, 0)
        } else {
            window.scrollTo(0, window.screen.height - 200)
        }
    }
})()