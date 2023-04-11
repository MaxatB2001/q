import { TaskStatus } from '../enums/task-status.enum';
import { NewTask } from '../models/NewTask';

export const tasks: NewTask[] = [
  {
    id: 1,
    title: 'test',
    deadline: new Date('2023-05-20T21:00:00.000Z'),
    created_at: new Date('2023-04-19T13:40:49.907Z'),
    status: TaskStatus.OPEN,
    childrens: [{
        id: 10,
        title: 'test 2',
        deadline: new Date('2023-05-14T21:00:00.000Z'),
        created_at: new Date('2023-04-26T13:40:57.290Z'),
        status: TaskStatus.OPEN,
        childrens: [],
        showChildrens: true
      },
      {
        id: 11,
        title: 'test 2',
        deadline: new Date('2023-05-01T21:00:00.000Z'),
        created_at: new Date('2023-04-20T13:40:57.290Z'),
        status: TaskStatus.OPEN,
        childrens: [],
        showChildrens: true
      },],
    showChildrens: true
  },
  {
    id: 2,
    title: 'test 2',
    deadline: new Date('2023-05-14T21:00:00.000Z'),
    created_at: new Date('2023-04-26T13:40:57.290Z'),
    status: TaskStatus.OPEN,
    childrens: [],
    showChildrens: true
  },
  {
    id: 3,
    title: 'test 3',
    deadline: new Date('2023-05-14T21:00:00.000Z'),
    created_at: new Date('2023-04-26T13:40:57.290Z'),
    status: TaskStatus.OPEN,
    childrens: [
        {
            id: 5,
            title: 'test 2',
            deadline: new Date('2023-05-14T21:00:00.000Z'),
            created_at: new Date('2023-04-26T13:40:57.290Z'),
            status: TaskStatus.OPEN,
            childrens: [],
            showChildrens: true
          },
          {
            id: 6,
            title: 'test 2',
            deadline: new Date('2023-05-14T21:00:00.000Z'),
            created_at: new Date('2023-04-26T13:40:57.290Z'),
            status: TaskStatus.OPEN,
            childrens: [],
            showChildrens: true
          },
    ],
    showChildrens: true
  },
];

export const startDate = "2023-04-19T13:40:49.907Z"
export const endDate = "2023-05-17T21:00:00.000Z"