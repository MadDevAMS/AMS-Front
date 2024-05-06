# AMS Front Web

## Estructura de Directorios

- **base/:** Contiene elementos base compartidos entre las diferentes capas de la aplicación, como servicios genéricos o utilidades comunes.
- **data/:** Maneja el acceso a los datos y la persistencia. Aquí se implementan los repositorios para interactuar con la capa de dominio y el backend (el cómo se va a extraer).
- **domain/:** Contiene las reglas de negocio centrales de la aplicación (modelos), asì como casos de uso (qué es lo que se desea extraer) y repositorios (qué es lo que va a tener).
- **ui/:** Contiene la lógica relacionada con la interfaz de usuario de la aplicación.
  - **app/:** Contiene componentes, rutas, servicios y otros elementos de la interfaz de usuario.
    - **auth/:** Componentes y servicios relacionados con la autenticación de usuarios.
    - **config/:** Componentes y servicios relacionados con la configuración de la aplicación.
    - **dashboard/:** Componentes y servicios relacionados con el dashboard, monitoreo y gesitòn de activos de la aplicación.
    - **management/:** Componentes y servicios relacionados con la gestión de reportes, grupos y usuarios de la aplicación.
    - **shared/:** Componentes, servicios y directivas compartidos entre diferentes partes de la aplicación.
  - **assets/:** Contiene recursos estáticos como imágenes, fuentes, etc.
- **index.html:** Página principal de la aplicación.
- **main.ts:** Archivo principal de inicialización de la aplicación.
- **styles.css:** Estilos globales de la aplicación.
