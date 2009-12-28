var gDoneButton;
ver gInfoButton;

function setup()
{
    gDoneButton = new AppleGlassButton(document.getElementById("doneButton"), "Done", hidePrefs);
    gInfoButton = new AppleInfoButton(document.getElementById("infoButton"), document.getElementById("front"), "white", "white", showPrefs);
}

function showPrefs()
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget)
        widget.prepareForTransition("ToBack");

    front.style.display="none";
    back.style.display="block";

    if (window.widget)
        setTimeout ('widget.performTransition();', 0);
}

function hidePrefs()
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget)
        widget.prepareForTransition("ToFront");

    back.style.display="none";
    front.style.display="block";

    if (window.widget)
        setTimeout ('widget.performTransition();', 0);
}