alert("Welcome to Fylrobot v2! This is a new, and improved version that replaces tunnel. Most of it doesn't work, as this is beta and many things need to be fixed.");
var tunnel={}; var userName=document.getElementById('chat-user').innerHTML; tunnel.changeName=function(user){var usern=document.getElementById('username-box'); var ok=document.getElementById('username-ok-btn'); usern.value=user; ok.click();};tunnel.chat=function(phrase){var chatI=document.getElementById('chat-input'); chatI.value=phrase; document.getElementById('chat-send-btn').click();}; tunnel.takeTurn=function(){document.getElementById('turn-btn').click();}; tunnel.vote=function(vote){var vy=document.getElementById('vote-yes'); var vn=document.getElementById('vote-no'); if (vote === 0){vy.click(); if (vote === 1){vn.click();}}}; var autotyper={}; autotyper.typePhrase=function(str){function optKey(letter){ var num=letter.charCodeAt(0); let element = document.querySelector('canvas'); element.dispatchEvent(new KeyboardEvent('keydown',{'key': letter, 'code': 'Key' + letter,  keyCode: num, which: num,    shiftKey: false,  ctrlKey: false,  metaKey: false })); element.dispatchEvent(new KeyboardEvent('keyup',{'key': letter, 'code': 'Key' + letter,  keyCode: num, which: num,    shiftKey: false,  ctrlKey: false, metaKey: false })); }; for (var i = 0; i < str.length; i++) {
var curLetter=str.charAt(i); optKey(curLetter);}}; function atPrompt(){var k=prompt('What do you want to autotype? (Currently does not support symbols)'); autotyper.typePhrase(k);}
var name=document.getElementById('chat-user').innerHTML;
tunnel.changeName("Fylrobot"); tunnel.chat("Fylrobot has been invited by @" + name + "!"); 
tunnel.changeName(name); var input=document.createElement("input");input.placeholder="Bot commands here..."; input.id="inp"; document.body.appendChild(input);var btn=document.createElement("button");btn.onclick=getInput;btn.innerHTML="Send!";   document.body.appendChild(btn); var btn2=document.createElement("button");btn2.onclick=function(){window.open("https://unzor.github.io/FylrobotJS/commands.txt");};btn2.innerHTML="Commands";    document.body.appendChild(btn2); location.href="#inp"; input.style="color:#999; margin: auto; padding:9px; font-size: 12px;border:2px solid gray; border-radius:2px; background-color:#FFF;"; btn.style="background-color: #4CAF50; border: 2px solid gray;color: white;padding: 9px;  text-align: center; text-decoration: none;display: inline-block;font-size: 12px;border-radius:2px; margin-left:6px;"; btn2.style="background-color: #4CAF50; border: 2px solid gray;color: white;padding: 9px;  text-align: center; text-decoration: none;display: inline-block;font-size: 12px;border-radius:2px; margin-left:6px;"; function getInput(){ tunnel.chat(input.value); if (input.value === "!fuckerscript"){input.value=""; tunnel.changeName("Fylrobot"); tunnel.chat("NO."); tunnel.chat(name);}
if (input.value === "!turnspam"){input.value=""; tunnel.changeName("Fylrobot"); tunnel.chat("Turnspam is on. Message by Fylrobot, at unzor.github.io/FylrobotJS.");
tunnel.changeName(name); setInterval(function(){tunnel.takeTurn();}, 10);} if (input.value === "!spam"){input.value=""; tunnel.changeName("Fylrobot"); tunnel.chat("Not added to Fylrobot v2, as it could get my site taken down"); tunnel.changeName(userName);}; if (input.value === "!rapidname"){input.value=""; tunnel.changeName("Fylrobot"); tunnel.chat("Sadly not added because they will block my site again");
tunnel.changeName(name);} if (input.value === "!randommessage"){input.value=""; var rArray=["Banana Shooter", "Smelly Toast", "Flying Pigs"];var num=Math.floor(Math.random() * 4);tunnel.changeName("Fylrobot"); tunnel.chat(rArray[num]); tunnel.changeName(name);}if (input.value === "!breakkeyboard"){input.value=""; tunnel.chat("stop it, get some help");} if (input.value === "!screenshot"){input.value=""; var vmimage=document.querySelector('canvas').toDataURL(); var oj=document.createElement("a"); oj.href=vmimage; oj.innerHTML="a"; oj.download="download";oj.style.opacity="0";document.body.appendChild(oj);oj.click();}if (input.value === "!help"){input.value=""; tunnel.changeName("Fylrobot");tunnel.chat("For full list of Fylrobot commands, see unzor.github.io/FylrobotJS/commands.txt."); tunnel.changeName(name);} if (input.value === "!advertise"){input.value=""; setInterval(function(){tunnel.changeName("Fylrobot"); tunnel.chat("Want Fylrobot for yourself? Go to unzor.github.io/FylrobotJS to get it."); tunnel.changeName(name);}, 100000);}if (input.value === "!custommessage"){input.value=""; var p=prompt("What would you like to say?"); tunnel.changeName("Fylrobot"); tunnel.chat(p); tunnel.changeName(name);}document.body.onbeforeunload=function(){tunnel.changeName("Fylrobot");tunnel.chat("Fylrobot has disconnected because @" + name + " disconnected."); tunnel.changeName(name); };if (input.value === "!disconnect"){input.value=""; location.reload();}
if (input.value === '!record'){input.value=""; var seconds=prompt('How long to record?'); var mss=seconds+'000'; tunnel.changeName('Fylrobot'); tunnel.chat('Video of VM will be downloaded. Message by Fylrobot, at unzor.github.io/FylrobotJS/'); tunnel.changeName(name); var canvas = document.querySelector('canvas'); var stream = canvas.captureStream(25);var recordedChunks = [];console.log(stream);var options = { mimeType: "video/webm; codecs=vp9" };mediaRecorder = new MediaRecorder(stream, options);mediaRecorder.ondataavailable = handleDataAvailable;mediaRecorder.start();function handleDataAvailable(event) {console.log("data-available");if (event.data.size > 0) {recordedChunks.push(event.data);console.log(recordedChunks);download();} else {}}function download() {var blob = new Blob(recordedChunks, {  type: "video/mp4"});var url = URL.createObjectURL(blob);var a=document.createElement("a");document.body.appendChild(a);a.style = "display: none";a.href = url;a.download = "vmrecording.mp4";a.click();window.URL.revokeObjectURL(url);}setTimeout(event => {console.log("stopping");mediaRecorder.stop();}, mss);} if (input.value === '!customscript'){input.value=""; var url=prompt("What is the the URL to the script you want to add?"); var scrept=document.createElement("script"); scrept.src=url; document.head.appendChild(scrept); tunnel.changeName("Fylrobot"); tunnel.chat("Custom script added. Message by Fylrobot, at unzor.github.io/FylrobotJS."); tunnel.changeName(name);} if (input.value === '!darkmode'){input.value=""; "use strict"; var styleElem = document.createElement("style"); styleElem.type = "text/css"; styleElem.innerHTML = ` body { background-color: #222; } .navbar>.container-fluid, .thumbnail { background-color: #333 !important; background-image: none !important; } .btn { background-color: #333 !important; background-image: none !important; border-color: #444 !important; color: #ccc !important; text-shadow: none !important; } .list-group-item.disabled { background-color: #444 !important; color: #ccc; filter: none; } .list-group-item { background-color: black; } #chat-panel, #chat-input, #chat-user, .guac-keyboard-disabled, .modal-content, .alert { color: white; background-color: #111; } .message-pane li { border-bottom: 1px solid #333; box-shadow: 0 1px 0 0 #666; } .navbar, .page-header, .thumbnail { border-color: #444 !important; border-bottom-color: #444 !important; } .navbar-brand, .navbar-collapse>ul>li>a, .page-header>h2, #vm-list, .thumbnail>.caption>h4 { color: #ddd !important; } .username::before { color: #fff; } .username, .message-pane .username { color: white; } .input-group-addon, .form-control { border-color: #333; } .list-group-item { border-color: #444; } .panel { border-color: #444; } .message-pane li:hover { background-color: #2b2b2b; } .has-turn.list-group-item { background-color: #365c6b; color: white; } .waiting-turn.list-group-item { background-color: #66662C; color: white; } .alert-info { background-image: none; border-color: #434343; color: white; } `; document.head.appendChild(styleElem); } if (input.value === '!autotype'){atPrompt();} if (input.value === '!voteyes'){input.value=""; tunnel.vote("vote", '1'); } if (input.value === '!voteno'){input.value=""; tunnel.vote(1); }} 
