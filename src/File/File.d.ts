import { FileContent } from "./FileContent";
export declare class File {
    private file_path;
    private file_content;
    constructor(file_path: string, file_content: FileContent);
    path(): any;
    getDependencies(): string[];
    private getContentLines();
    static Create(file_path: string): Promise<File>;
    static CreateFromContent(content: string): File;
}
