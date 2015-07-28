  var watchID = null;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    initializeApp();
} 

function initializeApp(){
	var options = {
    frequency: 3000
}; // Update every 3 seconds

    navigator.compass.watchHeading(onCompasSuccess, onCompassError,options);
    layoutScreen();
}

function layoutScreen(){
    $(".stretchedScreen").width(screen.width).height(screen.height);
    $("#outerRing").width(screen.width).height(screen.width);
    $("#outerRing").css({ top: ((screen.height-screen.width)/2) });
    $("#innerRing").width(screen.width).height(screen.width);
    $("#innerRing").css({ top: ((screen.height-screen.width)/2) });
    $("#centerText").width(screen.width).height(screen.width);
    $("#centerText").css({ top: (((screen.height-screen.width)/2)+(screen.width*1/2.75))});
}

function onCompasSuccess(heading) {
    // Let's fill in the degree for magnteic heading
    document.getElementById("txtDegrees").innerHTML = heading.magneticHeading.toFixed(0)+"°";
    $("#innerRing").rotate(heading.magneticHeading*-1);
    
    // I am using the jQuery short hand instead of innerHTML and filling in the txt for Heading
    if ((heading.magneticHeading > 22.5) && (heading.magneticHeading < 67.5))
    {
        $("#txtHeading").text("NE");
    }
    else if ((heading.magneticHeading > 67.5) && (heading.magneticHeading < 112.5))
    {
        $("#txtHeading").text("E");
    }
    else if ((heading.magneticHeading > 112.5) && (heading.magneticHeading < 157.5))
    {
        $("#txtHeading").text("SE");
    }
    else if ((heading.magneticHeading > 157.5) && (heading.magneticHeading < 202.5))
    {
        $("#txtHeading").text("S");
    }
    else if ((heading.magneticHeading > 202.5) && (heading.magneticHeading < 247.5))
    {
        $("#txtHeading").text("SW");
    }
    else if ((heading.magneticHeading > 247.5) && (heading.magneticHeading < 292.5))
    {
        $("#txtHeading").text("W");
    }
    else if ((heading.magneticHeading > 292.5) && (heading.magneticHeading < 337.5))
    {
        $("#txtHeading").text("NW");
    }
    else if ((heading.magneticHeading > 337.5) && (heading.magneticHeading <= 360))
    {
        $("#txtHeading").text("N");
    }
    else if ((heading.magneticHeading >= 0) && (heading.magneticHeading < 22.5))
    {
        $("#txtHeading").text("N");
    }
    else
    {
        $("#txtHeading").text("");
    }
    
};

function onCompassError(error) {
    alert('CompassError_mod: ' + error.code);
};

