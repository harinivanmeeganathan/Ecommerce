import React from 'react';
import './button.styles.scss';

const CustomButton = ({ children, ...props }) => (
    <button className = "btn" {...props}>{children}</button>

);

export default CustomButton;