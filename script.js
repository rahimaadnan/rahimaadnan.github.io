// Function to handle typing and deleting effect
function typeWriter(header) {
    const text = header.getAttribute('data-text'); // get the text from html 
    let charIndex = 0;
    let typing = true;
  
    function typeAndDelete() {
      if (typing) {
        // Type out the current phrase
        header.textContent = text.substring(0, charIndex + 1);
        charIndex++;
  
        if (charIndex === text.length) {
          typing = false;
          setTimeout(typeAndDelete, 3000); // 30 wait time 
        } else {
          setTimeout(typeAndDelete, 100); // Typing speed
        }
      } else {
        // Delete the current phrase
        header.textContent = text.substring(0, charIndex - 1);
        charIndex--;
  
        if (charIndex === 0) {
          typing = true; // Restart typing again after deleting the entire phrase
        }
        setTimeout(typeAndDelete, 50); // Deleting speed
      }
    }
  
    typeAndDelete(); 
  }
  
  
  document.querySelectorAll('.typewriter').forEach((header) => {
    typeWriter(header); 
  });
  

