"use strict";
import React from "react";
import { useTheme ,useThemeUpdate} from "../components/ThemeContext";

export default function FunctionContextComponents(){

const darkTheme = useTheme();
const toggleTheme= useThemeUpdate();

const themeStyles = {
    backgroundColor :darkTheme ? '#333' :'#ccc',
    color: darkTheme ? '#ccc': '#333',
    padding: '2rem',
    margin :'2rem'
}

return (
    <>
    <button onClick={toggleTheme}> ToggleTheme</button>
    <div style={ themeStyles }> {darkTheme.toString()} Function Theme</div>
    </>

    );


}
