document.addEventListener("DOMContentLoaded", function (event) {
    // array with texts to type in typewriter
    var dataText = ["...", "riverrun, past Eve and Adam’s, from swerve of shore to bend of bay, brings us by a commodius vicus of recirculation back to Howth Castle and Environs.",
        "Sir Tristram, violer d’amores, fr’over the short sea, had passencore rearrived from North Armorica on this side the scraggy isthmus of Europe Minor to wielderfight his penisolate war: nor had topsawyer’s rocks by the stream Oconee exaggerated themselse to Laurens County’s gorgios while they went doublin their mumper all the time: nor avoice from afi re bellowsed mishe mishe to tauftauf thuartpeatrick: not yet, though venissoon after, had a kidscad buttended a bland old isaac: not yet, though all’s fair in vanessy, were sosie sesthers wroth with twone nathandjoe.",
        "Rot a peck of pa’s malt had Jhem or Shen brewed by arclight and rory end to the regginbrow was to be seen ringsome on the aquaface.", "The fall (bababadalgharaghtakamminarronnkonnbronntonnerronntuonnthunntrovarr hounawnskawntoohoohoordenenthurnuk!) of a once wallstrait oldparr is retaled early in bed and later on life down through all christian minstrelsy."

    ];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    const typeWriter = (text, i, fnCallback) => {
        // chekc if text isn't finished yet 
        if (i < text.length) {
            // add next character to h1
            document.querySelector("h1").innerHTML =
                text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 50);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == "function") {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    };
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == "undefined") {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});
