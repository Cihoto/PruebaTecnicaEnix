export const mockTasks = [
  {
    id: '1',
    title: 'Implementar sistema de autenticación',
    description: 'Desarrollar el módulo de login y registro de usuarios con validaciones',
    category: 'desarrollo',
    priority: 'alta',
    completed: false,
    createdAt: '2024-01-15T10:30:00Z',
    dueDate: '2024-01-25T23:59:59Z'
  },
  {
    id: '2',
    title: 'Revisar documentación del proyecto',
    description: 'Leer y analizar toda la documentación técnica del proyecto actual',
    category: 'documentacion',
    priority: 'media',
    completed: true,
    createdAt: '2024-01-10T09:00:00Z',
    dueDate: '2024-01-20T17:00:00Z'
  },
  {
    id: '3',
    title: 'Configurar entorno de desarrollo',
    description: 'Instalar y configurar todas las herramientas necesarias: Node.js, Git, VS Code',
    category: 'setup',
    priority: 'alta',
    completed: true,
    createdAt: '2024-01-08T14:15:00Z',
    dueDate: '2024-01-15T12:00:00Z'
  },
  {
    id: '4',
    title: 'Diseñar base de datos',
    description: 'Crear el diagrama ER y definir las tablas principales del sistema',
    category: 'diseño',
    priority: 'alta',
    completed: false,
    createdAt: '2024-01-12T11:20:00Z',
    dueDate: '2024-01-30T18:00:00Z'
  },
  {
    id: '5',
    title: 'Preparar presentación',
    description: 'Crear slides para la presentación del avance del proyecto',
    category: 'presentacion',
    priority: 'media',
    completed: false,
    createdAt: '2024-01-14T16:45:00Z',
    dueDate: '2024-01-28T14:00:00Z'
  },
  {
    id: '6',
    title: 'Testing de componentes React',
    description: 'Escribir tests unitarios para los componentes principales',
    category: 'testing',
    priority: 'baja',
    completed: false,
    createdAt: '2024-01-16T13:30:00Z',
    dueDate: '2024-02-05T16:00:00Z'
  },
  {
    id: '7',
    title: 'Optimizar performance',
    description: 'Revisar y mejorar el rendimiento de las consultas a la base de datos',
    category: 'optimizacion',
    priority: 'media',
    completed: false,
    createdAt: '2024-01-18T08:00:00Z',
    dueDate: '2024-02-10T20:00:00Z'
  },
  {
    id: '8',
    title: 'Reunión con el equipo',
    description: 'Daily standup para revisar el progreso y planificar el día',
    category: 'reunion',
    priority: 'baja',
    completed: true,
    createdAt: '2024-01-19T09:30:00Z',
    dueDate: '2024-01-19T10:00:00Z'
  }
];

export const categories = [
  { value: 'todas', label: 'Todas las categorías' },
  { value: 'desarrollo', label: 'Desarrollo' },
  { value: 'diseño', label: 'Diseño' },
  { value: 'testing', label: 'Testing' },
  { value: 'documentacion', label: 'Documentación' },
  { value: 'reunion', label: 'Reunión' },
  { value: 'setup', label: 'Configuración' },
  { value: 'presentacion', label: 'Presentación' },
  { value: 'optimizacion', label: 'Optimización' }
];

export const priorities = [
  { value: 'todas', label: 'Todas las prioridades' },
  { value: 'alta', label: 'Alta' },
  { value: 'media', label: 'Media' },
  { value: 'baja', label: 'Baja' }
];

export const statuses = [
  { value: 'todas', label: 'Todas' },
  { value: 'pendientes', label: 'Pendientes' },
  { value: 'completadas', label: 'Completadas' }
];
