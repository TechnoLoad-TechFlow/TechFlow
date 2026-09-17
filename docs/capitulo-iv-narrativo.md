# Capítulo IV: Product Design

## 4.2. Information Architecture

La arquitectura de información de TechnoLoad organiza de forma progresiva los contenidos relativos a activos, mantenimiento y operaciones de carga. La experiencia parte de la propuesta de valor y conduce al visitante por beneficios, perfiles objetivo, funcionamiento y mecanismos de navegación, con el propósito de reducir la carga cognitiva y orientar cada interacción hacia una decisión operativa verificable.

### 4.2.1. Organization Systems

La Landing Page sigue una secuencia jerárquica desde información general hasta la acción: (1) Header y navegación, (2) presentación principal, (3) beneficios, (4) perfiles objetivo, (5) funcionamiento, (6) trazabilidad y módulos, (7) CTA final y (8) Footer. Los beneficios, módulos y perfiles se agrupan por tarjetas para favorecer el escaneo visual y conservar unidades de información comparables. En la aplicación, esta jerarquía se transforma en módulos de Dashboard, Activos, Mantenimientos y Operaciones; cada módulo conduce a listas, detalle y acciones transaccionales.

### 4.2.2. Labeling Systems

El etiquetado emplea textos breves, directos y consistentes con el dominio de flotas. “Inicio”, “Activos”, “Mantenimiento” y “Operaciones” nombran destinos; “Registrar lectura” y “Asignar unidad” nombran acciones; “Disponible” y “En mantenimiento” comunican estado; “Comenzar ahora” expresa la llamada a la acción. Estos términos se implementan como claves de `vue-i18n`, permitiendo la equivalencia ES/EN sin alterar los componentes.

### 4.2.3. SEO Tags and Meta Tags

Los metadatos identifican la página, mejoran su representación en buscadores y controlan la previsualización al compartirla. La descripción comunica la propuesta de valor; las etiquetas OpenGraph estandarizan título, URL, descripción e imagen en redes sociales.

~~~html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TechnoLoad | Intelligent Fleet Management</title>
<meta name="description" content="TechnoLoad centraliza activos, mantenimiento y operaciones de flotas." />
<meta name="keywords" content="fleet management, maintenance, machinery, logistics, TechnoLoad" />
<meta name="author" content="TechnoLoad Team" />
<link rel="canonical" href="https://technoload.pe/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="TechnoLoad | Intelligent Fleet Management" />
<meta property="og:description" content="Gestión inteligente de activos y mantenimiento." />
<meta property="og:url" content="https://technoload.pe/" />
<meta property="og:image" content="https://technoload.pe/og-cover.png" />
<meta name="twitter:card" content="summary_large_image" />
~~~

### 4.2.4. Searching Systems

La Landing Page no requiere un buscador interno: su objetivo es comunicar y convertir mediante llamadas a la acción directas hacia la Web App. En la aplicación autenticada, la búsqueda usa debounce de 300 ms, filtros combinables por estado, tipo y prioridad, parámetros conservados en la URL y paginación de servidor. Los estados vacíos explican la causa, ofrecen restablecer filtros y presentan un CTA contextual cuando el rol lo permite.

### 4.2.5. Navigation Systems

La navegación pública es lineal por anclas: el Header contiene enlaces a secciones y un botón de acceso a plataforma; en móvil se contrae a un menú compacto. La aplicación autenticada usa Sidebar o Drawer, Topbar, Breadcrumbs dinámicos y CTAs contextuales. Esta combinación conserva orientación espacial al pasar de listados a detalle y a formularios.

## 4.3. Landing Page UI Design

La Landing Page aplica Primary `#0F3D5E`, Secondary `#FF8F00` e Inter para comunicar confiabilidad, actividad y claridad. La composición dirige la mirada del titular a la propuesta de valor, luego a los módulos y finalmente a la conversión.

### 4.3.1. Landing Page Wireframes

El wireframe de baja fidelidad define Navbar, Hero de dos columnas, beneficios, módulos, proceso, CTA y Footer. Las estructuras se validan antes de aplicar estilo visual y responden a desktop y móvil.

![wireframeDesktop](assets/Wireframe-Desktop1440.png)
![wireframeMobile](assets/Wireframe-Mobile390.png)

### 4.3.2. Landing Page Mock-ups

El mock-up de alta fidelidad aplica la jerarquía Inter, superficies blancas, cards con bordes suaves y CTAs contrastantes. El copy principal, “Controla tu flota antes de que una parada detenga tu operación”, se acompaña de “Solicitar una demostración” y “Conocer los módulos”. Las variantes de componentes contemplan hover, foco, deshabilitado y carga.

![Mockup-Desktop1440](assets/Mockup-Desktop1440.png)
![Mockup-Mobile390](assets/Mockup-Mobile390.png)

## 4.4. Web Applications UX/UI Design

El Dashboard y la Web App se diseñan a partir de los User Personas y User Stories. El administrador requiere visibilidad de activos y mantenimiento; el coordinador necesita conocer disponibilidad y asignar unidades sin perder trazabilidad.

### 4.4.1. Web Applications Wireframes

Los wireframes B/F especifican Dashboard con KPIs y actividad; listado de Activos con búsqueda, filtros y tabla; Detalle con historial; formulario Registrar Lectura; Mantenimientos con prioridad y programación; y Operaciones con drawer de asignación.

![Web-Application-Wireframe](assets/web_applications_wireframes.png)

### 4.4.2. Web Applications Wireflow Diagrams

El wireflow visualiza la conexión Dashboard → Activos → Detalle → Registrar lectura → confirmación, además de los recorridos de mantenimiento y asignación. Las conexiones previenen pantallas aisladas y documentan retorno, cancelación y éxito.

![Web-Application-Wireflow](assets/web_applications_wireflows.png)

### 4.4.3. Web Applications Mock-ups

Las interfaces H/F se implementan en Vue 3 y PrimeVue mediante Auto-layout y componentes reutilizables. La carga utiliza Skeleton; la ausencia de datos presenta un estado vacío con CTA; el éxito usa Toast y actualización local; el error es recuperable y conserva los campos ingresados.

![Web-Application-Mock-Ups](assets/webapplicationsmockups.png)

### 4.4.4. Web Applications User Flow Diagrams

Los diagramas representan tres procesos core: Registrar Lectura valida el valor antes de persistirlo y actualizar historial; Programar Mantenimiento crea una orden con activo, tipo, fecha y prioridad; Asignar Unidad filtra activos disponibles, solicita confirmación y actualiza la operación.

![Web-Application-UserFlowDiagrams](assets/web_applications_user_flows.png)

## 4.5. Web Applications Prototyping

El prototipo simula navegación, modales y drawers. Los triggers On Click y On Hover se vinculan con Smart Animate, Dissolve y overlays para demostrar continuidad, feedback de validación y cambios de estado antes de la implementación final.

![Web Application Prototype](assets/web-application-prototype.png)
**Video:** [TechnoLoad Web Application Prototype](https://upcedupe-my.sharepoint.com/...)

## 4.6. Domain-Driven Software Architecture

La arquitectura orientada al dominio separa el conocimiento de negocio mediante Event Storming y Bounded Contexts. Esta delimitación evita que la gestión de activos, mantenimiento, operaciones, identidad y perfiles compartan modelos ambiguos.

### 4.6.1. Design-Level Event Storming

El **Fleet Management Bounded Context** concentra inventario, estado y lecturas de activos. **Maintenance Management** gestiona programación, prioridades y órdenes. **Operations Management** controla asignaciones y horas operativas. **Identity & Access Management** resuelve cuentas, roles y autenticación; **Profiles Management** conserva organización y preferencias de usuario. Los comandos producen eventos, los agregados protegen reglas y los read models satisfacen las consultas de interfaz.

![Fleet Management Design-Level Event Storming](assets/design-level-event-storming-fleet-management.png)
![Maintenance Management Design-Level Event Storming](assets/design-level-event-storming-maintenance-management.png)
![Operations Management Design-Level Event Storming](assets/design-level-event-storming-operations-management.png)
![Identity and Access Management Design-Level Event Storming](assets/design-level-event-storming-identity-access-management.png)
![Profiles Management Design-Level Event Storming](assets/design-level-event-storming-profiles-management.png)

### 4.6.2. Software Architecture Context Diagram

El C4 Nivel 1 ubica a TechnoLoad como sistema central. El Administrador de Flota registra y controla mantenimiento; el Coordinador consulta disponibilidad y asigna unidades; las APIs externas entregan telemetría y notificaciones.

![TechnoLoad Software Architecture Context Diagram](assets/c4-context-diagram.png)

### 4.6.3. Software Architecture Container Diagram

El C4 Nivel 2 separa la SPA Vue 3/PrimeVue/Vite, el REST API Gateway, los servicios de dominio y PostgreSQL. Axios transporta JSON por HTTPS y el Gateway concentra autenticación, control de acceso y enrutamiento.

![TechnoLoad Software Architecture Container Diagram](assets/c4-container-diagram.png)

### 4.6.4. Software Architecture Components Diagrams

Cada contexto se descompone en cuatro capas: Interfaces presenta componentes Vue/PrimeVue; Application coordina stores y casos de uso; Domain contiene agregados, entidades y objetos de valor; Infrastructure adapta API, persistencia y assemblers. Las dependencias apuntan hacia Domain y Shared Kernel.

![API Application Component Diagram](assets/c4-api-application-component-diagram.png)
![Fleet Management Component Diagram](assets/c4-fleet-management-component-diagram.png)
![Maintenance Management Component Diagram](assets/c4-maintenance-management-component-diagram.png)
![Operations Management Component Diagram](assets/c4-operations-management-component-diagram.png)
![Identity and Access Management Component Diagram](assets/c4-identity-access-management-component-diagram.png)
![Profiles Management Component Diagram](assets/c4-profiles-management-component-diagram.png)

