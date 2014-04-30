var squishy = {
	squishies: [],
	init: function (startSize){
		var initSquishFactor = $(window).width() / startSize;
		squishies = $('.squishyText');
		$(squishies).each(function(){
			this.squishFontSize = Math.floor((parseInt($(this).css('font-size').replace('px', '')) * initSquishFactor)*100)/100;
			$(this).css('font-size', this.squishFontSize + "px");
			this.squishFactor = Math.floor(($(this).parent().width()/this.squishFontSize)*100)/100;
		});
		
		$(window).resize(function(){
			$(squishies).each(squishy.squish);	
		});
	},
	squish: function(){
		var parentWidth = $(this).parent().width();
		var fontSize = Math.floor((parentWidth/this.squishFactor)*100)/100;
		$(this).css('font-size', fontSize + "px"); 
	}	
};	