document.addEventListener("DOMContentLoaded", function() {
    const billTotal = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tipSlider");
    const tip = document.getElementById("tip");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTip = document.getElementById("totalWithTip");

    
    billTotal.addEventListener("input", updateTip);

   
    tipSlider.addEventListener("input", updateTip);

    function updateTip() {
        const billValue = billTotal.value.trim();

        if (!isNumeric(billValue) || billValue === "") {
            tip.value = "";
            tipAmount.value = "";
            totalWithTip.value = "";
            if (billValue !== "") {
                alert("Please enter a valid bill amount.");
                billTotal.value="";
            }
        } else {
            tip.value = tipSlider.value + "%";

            const tipPercentage = parseInt(tipSlider.value);
            const tipValue = (parseFloat(billValue) * tipPercentage) / 100;
            const totalValue = parseFloat(billValue) + tipValue;

            tipAmount.value = tipValue.toFixed(2);
            totalWithTip.value = totalValue.toFixed(2);
        }
    }

    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
});
