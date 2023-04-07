import { TaskStatus } from "../enums/task-status.enum";

export interface Task {
    id?: number;
    title: string;
    deadline?: Date;
    created_at: Date;
    description?: string;
    taskSectionId: number
    status?: TaskStatus
}