import { File } from "./File";
export declare class FileDependency {
    private file;
    constructor(file: File);
    getDependencies(): Promise<string[]>;
}
