// const { response } = require("express");

// const { response } = require("express");

// const { response } = require("express");

var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainner = document.getElementById("chatContainner");

var user = { message: "" };

const commands = [
  { input: "hi", response: "Hello! How can I assist you today? I'm your helpful KsTU Portal assistant chatBox! Feel free to ask me any question concerning your Portal access or issues." },
  { input: "how are you?", response: "I am doing well, thank you! How can I help you with your KsTU Portal?" },
  { input: "who are you", response: "I'm your helpful KsTU Portal assistant chatBox! Feel free to ask me any question concerning your Portal." },
  { input: "help me", response: "Sure! What do you need help with regarding your KsTU Portal?" },
  { input: "how to reset my password", response: "To reset your portal password, please visit the official KsTU portal reset page or contact the ICT Directorate for assistance." },
  { input: "okay", response: "Okay! If you have any portal-related questions, feel free to ask!" },
  { input: "thanks", response: "An glade to hear! If you have any portal-related questions, feel free to ask!" },
  { input: "hello", response: "Hello! How can I assist you today? Is it about your KsTU Portal access? Feel free to ask!" },
  { input: "what is your name", response: "I am the KsTU Portal Assistant. You can call me your KsTU Portal Buddy!" },
  { input: "how to login to portal", response: "To login to the KsTU portal, go to the official portal website, enter your student ID and password, then click on the login button." },
  { input: "what is the portal link", response: "You can access the KsTU portal at https://portal.kstu.edu.gh or check your student email for the correct link." },
  { input: "how can I reset my student portal password?", response: "You can reset your KsTU portal password by using the 'Forgot Password' option on the login page or by contacting the ICT Directorate." },
  { input: "where do I go to reset my portal password?", response: "Visit the ICT Directorate office in person or use the password reset link provided on the portal login page." },
  { input: "who should I contact to change my portal password?", response: "You should contact the ICT Support Team or the KsTU Help Desk." },
  { input: "is there an online portal to reset my password?", response: "Yes, check the KsTU portal login page for a password reset link or contact ICT for the official URL." },
  { input: "what information do I need to reset my password?", response: "You’ll typically need your student ID, full name, and access to your student email." },
  { input: "can I reset my portal password using my phone?", response: "Yes, the portal is mobile-friendly. You can reset your password using your phone." },
  { input: "how long does it take for the new password to become active?", response: "Usually, your new password becomes active immediately or within 5–10 minutes." },
  { input: "I forgot my current portal password—what should I do?", response: "Use the 'Forgot Password' option on the portal login page or visit the ICT office for help." },
  { input: "will I receive a confirmation after resetting my password?", response: "Yes, you'll usually receive a confirmation email or a success message on the screen." },
  { input: "can someone reset the password on my behalf?", response: "No, for security reasons, password resets must be done by the student only." },
  { input: "is the student portal password the same as my wifi password?", response: "Not always. They may be different. Check with ICT if you're unsure." },
  { input: "how often should I change my portal password?", response: "Change it when you suspect compromise or as advised by the ICT department." },
  { input: "do I need to update my details after resetting the password?", response: "No, but you should log in again using your new password to ensure it works." },
  { input: "can I use the same password again?", response: "Some systems allow it, but it's better to choose a strong new password each time." },
  { input: "what should I do if the new password isn’t working?", response: "Double-check for errors. If it still doesn’t work, contact the ICT office for support." },
  { input: "can I reset my password anytime?", response: "Yes, unless the portal is under maintenance. For in-person help, visit the ICT office during working hours." },
  { input: "will I lose access during the reset?", response: "Yes, you’ll need to log in again using the new password after resetting it." },
  { input: "how strong should my new password be?", response: "Use at least 8 characters with a mix of uppercase, lowercase, numbers, and symbols for better security." },
  { input: "what if I don’t have access to my student email?", response: "Visit the ICT office with your student ID for verification and assistance." },
  { input: "is there a charge for resetting my student portal password?", response: "No, it’s a free service offered to all KsTU students by the ICT Directorate." },
  { input: "how do I register for my courses?", response: "Log in to the portal, go to 'Course Registration', and follow the instructions to register for your semester courses." },
  { input: "I can't see my results on the portal", response: "Sometimes results are delayed. If the problem persists, contact your department or the Exams Office." },
  { input: "how do I check my results?", response: "Log in to your student portal and go to the 'Academic Records' or 'Results' section to view your grades." },
  { input: "my portal says 'invalid login credentials'", response: "Ensure you’re using the correct ID and password. If you forgot them, use the password reset option." },
  { input: "can I access the portal outside campus?", response: "Yes, the portal is accessible anywhere with an internet connection." },
  { input: "how do I update my phone number on the portal?", response: "After logging in, go to your profile settings or student information section to update your contact details." },
  { input: "what if I registered the wrong course?", response: "You’ll need to contact your academic advisor or department head for corrections." },
  { input: "how do I print my proof of registration?", response: "After registering your courses, go to the registration page and click 'Print Proof of Registration'." },
  { input: "can I register late?", response: "Late registration is possible during the grace period, but penalties may apply. Contact your department for more info." },
  { input: "how do I know if my registration was successful?", response: "Check the course registration summary on the portal or look for the 'Proof of Registration' page." },
  { input: "can I access the portal on mobile?", response: "Yes, the portal is mobile-friendly. Just open it using your mobile browser." },
  { input: "what should I do if the portal is not opening?", response: "Check your internet connection. If the issue persists, try a different browser or contact ICT." },
  { input: "how do I upload my passport photo to the portal?", response: "Go to your profile section on the portal and look for an option to upload or update your photo." },
  {input: "the processs is not working", response: "Please visit the ICT directorate for assistance"},
  {input: "ICT directorate location", response: "You will find the ICT directorate at the basement of the MP Block KsTU near the sport complex"},
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
    or <b><a href="wifiConnection">Visit the KsTU Wifi ChatBox for more</a></b> or the <b><a href="/">Visit the General KsTU ChatBox for more</a></b>` ;
   
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
    textbox.value = ""; 
    sendMessage(user.message);
    chatboxRespond(user.message);
  }
});
// finction that handels the enter key event
// to send the message when the enter key is pressed
textbox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents newline in input field

    var userMessage = textbox.value;

    if (userMessage.trim() === "") {
      alert("Please enter a message!");
    } else {
      user.message = userMessage.trim();
      textbox.value = ""; // Clear textbox
      sendMessage(user.message);
      chatboxRespond(user.message);
    }
  }
});
