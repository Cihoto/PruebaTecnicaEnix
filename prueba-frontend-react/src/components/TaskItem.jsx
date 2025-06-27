import { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete, onToggleStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description,
    category: task.category,
    priority: task.priority,
    dueDate: task.dueDate
  });

  // TODO: Implementar funciones de edición
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // TODO: Validar datos y llamar onUpdate
    // onUpdate(task.id, editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      title: task.title,
      description: task.description,
      category: task.category,
      priority: task.priority,
      dueDate: task.dueDate
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      // TODO: Llamar onDelete
      // onDelete(task.id);
    }
  };

  const handleToggleStatus = () => {
    // TODO: Llamar onToggleStatus
    // onToggleStatus(task.id);
  };

  // TODO: Implementar formateo de fechas
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // TODO: Verificar si la tarea está vencida
  const isOverdue = () => {
    if (task.completed) return false;
    return new Date(task.dueDate) < new Date();
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <div className="form-group">
          <input
            type="text"
            value={editData.title}
            onChange={(e) => setEditData({...editData, title: e.target.value})}
            placeholder="Título de la tarea"
          />
        </div>
        
        <div className="form-group">
          <textarea
            value={editData.description}
            onChange={(e) => setEditData({...editData, description: e.target.value})}
            placeholder="Descripción"
            rows="2"
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <select
            value={editData.category}
            onChange={(e) => setEditData({...editData, category: e.target.value})}
          >
            <option value="desarrollo">Desarrollo</option>
            <option value="diseño">Diseño</option>
            <option value="testing">Testing</option>
            <option value="documentacion">Documentación</option>
            <option value="reunion">Reunión</option>
            <option value="setup">Configuración</option>
            <option value="presentacion">Presentación</option>
            <option value="optimizacion">Optimización</option>
          </select>

          <select
            value={editData.priority}
            onChange={(e) => setEditData({...editData, priority: e.target.value})}
          >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="datetime-local"
            value={editData.dueDate}
            onChange={(e) => setEditData({...editData, dueDate: e.target.value})}
          />
        </div>

        <div className="task-actions">
          <button onClick={handleSave} className="btn btn-success">
            Guardar
          </button>
          <button onClick={handleCancel} className="btn btn-secondary">
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''} ${isOverdue() ? 'overdue' : ''}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <span className={`task-priority priority-${task.priority}`}>
          {task.priority}
        </span>
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-meta">
        <span className="task-category">{task.category}</span>
        <span className="task-date">
          Vence: {formatDate(task.dueDate)}
          {isOverdue() && <span style={{color: 'red'}}> (Vencida)</span>}
        </span>
      </div>

      <div className="task-actions">
        <button
          onClick={handleToggleStatus}
          className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'}`}
        >
          {task.completed ? '↩️ Reabrir' : '✅ Completar'}
        </button>
        
        <button onClick={handleEdit} className="btn btn-secondary">
          ✏️ Editar
        </button>
        
        <button onClick={handleDelete} className="btn btn-danger">
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
