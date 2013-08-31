$(document).ready(function(){
	var cpt=[];
	$('div[id^=fiole]').click(function(){
		id=$(this).attr('id');
		var timer1 = setTimeout(function(){$('#'+id).removeClass(id+'_1').addClass(id+'_2')},50);
		var timer2 = setTimeout(function(){$('#'+id).removeClass(id+'_2').addClass(id+'_3')},100);
		var timer3 = setTimeout(function(){$('#'+id).removeClass(id+'_3').addClass(id+'_4')},150);
		var timer4 = setTimeout(function(){$('#'+id).removeClass(id+'_4').addClass(id+'_5')},200);
		var timer4 = setTimeout(function(){$('#'+id).removeClass(id+'_5').addClass(id+'_6')},250);
		cpt.push(id.substr(5,1));
	});

});