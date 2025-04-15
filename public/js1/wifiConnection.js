// const { response } = require("express");

// const { response } = require("express");

// const { response } = require("express");

var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainner = document.getElementById("chatContainner");

var user = { message: "" };

const commands = [
   { input: "hi", response: "Hello! How can I assist you today? I'm your helpful KsTU Wifi assistant chatBox!, feel free to asks me any question concerning your Wifi Connections"},
   { input: "how are you?", response: "I am doing well, thank you! How can I help you? " },
   { input: "who are you", response: "I'm your helpful KsTU Wifi assistant chatBox!, feel free to asks me any question concerning your Wifi Connections" },
   { input: "help me", response: "Sure! What do you need help with?" },
   {input: "how to reset my password", response: "To reset your password, please visit the official password reset page or contact the ICT Directorate."},
   {input: "okay", response: "Okay! If you have any questions, feel free to ask!"},
   {input: "hello", response: "Hello! How can I assist you today? Is it about your KsTU WiFi connection? feel free to ask!"},
   { input: "what is your name", response: "I am a KsTU WiFi Assistance, but you can call me KsYU WiFi Assistant!" },
   { input: "how to connect to wifi", response: "To connect to the KsTU WiFi, go to your device's WiFi settings and select the KsTU network. Enter the password provided by the university." },
   { input: "what is the wifi password", response: "The WiFi password is usually provided by the university. Please check with your department or the IT helpdesk." },
   { input: "how can I reset my student wifi password?", response: "You can reset your Wi-Fi password by visiting the ICT Directorate or through the student Wi-Fi reset portal if your school provides one." },
   { input: "where do I go to reset my wifi password?", response: "Go to the ICT Directorate office or access the official password reset page provided by the university." },
   { input: "who should I contact to change my wifi password?", response: "You should contact the ICT Support Team or the Help Desk of your institution." },
   { input: "is there an online portal to reset my wifi password?", response: "Yes, if your school provides it. Check the university website or ask the ICT office for the correct link." },
   { input: "what information do I need to reset my password?", response: "You’ll typically need your student ID, full name, and sometimes access to your student email." },
   { input: "can I reset my wifi password using my phone?", response: "Yes, if the reset portal is mobile-friendly or if you are doing it in person, just make sure your phone is connected to mobile data." },
   { input: "how long does it take for the new password to become active?", response: "Most times, your new password becomes active immediately or within 5–10 minutes." },
   { input: "I forgot my current wifi password—what should I do?", response: "Visit the ICT office or use the password reset option to create a new one." },
   { input: "will I receive a confirmation after resetting my password?", response: "Yes, usually by email or a success message on the screen confirming your password reset." },
   { input: "can someone reset the password on my behalf?", response: "No, for security reasons, password resets must be done by the account owner only." },
   { input: "is the student wifi password the same as my portal login password?", response: "Not always. Some schools separate them, so always check with ICT or the instructions provided." },
   { input: "how often should I change my wifi password?", response: "It depends on the school policy, but changing it once every semester or when compromised is a good practice." },
   { input: "do I need to update my devices after resetting the password?", response: "Yes, you must re-enter the new password on all devices that connect to the student Wi-Fi." },
   { input: "can I use the same password again?", response: "Some systems allow it, but it's safer to choose a new, strong password each time." },
   { input: "what should I do if the new password isn’t working?", response: "Double-check for typing errors. If it still doesn’t work, contact ICT for support." },
   { input: "can I reset my password anytime?", response: "Yes, unless the reset system is down for maintenance. The ICT office may have working hours for in-person help." },
   { input: "will I lose my connection during the reset?", response: "Yes, once the password is changed, you’ll be disconnected and must log in again using the new one." },
   { input: "how strong should my new password be?", response: "Use at least 8 characters with a mix of letters, numbers, and symbols for better security." },
   { input: "what if I don’t have access to my student email?", response: "Visit the ICT office in person with a valid student ID for assistance." },
   { input: "is there a charge for resetting my student wifi password?", response: "No, it’s usually a free service provided to all active students." },
   
   
   { input: "how can I get help with wifi issues?", response: "If you encounter Wi-Fi issues, you can reach out to the ICT Directorate for support, or check if there are any service interruptions on the university website." },
   { input: "why can't I connect to the wifi?", response: "Check if you're entering the correct password, ensure your device is compatible, or contact ICT if there’s a problem with your account." },
   { input: "is the wifi available in all buildings?", response: "Most likely, but please confirm with the ICT Directorate or check their website for a coverage map." },
   { input: "how do I know if my wifi password has been changed?", response: "You will usually receive a confirmation message via email, or you can contact ICT to confirm if your password has been updated." },
   { input: "how do I reconnect to wifi?", response: "Simply disconnect from the current Wi-Fi network and reconnect using the correct password. If the problem persists, contact ICT support." },
   { input: "can I use my wifi account at other universities?", response: "Generally, no. Each university has its own network, but you might be able to access guest networks or use roaming services in some cases." },
   { input: "how can I change my wifi password?", response: "If your university allows it, you can change your Wi-Fi password through the student portal or by contacting the ICT support team." },
   { input: "how do I know if the wifi is down?", response: "You can check for notifications from the ICT Directorate, or visit the official university website for any known service disruptions." },
   { input: "can I use public wifi?", response: "Yes, but exercise caution when using public Wi-Fi networks. Use VPNs or avoid entering sensitive information." },
   { input: "how do I report a wifi issue?", response: "You can report Wi-Fi issues directly to the ICT Directorate through their helpdesk, email, or the student portal." },
   {input: "thanks", response: "You're welcome! If you have any more questions on KsTU WIfi connection, feel free to ask!"},
   {input: "thank you", response: "You're welcome! If you have any more questions on KsTU Wifi connection, feel free to ask!"},
   {input: "thanks for your help", response: "You're welcome! If you have any more questions on KsTU Wifi connection, feel free to ask!"},
 ];
 

const fuse = new Fuse(commands, {
  keys: ['input'],
  threshold: 0.4
});

function sendMessage(userMessage) {
  var messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.style.margin = "10px";
  messageElement.innerHTML =
    "<span>You: </span>" +
    "<span class='userMessage'>" + userMessage + "</span>";
  chatContainner.appendChild(messageElement);
}

function chatboxRespond(userMessage) {
  const results = fuse.search(userMessage.toLowerCase());

  let chatbotmessage;

  if (results.length > 0) {
    chatbotmessage = results[0].item.response;
  } else {
   chatbotmessage = `I'm not sure what you mean. I can only help you with your Portal Problems, Could you please rephrase?
    or <b><a style="text-decuration=" href="portalConnection">Visit the KsTU portal ChatBox for more</a></b> or the <b><a href="/">Visit the General KsTU ChatBox for more</a></b>`;
   
  }

  var messageElement = document.createElement("div");
  messageElement.style.textAlign = "left";
  messageElement.style.margin = "10px";
  messageElement.innerHTML =
    "<span>AI: </span>" +
    "<span class='AIMessage'>" + chatbotmessage + "</span>";
  chatContainner.appendChild(messageElement);
}

sendBtn.addEventListener("click", function () {
  var userMessage = textbox.value;

  if (userMessage.trim() === "") {
    alert("Please enter a message!");
  } else {
    user.message = userMessage.trim();
    textbox.value = ""; // Clear textbox
    sendMessage(user.message);
    chatboxRespond(user.message);
  }
});