import { ValidationOptions } from 'class-validator';
export declare function MinCallback(callback: () => number, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
