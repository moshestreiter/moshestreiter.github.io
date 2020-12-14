// Home Page
function homePage() {
    document.getElementById("homePage").disabled = true;
    // remove other containers
    if(document.getElementById("rainbowContainer") != null) {
        document.getElementById("rainbowContainer").remove();
    }
    if(document.getElementById("colorTestContainer") != null) {
        document.getElementById("colorTestContainer").remove();
    }
     
    
    //enable other buttons
    document.getElementById("generateRainbow").disabled = false;
    document.getElementById("colorTest").disabled = false;
}