/**
 * Created by Alice Gee on 17/02/15.
 */

/*----JavaScript page stuff-----*/
function func(){ alert("Welcome! This is my JavaScript practice page."); }

function displayMessage() {
    var displayHTML = getFormInfo();
    var messageDiv = document.getElementById('messagediv');
    messageDiv.innerHTML = displayHTML;
}

function getFormInfo() {
    var msg = "";

    var firstName = document.getElementById('firstName').value;
    /*The dots are object-oriented. The function is part of the document
     Object */
    /*document is the viewable area of the page.*/
    /*The value of an element is whatever the user typed in.*/

    var firstNameUC = firstName.toUpperCase();

    if (firstName != "" && firstName != " ")
    {
        if (!(firstName.match(/[a-zA-Z ]/)))
        {
            msg += "<p>Invalid characters!</p>";
        }
        else
        {
            if ((firstNameUC == 'ALICE') || (firstNameUC == 'ALICE GEE')) {
                msg += "<p>Welcome, trainee web developer!</p>";
            } else {
                msg += "<p>Welcome, guest " + firstName + "!</p>";
            }
        }
    } else {
        msg += "<p>Please enter a name!</p>";
    }
    return msg;
}

/*-----Electronics Club------*/
function showDesc(element) {
    var imageID = element.getAttribute("id");

    var displayHTML = electronics(imageID);

    x = element.offsetLeft;
    y = element.offsetTop;

    element.getElementsByClassName("info")[0].innerHTML = displayHTML;
}

function electronics(imageID){
    var msg = "";

    switch(imageID) {
        case "one" : msg += "<p>This is the first circuit I put together: a speaker with amplifier.</p>";
                    break;
        case "two" : msg += "<p>This is the second: A radio with a tuner to go with the speaker (the wires have since broken on this one!).</p>";
                    break;
        case "three" : msg += "<p>This is a circuit I assembled on a non-printed circuit board. This one has a pic chip in it.</p>";
                    break;
        case "four" : msg += "<p>This is a Christmas tree decoration I made. The sets for this are available online.</p>";
                    break;
        case "five" : msg += "<p>This is one of my favourite creations. A programmable board which I made so that it the light flashes" +
            " red and green when the light sensor detects a lack of light; and a speaker that alternates between two christmas tunes when a" +
            " button is pressed.</p>";
                    break;
        case "six" : msg += "<p>This is an Arduino board I got given for asking a question!</p>";
                    break;
        case "seven" : msg += "<p>This is the first Arduino board I programmed using Arduino software. It's mostly a multimeter, but I can make it" +
            " display any message I want!</p>"
    }
    return msg;
}

function hideDesc(element) {
    var descDiv = document.getElementbyID('descDiv');
    description.style.visbility = 'hidden';
}

