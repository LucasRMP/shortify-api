import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare function Exists(entityClass: any, field?: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare class ExistsRule implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
