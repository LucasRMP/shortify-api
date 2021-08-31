import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';
export declare class UrlsController {
    private readonly urlsService;
    constructor(urlsService: UrlsService);
    create(createUrlDto: CreateUrlDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUrlDto: UpdateUrlDto): string;
    remove(id: string): string;
}
