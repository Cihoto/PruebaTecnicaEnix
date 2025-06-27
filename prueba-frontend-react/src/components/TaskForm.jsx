import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'desarrollo',
    priority: 'media',
    dueDate: ''
  });

  const [errors, setErrors] = useState({});

  // TODO: Implementar validación del formulario
  const validateForm = () => {
    const newErrors = {};
    
    // Implementar validaciones aquí:
    // - title: requerido, mínimo 3 caracteres
    // - description: requerido, mínimo 10 caracteres
    // - dueDate: requerido, no puede ser fecha pasada
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // TODO: Implementar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Crear nueva tarea con ID único
    const newTask = {
      id: Date.now().toString(),
      ...formData,
      completed: false,
      createdAt: new Date().toISOString()
    };

    // TODO: Llamar a la función onAddTask
    // onAddTask(newTask);

    // Limpiar formulario
    setFormData({
      title: '',
      description: '',
      category: 'desarrollo',
      priority: 'media',
      dueDate: ''
    });
    
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>➕ Agregar Nueva Tarea</h2>
      
      <div className="form-group">
        <label htmlFor="title">Título *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Ingresa el título de la tarea"
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe la tarea en detalle"
          rows="3"
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
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
      </div>

      <div className="form-group">
        <label htmlFor="priority">Prioridad</label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dueDate">Fecha límite *</label>
        <input
          type="datetime-local"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
        {errors.dueDate && <span className="error">{errors.dueDate}</span>}
      </div>

      <button type="submit" className="btn">
        Agregar Tarea
      </button>
    </form>
  );
};

export default TaskForm;
