$(document).ready(function () {
    $(document).click(function(e) {
        let target = e.target;
        if (target.className === 'more_link') {
            e.preventDefault();
            for (let i = 0; i<15; i++) {
                if (target.id === 'sideBar-' + [i]) {
                    $('#moreInfo-' + [i]).slideDown(300);
                } 
            }
        } else if (target.className !== 'moreInfo') {
            $('.moreInfo').slideUp(300);
        }
    });
});