const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

// close the menu when you click outside of the menu and the options, and anywhere that is not part of the dropdown menu
document.addEventListener("click", (event) => {
  if (!event.target.closest(".select-menu")) {
    optionMenu.classList.remove("active");
  }
});


options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    sBtn_text.style.color = "#4a535b";

    optionMenu.classList.remove("active");
  });
});

const emailInput = document.getElementById("emailInput");

emailInput.addEventListener("input", function() {
  // Check if the email is valid
  const isValidEmail = validateEmail(emailInput.value);

  if (!emailInput.value || !isValidEmail) {
    emailInput.style.border = "1px solid red";
  } else {
    emailInput.style.border = "1px solid green";
  }
});

// Function to validate the email address
function validateEmail(email) {
  const regex = new RegExp(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  return regex.test(email);
}

// event listener to reset the border color when clicking outside the email input
document.addEventListener("click", (event) => {
  if (event.target !== emailInput) {
    emailInput.style.border = "1px solid #d0d6db"; 
  }
});


document.getElementById('nameInput').addEventListener('keypress', function (event) {
  // Get the value of the character using the key property
  const charCode = event.key.charCodeAt(0);

  // character allowed
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) {
    return true;
  }

  // Prevent other characters
  event.preventDefault();
});

// function to count characters in message input
function countCharacters(textarea) {
  const maxLength = parseInt(textarea.getAttribute('maxlength'));
  const currentLength = textarea.value.length;
  const charCountElement = document.getElementById('charCount');

  charCountElement.textContent = `${currentLength}/${maxLength}`;
  
  if (currentLength > maxLength) {
    textarea.value = textarea.value.slice(0, maxLength);
  }
}

function showCharacterCount() {
  const charCountElement = document.getElementById('charCount');
  charCountElement.classList.remove('hidden');
}

function hideCharacterCount() {
  const charCountElement = document.getElementById('charCount');
  charCountElement.classList.add('hidden');
}

  document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitBtn");
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var messageInput = document.getElementById("message");

    submitButton.addEventListener("click", function(event) {
  
      event.preventDefault();

      // Clear the input fields
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      // reset the "INTERESTED IN" dropdown to the default state
      var interestedInDropdown = document.querySelector(".select-menu .sBtn-text");
      interestedInDropdown.textContent = "INTERESTED IN";

      // reset the character count display
      var charCountDisplay = document.getElementById("charCount");
      charCountDisplay.textContent = "0/200";
    });
  });

 
  
  