# GRUPO-3

<p align="center">
  <img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/2c3d0613-f51e-47d7-bd82-439b78384731" />
</p>

<div align="center">

# UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS

### FACULTAD DE INGENIERÍA
### CARRERA DE INGENIERÍA DE SOFTWARE

<br>

# INFORME DE PROYECTO

## Nombre del proyecto
### TechnoLoad

<br>

**Curso:**  
Aplicaciones Web

**Sección:**  
[Tu Sección]

<br>

### Integrantes

| Integrante | Código |
|---|---|
| NICOLAS TANTALEAN GRANDA | U202410728 |
| WILMER SEBASTIAN GUTIERREZ LIZARBE | U202412044 |
| MATHIAS ALEJANDRO CASTILLO GUEVARA | U202410783 |
| EDGARD DANIEL DIAZ CARUZO | U202323911 |
| [Nombre completo 5] | [Código] |

<br>

**Docente:**  
Efrain Ricardo Bautista Ubillus

<br>

**Ciclo:**  
2026-2

<br>

**Lima, Perú**  
**2026**

</div>

---

# ÍNDICE

## Capítulo I: Introducción
- 1.1. Startup Profile
  - 1.1.1. Descripción de la Startup
  - 1.1.2. Perfiles de integrantes del equipo
- 1.2. Solution Profile
  - 1.2.1. Antecedentes y problemática
  - 1.2.2. Lean UX Process
    - 1.2.2.1. Lean UX Problem Statements
    - 1.2.2.2. Lean UX Assumptions
    - 1.2.2.3. Lean UX Hypothesis Statements
    - 1.2.2.4. Lean UX Canvas
- 1.3. Segmentos objetivo

## Capítulo II: Requirements Elicitation & Analysis
- 2.1. Competidores
  - 2.1.1. Análisis competitivo
  - 2.1.2. Estrategias y tácticas frente a competidores
- 2.2. Entrevistas
  - 2.2.1. Diseño de entrevistas
  - 2.2.2. Registro de entrevistas
  - 2.2.3. Análisis de entrevistas
- 2.3. Needfinding
  - 2.3.1. User Personas
  - 2.3.2. User Task Matrix
  - 2.3.3. User Journey Mapping
  - 2.3.4. Empathy Mapping
  - 2.3.5. Big Picture Event Storming
- 2.4. Ubiquitous Language

## Capítulo III: Requirements Specification
- 3.1. User Stories
- 3.2. Impact Mapping
- 3.3. Product Backlog

## Capítulo IV: Product Implementation, Validation & Deployment
- 5.1. Software Configuration Management
  - 5.1.1. Software Development Environment Configuration
  - 5.1.2. Source Code Management
  - 5.1.3. Source Code Style Guide & Conventions
  - 5.1.4. Software Deployment Configuration
- 5.2. Landing Page, Services & Applications Implementation
- 5.3. Validation Interviews
- 5.4. Video About-the-Product

# Capítulo I: Introducción

## 1.1. Startup Profile

### 1.1.1. Descripción de la Startup
Somos una compañía recién creada llamada **"TechnoLoad"** que tiene una misión en mente: **optimizar la gestión operativa y reducir los costos de mantenimiento e inoperatividad en empresas de alquiler de maquinaria pesada y transporte de carga.**

Por esta razón, nos reunimos y trabajamos con cooperación, eficiencia y responsabilidad para crear nuestra solución tecnológica **"TechnoLoad"**. Los integrantes que conforman este equipo son:

### 1.1.2. Perfiles de integrantes del equipo

|                                   Foto                                    | Descripción del Integrante |
|:-------------------------------------------------------------------------:| :--- |
|    <img src="./assets/wilmer.jpeg" width="150" alt="Wilmer Gutierrez">    | Mi nombre es Wilmer Sebastian Gutierrez Lizarbe con el código de estudiante u202412044, estoy cursando el quinto ciclo en la carrera de Ingeniería de Software. Tengo conocimientos que pueden aportar al proyecto, tales como: codificación en Python, JavaScript, C++, gestión de bases de datos relacionales y no relacionales como SQL Server, MongoDB y Firebase, así como el diseño de arquitectura web. Las habilidades que puedo aportar a mi equipo son responsabilidad, liderazgo técnico y compromiso para entregar un producto de software funcional y de alta calidad. |
|      <img src="./assets/Foto_Daniel.jpeg" width="150" alt="Daniel">       | Mi nombre es Edgard Daniel Diaz Caruzo con código de estudiante u202323911 estoy en la carrera de Ingeniería de Software y voy en mi 5to ciclo de la carrera, una de mis cualidades es la responsabilidad y la puntualidad. Mi objetivo es apoyar en cualquier cosa a mis compañeros. |
|      <img src="./assets/integrante3.jpg" width="150" alt="Nicolas">       | Mi nombre es NICOLAS TANTALEAN GRANDA con código de estudiante U202410728, soy estudiante de la carrera de Ingeniería de Software. Entre mis conocimientos se encuentran desarrollo web y algoritmos. Como miembro del equipo, aportaré dedicación y colaboración constante para lograr un proyecto sólido. |
|      <img src="./assets/Foto_Mathias.jpg" width="150" alt="Mathias">      | Mi nombre es MATHIAS ALEJANDRO CASTILLO GUEVARA con código de estudiante U202410783, soy estudiante de la carrera de Ingeniería de Software. Entre mis conocimientos se encuentran bases de datos y desarrollo de software. Como miembro del equipo, aportaré dedicación y colaboración constante. |
| <img src="./assets/integrante5.jpg" width="150" alt="Nombre Compañero 5"> | Mi nombre es [Nombre del Compañero 5] con código de estudiante [Código], soy estudiante de la carrera de Ingeniería de Software. Entre mis conocimientos se encuentran desarrollo frontend y documentación. |

## 1.2. Solution Profile

TechnoLoad es una completa plataforma web desarrollada por nuestra startup, diseñada para atender tanto a empresas de alquiler de maquinaria pesada como a empresas de transporte y logística de carga. Ofrece un modelo de suscripción SaaS que brinda a los administradores de flota y coordinadores logísticos acceso a un control centralizado de mantenimiento preventivo, seguimiento telemetrado de uso por horómetros/kilometraje y asignación optimizada de rutas. TechnoLoad tiene como objetivo revolucionar la gestión de flotas integrando tecnología con soluciones operativas personalizadas de manera fluida.

**Características Principales:**

* **Gestión de Mantenimiento Preventivo:** TechnoLoad utiliza algoritmos basados en horómetros y kilometraje para generar alertas y planes de mantenimiento preventivo adaptados a las especificaciones de cada máquina o vehículo, asegurando máxima disponibilidad operativa.
* **Asignación y Optimización de Rutas:** TechnoLoad conecta a los coordinadores logísticos con la flota disponible, permitiendo programar despachos de carga en tiempo real, optimizando consumos de combustible y reduciendo tiempos muertos.
* **Monitoreo Telemetrado de Flota:** TechnoLoad ofrece un dashboard interactivo donde los usuarios pueden visualizar el estado operativo (Disponible, En Tránsito, En Mantenimiento) de cada activo de la empresa.
* **Seguimiento de Rendimiento y Costos:** TechnoLoad permite realizar un seguimiento continuo del desempeño de la flota mediante informes detallados, monitoreando métricas clave como costos de mantenimiento, horas de uso y rentabilidad por unidad.

### 1.2.1. Antecedentes y problemática

#### Uso de la técnica The 5 W's y 2 H's

Presentación del modelo de las preguntas 5Ws y 2Hs con la que se analizaron los antecedentes y la problemática que abarca nuestro proyecto.

| LAS 5W y 2H | Pregunta | Descripción |
| :---: | :--- | :--- |
| **Who?** | ¿Quién es afectado? | Administradores de flota, coordinadores logísticos y gerentes de operaciones en empresas de alquiler de maquinaria pesada y transporte de carga por carretera. |
| **What?** | ¿Cuál es el problema? | Las elevadas pérdidas financieras y la baja rentabilidad causadas por paradas no programadas de maquinaria en obra y sobrecostos por ineficiencias logísticas. De acuerdo con estudios del sector transporte en Lima Metropolitana, existe una alta correlación entre la mala gestión de costos operativos y la reducción directa del margen de utilidad en empresas de transporte y servicios. |
| **When?** | ¿Cuándo sucede el problema? | El problema ocurre continuamente durante la ejecución de proyectos de construcción/minería y el despacho diario de carga, manifestándose en el momento exacto en que un equipo sufre una avería por falta de mantenimiento preventivo oportuno o cuando una unidad de transporte permanece inactiva por falta de coordinación. |
| **Where?** | ¿Dónde surge el problema? | El problema surge en las áreas de operaciones y logística de las empresas ubicadas en hubs comerciales e industriales del Perú (como Lima, Callao, Arequipa, entre otros), afectando tanto los centros de control como los puntos de trabajo en obra y rutas interprovinciales. |
| **Why?** | ¿Cuál es la causa del problema? | La falta de herramientas digitales centralizadas que permitan llevar un control riguroso e inteligible de los horómetros/kilometraje de la flota, así como la desarticulación entre la asignación de pedidos y la disponibilidad real de las unidades. |
| **How?** | ¿Qué llevó a la persona a esta situación? | Los métodos tradicionales basados en hojas de cálculo manuales o registros en papel impiden la visibilidad en tiempo real de los activos. TechnoLoad facilitará el control centralizado en línea a través de un dashboard inteligente y alertas automatizadas que permitirán a los usuarios coordinar mantenimientos y despachos eficientemente mediante suscripción mensual. |
| **How Much?** | ¿Cuál es la cantidad, duración o intensidad del evento? | Las paradas no planificadas de maquinaria provocan sobrecostos de mantenimiento correctivo de hasta un 32% más elevados comparados con esquemas preventivos, pudiendo representar hasta un 94% de tiempo fuera de servicio innecesario según estudios locales de confiabilidad. |

### 1.2.2. Lean UX Process

#### 1.2.2.1. Lean UX Problem Statements

"En un contexto de creciente exigencia por la eficiencia operativa y reducción de costos en los sectores de construcción, minería y transporte, se hace evidente la necesidad de una aplicación web de gestión de flotas que facilite la supervisión en tiempo real, el control preventivo de mantenimientos y la asignación optimizada de rutas. Dicha aplicación web debe proporcionar una experiencia clara y centralizada para cada empresa, adaptándose a la diversidad de activos de su flota."

Como grupo, nos comprometeremos a resolver este desafío mediante una colaboración estrecha con los administradores de flota y coordinadores logísticos. Nos enfocaremos en comprender profundamente las necesidades y expectativas de nuestros usuarios, utilizando esta información para diseñar y desarrollar una solución innovadora que satisfaga sus requerimientos de manera integral.

#### 1.2.2.2. Lean UX Assumptions

**Business Assumptions**

* **Pienso que mis clientes necesitan** un control automático e integral de sus flotas para evitar paradas no programadas y reducir costos de mantenimiento.
* **Estas demandas pueden ser satisfechas mediante** una plataforma en línea SaaS que centralice la información de horómetros, programe mantenimientos preventivos y optimice la asignación de rutas de transporte.
* **Los primeros clientes serán** aquellos gerentes de operaciones y administradores de flota que ya buscan activamente digitalizar sus procesos para mejorar la rentabilidad de sus equipos.
* **La principal necesidad que los clientes tienen de mi servicio es** contar con alertas oportunas de mantenimiento y visibilidad completa del estado operativo de sus unidades en tiempo real.
* **Obtendré la mayor parte de mis clientes mediante** estrategias de marketing B2B dirigidas a empresas del sector construcción, minería y logística, así como alianzas comerciales con gremios de transporte.
* **Generaré ingresos mediante** un modelo de suscripción mensual o anual ajustado según la cantidad de unidades o máquinas registradas en la plataforma.
* **El principal problema que puede afectar a mi producto es** la resistencia al cambio o la falta de hábito del personal operativo para ingresar lecturas de uso de manera constante.
* **Abordaremos esta situación mediante** una interfaz sumamente intuitiva, responsive y la integración progresiva de automatización para simplificar el registro de datos.

**User Assumptions**

* Los usuarios están buscando una solución integral que no solo les permita controlar mantenimientos, sino también gestionar despachos y rutas desde un mismo lugar.
* Los usuarios valoran altamente la conveniencia y accesibilidad de una plataforma en línea, prefiriendo la flexibilidad de acceder a los datos de la flota desde cualquier dispositivo con conexión a internet.
* Los usuarios están dispuestos a invertir en una plataforma SaaS que les proporcione información en tiempo real para tomar decisiones rápidas que eviten pérdidas económicas en obra.
* Los usuarios esperan que las alertas de mantenimiento sean altamente configurables según los límites de horómetros o kilometraje específicos de cada tipo de máquina o vehículo.
* Los usuarios valoran la seguridad y confiabilidad en una plataforma de gestión, buscando garantías de que la información operativa y financiera de sus flotas se trate de manera segura y confidencial.

#### 1.2.2.3. Lean UX Hypothesis Statements

* "Si ofrecemos a los usuarios un acceso conveniente y flexible a la gestión de flotas en línea, permitiendo el control de mantenimientos preventivos y asignación de rutas, entonces aumentará la probabilidad de que las empresas se comprometan a largo plazo con la plataforma, lo que resultará en una mayor retención de clientes."
* "Si proporcionamos un sistema de alertas de mantenimiento preventivo configurables por horómetro y kilometraje, entonces aumentará la satisfacción del usuario y se reducirán las paradas no programadas en obra, lo que contribuirá al crecimiento del negocio a través de recomendaciones positivas en el sector."
* "Si garantizamos la seguridad y confidencialidad de los datos operativos y de telemetría de las flotas de nuestros clientes, entonces aumentará la confianza y la lealtad de los usuarios hacia la plataforma, lo que resultará en una menor tasa de cancelación de suscripciones."
* "Si desarrollamos una interfaz de usuario intuitiva y fácil de usar en TechnoLoad, que permita a los administradores visualizar el estado de sus equipos en un dashboard claro, entonces aumentará la frecuencia de uso y la precisión en los registros de datos, lo que conducirá a una mejor adopción del sistema y al crecimiento del negocio."

#### 1.2.2.4. Lean UX Canvas

| Business problem | Solution ideas | Business outcomes |
| :--- | :--- | :--- |
| Muchas empresas de alquiler de maquinaria pesada y transporte de carga están experimentando pérdidas económicas y baja rentabilidad debido a paradas no programadas por falta de mantenimiento preventivo y sobrecostos por ineficiencias en la asignación de rutas logísticas. | -Aplicación web SaaS para gestión centralizada de flotas.<br>-Módulo de alertas automáticas de mantenimiento preventivo según lecturas de horómetros y kilometraje.<br>-Plataforma de asignación y seguimiento de rutas de carga en tiempo real.<br>-Dashboard interactivo con reportes de costos operativos y rentabilidad por unidad. | -Reducción en los tiempos de inoperatividad no planificada de la flota.<br>-Disminución en los costos de mantenimiento correctivo de emergencia.<br>-Aumento en la eficiencia de despachos y tiempos de entrega de carga.<br>-Mayor retención de clientes y adopción continua de la plataforma a largo plazo. |
| **Users and customers** | **User benefits** | **Hypotheses** |
| -Administradores de flota de maquinaria pesada que buscan evitar averías graves en obra.<br>-Coordinadores logísticos de transporte de carga que necesitan optimizar rutas y uso de unidades.<br>-Gerentes de operaciones de empresas de alquiler y transporte que requieren reducir sobrecostos operativos. | -Los usuarios buscan un control total y en tiempo real del estado operativo de sus activos.<br>-Quieren prevenir fallas mecánicas antes de que ocurran mediante alertas oportunas.<br>-Desean una experiencia de gestión más rápida, centralizada y conveniente desde cualquier dispositivo. | -"We believe that a 20% reduction in unplanned fleet downtime will be achieved if heavy machinery fleet managers attain automated preventive maintenance alerts with our horometer tracking module."<br><br>-"We believe that a 15% reduction in operational routing costs will be achieved if logistics coordinators attain real-time unit availability and dispatch tracking with our route assignment module." |
| **What's the most important thing we need to learn first?** | | **What's the least amount of work we need to do to learn the next most important thing?** |
| -Riskiest Assumption for Hypothesis 1: Fleet managers will consistently log horometer and mileage readings manually before automated IoT sensors are integrated. | | -Experiment 1: Deploy a functional web prototype with manual horometer logging to a test group of 3 fleet managers and track daily data entry frequency and user engagement over 2 weeks. |
| -Riskiest Assumption for Hypothesis 2: Logistics coordinators will actively use an online platform to assign routes instead of traditional spreadsheets or phone calls. | | -Experiment 2: Launch an interactive prototype for route assignment with 2 transport companies and measure order processing time and system adoption rate compared to their traditional methods. |

### 1.3. Segmentos objetivo

TechnoLoad está dirigido principalmente a empresas que necesitan mejorar la gestión de sus activos, reducir costos operativos y evitar periodos de inactividad ocasionados por fallas o una deficiente planificación del mantenimiento.

Los segmentos objetivo principales son los siguientes:

| Segmento objetivo | Descripción | Principales necesidades | Cómo ayuda TechnoLoad |
|---|---|---|---|
| **Empresas de alquiler de maquinaria pesada** | Empresas dedicadas al alquiler y gestión de maquinaria como excavadoras, cargadores frontales, retroexcavadoras, grúas y otros equipos utilizados en sectores como construcción y minería. | Controlar las horas de funcionamiento de cada máquina, programar mantenimientos preventivos, reducir fallas inesperadas y aumentar la disponibilidad de los equipos. | TechnoLoad permite registrar la maquinaria, controlar los horómetros, gestionar el historial de mantenimiento y generar alertas sobre próximos servicios. |
| **Empresas de transporte y logística de carga** | Empresas que realizan operaciones de transporte de mercancías mediante camiones y otros vehículos de carga. | Controlar el kilometraje, conocer la disponibilidad de los vehículos, reducir tiempos muertos y mejorar la organización de las operaciones logísticas. | TechnoLoad permite visualizar el estado de los vehículos, controlar el kilometraje, gestionar mantenimientos y conocer la disponibilidad de cada unidad. |

#### Principales usuarios de la plataforma

| Segmento objetivo | Usuario | Descripción | Necesidades principales |
|---|---|---|---|
| **Empresas de alquiler de maquinaria pesada** | **Administrador de maquinaria o flota** | Responsable de supervisar las máquinas y equipos pertenecientes a la empresa. | Conocer el estado de cada máquina, controlar las horas de uso, revisar mantenimientos y evitar paradas no programadas. |
| **Empresas de alquiler de maquinaria pesada** | **Gerente de operaciones** | Responsable de supervisar el rendimiento y disponibilidad general de la maquinaria. | Analizar costos, disponibilidad, historial de mantenimiento y rendimiento de los equipos para tomar decisiones. |
| **Empresas de transporte y logística de carga** | **Coordinador logístico** | Responsable de organizar los servicios de transporte y coordinar la asignación de vehículos. | Conocer qué unidades están disponibles, en operación o en mantenimiento para organizar los despachos. |
| **Empresas de transporte y logística de carga** | **Administrador de flota** | Responsable de supervisar los vehículos pertenecientes a la empresa. | Controlar el kilometraje, el estado operativo y los mantenimientos de cada vehículo. |

### 2.1 Competidores

### 2.1.1. Competitive Analysis Landscape

| *Competitive Analysis Landscape* | *Descripción* |
|---|---|
| *¿Por qué llevar a cabo este análisis?* | Llevar a cabo este análisis nos brindará información crítica que nos permitirá tomar decisiones más informadas y estratégicas para el desarrollo, comercialización y crecimiento de nuestra aplicación. |

| *Aspecto* | *TechnoLoad* | *Samsara* | *Geotab* | *Fracttal* |
|---|---|---|---|---|
| *Logo* | Logo de TechnoLoad | Logo de Samsara | Logo de Geotab | Logo de Fracttal |
| *Perfil - Overview* | Plataforma web SaaS para gestionar maquinaria pesada y vehículos de carga. | Plataforma de operaciones conectadas para gestionar flotas y activos. | Plataforma de gestión de flotas y telemática. | Plataforma especializada en gestión de mantenimiento y activos. |
| *Ventaja competitiva* | Integra mantenimiento, control de activos y gestión operativa en una sola plataforma. | Integración de telemetría y monitoreo de operaciones. | Análisis de datos y gestión avanzada de flotas. | Especialización en mantenimiento de activos. |
| *¿Qué valor ofrece a los clientes?* | Reduce tiempos de inactividad y mejora el control de maquinaria y vehículos. | Mejora la seguridad, visibilidad y eficiencia operativa. | Facilita decisiones mediante datos de los vehículos. | Optimiza los procesos de mantenimiento. |
| *Perfil de Marketing - Mercado objetivo* | Empresas de alquiler de maquinaria pesada y empresas de transporte y logística de carga en Perú. | Empresas con flotas que requieren monitoreo avanzado. | Empresas con flotas que necesitan telemática y análisis de datos. | Empresas que necesitan gestionar el mantenimiento de sus activos. |
| *Perfil de Marketing - Estrategias de marketing* | Marketing digital B2B, demostraciones, contacto directo y alianzas estratégicas. | Marketing B2B, demostraciones y ventas empresariales. | Marketing B2B, alianzas comerciales y demostraciones. | Marketing digital, contenido especializado y demostraciones. |
| *Perfil de Producto - Productos & Servicios* | Mantenimiento preventivo, horómetros, kilometraje, dashboard, alertas y disponibilidad. | Gestión de flotas, telemetría, seguridad y monitoreo de activos. | Gestión de flotas, telemática, seguimiento y análisis de datos. | Mantenimiento preventivo y correctivo, activos y órdenes de trabajo. |
| *Perfil de Producto - Precios & Costos* | Suscripción SaaS mensual o anual según cantidad de activos. | Según soluciones y dispositivos contratados. | Según soluciones de telemática y servicios contratados. | Suscripción según las necesidades de la empresa. |
| *Perfil de Producto - Canales de distribución (Web y/o Móvil)* | Plataforma web responsive para computadoras, tablets y celulares. | Plataforma web, aplicación móvil y dispositivos de telemetría. | Plataforma web, aplicaciones móviles y dispositivos telemáticos. | Plataforma web. |
| *SWOT - Fortalezas* | Plataforma integral, sencilla, escalable y enfocada en el mercado peruano. | Plataforma consolidada y amplio monitoreo. | Experiencia, análisis de datos y presencia internacional. | Especialización en mantenimiento. |
| *SWOT - Debilidades* | Startup nueva y con menor reconocimiento frente a competidores internacionales. | Dependencia de hardware y mayores costos. | Puede presentar mayor complejidad para algunos usuarios. | Menor enfoque en logística y rutas. |
| *SWOT - Oportunidades* | Digitalización de empresas, crecimiento de PYMES, reducción de costos e IoT. | Crecimiento de vehículos conectados e IoT. | Crecimiento de la telemática. | Mayor digitalización del mantenimiento. |
| *SWOT - Amenazas* | Competidores internacionales, resistencia al cambio y problemas de conectividad. | Competencia de plataformas de telemática. | Competidores económicos y nuevas tecnologías. | Plataformas integrales y soluciones propias. | |

---
#### 2.1.2. Estrategias y tácticas frente a competidores
Para afrontar las fortalezas y debilidades identificadas en nuestros competidores, así como aprovechar las oportunidades y responder a las amenazas presentes en el mercado, TechnoLoad plantea las siguientes estrategias y tácticas preliminares:

*1. Diferenciación mediante una plataforma integral:*

*Estrategia:* Aprovechar la oportunidad de integrar diferentes procesos de gestión en una sola plataforma para diferenciarnos de soluciones que se encuentran más especializadas en un solo aspecto.

*Táctica:* Integrar en TechnoLoad la gestión del mantenimiento preventivo, horómetro, kilometraje, disponibilidad de activos y seguimiento de las operaciones, permitiendo que las empresas puedan centralizar su información.

*2. Competir mediante una solución accesible para empresas peruanas:*

*Estrategia:* Aprovechar el crecimiento de la digitalización de las pequeñas y medianas empresas para ofrecer una alternativa frente a competidores internacionales con soluciones más complejas.

*Táctica:* Desarrollar un modelo SaaS con planes escalables según la cantidad de maquinaria y vehículos registrados, buscando que empresas de diferentes tamaños puedan acceder a la plataforma.

*3. Aprovechar la debilidad de la complejidad de algunas soluciones existentes:*

*Estrategia:* Diferenciarnos mediante una experiencia de usuario sencilla e intuitiva.

*Táctica:* Diseñar una interfaz fácil de utilizar, con información organizada, dashboards y alertas claras que permitan a los administradores y coordinadores consultar rápidamente el estado de sus activos.

*4. Responder a la fortaleza tecnológica de los competidores:*

*Estrategia:* Incorporar progresivamente nuevas tecnologías que permitan mejorar las capacidades de TechnoLoad y mantener una propuesta competitiva.

*Táctica:* Considerar futuras integraciones con tecnologías IoT y sistemas de telemetría para obtener información más precisa sobre el uso, ubicación y estado de los vehículos y maquinaria.

*5. Aprovechar la necesidad de reducir costos operativos:*

*Estrategia:* Posicionar TechnoLoad como una herramienta que ayude a reducir costos ocasionados por mantenimientos no planificados y tiempos de inactividad.

*Táctica:* Implementar alertas de mantenimiento basadas en el horómetro y kilometraje, permitiendo programar mantenimientos preventivos antes de que ocurran fallas que puedan afectar las operaciones.

*6. Responder a la amenaza de competidores consolidados:*

*Estrategia:* Diferenciar TechnoLoad mediante una atención más cercana y una adaptación a las necesidades específicas de los clientes.

*Táctica:* Ofrecer demostraciones de la plataforma, soporte personalizado y recopilación continua de comentarios de los usuarios para mejorar las funcionalidades según las necesidades del mercado peruano.

*7. Enfrentar la resistencia al cambio tecnológico:*

*Estrategia:* Facilitar la adopción de la plataforma por parte de empresas que todavía utilizan métodos manuales para gestionar sus activos.

*Táctica:* Mostrar mediante demostraciones y casos prácticos cómo TechnoLoad puede centralizar información, reducir tareas manuales y facilitar el control de maquinaria y vehículos.

*8. Aprovechar las oportunidades de crecimiento del mercado:*

*Estrategia:* Expandir progresivamente TechnoLoad hacia nuevas empresas y sectores relacionados con la gestión de activos y transporte.

*Táctica:* Iniciar con empresas de alquiler de maquinaria pesada y empresas de transporte y logística de carga, y posteriormente incorporar nuevas funcionalidades y segmentos de acuerdo con las necesidades identificadas en el mercado.

### 2.2. Entrevistas
### 2.2.1 Diseño de entrevistas

Para la recolección de requerimientos se diseñaron guías de entrevista breves y estructuradas de 8 preguntas clave por segmento objetivo. Estas combinan datos demográficos/tecnológicos para el perfilamiento de arquetipos (User Personas) con preguntas profundas sobre la problemática operativa y de negocio.

#### **Segmento 1: Propietarios y administradores de empresas de alquiler de maquinaria pesada**

1. ¿Cuál es su nombre, edad, cargo, dispositivos y aplicaciones que utiliza a diario para administrar su negocio? *(Complementaria)*
2. ¿Qué marcas de maquinaria prefiere en su flota y qué fuentes o indicadores consulta antes de tomar decisiones de inversión u operatividad? *(Complementaria)*
3. ¿Cómo gestiona actualmente el inventario, la disponibilidad en obra y la programación de mantenimientos preventivos de su maquinaria pesada? *(Principal)*
4. ¿Qué sucede cuando un equipo sufre una avería inesperada en plena obra y cómo gestiona los costos por inoperatividad y las penalizaciones contractuales? *(Principal)*
5. ¿Cómo realiza el seguimiento y la conciliación de horómetros de uso trabajados para el cobro del servicio de alquiler a sus clientes? *(Principal)*
6. ¿Cuáles son sus principales objetivos o prioridades dentro de su trabajo diario al mando de la flota? *(Complementaria)*
7. ¿Qué situaciones relacionadas con el control de horómetros, averías o gestión de clientes le generan mayor frustración? *(Complementaria)*
8. ¿Qué aplicaciones, páginas web o herramientas digitales utiliza con mayor frecuencia para trabajar y comunicarse con el personal de campo? *(Complementaria)*

---

#### **Segmento 2: Coordinadores logísticos y responsables de flotas de transporte de carga**

1. ¿Cuál es su nombre, edad, cargo, nivel educativo y qué dispositivos o navegadores utiliza habitualmente en su centro de control? *(Complementaria)*
2. ¿A través de qué canales o herramientas del sector gestiona la programación de fletes y la comunicación con los conductores? *(Complementaria)*
3. ¿Cómo monitorea en tiempo real la disponibilidad de sus camiones y la eficiencia en la asignación de rutas de transporte de carga? *(Principal)*
4. ¿Ha experimentado tiempos muertos o retrasos en las entregas por paradas no planificadas o fallas mecánicas en ruta? ¿Cómo afectó esto a sus costos operativos? *(Principal)*
5. ¿De qué manera valida los límites de kilometraje/mantenimiento de sus unidades y qué exige en una plataforma digital para optimizar el despacho de cargas? *(Principal)*
6. ¿Cuáles son sus principales objetivos y métricas de éxito (KPIs) dentro de su trabajo diario de coordinación logística? *(Complementaria)*
7. ¿Qué situaciones relacionadas con la desorganización de rutas, retrasos o falta de visibilidad de las unidades le generan mayor frustración? *(Complementaria)*
8. ¿Qué aplicaciones, páginas web o herramientas de software utiliza con mayor frecuencia para el seguimiento y reporte de sus operaciones? *(Complementaria)*

---

### 2.2.2 Registro de entrevistas

### 2.2.3. Análisis de entrevistas

#### **Análisis preliminar del Segmento 1: Empresas de Alquiler de Maquinaria Pesada**
El Segmento 1 está compuesto por propietarios, administradores de flota y jefes de mantenimiento de empresas de alquiler de maquinaria pesada (excavadoras, rodillos, volquetes, etc.), quienes tienen la responsabilidad de coordinar la disponibilidad de equipos en obra, supervisar el uso de horómetros y programar servicios preventivos.

El proceso actual suele depender de herramientas independientes como llamadas telefónicas, hojas de asistencia en papel y registros manuales en hojas de cálculo. Esto provoca que la información del estado real del motor y las horas trabajadas se encuentre dispersa y desactualizada respecto a lo que sucede en el frente de trabajo.

Los principales problemas identificados son las paradas no programadas por falta de mantenimiento preventivo oportuno, la imposibilidad de verificar el horómetro real de la maquinaria a tiempo y los sobrecostos por mantenimiento correctivo de emergencia. Asimismo, existe un alto riesgo de penalizaciones contractuales cuando un equipo falla en plena ejecución del proyecto.

A partir de estas necesidades, el segmento requiere principalmente una solución que permita centralizar la telemetría y el control de mantenimiento de la flota. Las funcionalidades de mayor valor son las alertas automáticas configurables por horómetro, el dashboard de estado operativo en tiempo real (Disponible, En Obra, En Mantenimiento) y el reporte consolidado de gastos operativos.

* **Principales necesidades detectadas:** Control automático de horómetros, programación preventiva de mantenimientos, visibilidad del estado de la maquinaria en obra, centralización de datos y reportes de rentabilidad.
* **Pain points principales:** Averías mecánicas inesperadas, registros manuales en papel propensos a errores, sobrecostos en repuestos por mantenimiento correctivo y retrasos en la toma de decisiones por información desfasada.
* **Oportunidad para TechnoLoad:** Sustituir los registros manuales por un dashboard centralizado que automatice la emisión de alertas preventivas según el desgaste real de los equipos, minimizando el tiempo de inoperatividad en obra.

---

#### **Análisis preliminar del Segmento 2: Empresas de Transporte y Logística**
El Segmento 2 comprende a coordinadores logísticos, administradores de transporte y jefes de despacho encargados de gestionar flotas de transporte de carga pesada por carretera, con la responsabilidad de asignar rutas, coordinar conductores y controlar el kilometraje/mantenimiento de las unidades.

La investigación evidencia que la coordinación actual se realiza predominantemente vía WhatsApp y llamadas telefónicas, generando tiempos muertos de hasta 3 horas por unidad mientras se valida la disponibilidad de un camión para un nuevo flete o servicio.

Asimismo, la falta de visibilidad en tiempo real de la ruta y del kilometraje acumulado dificulta la detección de desgaste en neumáticos o consumo excesivo de combustible, impidiendo una planificación eficiente de las rotaciones de mantenimiento y la optimización de los costos operativos por flete.

* **Principales necesidades detectadas:** Asignación rápida de unidades y rutas, monitoreo de disponibilidad en tiempo real, seguimiento de kilometraje para mantenimientos de flota y optimización de tiempos de entrega.
* **Pain points principales:** Tiempos muertos innecesarios en la asignación de fletes, falta de visibilidad centralizada del estado de las unidades en ruta y desorganización en la programación de mantenimiento de camiones.
* **Oportunidad para TechnoLoad:** Integrar un módulo interactivo de asignación de rutas y control de kilometraje que permita a los coordinadores logísticos reducir tiempos de espera, optimizar rutas de transporte y prevenir paradas de unidades en carretera.

---

## 2.3. Needfinding

En esta sección se presentan los principales artefactos obtenidos a partir del análisis de la información recolectada durante las entrevistas y el estudio de los segmentos objetivo de **TechnoLoad**. El proceso de Needfinding permite identificar las necesidades, comportamientos, objetivos y dificultades de los usuarios, sirviendo como base para la elaboración de los User Personas, User Task Matrix, User Journey Maps y Empathy Maps.

A partir de las características objetivas y subjetivas identificadas en los dos segmentos clave (Empresas de alquiler de maquinaria pesada y Empresas de transporte y logística), se construyeron los artefactos correspondientes a cada arquetipo utilizando la herramienta UXPressia, asegurando una representación precisa del flujo de trabajo actual (*As-Is*) y del valor proyectado con la implementación de **TechnoLoad**.
#### 2.3.1. User Personas
#### 2.3.2. User Task Matrix
#### 2.3.3. User Journey Mapping
#### 2.3.4. Empathy Mapping
#### 2.3.5. Big Picture Event Storming
### 2.4. Ubiquitous Language
### 3.1. User Stories
### 3.2. Impact Mapping
### 3.3. Product Backlog
### 5.1. Software Configuration Management
#### 5.1.1. Software Development Environment Configuration
#### 5.1.2. Source Code Management
#### 5.1.3. Source Code Style Guide & Conventions
#### 5.1.4. Software Deployment Configuration
### 5.2. Landing Page, Services & Applications Implementation
### 5.3. Validation Interviews
### 5.4. Video About-the-Product