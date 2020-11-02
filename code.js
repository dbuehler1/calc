$(document).ready(
    function(){
        $("input[name=value]").change(calcTotal);

        function calcTotal(){
            event.preventDefault();
            var totalOne = parseFloat($("#learnJQ").val() * 39.99);
            var totalTwo = parseFloat($("#Donate").val() * 14.99);
            var grandTotal = parseFloat(totalTwo + totalOne);

            $("#TotalONE").text("$" + totalOne.toFixed(2));
            $("#TotalTWO").text("$" + totalTwo.toFixed(2));
            $("#GrandTotal").text("$" + grandTotal.toFixed(2));

        }

    })
