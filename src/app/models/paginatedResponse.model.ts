export interface paginatedResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: T[]
}