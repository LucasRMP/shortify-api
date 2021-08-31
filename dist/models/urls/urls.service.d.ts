import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';
export declare class UrlsService {
    create(createUrlDto: CreateUrlDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUrlDto: UpdateUrlDto): string;
    remove(id: number): string;
}
