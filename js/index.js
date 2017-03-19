// JavaScript Document




$('.con4_4l').find('li').mouseover(function()
{
	$('.con4_4l').find('li').attr('id','');
	$('.con4_4r').css('display','none');
	$(this).attr('id','active');
	$('.con4_4r').eq($(this).index()).css('display','block');
	$('.con4_4l').css('cursor','pointer');
});



$('.con6_6').find('li').mouseover(function()
{
	$('.con6_6').find('li').attr('class','');
	$('.con6_7').css('display','none');
	$(this).attr('class','active');
	$('.con6_7').eq($(this).index()).css('display','block');
	$('.con6_6').css('cursor','pointer');
});



$('.con6_3').find('li').mouseover(function()
{
	$('.con6_3').find('li').attr('id','');
	$('.con6_2l').css('display','none');
	$(this).attr('id','active');
	$('.con6_2l').eq($(this).index()).css('display','block');
	$('.con6_3').css('cursor','pointer');
});