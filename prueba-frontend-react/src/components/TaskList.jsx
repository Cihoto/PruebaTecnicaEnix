import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask, onToggleStatus }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>🗂️ No hay tareas</h3>
        <p>¡Agrega tu primera tarea para comenzar!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdateTask}
          onDelete={onDeleteTask}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;
