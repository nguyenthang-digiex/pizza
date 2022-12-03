export const emailValidator = (email: string) => {
    if (!email) {
        return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return "Email is wrong format";
    }
    return "";
};

export const passwordValidator = (password: string) => {
    if (!password) {
        return "Password is required";
    } else if (password.length < 8) {
        setTimeout(() => {
            return "Password must have a minimum 8 characters";
        }, 1000)
    }
    return "";
};

export const confirmPasswordValidator = (confirmPassword: string, password: string) => {
    if (!confirmPassword) {
        return "Confirm password is required";
    } else if (confirmPassword.length < 8) {
        return "Confirm password must have a minimum 8 characters";
    } else if (confirmPassword !== password) {
        return "Passwords do not match";
    }
    return "";
};