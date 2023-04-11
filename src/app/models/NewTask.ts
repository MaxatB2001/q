import { TaskStatus } from "../enums/task-status.enum";

export interface NewTask {
    id?: number;
    title: string;
    deadline?: Date;
    created_at: Date;
    status?: TaskStatus;
    childrens: NewTask[];
    showChildrens: boolean;
}