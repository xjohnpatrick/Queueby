import { useState } from 'react';

export const usePasswordValidation = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkPasswordMatch(e.target.value, confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        checkPasswordMatch(password, e.target.value);
    };

    const checkPasswordMatch = (password, confirmPassword) => {
        if (confirmPassword && password !== confirmPassword) {
            setError('Passwords do not match');
            setDisable(true);
        } else {
            setError('');
            setDisable(false);
        }
    };

    return {
        password,
        confirmPassword,
        disable,
        error,
        handlePasswordChange,
        handleConfirmPasswordChange,
    };
};