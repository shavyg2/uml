export declare class Application {
    private args;
    constructor(args: string[]);
    private readonly parsed;
    readonly minimalist: {
        watch: boolean;
        args: string[];
    };
    private check(args);
}
