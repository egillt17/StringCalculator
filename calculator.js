function add (numbers){
    if(numbers == "")
    {
        return 0;
    }

    if(numbers.includes("-"))
    {
        var numberArray = numbers.split(/[,\n]/);
        var counter = 0;
        var negativeNumbers = [];
        for(var i = 0; i < numberArray.length; i++){
            if(numberArray[i] < 0)
            {
                negativeNumbers[counter] = numberArray[i];
                counter++;
            }
        }
        throw new Error("Negatives not allowed: " + negativeNumbers);
    }

    if(numbers.includes(",") || numbers.includes("\n"))
    {
        var numberArray = numbers.split(/[,\n]/);
    
        return sum(numberArray);
    }
    else{
        return parseInt(numbers);
    }
}

function sum(numberArray){
    var total = 0;

        for(var i = 0; i < numberArray.length; i++){
            total += parseInt(numberArray[i]);
        }
        return total;
}

module.exports = add;