import React, { type FC } from 'react';
// import classes from './MySelect.module.css';

interface SelectProps {
  tagName: string,
  arrTags: string[],
  onChange?: (value: string) => void;
}

function getColor(nameTag:string): string {
  const arrTags: object = {
    'Bug': 'bug',
    'Feature': 'feature',
    'Documentation': 'documentation',
    'Refactor': 'refactor',
    'Test': 'test',

    'To Do': 'todo',
    'In Progress': 'in-progress',
    'Done': 'done',

    'Low': 'low',
    'Medium': 'medium',
    'High': 'high'
  } as const;

  for (let key in arrTags) {
    if(key === nameTag) {
      return arrTags[key as keyof typeof arrTags];
    };
  }
  return 'error: tag is not find';
}

const MySelect: FC<SelectProps> = ({ tagName, arrTags, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <select
      onChange={handleChange}
      className={`select__options ${getColor(tagName)}`} 
      defaultValue={tagName}
    >
      {arrTags.map((tag) => (
        <option key={tag} value={tag} className={getColor(tag)}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export default MySelect;