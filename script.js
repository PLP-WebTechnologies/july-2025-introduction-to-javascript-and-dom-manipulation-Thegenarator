// ===============================
// Part 1: Variables, Data Types, Conditionals
// ===============================

function formatName(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function getVotingMessage(age) {
  if (age >= 18) {
    return "you are eligible to vote.";
  } else {
    return "you are NOT eligible to vote yet.";
  }
}


// ===============================
// Part 2: JavaScript Functions
// ===============================

function checkEligibility() {
  const rawName = document.getElementById("name").value.trim();
  const ageValue = document.getElementById("age").value.trim();
  const age = parseInt(ageValue);

  if (!rawName || isNaN(age)) {
    displayMessage("Please enter a valid name and age.", "error");
    return;
  }

  const name = formatName(rawName);
  const message = getVotingMessage(age);
  displayMessage(`${name}, ${message}`, "result");

  // Part 3: Using a loop to log past voting ages
  logVotingAges(age);
}


// ===============================
// Part 3: Loops (Repetition)
// ===============================

// Example: Show all ages the user would have voted at (18+)
function logVotingAges(currentAge) {
  const votingAges = [];

  for (let year = 18; year <= currentAge; year += 4) {
    votingAges.push(year);
  }

  if (votingAges.length > 0) {
    document.getElementById("history").textContent =
      "You could have voted at these ages: " + votingAges.join(", ");
  } else {
    document.getElementById("history").textContent = "";
  }
}


// ===============================
// Part 4: DOM Manipulation
// ===============================

function displayMessage(message, type) {
  const output = document.getElementById("output");
  output.textContent = message;

  // DOM interaction 1: Change text color based on result
  if (type === "error") {
    output.style.color = "red";
  } else {
    output.style.color = "green";
  }

  // DOM interaction 2: Add class to animate message
  output.classList.add("fade");
  setTimeout(() => output.classList.remove("fade"), 1000);
}


// ===============================
// Optional: Extra DOM Interaction (reset form)
// ===============================

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("output").textContent = "Enter your details above and click the button.";
  document.getElementById("history").textContent = "";
}
