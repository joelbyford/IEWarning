// =================================
// Function: ieWarning()
// ---------------------------------
// The main routine called on page 
// open.
// ---------------------------------
// Parameters: 
// - sMessage - String message to show.
// - bUseJquery - Defaults to false (use a javascript Alert() instead).
// - sLinkShown - a string depiction of which image and link should be shown ('edge', 'chrome', 'firefox', 'opera' or 'safari' )
// - iLinkSize - An integer size of the image displayed.  
// ---------------------------------
// Return: 
// - true - If running on IE
// =================================
function ieWarning(sMessage, bUseJquery, sLinkShown, iLinkSize) {
    //defaults if void or missing parameters
    sMessage = sMessage || "WARNING! This site is no longer compatible with Internet Explorer.  Please open in an alternative browser.";
    bUseJquery = bUseJquery || false;  //probably unnecessary as undefined maps to false, but doing it anyway.
    sLinkShown = sLinkShown || false; //probably unnecessary as undefined maps to false, but doing it anyway.
    iLinkSize = iLinkSize || 75;

    if (isIE()){
        if (bUseJquery) {
            sTextToAppend = "<center><table><tr>";

            // Append the custom error message to the JQuery div
            sTextToAppend += "<td style='vertical-align: middle;'>" + sMessage + "</td>";
            // Append the custom link to the right side of the div
            switch (sLinkShown){
                case ('edge'):
                    sTextToAppend += "<td><a href='https://www.microsoft.com/en-us/edge'><img src='./Images/EdgeIcon.png' width='" + iLinkSize + "' alt='download here'/></a></td>";
                    break;
                case ('chrome'):
                    sTextToAppend += "<td><a href='https://www.google.com/chrome/'><img src='./Images/ChromeIcon.png' width='" + iLinkSize + "' alt='download here'/></a></td>";
                    break;
                case ('firefox'):
                    sTextToAppend += "<td><a href='https://www.mozilla.org/en-US/firefox/new/'><img src='./Images/FireFoxIcon.png' width='" + iLinkSize + "' alt='download here'/></a></td>";
                    break;
                case ('opera'):
                    sTextToAppend += "<td><a href='https://www.opera.com/download'><img src='./Images/OperaIcon.png' width='" + iLinkSize + "' alt='download here'/></a></td>";
                    break;
                case ('safari'):
                    sTextToAppend += "<td><a href='https://support.apple.com/downloads/safari'><img src='./Images/SafariIcon.png' width='" + iLinkSize + "' alt='download here'/></a></td>";
                    break;
                default:
                    break;
            }
            sTextToAppend += "</tr></table></center>";
            $("#div-slidedown").append(sTextToAppend);
            $("#div-slidedown").slideDown(1000); // <-- change this number to change the speed of slide-out

            // Create a close function for the Div (close it if someone clicks anywhere in the div)
            $("#div-slidedown").click(
                function(){
                    $("#div-slidedown").slideUp();
                });
        } else {
            alert(sMessage);
        }
        
        console.log(sMessage);
        return true;
    }

    
}

// =================================
// Function: isIE()
// ---------------------------------
// Simple Check of the User Agent to 
// determine if the browser is IE
// ---------------------------------
// Parameters: 
// - void
// ---------------------------------
// Return: 
// - Boolean True/False
// =================================
function isIE() {
    user_agent = navigator.userAgent;
    var is_ie = user_agent.indexOf("MSIE ") > -1 || user_agent.indexOf("Trident/") > -1;
    return is_ie;
}
