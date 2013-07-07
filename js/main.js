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
	},
	
	selectPositionType: function(position)
	{
		$('.pt-page-dp .posicion').removeClass(Main.positionType);
		
		Main.positionType = position;
		
		//Descripcion del puesto (page 15)
		$('.pt-page-dp .posicion').addClass(Main.positionType);
		$('.pt-page-dp .posicion .titulo p').html(Main.getNameOfCurrentPosition());
		$('.pt-page-dp .nextButton').data('goToPage', Main.getDpGoToPage());
	},
	
	getNameOfCurrentPosition: function()
	{
		switch(Main.positionType)
		{
			case 'supervisor':
				return 'Supervisor';
				break;
			case 'vendedorA':
				return 'Vendedor A';
				break;
			case 'vendedorBC':
				return 'Vendedor B/C';
				break;
		}
		
		return '';
	},
	
	getDpGoToPage: function()
	{
		switch(Main.positionType)
		{
			case 'supervisor':
				return 16;
				break;
			case 'vendedorA':
				return 64;
				break;
			case 'vendedorBC':
				return 69;
				break;
		}
		
		return 16;
	}
};

$(document).ready(function() 
{
	Main.init();
});