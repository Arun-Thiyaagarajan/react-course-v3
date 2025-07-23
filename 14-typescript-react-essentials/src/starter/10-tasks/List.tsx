import { type Task } from "./types";

type TaskListProps = {
  toggleTask: ({ id }: { id: string }) => void;
  tasks: Task[];
};

const List = ({toggleTask, tasks}: TaskListProps) => {
  return (
    <ul className='list'>
      {tasks.map((task) => (
        <li key={task.id}>
          <p className={task.isCompleted ? "task-text text-strike" : "task-text"}>{task.description}</p>
          <input
            type='checkbox'
            checked={task.isCompleted}
            onChange={() => {
              toggleTask({ id: task.id });
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
