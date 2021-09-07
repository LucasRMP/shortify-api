import { Controller, Get, Post, Body, Param, Redirect } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller()
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  async create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlsService.create(createUrlDto, { plain: true });
  }

  @Get(':slug')
  @Redirect()
  async redirect(@Param('slug') slug: string) {
    const url = await this.urlsService.findBySlug(slug);
    return { url: url?.target || 'https://google.com.br' };
  }
}
