
	$(document).ready(function() {
		$('#mapa').click(function(){
			$('#content_map').css('background-image', ' url(img/azuqueca_map.jpg)');
		});                       
	});

	$(document).ready(function() {
		$('#sat').click(function(){
			$('#content_map').css('background-image', ' url(img/azuqueca_sat.jpg)');
		});                       
	});	
	
	

	
	$("#position_1").click(function () {		
		if ($('#position_1').hasClass('display_position_1')){
			$('#result_position_1').removeClass('display_position_1');		
		}
		else{
			$('#result_position_1').addClass('display_position_1');
			$('#result_position_2').removeClass('display_position_1');
			$('#result_position_3').removeClass('display_position_1');
		}
	});
	

		
	$("#position_2").click(function () {		
		if ($('#position_2').hasClass('display_position_1')){
			$('#result_position_2').removeClass('display_position_1');
		}
		else{
			$('#result_position_2').addClass('display_position_1');
			$('#result_position_1').removeClass('display_position_1');
			$('#result_position_3').removeClass('display_position_1');
		}
	});
	

		
	$("#position_3").click(function () {		
		if ($('#position_3').hasClass('display_position_1')){
			$('#result_position_3').removeClass('display_position_1');
		}
		else{
			$('#result_position_3').addClass('display_position_1');
			$('#result_position_2').removeClass('display_position_1');
			$('#result_position_1').removeClass('display_position_1');
		}
	});
	

	
	$("#close").click(function () {		
		if ($('#position_1').hasClass('display_position_1')){
			$('#result_position_1').addClass('display_position_1');		
		}
		else{
			$('#result_position_1').removeClass('display_position_1');
		}
	});
	

	$("#close2").click(function () {		
		if ($('#position_2').hasClass('display_position_1')){
			$('#result_position_2').addClass('display_position_1');
		}
		else{
			$('#result_position_2').removeClass('display_position_1');
		}
	});
	
		
	$("#close3").click(function () {		
		if ($('#position_3').hasClass('display_position_1')){
			$('#result_position_3').addClass('display_position_1');
		}
		else{
			$('#result_position_3').removeClass('display_position_1');
		}
	});
	

	
	$("#position_1").mouseenter(function () {		
		$('#percent_1').show();
	});

	$("#position_1").mouseout(function () {		
		$('#percent_1').hide();
	});

	$("#position_2").mouseenter(function () {		
		$('#percent_2').show();
	});

	$("#position_2").mouseout(function () {		
		$('#percent_2').hide();
	});

	$("#position_3").mouseenter(function () {		
		$('#percent_3').show();
	});

	$("#position_3").mouseout(function () {		
		$('#percent_3').hide();
	});
	
	$.ajax({
		url:'zona.json',
		dataType: 'json',
		type:'get',
		cache: false,
		success:  function(data){
			console.log(data);
			$(data.ZONAS).each(function(index, value){				
				var pot = index+1;
				var capa = index+1;
				var nombre_zona = (value.ZONA);
				$('#position_'+ pot).append(value.ZONA);
				$('#percent_'+ pot).append( Math.round((value.OCUPADAS * 100  / value.CAPACIDAD)) + "%");
				var raiz = Math.round(Math.sqrt(value.CAPACIDAD));
				var html = ''
				var contador = 0 ;
				for (var i=1;  i<=(value.CAPACIDAD); i+=raiz){					
					html += '<tr>'
					for(var ii=1;  ii<=(raiz) && contador<(value.CAPACIDAD); ii++) {						
							contador ++					 
                            html += '<td></td>' 
					}
					html += '</tr>'											
				}		
				$('#table_'+ nombre_zona).html(html);
				$( "td:parent" )  
					.css( "background", "#891919" );
					$( "td:empty" )  
					.css( "background", "#75890c" );
			});
		},
		error : function(xhr, status) {
			alert('Disculpe, existió un problema'+estatus);
		}
	});

	