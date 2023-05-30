function convert() {
	// Get input value and unit types
	var inputValue = document.getElementById("inputValue").value;
	var unitType1 = document.getElementById("unitType1").value;
	var unitType2 = document.getElementById("unitType2").value;

	// Convert input value to meters
	switch (unitType1) {
		case "cm":
			inputValue /= 100;
			break;
		case "in":
			inputValue *= 0.0254;
			break;
		case "m":
			break;
		case "ft":
			inputValue *= 0.3048;
			break;
		case "km":
			inputValue *= 1000;
            case "mi":
                inputValue *= 1609.34;
                break;
            default:
                alert("Invalid unit type.");
                return;
        }
    
        // Convert meters to output unit
        switch (unitType2) {
            case "cm":
                inputValue *= 100;
                break;
            case "in":
                inputValue /= 0.0254;
                break;
            case "m":
                break;
            case "ft":
                inputValue /= 0.3048;
                break;
            case "km":
                inputValue /= 1000;
                break;
            case "mi":
                inputValue /= 1609.34;
                break;
            default:
                alert("Invalid unit type.");
                return;
        }
    
        // Display the result
        var result = document.getElementById("result");
        result.innerHTML = inputValue.toFixed(2) + " " + unitType2;
    }
    
