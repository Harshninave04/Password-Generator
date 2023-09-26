const PasswordInput = document.querySelector(".dialogue-box .search input");
const CopyIcon = document.querySelector(".dialogue-box .search .copy-icon");
const Slider = document.querySelector(".slider input");
const SliderNumber = document.querySelector(".slider .slider-number");
const GenerateButton = document.querySelector(".btn button");

let all_characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,.<>?/";

const generatePassword = () => {
    let newPassword = "";

    // for loop will run until the Slider value
    for (let i = 0; i < Slider.value; i++) {
        var RandomNumber = Math.floor(Math.random() * all_characters.length);
        newPassword += all_characters[RandomNumber];
        // newPassword will saving all the range of values which slider will be having
    }
    PasswordInput.value = newPassword;
    // Above line will show the characters inside the input section 
    // Below line indicate that icon will change to it's original copy icon state after copying any generated password
    CopyIcon.classList.replace("uil-file-check-alt", "uil-copy");
}



Slider.addEventListener("input", () => {
    SliderNumber.innerText = Slider.value;
    // As we slide the slider, above line(code) will help you navigate the value of the slider and the below function will create the random range of password as slider value
    generatePassword();
})

CopyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(PasswordInput.value);
    // Below line indicates that icon will replace into the paste icon after clicking the copy icon 
    CopyIcon.classList.replace("uil-copy", "uil-file-check-alt");
})



// When we click the Generate Password Button , the generatePassword function will run and generate the password easily
generatePassword();
GenerateButton.addEventListener("click", generatePassword)
