import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';
import { EntityNotFoundError } from 'typeorm';
export declare class EntityNotFoundExceptionFilter extends BaseExceptionFilter {
    catch(exception: EntityNotFoundError, host: ArgumentsHost): Response<any, Record<string, any>>;
}
