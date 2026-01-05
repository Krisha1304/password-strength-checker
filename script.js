function checkStrength() {
    const password = document.getElementById("password").value;
    const bar = document.getElementById("strength-bar");
    const text = document.getElementById("strength-text");
    const suggestions = document.getElementById("suggestions");

    let strength = 0;
    let advice = [];

    if (password.length >= 8) strength++; else advice.push("Use at least 8 characters");
    if (/[A-Z]/.test(password)) strength++; else advice.push("Add uppercase letters");
    if (/[a-z]/.test(password)) strength++; else advice.push("Add lowercase letters");
    if (/[0-9]/.test(password)) strength++; else advice.push("Add numbers");
    if (/[@$!%*?&]/.test(password)) strength++; else advice.push("Add special characters");

    // Update strength bar
    bar.style.width = (strength*20) + "%";
    if(strength <= 2) bar.style.background = "red";
    else if(strength <= 4) bar.style.background = "orange";
    else bar.style.background = "lightgreen";

    // Update text
    if(strength <= 2) text.textContent = "❌ Weak Password";
    else if(strength <= 4) text.textContent = "⚠️ Medium Password";
    else text.textContent = "✅ Strong Password";

    // Show suggestions
    if(strength < 5) suggestions.textContent = "Suggestions: " + advice.join(", ");
    else suggestions.textContent = "Your password is very strong!";
    
    // Optional: Crack time estimation
    let crackTime = "Instantly";
    if(strength === 3) crackTime = "Few hours";
    else if(strength === 4) crackTime = "Few days";
    else if(strength === 5) crackTime = "Many years";
    suggestions.textContent += " | Estimated crack time: " + crackTime;
}
