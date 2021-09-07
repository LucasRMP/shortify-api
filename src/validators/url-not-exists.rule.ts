import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { UrlsService } from 'src/models/urls/urls.service';

export function UrlNotExists(
  field = 'id',
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'UrlNotExists',
      constraints: [field],
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: UrlNotExistsRule,
    });
  };
}

@ValidatorConstraint({ name: 'NotExists', async: true })
@Injectable()
export class UrlNotExistsRule implements ValidatorConstraintInterface {
  constructor(private readonly urlsService: UrlsService) {}

  async validate(value: string, args: ValidationArguments) {
    if (!value) {
      return false;
    }
    try {
      const [field] = args.constraints;

      const result = await this.urlsService.findOne({ [field]: value });

      if (result) {
        throw new Error(
          `Url with the field \`${field}\` = \`${value}\` already exists`,
        );
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  defaultMessage({ property }: ValidationArguments) {
    return `${property} already exists`;
  }
}
