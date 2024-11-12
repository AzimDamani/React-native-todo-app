export type Task = {
    id: string;
    name: string;
    description?: string;
    dueDate?: string;
    completed: boolean;
}