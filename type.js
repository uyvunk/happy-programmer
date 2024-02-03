  var text="Hello there. I'm Vu - owner of <b>Happy Programmer</b>. It's great to see you! " +
  "We offer following services:" +
  "<ul><li>Website development</li><li>Automation development</li><li>Custom browser extension</li><li>Other IT requests</li></ul>" +
  "<p>Please click on following links to visit my Github and Facebook</p>";
  var delay=40;
  var currentChar;
  var destination="greeting";
  var timer = null;

  function startTyping()
  {
    for(var i = 1; i <= text.length; i++){
        (function(i){
            setTimeout(function(){
                    currentChar = i;
                    if (document.getElementById)
                    {
                      var dest=document.getElementById(destination);
                      if (dest)
                      {
                        if(currentChar < text.length){
                          dest.innerHTML=text.substr(0, currentChar)+"|";
                        } else if (currentChar == text.length){
                           dest.innerHTML=text.substr(0, currentChar);
                        } else {
                          return;
                        }
                      }
                    }
            }, delay * i);
        }(i));
    }
  }

  function type(arg)
  {
    currentChar = arg;
    if (document.getElementById)
    {
      var dest=document.getElementById(destination);
      if (dest)
      {
        if (currentChar > text.length){
          return;
        } else {
          dest.innerHTML=text.substr(0, currentChar);
        }
      }
    }
  }

  function getTime() {
    var date = new Date();
    return "" + date.getHours() + ":" + date.getMinutes(); 
  }


