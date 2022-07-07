$('.c_arrow').on('click touch', function(e) {

    e.preventDefault();

    let arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});



$(document).ready(function () {
    $('.feed_btn#feed_comment > a').click(function () {
        if($(this).hasClass('active')) {
            $('.content_wrap_sub').removeClass('active');
        } else {
            $('.feed_btn#feed_comment > a.active').removeClass('active');
            $('.content_wrap_sub').addClass('active');
        }
    });
});



$(document).ready(function () {
    $('.schedule_list > .schedule_item').click(function () {
        

        if($(this).hasClass('open')) {
            $('.schedule_list > .schedule_item.open').removeClass('open');
            $('.content_wrap_sub').removeClass('active');
        } else {
            $('.schedule_list > .schedule_item.open').removeClass('open');
            $(this).addClass('open');
            $('.content_wrap_sub').addClass('active');
        }
    });
});



function table_write_column_pc() {
    var table_write_column_pc = '<div class="table_write_column"><div class="table_write_item"><input type="text" class="form-control"></div><div class="table_write_item wrap"><div class="table_write_item_sub"><input type="text" class="form-control"></div><div class="table_write_item_sub"><input type="text" class="form-control"></div><div class="table_write_item_sub"><input type="text" class="form-control"></div><div class="table_write_item_sub"><input type="text" class="form-control"></div><div class="table_write_item_sub"></div></div><div class="table_write_item"><input type="text" class="form-control"></div></div>';

    $(".main_invoice_area.pc .table_write_area").append(table_write_column_pc);
}

function table_write_column_mobile() {
    var table_write_column_mobile = '<div class="mobile_append"><div class="table_title_area"><div class="table_title">작업내용</div><div class="table_title split"><div class="table_subtitle">부품</div><div class="table_subtitle"><div class="table_subtitle_item">구분</div><div class="table_subtitle_item">부품번호</div><div class="table_subtitle_item">수량</div><div class="table_subtitle_item">단가</div><div class="table_subtitle_item">계</div></div></div><div class="table_title">공임</div></div><div class="table_write_area"><div class="table_write_column"><div class="table_write_item"><input type="text" class="form-control"></div><div class="table_write_item wrap"><div class="table_write_item_sub"><input type="text" class="form-control"></div><div class="table_write_item_sub"><input type="text" class="form-control"></div><div class="table_write_item_sub"><input type="text" class="form-control"></div><div class="table_write_item_sub"><input type="text" class="form-control"></div><div class="table_write_item_sub"></div></div><div class="table_write_item"><input type="text" class="form-control"></div></div></div></div>';

    $(".main_invoice_area.mobile .mobile_append_area").append(table_write_column_mobile);
}



function popupShow() {
    $('#snackbar').removeClass('popup_close');
    $('#snackbar').addClass('show');
    $('#snackbar').css('visibility','');
}

function popupClose() {
    $('#snackbar').removeClass('show');
    $('#snackbar').addClass('popup_close');
    setTimeout(function() {$('#snackbar').css('visibility','hidden');}, 450);
}




$(document).ready(function () {
    $('.history_list .history_item_wrap').click(function () {
        

        if($(this).hasClass('open')) {
            $('.history_list .history_item_wrap.open').removeClass('open');
            $('.content_wrap_sub').removeClass('active');
        } else {
            $('.history_list .history_item_wrap.open').removeClass('open');
            $(this).addClass('open');
            $('.content_wrap_sub').addClass('active');
        }
    });

    // $('.history_item > .history_label').click(function () {
    //     if($(this).hasClass('open')) {
    //         $('.history_item > .history_label.open').removeClass('open');
    //         $('.history_modal').removeClass('open');
    //     } else {
    //         $('.history_item > .history_label.open').removeClass('open');
    //         $(this).addClass('open');
    //         $('.history_modal').addClass('open');
    //     }
    // });

    // $('.modal_close').click(function () {
    //     $('.history_item > .history_label.open').removeClass('open');
    //     $('.history_modal').removeClass('open');
    // });

    $('.tag_edit').click(function () {
        if($(this).hasClass('open')) {
            $('.tag_edit.open').removeClass('open');
            $('.content_wrap_sub').removeClass('active');
        } else {
            $('.tag_edit.open').removeClass('open');
            $(this).addClass('open');
            $('.content_wrap_sub').addClass('active');
        }
    });
});



// tab-1
function pwChange() {
    $('.tab-1-item').addClass('hide');
    $('#pw_phone').removeClass('hide');
}

function pwPhoneDone() {
    $('.tab-1-item').addClass('hide');
    $('#pw_change').removeClass('hide');
}

function account() {
    $('.tab-1-item').addClass('hide');
    $('#account').removeClass('hide');
}

function phoneChange() {
    $('.tab-1-item').addClass('hide');
    $('#phone_change').removeClass('hide');
}

function quit_1() {
    $('.tab-1-item').addClass('hide');
    $('#quit_1').removeClass('hide');
}

function quit_2() {
    $('.tab-1-item').addClass('hide');
    $('#quit_2').removeClass('hide');
}

function quit_3() {
    $('.tab-1-item').addClass('hide');
    $('#quit_3').removeClass('hide');
}




// tab-2


function history_detail() {
    $('.tab-2-item').addClass('hide');
    $('#history_detail').removeClass('hide');
}

function history() {
    $('.tab-2-item').addClass('hide');
    $('#history').removeClass('hide');
}


// tab-4

function chatOpen() {
    $('#chat').addClass('hide');
    $('#chat_view').removeClass('hide');
}

function chatClose() {
    $('#chat_view').addClass('hide');
    $('#chat').removeClass('hide');
}




// tab-5

function notice_detail() {
    $('.tab-5-item').addClass('hide');
    $('#notice_detail').removeClass('hide');
}

function event_detail() {
    $('.tab-5-item').addClass('hide');
    $('#event_detail').removeClass('hide');
}

function notice() {
    $('.tab-5-item').addClass('hide');
    $('#notice').removeClass('hide');
}



$(document).ready(function () {
    $('.mypage_setting_list > .nav-item > .nav-link').click(function () {
        $('.content_wrap_sub').addClass('active');
    });
});




$('.content_sub_btn').click(function () {
    $('.content_wrap_sub').removeClass('active');
});





function sub_toggle() {
    $('.content_wrap_sub').toggleClass('active');
}

function main_calendar_toggle() {
    $('.content_wrap_sub').toggleClass('active');
}





// 알림 영역


$('#nav_notification').click(function () {
    $('.content_wrap_sub').addClass('active');
    $('.notification_area').addClass('active');
});

$('.notification_close').click(function () {
    $('.notification_area').removeClass('active');
});


function notification_empty() {
    if($('.notification_list .notification_item').length > 0) {
        $('.notification_body').removeClass('empty');
        $('#nav_notification').addClass('active');
    } else {
        $('.notification_body').addClass('empty');
        $('#nav_notification').removeClass('active');
    }
}

notification_empty();

$('.notification_list').bind('DOMSubtreeModified', function () {
    notification_empty();
});

$('.notification_item_close').click(function () {
    $(this).closest('.notification_item').fadeOut(300, function () {
        $(this).remove();
    });
});

$('.notification_clear').click(function () {
    $('.notification_item').fadeOut(300, function () {
        $(this).remove();
    });
});

