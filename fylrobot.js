var name=document.getElementById('chat-user').innerHTML;
tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", "Fylrobot has been invited by @" + name + "!"); 
tunnel.sendMessage("rename", name); var input=document.createElement("input");input.placeholder="Bot commands here..."; input.id="inp"; document.body.appendChild(input);var btn=document.createElement("button");btn.onclick=getInput;btn.innerHTML="Send!";   document.body.appendChild(btn); var btn2=document.createElement("button");btn2.onclick=function(){window.open("https://unzor.github.io/FylrobotJS/commands.txt");};btn2.innerHTML="Commands";    document.body.appendChild(btn2); location.href="#inp"; function getInput(){ tunnel.sendMessage("chat", input.value); if (input.value === "!fuckerscript"){input.value=""; tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", "fucking kitfag"); tunnel.sendMessage("rename", name);}
if (input.value === "!turnspam"){input.value=""; tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", "Turn spam turned on. Message by Fylrobot, at unzor.github.io/FylrobotJS.");
tunnel.sendMessage("rename", name); setInterval(function(){tunnel.sendMessage('turn');}, 10);}if (input.value === "!spam"){input.value=""; tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", "Spam will be turned on. To stop spam, press CTRL+Q. Message by Fylrobot, at unzor.github.io/FylrobotJS.");
tunnel.sendMessage("rename", name); var p=prompt("What would you like to spam?"); var b=p+" ‏‏‎ "; var i1=setInterval(function(){tunnel.sendMessage("chat", p)}, 1000); var i2=setInterval(function(){tunnel.sendMessage("chat", b)}, 500); document.addEventListener("keydown", function (event) {if(event.ctrlKey && event.keyCode == 81) {clearInterval(i1);clearInterval(i2);tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", "Spam is now turned off. Message by Fylrobot, at unzor.github.io/FylrobotJS.");
tunnel.sendMessage("rename", name); }}); var div=document.createElement("div");div.style.backgroundColor="black";div.style.color="white";div.innerHTML="Note: to stop spam, press CTRL+Q.";div.style.position="fixed";div.style.bottom= "90%";div.style.left="42%"; div.style.zIndex="999999999"; document.body.appendChild(div);setTimeout(function(){div.style.display="none";}, 4000);}if (input.value === "!rapidname"){input.value=""; tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", "Rapid name change turned on. Message by Fylrobot, at unzor.github.io/FylrobotJS.");
tunnel.sendMessage("rename", name); setInterval(function(){tunnel.sendRawMessage("6.rename,8." + Math.floor(100000000 * Math.random()) + ";");}, 10);} if (input.value === "!randommessage"){input.value=""; var rArray=["Banana Shooter", "Smelly Toast", "Flying Pigs"];var num=Math.floor(Math.random() * 4);tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", rArray[num]); tunnel.sendMessage("rename", name);}if (input.value === "!breakkeyboard"){input.value=""; tunnel.sendMessage("chat", "stop it, get some help");
setInterval(function(){tunnel.sendMessage('key', 0xffe3,1);tunnel.sendMessage('key', 0xffe9,1); tunnel.sendMessage('key',0x31,1);tunnel.sendMessage('key', 0x31,0);tunnel.sendMessage('key',0xffe9,0);tunnel.sendMessage('key',0xffe3,0);}, 10);}if (input.value === "!screenshot"){input.value=""; var vmimage=guac.getDisplay().getDefaultLayer().getCanvas().toDataURL(); var oj=document.createElement("a"); oj.href=vmimage; oj.innerHTML="a"; oj.download="download";oj.style.opacity="0";document.body.appendChild(oj);oj.click();}if (input.value === "!help"){input.value=""; tunnel.sendMessage("rename", "Fylrobot");tunnel.sendMessage("chat", "For full list of Fylrobot commands, see unzor.github.io/FylrobotJS/commands.txt."); tunnel.sendMessage("rename", name);} if (input.value === "!message"){input.value=""; setInterval(function(){tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", "Want Fylrobot for yourself? Go to unzor.github.io/FylrobotJS to get it."); tunnel.sendMessage("rename", name);}, 100000);}if (input.value === "!custommessage"){input.value=""; var p=prompt("What would you like to say?"); tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", p); tunnel.sendMessage("rename", name);}document.body.onbeforeunload=function(){tunnel.sendMessage("rename", "Fylrobot");tunnel.sendMessage("chat", "Fylrobot has disconnected because @" + name + " disconnected."); tunnel.sendMessage("rename", name); };if (input.value === "!disconnect"){input.value=""; location.reload();}
if (input.value === '!record'){input.value=""; var seconds=prompt('How long to record?'); var mss=seconds+'000'; tunnel.sendMessage('rename', 'Fylrobot'); tunnel.sendMessage('chat', 'Video of VM will be downloaded. Message by Fylrobot, at unzor.github.io/FylrobotJS/'); tunnel.sendMessage('rename', name); var canvas = guac.getDisplay().getDefaultLayer().getCanvas();var stream = canvas.captureStream(25);var recordedChunks = [];console.log(stream);var options = { mimeType: "video/webm; codecs=vp9" };mediaRecorder = new MediaRecorder(stream, options);mediaRecorder.ondataavailable = handleDataAvailable;mediaRecorder.start();function handleDataAvailable(event) {console.log("data-available");if (event.data.size > 0) {recordedChunks.push(event.data);console.log(recordedChunks);download();} else {}}function download() {var blob = new Blob(recordedChunks, {  type: "video/mp4"});var url = URL.createObjectURL(blob);var a=document.createElement("a");document.body.appendChild(a);a.style = "display: none";a.href = url;a.download = "vmrecording.mp4";a.click();window.URL.revokeObjectURL(url);}setTimeout(event => {console.log("stopping");mediaRecorder.stop();}, mss);} if (input.value === '!customscript'){input.value=""; var url=prompt("What is the the URL to the script you want to add?"); var scrept=document.createElement("script"); scrept.src=url; document.head.appendChild(scrept); tunnel.sendMessage("rename", "Fylrobot"); tunnel.sendMessage("chat", "Custom script added. Message by Fylrobot, at unzor.github.io/FylrobotJS."); tunnel.sendMessage("rename", name);}}
