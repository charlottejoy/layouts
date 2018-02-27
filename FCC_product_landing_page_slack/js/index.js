
//$(".full-menu").slideUp();
/*$("#page-hamburger").click(function(){
	$(".full-menu").css({right: 0});
	//$(".full-menu").slideDown();
	$("body").toggleClass("no-overflow");
});
$("#menu-hamburger").click(function(){
	$(".full-menu").css({right: 100});
});
*/
$(".hamburger").click(function () {
	$("body").toggleClass("no-overflow");
	$(".full-menu").toggleClass("move-menu-left, menu-move-right");
});