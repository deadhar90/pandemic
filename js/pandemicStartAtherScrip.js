function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
    for (var districts in arrayOfStrings) {
            var newElement = document.createElement('div');
            newElement.className = "mapElement";
            newElement.id = "div"+arrayOfStrings[districts];
            document.getElementById('startPandemic').appendChild(newElement);
    }
}

const pandemicStartMap = "01000000X000X011X0X";

var space = "";

splitString(pandemicStartMap, space);