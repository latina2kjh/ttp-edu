/*Div全体をクリックできるようにする*/
$(function(){
    $(".top_menu_hover").click(function(){
        window.location=$(this).find("a").attr("href");
    return false;
    });
});

/*LINK無効(class="disable"のみ無効)*/

$(function(){
	$('a.disable').click(function(){
		return false;
	})
});

