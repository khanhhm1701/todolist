
export const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
}

export const isEmptyValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
