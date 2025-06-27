# 🎯 Prueba Técnica para Trainee - Desarrollo Web

¡Bienvenido/a a nuestra prueba técnica! Esta evaluación está diseñada para conocer tus habilidades en desarrollo web y tu capacidad para resolver problemas prácticos.

## 📋 Información general

### Duración
- **Backend (Node.js + Express)**: 30-45 minutos
- **Frontend (React + Vite)**: 30-45 minutos
- **Total**: 60-90 minutos

### Objetivo
Completar las funcionalidades faltantes en dos aplicaciones web:
1. **API REST** de gestión de productos (Backend)
2. **Aplicación de gestión de tareas** (Frontend)

### Lo que puedes usar
- ✅ Documentación oficial (MDN, React docs, Express docs)
- ✅ Stack Overflow y recursos online
- ✅ Google para consultas específicas
- ✅ Herramientas de desarrollo del navegador
- ❌ No chatbots de IA (ChatGPT, Copilot, etc.)
- ❌ No ayuda de terceros

## 🛠️ Requisitos técnicos

Asegúrate de tener instalado:
- **Node.js** versión 16 o superior
- **NPM** (incluido con Node.js)
- **Editor de código** (VS Code recomendado)
- **Navegador moderno** (Chrome, Firefox, Safari, Edge)

## 🚀 Instrucciones de inicio

### 1. Verificar Node.js
```bash
node --version
npm --version
```

### 2. Estructura del proyecto
Recibirás estas carpetas:
```
prueba-tecnica/
├── prueba-backend-nodejs/     # Prueba de Backend
├── prueba-frontend-react/     # Prueba de Frontend
└── instructivos/              # Documentación
```

### 3. ¿Por dónde empezar?
Puedes elegir el orden que prefieras:
- **Opción A**: Backend primero, luego Frontend
- **Opción B**: Frontend primero, luego Backend
- **Opción C**: Alternar entre ambos según tu comodidad

## 🔧 Prueba Backend - Node.js + Express

### Configuración inicial
1. Navegar a la carpeta:
   ```bash
   cd prueba-backend-nodejs
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Verificar que funciona:
   - Abrir: http://localhost:3000/api/health
   - Deberías ver: `{"status":"OK",...}`

### ¿Qué debes hacer?
Implementar las rutas faltantes en `src/app.js`:

#### 🎯 Funcionalidades obligatorias
1. **GET /api/productos** - Listar todos los productos
2. **GET /api/productos/:id** - Obtener un producto por ID
3. **POST /api/productos** - Crear un nuevo producto
4. **PUT /api/productos/:id** - Actualizar un producto existente
5. **DELETE /api/productos/:id** - Eliminar un producto

#### ⭐ Funcionalidades adicionales (si tienes tiempo)
1. **GET /api/productos/categoria/:categoria** - Filtrar por categoría
2. **GET /api/productos/buscar?q=termino** - Buscar productos por nombre
3. **Paginación** en GET /api/productos (page, limit)

### Datos disponibles
Ya tienes 5 productos de ejemplo en diferentes categorías para probar.

### Validar tu trabajo
```bash
npm test
```

## 🎨 Prueba Frontend - React + Vite

### Configuración inicial
1. Navegar a la carpeta:
   ```bash
   cd prueba-frontend-react
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar aplicación:
   ```bash
   npm run dev
   ```

4. Verificar que funciona:
   - Abrir: http://localhost:5173
   - Deberías ver la aplicación cargando

### ¿Qué debes hacer?
Completar las funcionalidades marcadas con `TODO:` en los archivos de componentes:

#### 🎯 Funcionalidades obligatorias
1. **Agregar tareas**: Implementar `addTask` en `App.jsx`
2. **Validar formulario**: Completar validaciones en `TaskForm.jsx`
3. **Editar tareas**: Finalizar edición en `TaskItem.jsx`
4. **Eliminar tareas**: Implementar eliminación en `TaskItem.jsx`
5. **Cambiar estado**: Toggle completada/pendiente

#### ⭐ Funcionalidades adicionales (si tienes tiempo)
1. **Filtros**: Hacer que los filtros funcionen realmente
2. **Búsqueda**: Agregar búsqueda por texto
3. **Formateo de fechas**: Mejorar visualización de fechas
4. **Persistencia**: Guardar en localStorage

### Datos disponibles
La app incluye 8 tareas de ejemplo para que puedas probar todas las funcionalidades.

## 📊 Lo que evaluamos

### Habilidades técnicas
- ✅ **JavaScript/ES6+**: Sintaxis moderna, async/await, destructuring
- ✅ **Backend**: Express, rutas, middlewares, manejo de errores
- ✅ **Frontend**: React hooks, manejo de estado, props, eventos
- ✅ **API**: Códigos HTTP, validaciones, estructura JSON
- ✅ **Debugging**: Capacidad para encontrar y corregir errores

### Habilidades blandas
- ✅ **Lectura de código**: Entender código existente
- ✅ **Organización**: Estructura y limpieza del código
- ✅ **Resolución de problemas**: Approach metodológico
- ✅ **Gestión del tiempo**: Priorización de tareas

## 💡 Consejos importantes

### Durante la prueba
1. **Lee todo primero**: Entiende el proyecto completo antes de empezar
2. **Empieza por lo básico**: Implementa las funcionalidades core primero
3. **Prueba frecuentemente**: Verifica que cada funcionalidad funciona
4. **Usa la consola**: Los errores de JavaScript aparecen ahí
5. **No te atasques**: Si algo no funciona, pasa a otra funcionalidad

### Organización sugerida
1. **Primeros 5 min**: Leer y entender el código
2. **Siguientes 25-35 min**: Implementar funcionalidades core
3. **Últimos 5-10 min**: Probar todo y añadir mejoras si hay tiempo

### Si algo no funciona
1. **Revisa la consola** del navegador (F12)
2. **Verifica la sintaxis** (paréntesis, llaves, puntos y comas)
3. **Prueba paso a paso** cada función
4. **No dudes en preguntar** si hay algo unclear del enunciado

## 🏁 Al finalizar

### Backend
- Verifica que todas las rutas respondan correctamente
- Ejecuta `npm test` para ver si pasan los tests
- Prueba con diferentes datos de entrada

### Frontend
- Verifica que todas las funcionalidades básicas funcionen
- Prueba agregar, editar y eliminar tareas
- Verifica que los filtros muestren resultados correctos

### Entrega
- Todo tu código debe estar en las carpetas del proyecto
- No necesitas comprimir ni enviar nada adicional
- Deja el código tal como está cuando termines

## ❓ Preguntas frecuentes

**P: ¿Puedo usar librerías adicionales?**
R: Para esta prueba, usa solo las dependencias ya incluidas. Es más importante mostrar tu lógica que usar librerías externas.

**P: ¿Qué hago si me quedo sin tiempo?**
R: Entrega lo que tengas. Es mejor tener 3 funcionalidades completas que 6 a medias.

**P: ¿Puedo cambiar el diseño/CSS?**
R: Puedes hacer pequeños ajustes, pero enfócate en la funcionalidad. El CSS ya está optimizado.

**P: ¿Los tests deben pasar todos?**
R: Los tests están diseñados para las funcionalidades que debes implementar. Si implementas todo correctamente, deberían pasar.

---

## 🎯 ¡Comienza cuando estés listo!

Recuerda: Esta prueba evalúa tu proceso de pensamiento y habilidades de resolución de problemas, no solo el resultado final. ¡Haz tu mejor esfuerzo y muestra de qué eres capaz!

**¡Buena suerte! 🚀**
