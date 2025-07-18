import { type FC } from "react";
import type { ITask } from "@types";

const arrTags: object = {
    'Bug': 'bug',
    'Feature': 'feature',
    'Documentation': 'documentation',
    'Refactor': 'refactor',
    'Test': 'test',

    'To Do': 'todo',
    'In Progress': 'progress',
    'Done': 'done',

    'Low': 'low',
    'Medium': 'medium',
    'High': 'high'
} as const;

function getColor(nameTag:string): string {
  for (let key in arrTags) {
    if(key === nameTag) {
      return arrTags[key as keyof typeof arrTags];
    };
  }

  return 'error: tag is not find';
}

interface TaskInfoBlockProps {
    task: ITask
};

const TaskInfoBlock: FC<TaskInfoBlockProps> = ({task}) => {
    return (
        <>
        <div className='taskItem__tag'>
          <div className='taskItem__title'>Category</div>
          <div className={getColor(task.category)}>{task.category}</div>
        </div>

        <div className='taskItem__tag'>
          <div className='taskItem__title'>Status</div>
          <div className={getColor(task.status)}>{task.status}</div>
        </div>

        <div className='taskItem__tag'>
          <div className='taskItem__title'>Priority</div>
          <div className={getColor(task.priority)}>{task.priority}</div>
        </div> 
        </>
    );
};

export default TaskInfoBlock
