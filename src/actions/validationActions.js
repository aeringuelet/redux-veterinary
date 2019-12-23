export const validateFormAction = error => {
    return {
        type: 'VALIDATE_FORM',
        payload: error
    }
}