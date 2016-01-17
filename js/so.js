$(document).ready(function() {
	a();
});

function a() {
	$(".left_title_text1").click(function() {
		$(".left_title_text1").text("aaaaaa");
	});

//	$("#left_title_text1").click(function() {
//		alert("aa");
//	});
$(".left_title_text1").text("bbbbb");
//	$(".left_title_text1").attr("text", "bbbbb");
}
//$(function() {
//	$("div").each(function() {
//		$(this).click(function() {
//			alert($(this).text());
//		});
//	});
//});