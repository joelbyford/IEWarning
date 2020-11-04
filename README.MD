# IEWarning
A simple JavaScript snippet to detect browsers running on IE and recommend a variable replacement.

# IMPORTANT NOTE
Microsoft manages a list of websites that no longer support IE in the form of a "Needs Edge" list.  Rather than doing the work outlined in this repo, it may be far simpler to add your URL to that list instead by following the instructions provided on the Microsoft Docs website here: https://docs.microsoft.com/en-us/microsoft-edge/web-platform/ie-to-microsoft-edge-redirection

-------------
# Installation
## 1. Include the Required Files
Copy/paste the following files in a web-accessible location for your webpages:
* ```iewarnings.js```
* ```Images``` directory

No need to include ```MetroStyle``` directory or the ```example.html``` files as they are simply included as examples. 

## 2. Add Required Includes to Your Files
Two blocks of code are required in order to make this code work within your web pages.  The first block simply provides a link to where the .js file exists and a reference to the latest JQuery library (which is used for the animated warning panel/div).  Additionally, a style definition of the slidedown div is included to ensure it is the right size and style for your use.  
```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="../iewarning.js"></script>
<style>
    #div-slidedown{
        padding:10px;
        display:none;
        text-align:center;
        background-color:white;
        border:solid 1px black;
    }
</style>
```

## 3. Add a warning Div to the Top of your Webpage
Add a div named 'div-slidedown' to the top of your webpage so that the warning message can be shown:
```
<div id="div-slidedown"></div>
```

May be omitted if not using JQuery-style warnings and are instead relying only on a simple dialog box warning (see function parameters).

## 4. Trigger the IE Check/Warning
Can be done in several ways, such as in the onload method of the body, or by using $(document).ready() using a traditional JQuery approach.  The onload method is shown here:
```
<body onload="ieWarning('Message to show', true, 'edge', 50)">
```

-------------
# Function Parameters
As can be seen above in the Installation Instructions, the entire routine is controlled by a single function.  This function includes a number of parameters to configure how the warning will be shown to the user.  

```ieWarning(sMessage, bUseJquery, sLinkShown, iLinkSize)```

- sMessage - String message to show.  If not provided, will simply show "WARNING! This site is no longer compatible with Internet Explorer.  Please open in an alternative browser."
- bUseJquery - A flag to denote if modern JQuery style sliding DIV should be used to show the message or simply default to use a javascript Alert() instead.
- sLinkShown - A string code value of which image and link should be shown ('edge', 'chrome', 'firefox', 'opera' or 'safari' )
- iLinkSize - An integer defining the size of the image displayed.  If omitted, will default to 75px.

-------------
# Example Usage

1. Edge warning using modern JQuery div slider 

```ieWarning('IE is no longer supported, please download Edge instead.', true, 'edge', 50)```

2. Firefox warning using modern JQuery div slide

```ieWarning('IE is no longer supported, please download Firefox.', true, 'firefox', 60)```

3. Warning using old-style javascript alert()

```ieWarning('IE is no longer supported, please reopen in a more current browser.')```
