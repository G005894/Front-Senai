$('#p1').text('Teste de texto com JQuery')

/*-------------------------------------------*/

$('#alvo'). click(function(){
    alert('Usuário clicou no texto');
});

/*-------------------------------------------*/

$('#txt1').mousedown(function(){
    $('#txt2'). text('Botão do mouse para BAIXO');
});
$('#txt1').mouseup(function(){
    $('#txt2'). text('Botão do mouse para CIMA');
});

/*-------------------------------------------*/

$('#txt') .keypress(function(){
    $('p1') .text($('#txt') .val());
});

/*-------------------------------------------*/

$('#txt3') .keyup(function (){
    $('#p3') .text($('#txt3').val());
    $('#p4') .text('');
});
$('#txt3') .keydown(function(){
    $('#p4') .text('Tecla pressionada');
});

