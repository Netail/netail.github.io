$(document).ready(function(){

    $('#switchDisabled').change(function() {
        if($('#switchDisabled').prop('checked') == true){
            $('input:not("#switchDisabled"), select, textarea').prop('disabled', true);
        }
        else if($('#switchDisabled').prop('checked') == false){
            $('input, select, textarea').prop('disabled', false);
        }
    });

    $('.button1, .button2, .button3, input[type="button"], input[type="submit"], input[type="reset"]').click(function() {
        alert("Otter Spotter!");
    });
});