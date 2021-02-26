function storeData(name, content) 
{
    const data = content;
    try 
    {
        localStorage.setItem(name, JSON.stringify(data));
    }
    catch (err) 
    {
        console.log(`storeData(): \n${err}`);
    }
    
}

function getTime()
{
    const val = document.forms["myForm"]["ftime"].value;
    if(isNaN(val))
    {
        console.log("not a num");
    }
    else 
    {
        storeData("Time", val);
    }
}

function extensionOff() 
{
    storeData("ExtensionState", "OFF");
    document.getElementById("offButton").style.display = "none";
    document.getElementById("onButton").style.display = "block";
}

function extensionOn() 
{
    storeData("ExtensionState", "ON");
    document.getElementById("offButton").style.display = "block";
    document.getElementById("onButton").style.display = "none";
}


document.forms["myForm"]["ftime"].value = JSON.parse(localStorage.getItem("Time"));

if(JSON.parse(localStorage.getItem("ExtensionState")) === "ON") 
{
    document.getElementById("offButton").style.display = "block";
    document.getElementById("onButton").style.display = "none";
}
else if(JSON.parse(localStorage.getItem("ExtensionState")) === "OFF") 
{
    document.getElementById("offButton").style.display = "none";
    document.getElementById("onButton").style.display = "block";
}
else
{
    storeData("ExtensionState", "ON");
    document.getElementById("offButton").style.display = "block";
    document.getElementById("onButton").style.display = "none";
}


document.getElementById("myForm").onchange = function() { getTime() };
document.getElementById("offButton").onclick = function() { extensionOff() };
document.getElementById("onButton").onclick = function() { extensionOn() };