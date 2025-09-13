export declare function fetchPosts(limit?: number): Promise<{
    id: number;
    title: string;
    body: string;
}[]>;
