$(document).ready(function(){
    $("tbody").append(
    `<tr class="row">
    <td>Peter</td>
    <td>12345567</td>
    <td>Peter@gmail.com</td>
    </tr>`)

    $("#row-submit, #row-submit2").append(
        `<input type='reset' value='Clear'>`);

    $("#header h1").html(`Olivia's Contact list Application`);

    $('#contact-list').css("color","red");

})