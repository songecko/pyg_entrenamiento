var Main = {
	positionType: '',
	
	init: function()
	{
		Main.initMenu();
	},
	
	initMenu: function()
	{
		$("#OpenMenu").click(function(event) 
		{
			var objeto= $('#PanelMenu');
			if (objeto.css("display") == "none")
			{
				objeto.stop(true, true).animate({'margin-left': '0px'}).fadeIn();
			} else {
				objeto.stop(true, true).animate({'margin-left': '-258px'}).fadeOut(function() { objeto.hide(); });
			}
		   
			var objeto= $('#Overlay');
			if (objeto.css("display") == "none")
			{
				objeto.fadeIn();
			} else {
				objeto.fadeOut();
			}
		});

		$(".overlay").click(function(event) 
		{
			var objeto= $('#PanelMenu');
			if (objeto.css("display") == "block")
			{
				objeto.stop(true, true).animate({'margin-left': '-258px'}).fadeOut(function() { objeto.hide(); });
			} else {
				objeto.stop(true, true).animate({'margin-left': '-258px'}).fadeOut(function() { objeto.hide(); });
			}
		   
			var objeto= $('#Overlay');
			if (objeto.css("display") == "block")
			{
				objeto.stop(true, true).fadeOut(function() { objeto.hide(); });
			} else {
				objeto.stop(true, true).fadeOut(function() { objeto.hide(); });
			}	   
		});
	}
};

$(document).ready(function() 
{
	Main.init();
});