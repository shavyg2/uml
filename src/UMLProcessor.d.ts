import { FilePattern } from "./File/FilePattern";
import { File } from "./File/File";
import { FileDependency } from "./File/FileDependency";
export declare class UMLProcessor {
    private pattern;
    constructor(pattern: FilePattern);
    process(): Promise<FileDependency[]>;
    protected processFiles(files: File[]): FileDependency[];
    protected processFile(file: File): FileDependency;
}
