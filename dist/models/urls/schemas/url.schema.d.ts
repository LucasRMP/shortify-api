import { Document } from 'mongoose';
export declare type UrlDocument = Url & Document;
export declare class Url {
    slug: string;
    target: string;
    visits: number;
}
export declare const UrlSchema: import("mongoose").Schema<Document<Url, any, any>, import("mongoose").Model<Document<Url, any, any>, any, any>, {}>;
