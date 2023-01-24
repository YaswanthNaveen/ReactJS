export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const checkValidity = (value, rules, fieldName) => {
        let isValid = true;
    let msg = '';
    for (let rule in rules) {
        switch (rule) {
            case ('required'):
                isValid = value.trim() !== '';
                if (!isValid) {
                    msg = fieldName + ' is required';
                    return [isValid, msg];
                }
                break;
            case ('minLength'):
                isValid = value.length >= rules[rule];
                if (!isValid) {
                    msg = fieldName + ' should have minimum ' + rules[rule];
                    return [isValid, msg];
                }
                break;

            case ('maxLength'):
                isValid = value.length <= rules[rule];
                if (!isValid) {
                    msg = fieldName + ' should have maximum ' + rules[rule];
                    return [isValid, msg];
                }
                break;
            default:
                isValid = true;
                return [isValid, msg];

        }
    }
    return [isValid, msg];
}