// Rainbow Generator
function generateRainbow() {
    document.getElementById("generateRainbow").disabled = true;
    // remove other containers
    if (document.getElementById("colorTestContainer") != null) {
        document.getElementById("colorTestContainer").remove();
    }
    //enable other buttons
    document.getElementById("colorTest").disabled = false;
    document.getElementById("homePage").disabled = false;

    let colorArray = [];
    const LENGTH = 255;
    const DIF = 1;
    let R = 255;
    let G = 255;
    let B = 255;

    // create container anew
    let rainbowContain = document.createElement("div");
    rainbowContain.id = "rainbowContainer";
    document.getElementById("main").appendChild(rainbowContain);

    colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    
    for (let i = 0; i < LENGTH; i++) {
        G -= DIF;
        B -= DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        G += DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        R -= DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        B += DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        G -= DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        R += DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        G += DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }

    for (let i = 0; i < colorArray.length; i++) {
        let div = document.createElement("div");
        div.id = "div";
        div.style.width = "100%";
        div.style.height = "1px";
        div.title = colorArray[i];
        div.style.background = colorArray[i];
        document.getElementById("rainbowContainer").appendChild(div);
    }
}