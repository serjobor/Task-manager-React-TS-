import { type FC } from "react";
import { MySelect } from "./UI/select";
import type { ITask } from "@types";

interface TaskSelectorsProps {
    formData:Omit<ITask, "id">;
    onChange: (field: keyof ITask, value: string) => void
};  

const CATEGORIES = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'] as const
const STATUSES = ['To Do', 'In Progress', 'Done'] as const
const PRIORITIES = ['Low', 'Medium', 'High'] as const

const TaskSelectors: FC<TaskSelectorsProps> = (
    {
        formData,
        onChange
    }) => {
  return (
    <>
      <div className="form__select">
        <div className="select__block">
          <div className="select__title">Category</div>
          <MySelect
            tagName={formData.category}
            arrTags={[...CATEGORIES]}
            onChange={(value) => onChange('category', value)}
          />
        </div>
    
        <div className='select__block'>
          <div className="select__title">Status</div>
          <MySelect
            tagName={formData.status}
            arrTags={[...STATUSES]}
            onChange={(value) => onChange('status', value)}
          />
        </div> 
    
        <div className='select__block'>
          <div className="select__title">Priority</div>
          <MySelect
            tagName={formData.priority}
            arrTags={[...PRIORITIES]}
            onChange={(value) => onChange('priority', value)}
          />
        </div>
      </div>
    </>
  );
};

export default TaskSelectors
