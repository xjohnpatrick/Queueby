import { useState } from "react";

export const buttonValidation = () => {
    const [isDisable, setIsDisable] = useState(true);
    const [visible, setVisible] = useState(false);

    const toggleDisable = () => {
        setIsDisable(false);
        setVisible(true);
    }
    
    const handleClose = () => {
        setIsDisable(true);
        setVisible(false);
    }

    return {
        isDisable,
        visible,
        toggleDisable,
        handleClose
    };
};