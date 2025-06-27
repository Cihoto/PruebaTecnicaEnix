import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import { mockTasks } from './data/mockData';

function App() {
  // TODO: Implementar estado para las tareas
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: Implementar estado para filtros
  const [filters, setFilters] = useState({
    category: 'todas',
    priority: 'todas',
    status: 'todas'
  });

  // Simular carga de datos (reemplazar con llamada a API real)
  useEffect(() => {
    // TODO: Simular llamada a API
    setTimeout(() => {
      setTasks(mockTasks);
      setFilteredTasks(mockTasks);
      setLoading(false);
    }, 1000);
  }, []);

  // TODO: Implementar filtrado de tareas
  useEffect(() => {
    // Implementar lógica de filtrado aquí
    // Filtrar por categoría, prioridad y estado
  }, [tasks, filters]);

  // TODO: Implementar funciones CRUD
  const addTask = (taskData) => {
    // Implementar agregar nueva tarea
  };

  const updateTask = (taskId, updates) => {
    // Implementar actualización de tarea
  };

  const deleteTask = (taskId) => {
    // Implementar eliminación de tarea
  };

  const toggleTaskStatus = (taskId) => {
    // Implementar cambio de estado (completada/pendiente)
  };

  // TODO: Implementar cálculo de estadísticas
  const getTaskStats = () => {
    return {
      total: filteredTasks.length,
      completed: filteredTasks.filter(task => task.completed).length,
      pending: filteredTasks.filter(task => !task.completed).length,
      highPriority: filteredTasks.filter(task => task.priority === 'alta' && !task.completed).length
    };
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <h2>Cargando tareas...</h2>
        </div>
      </div>
    );
  }

  const stats = getTaskStats();

  return (
    <div className="container">
      <header className="header">
        <h1>🗂️ Gestión de Tareas</h1>
        <p>Organiza y administra tus tareas de manera eficiente</p>
      </header>

      <TaskForm onAddTask={addTask} />

      <section className="tasks-section">
        <div className="tasks-header">
          <h2>📋 Lista de Tareas</h2>
          <TaskFilters filters={filters} onFiltersChange={setFilters} />
        </div>

        <div className="task-stats">
          <h3>📊 Estadísticas</h3>
          <p>
            <strong>Total:</strong> {stats.total} | 
            <strong> Completadas:</strong> {stats.completed} | 
            <strong> Pendientes:</strong> {stats.pending} | 
            <strong> Prioridad Alta:</strong> {stats.highPriority}
          </p>
        </div>

        <TaskList
          tasks={filteredTasks}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
          onToggleStatus={toggleTaskStatus}
        />
      </section>
    </div>
  );
}

export default App;
