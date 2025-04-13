import { useState } from "react";

export default function userPassword() {
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generatePassword = (checkBoxData, rangeLength) => {
        let charSet = "";
        let generatedPassword = "";

        const selectedOption = checkBoxData.filter((ele) => ele.state);

        selectedOption.forEach((element) => {
            const { title } = element;
            switch (title) {
                case "Include uppercase letters":
                    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include lowercase letters":
                    charSet += "abcdefghijklmnopqrstuvwxzy";
                    break;
                case "Include numbers":
                    charSet += "0123456789";
                    break;
                case "Include symbols":
                    charSet += "!@#$%^&*()_+";
                    break;
                default:
                    break;
            }

            for (let i = 0; i < rangeLength; i++) {
                const randomIndex = Math.floor(Math.random * charSet.length);
                generatePassword += charSet[randomIndex];
            }
        });
    };

    return { password, errorMessage, generatePassword };
}
