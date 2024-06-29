document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
  
    const formInputs = document.querySelectorAll(".form-input");
    const applyNowButton = document.querySelector(".apply-now");
  
    if (!applyNowButton) {
      console.error("Apply Now button not found");
      return;
    }
  
    applyNowButton.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("Apply Now button clicked");
  
      let isValid = true;
      formInputs.forEach((input, index) => {
        console.log(`Checking input ${index}: ${input.value}`);
        if (input.value.trim() === "") {
          isValid = false;
          input.style.border = "1px solid red";
        } else {
          input.style.border = "1px solid #ccc";
        }
      });
  
      if (isValid) {
        const formData = {
          name: formInputs[0].value,
          email: formInputs[1].value,
          mobile: formInputs[2].value,
          babyStage: formInputs[3].value,
        };
  
        console.log("Form Data Submitted: ", formData);
      } else {
        alert("Please fill out all fields.");
      }
    });
  });
  