import { Observable } from "rxjs";
export declare class UMLFile {
    private static _Watch(file_path);
    static Watch(file_path: string): Promise<Observable<string>[]>;
    private static queue;
    static queue_size: number;
    static Compile(file: string): Promise<void>;
}
