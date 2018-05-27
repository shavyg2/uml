export declare class FileContent {
    private content;
    constructor(content: string);
    getContent(): string;
    static Create(file_path: string): Promise<FileContent>;
}
