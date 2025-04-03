# E-commerce de Bazar

Este proyecto es un E-commerce de un bazar desarrollado por **Nicolás Lingurini**, utilizando tecnologías modernas para brindar una experiencia intuitiva y eficiente.

## Tecnologías utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera.
- **Firestore**: Base de datos NoSQL en la nube de Google.
- **Bootstrap**: Framework CSS para un diseño responsivo y estilizado.
- **React-Bootstrap**: Componentes de Bootstrap optimizados para React.
- **React-DOM**: Biblioteca para manejar el DOM virtual en aplicaciones React.
- **React-Router-DOM**: Herramienta para manejar rutas y navegación en React.

## Funcionalidades

El sistema incluye las siguientes características principales:

1. **Navbar**:

   - Navegación entre las distintas secciones de la aplicación.

2. **Creación de ítems**:

   - Los ítems se generan a partir de los detalles almacenados en la base de datos Firestore.
   - Se muestran en una lista organizada para facilitar su visualización.

3. **Carrito de compras**:

   - Permite agregar o quitar ítems de manera interactiva.
   - Muestra los ítems seleccionados y el total acumulado.

4. **Formulario de pedido**:
   - Al finalizar la compra, se presenta un formulario para completar los datos del pedido.
   - Los datos se almacenan en Firestore para su procesamiento posterior.

## Instalación

Sigue los pasos para configurar el proyecto en tu entorno local:

1. Clona este repositorio.

   ```bash
   git clone <https://github.com/NicoLingurini/ProyectoFinal-Lingurini>
   ```

2. Instala las dependencias del proyecto.

   ```bash
   npm install
   ```

3. Configura las credenciales de Firestore en un archivo `.env` o directamente en el código fuente según sea necesario.

4. Ejecuta el servidor de desarrollo.
   ```bash
   npm run dev
   ```

## Estructura de componentes

- **Navbar**: Componente de navegación.
- **ItemListContainer**: Muestra la lista de ítems generados desde Firestore con la estructura de "Item".
- **Cart**: Componente del carrito de compras.
- **ChekoutForm**: Formulario para la captura de datos del pedido.

## Próximos pasos

- Mejorar el diseño de la interfaz utilizando más componentes de Bootstrap o librerías adicionales.
- Implementar autenticación de usuarios.

---
