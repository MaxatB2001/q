import { Task } from "./Tasks";

export interface TaskSection {
    id: number;
    title: string;
    tasks: Task[]
}