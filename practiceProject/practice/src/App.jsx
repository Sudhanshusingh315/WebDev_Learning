import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App({ otpFileds = 6 }) {
    const [otp, setOtps] = useState(Array(otpFileds).fill(""));
    const otpInputRefs = useRef([]);
    console.log("otpInput", otpInputRefs);
    console.log("otp value", otp);
    const hadleOtpInput = (e, index) => {
        const { key } = e;
        console.log(key);
        switch (key) {
            case "Backspace":
                setOtps((prev) => {
                    const temp = [...prev];
                    temp.splice(index, 1, "");
                    return temp;
                });
                if (index > 0) {
                    otpInputRefs.current[index - 1].focus();
                }
                break;

            default:
                break;
        }

        if (isNaN(key)) return;

        // figure out why didn't setOpt(prev) worked?
        console.log("key", key);
        const newOtp = [...otp];
        newOtp[index] = key;
        setOtps(newOtp);
        if (index < otp.length - 1) {
            otpInputRefs?.current[index + 1].focus();
        }
    };
    return (
        <>
            <div className="otp-fileds">
                {otp?.map((value, index) => {
                    return (
                        <input
                            ref={(currentInput) => {
                                otpInputRefs.current[index] = currentInput;
                            }}
                            key={index}
                            value={value}
                            type="text"
                            onKeyDown={(e) => hadleOtpInput(e, index)}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
