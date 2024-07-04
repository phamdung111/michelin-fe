import type { BaseValidationInterface } from '~/interface/validation/base-validation';
import * as Yup from 'yup';

export const baseFormInputValidation = async <T extends Record<string, BaseValidationInterface>>(schemaValidate: Yup.AnySchema, formValidate: T, formData: any) => {
    let status = true;
    Object.keys(formValidate).forEach((key) => {
        formValidate[key].isFailed = false;
        formValidate[key].message = '';
    });
    try {
        await schemaValidate.validate(formData, { abortEarly: false });
    } catch (errors: any) {
        status = false;
        errors.inner.forEach((error: any) => {
            formValidate[error.path].isFailed = true;
            formValidate[error.path].message = error.message;
        });
    }
    return status;
};
