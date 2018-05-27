export declare abstract class FilePattern {
    static Create(pattern: string | RegExp): StringFilePattern | RegexFilePattern;
    abstract getFiles(): Promise<string[]>;
}
export declare class StringFilePattern extends FilePattern {
    private pattern;
    constructor(pattern: string);
    getFiles(): Promise<string[]>;
}
export declare class RegexFilePattern extends FilePattern {
    private pattern;
    constructor(pattern: RegExp);
    getFiles(): Promise<string[]>;
}
