import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { UrlNotExists } from 'src/validators/url-not-exists.rule';

export class CreateUrlDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  target: string;

  @IsOptional()
  @IsString()
  @UrlNotExists('slug')
  slug?: string;
}
