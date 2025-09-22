import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import styled from "styled-components";


// Styled switch from your snippet
const StyledWrapper = styled.div`
.switch {
font-size: 17px;
position: relative;
display: inline-block;
width: 3.5em;
height: 2em;
}


.switch input {
opacity: 0;
width: 0;
height: 0;
}


.slider {

position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;

transition: .5s;
border-radius: 30px;
}


.slider:before {
position: absolute;
content: "";
height: 1.4em;
width: 1.4em;
border-radius: 50%;
left: 10%;
bottom: 15%;
box-shadow: inset 8px -4px 0px 0px #ffc000;

transition: .5s;
}


input:checked + .slider {

}


input:checked + .slider:before {
transform: translateX(100%);
box-shadow: inset 15px -4px 0px 15px #ffc000;
}
`;


export function ThemeToggle() {
    const [dark, setDark] = useState(false);


    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);


    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);


    return (
        <StyledWrapper>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={dark}
                    onChange={() => setDark(!dark)}
                    aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
                />
                <span className="slider bg-[#000065]" />
            </label>
        </StyledWrapper>
    );
}