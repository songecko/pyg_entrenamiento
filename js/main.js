var Main = {
	positionType: 'supervisor',
	
	init: function()
	{
		Main.initMenu();
		
		$('.nav-tabs a').click(function(e)
		{
			$(this).tab('show');
			e.preventDefault();
		});
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
		var oldColorClass = Main.getColorNameOfCurrentPosition()+'Section';
		$('.pt-page-dp .posicion').removeClass(Main.positionType);
		$('.pt-page-ett .posicion').removeClass(Main.positionType);
		
		Main.positionType = position;
		
		//Descripcion del puesto (page 15)
		$('.pt-page-dp .posicion').addClass(Main.positionType);
		$('.pt-page-dp .posicion .titulo p').html(Main.getNameOfCurrentPosition());
		$('.pt-page-dp .nextButton').data('goToPage', Main.getDpGoToPage());
		
		//Comienza el entrenamiento (page 19)
		$('.pt-page-ce .posicion').addClass(Main.positionType);
		
		//Elije tipo de tienda (page 26)
		$('.pt-page-ett .posicion').addClass(Main.positionType);
		showEttLinks();
		
		
		//Change the background colors of sections
		var colorClass = Main.getColorNameOfCurrentPosition()+'Section';
		var sectionsToChange = [{pageId: 'pbv', max: 6}, {pageId: 'vta', max: 9},{pageId: 'vtbc', max: 8},{pageId: 'vm', max: 18}];
		$.each(sectionsToChange, function(index, section) 
		{
			for(var i=1; i<section.max; i++)
			{
				$('.pt-page-'+section.pageId+'-'+i).removeClass(oldColorClass).addClass(colorClass);
			}
		});
		$('.pt-page-productos').removeClass(oldColorClass).addClass(colorClass);
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
	},
	
	getColorNameOfCurrentPosition: function()
	{
		switch(Main.positionType)
		{
			case 'supervisor':
				return 'green';
				break;
			case 'vendedorA':
				return 'violet';
				break;
			case 'vendedorBC':
				return 'orange';
				break;
		}
		
		return '';
	},
	
	showEttLinks: function()
	{
		$('.pt-page-ett .posicion').show();
		
		switch(Main.positionType)
		{
			case 'vendedorA':
				$('.pt-page-ett .posicion.tiendaBC').hide();
				break;
			case 'vendedorBC':
				$('.pt-page-ett .posicion.tiendaA').hide();
				$('.pt-page-ett .posicion.tiendaM').hide();
				break;
		}
	}
};

$(document).ready(function() 
{
	Main.init();
});