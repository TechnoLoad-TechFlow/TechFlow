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

### 1.2.1. Objetivos, justificación y alcance

**Objetivo general.** Desarrollar una plataforma SaaS que centralice la gestión de activos, lecturas de uso, mantenimiento preventivo y disponibilidad operativa para organizaciones de maquinaria pesada y transporte de carga.

**Objetivos específicos.** La solución debe permitir registrar activos y sus estados, capturar horómetro o kilometraje con trazabilidad, programar y controlar órdenes de mantenimiento, consultar alertas y asignar únicamente unidades disponibles a una operación.

**Justificación.** La información fragmentada en hojas de cálculo, llamadas y mensajes produce mantenimiento reactivo, decisiones tardías y períodos de inoperatividad costosos. TechnoLoad convierte registros dispersos en información operativa auditable, oportuna y accesible desde una interfaz web.

**Alcance.** El MVP comprende gestión de activos, lecturas, órdenes de mantenimiento, alertas, consulta de disponibilidad y asignación de unidades. Quedan fuera del alcance inicial la telemetría en tiempo real, la optimización automática de rutas, la facturación y la integración productiva con proveedores IoT; estas capacidades se consideran extensiones futuras.

### 1.2.2. Antecedentes y problemática

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

# Capítulo II: Requirements Elicitation & Analysis

Este capítulo documenta la obtención, análisis y validación de necesidades de los usuarios. La evidencia proviene del análisis competitivo, entrevistas y técnicas de needfinding; cada hallazgo se traduce posteriormente en requisitos verificables.

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
n esta sección se presentan las entrevistas realizadas a representantes de los segmentos objetivo de MaquiControl. Cada entrevista permite recopilar información sobre sus experiencias, necesidades, problemas y hábitos relacionados con la gestión y alquiler de maquinaria. Los resultados obtenidos servirán como base para el análisis de entrevistas y la construcción de los artefactos de Needfinding.

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
# Capítulo III: Requirements Specification

Este capítulo formaliza los hallazgos del análisis en historias de usuario, criterios de aceptación, relaciones de impacto y backlog priorizado. Los requisitos funcionales cubren activos, lecturas, mantenimiento, alertas, disponibilidad y asignación; los no funcionales establecen seguridad, rendimiento, accesibilidad, internacionalización, trazabilidad y mantenibilidad.

### 3.1. User Stories

A partir del análisis de las entrevistas y de los artefactos de Needfinding, se identificaron las principales necesidades de los usuarios de TechnoLoad. Estas necesidades fueron transformadas en historias de usuario y organizadas según las épicas funcionales del producto.

Las historias de usuario siguen la estructura: **Como [tipo de usuario], deseo [funcionalidad] para [beneficio esperado]**.

| Orden | Epic | User Story ID | Título | Descripción | Story Points |
|---:|---|---|---|---|---:|
| 1 | EP-01 Gestión de maquinaria y disponibilidad | US-001 | Registrar maquinaria | Como administrador de flota, deseo registrar una maquinaria con sus datos técnicos para mantener actualizada la información de mis activos. | 3 |
| 2 | EP-01 Gestión de maquinaria y disponibilidad | US-002 | Consultar disponibilidad | Como administrador de flota, deseo consultar la disponibilidad de una maquinaria para conocer si está disponible, en obra o en mantenimiento antes de asignarla. | 2 |
| 3 | EP-01 Gestión de maquinaria y disponibilidad | US-003 | Gestionar mantenimiento | Como administrador de flota, deseo gestionar el mantenimiento de una maquinaria para mantenerla en condiciones operativas. | 3 |
| 4 | EP-01 Gestión de maquinaria y disponibilidad | US-016 | Editar datos | Como administrador de flota, deseo editar los datos de una maquinaria para mantener actualizada su información. | 2 |
| 5 | EP-01 Gestión de maquinaria y disponibilidad | US-017 | Dar de baja | Como administrador de flota, deseo dar de baja una maquinaria para evitar que aparezca como disponible cuando ya no forma parte de la flota. | 2 |
| 6 | EP-02 Gestión de reservas | US-004 | Crear reserva | Como cliente, deseo crear una reserva de maquinaria o vehículo para asegurar su disponibilidad durante el periodo requerido. | 3 |
| 7 | EP-02 Gestión de reservas | US-005 | Evitar reservas duplicadas | Como administrador de flota, deseo evitar reservas duplicadas para impedir conflictos de disponibilidad. | 3 |
| 8 | EP-02 Gestión de reservas | US-006 | Cancelar reserva | Como usuario, deseo cancelar una reserva para liberar el activo cuando ya no sea necesario. | 2 |
| 9 | EP-02 Gestión de reservas | US-018 | Modificar fechas | Como usuario, deseo modificar las fechas de una reserva para adaptar la contratación a cambios en mi proyecto. | 2 |
| 10 | EP-02 Gestión de reservas | US-019 | Aprobar/rechazar | Como administrador, deseo aprobar o rechazar solicitudes de reserva para controlar la asignación de los activos. | 3 |
| 11 | EP-03 Consulta y contratación | US-007 | Catálogo | Como cliente, deseo consultar un catálogo de maquinaria y vehículos para conocer las opciones disponibles. | 1 |
| 12 | EP-03 Consulta y contratación | US-008 | Tarifas | Como cliente, deseo consultar las tarifas de alquiler para conocer los costos antes de solicitar una reserva. | 1 |
| 13 | EP-03 Consulta y contratación | US-009 | Reservas por obra | Como cliente, deseo gestionar las reservas asociadas a una obra para organizar los recursos necesarios para cada proyecto. | 2 |
| 14 | EP-03 Consulta y contratación | US-020 | Filtrar por categoría | Como cliente, deseo filtrar las máquinas por categoría para encontrar rápidamente el tipo de equipo que necesito. | 2 |
| 15 | EP-03 Consulta y contratación | US-021 | Buscar por ubicación | Como cliente, deseo buscar maquinaria por ubicación para encontrar activos disponibles cercanos a mi proyecto. | 2 |
| 16 | EP-04 Horas y facturación | US-010 | Registrar horas | Como operador, deseo registrar las horas de uso o kilometraje de una unidad para mantener actualizado su nivel de utilización. | 3 |
| 17 | EP-04 Horas y facturación | US-011 | Validar horas | Como administrador, deseo validar las horas registradas para asegurar que la información utilizada para la facturación sea correcta. | 3 |
| 18 | EP-04 Horas y facturación | US-012 | Resumen de facturación | Como administrador, deseo consultar un resumen de facturación para conocer los ingresos generados por los activos. | 2 |
| 19 | EP-04 Horas y facturación | US-022 | Comprobante | Como administrador, deseo generar un comprobante de pago por el servicio realizado para formalizar la operación. | 3 |
| 20 | EP-04 Horas y facturación | US-023 | Penalización por mora | Como administrador, deseo registrar o calcular penalizaciones por mora para controlar los pagos pendientes de los clientes. | 2 |
| 21 | EP-05 Landing Page | US-013 | Propuesta de valor | Como visitante, deseo conocer el valor que ofrece TechnoLoad para entender cómo puede solucionar los problemas de gestión de mi empresa. | 1 |
| 22 | EP-05 Landing Page | US-014 | Segmentos | Como visitante, deseo conocer los segmentos a los que está dirigida la plataforma para identificar si TechnoLoad se adapta a mi empresa. | 1 |
| 23 | EP-05 Landing Page | US-015 | Contacto/demo | Como visitante, deseo solicitar una demostración o establecer contacto para conocer más sobre la plataforma. | 2 |
| 24 | EP-05 Landing Page | US-024 | ROI Calculator | Como visitante, deseo utilizar una calculadora de ROI para estimar los posibles beneficios económicos de utilizar TechnoLoad. | 3 |
| 25 | EP-05 Landing Page | US-025 | Sales Chat | Como visitante, deseo utilizar un chat comercial para resolver dudas sobre la plataforma y sus servicios. | 2 |
| 26 | EP-06 Acceso | US-026 | Registrar usuario | Como nuevo usuario, deseo registrarme en la plataforma para crear una cuenta y utilizar TechnoLoad. | 2 |
| 27 | EP-06 Acceso | US-027 | Iniciar sesión | Como usuario registrado, deseo iniciar sesión para acceder de forma segura a las funcionalidades de la plataforma. | 2 |
| 28 | EP-06 Acceso | US-028 | Recuperar contraseña | Como usuario, deseo recuperar mi contraseña para volver a acceder a mi cuenta cuando la haya olvidado. | 2 |
| 29 | EP-06 Acceso | US-029 | Gestionar roles | Como administrador, deseo asignar roles de propietario, contratista u operador para controlar el acceso a las funcionalidades. | 3 |
| 30 | EP-06 Acceso | US-030 | Gestionar perfil | Como usuario, deseo gestionar mi perfil para mantener actualizada mi información personal y empresarial. | 2 |
| 31 | EP-07 Mantenimiento | US-031 | Alertas preventivas | Como administrador de flota, deseo recibir alertas de mantenimiento preventivo basadas en las horas de uso o kilometraje para anticiparme a posibles fallas. | 3 |
| 32 | EP-07 Mantenimiento | US-032 | Orden de reparación | Como responsable de mantenimiento, deseo registrar órdenes de reparación para llevar un control de las intervenciones realizadas. | 3 |
| 33 | EP-07 Mantenimiento | US-033 | Historial de mantenimiento | Como administrador, deseo consultar el historial de mantenimiento para conocer las intervenciones realizadas sobre cada activo. | 2 |
| 34 | EP-07 Mantenimiento | US-034 | Reportar falla | Como operador, deseo reportar una falla para informar rápidamente al responsable de mantenimiento sobre un problema detectado. | 2 |
| 35 | EP-08 Operaciones en campo | US-035 | Delivery check-in | Como operador, deseo registrar el check-in de entrega de una unidad incluyendo horómetro y fotografías para dejar evidencia del estado inicial del activo. | 3 |
| 36 | EP-08 Operaciones en campo | US-036 | Return check-out | Como operador, deseo registrar el check-out de una unidad para documentar su devolución y estado final. | 3 |
| 37 | EP-08 Operaciones en campo | US-037 | Equipo de reemplazo | Como administrador, deseo asignar un equipo de reemplazo cuando una unidad presente una falla para reducir el impacto de la inoperatividad. | 3 |
| 38 | EP-09 Analytics | US-038 | Utilización | Como gerente de operaciones, deseo consultar el nivel de utilización de cada activo para evaluar su rendimiento. | 3 |
| 39 | EP-09 Analytics | US-039 | Reportes | Como administrador, deseo generar reportes en Excel o PDF para analizar y compartir información operativa. | 3 |
| 40 | EP-09 Analytics | US-040 | Calificación | Como cliente, deseo calificar el servicio recibido para proporcionar retroalimentación sobre la experiencia de alquiler. | 2 |
| 41 | EP-10 Technical Story API | US-041 | API de maquinaria | Como sistema externo, deseo consultar el catálogo de maquinaria mediante una API para integrar la información de activos con otros servicios. | 3 |
| 42 | EP-10 Technical Story API | US-042 | API de reservas | Como sistema externo, deseo registrar reservas mediante una API para automatizar la creación de solicitudes. | 3 |
| 43 | EP-10 Technical Story API | US-043 | Conflicto de reserva | Como sistema, deseo recibir una respuesta de conflicto cuando exista una reserva incompatible para evitar duplicidades. | 2 |
| 44 | EP-10 Technical Story API | US-044 | Validación API | Como sistema, deseo validar los datos enviados mediante la API para evitar registros incorrectos. | 2 |
| 45 | EP-10 Technical Story API | US-045 | Autenticación JWT | Como sistema, deseo utilizar autenticación mediante JWT para proteger las operaciones de la API. | 3 |
| 46 | EP-10 Technical Story API | US-046 | Horómetros batch | Como sistema, deseo registrar lecturas de horómetros mediante cargas masivas para facilitar la actualización de datos. | 3 |
| 47 | EP-10 Technical Story API | US-047 | Facturación PSE/SUNAT | Como administrador, deseo emitir comprobantes electrónicos mediante la integración con PSE/SUNAT para automatizar la facturación. | 5 |
| 48 | EP-10 Technical Story API | US-048 | Webhooks | Como sistema externo, deseo recibir webhooks sobre cambios importantes para mantener sincronizada la información. | 3 |


### 3.2. Impact Mapping
### 3.3. Product Backlog

| Orden | ID | Epic | Título | Story Points |
| :---: | :---: | :---: | :--- | :---: |
| 1 | US-002 | EP-01 | Consultar disponibilidad | 2 |
| 2 | US-004 | EP-02 | Crear reserva | 3 |
| 3 | US-005 | EP-02 | Evitar reservas duplicadas | 3 |
| 4 | US-001 | EP-01 | Registrar maquinaria | 3 |
| 5 | US-003 | EP-01 | Gestionar mantenimiento | 3 |
| 6 | US-031 | EP-07 | Alertas preventivas | 3 |
| 7 | US-010 | EP-04 | Registrar horas/kilometraje | 3 |
| 8 | US-007 | EP-03 | Catálogo | 1 |
| 9 | US-008 | EP-03 | Consultar tarifas | 1 |
| 10 | US-009 | EP-03 | Reservas por obra | 2 |
| 11 | US-019 | EP-02 | Aprobar/rechazar reserva | 3 |
| 12 | US-006 | EP-02 | Cancelar reserva | 2 |
| 13 | US-018 | EP-02 | Modificar reserva | 2 |
| 14 | US-033 | EP-07 | Historial de mantenimiento | 2 |
| 15 | US-032 | EP-07 | Orden de reparación | 3 |
| 16 | US-034 | EP-07 | Reportar falla | 2 |
| 17 | US-037 | EP-08 | Equipo de reemplazo | 3 |
| 18 | US-011 | EP-04 | Validar horas | 3 |
| 19 | US-012 | EP-04 | Resumen de facturación | 2 |
| 20 | US-022 | EP-04 | Comprobante | 3 |
| 21 | US-038 | EP-09 | Utilización de activos | 3 |
| 22 | US-039 | EP-09 | Reportes | 3 |
| 23 | US-035 | EP-08 | Delivery check-in | 3 |
| 24 | US-036 | EP-08 | Return check-out | 3 |
| 25 | US-020 | EP-03 | Filtrar por categoría | 2 |
| 26 | US-021 | EP-03 | Buscar por ubicación | 2 |
| 27 | US-026 | EP-06 | Registrar usuario | 2 |
| 28 | US-027 | EP-06 | Iniciar sesión | 2 |
| 29 | US-029 | EP-06 | Gestionar roles | 3 |
| 30 | US-030 | EP-06 | Gestionar perfil | 2 |
| 31 | US-028 | EP-06 | Recuperar contraseña | 2 |
| 32 | US-016 | EP-01 | Editar maquinaria | 2 |
| 33 | US-017 | EP-01 | Dar de baja maquinaria | 2 |
| 34 | US-013 | EP-05 | Propuesta de valor | 1 |
| 35 | US-014 | EP-05 | Segmentos | 1 |
| 36 | US-015 | EP-05 | Contacto/demo | 2 |
| 37 | US-024 | EP-05 | ROI Calculator | 3 |
| 38 | US-025 | EP-05 | Sales Chat | 2 |
| 39 | US-041 | EP-10 | API de maquinaria | 3 |
| 40 | US-042 | EP-10 | API de reservas | 3 |
| 41 | US-043 | EP-10 | Conflicto de reserva | 2 |
| 42 | US-044 | EP-10 | Validación API | 2 |
| 43 | US-045 | EP-10 | Autenticación JWT | 3 |
| 44 | US-046 | EP-10 | Horómetros batch | 3 |
| 45 | US-047 | EP-10 | Facturación PSE/SUNAT | 5 |
| 46 | US-048 | EP-10 | Webhooks | 3 |

# Capítulo IV: Product Design

## 4.1. Style Guidelines

### 4.1.1. General Style Guidelines

El sistema visual de TechnoLoad se organiza en Figma en **Foundations** (tokens) y **Components** (Component Sets). Los tokens siguen `category/name/scale`, por ejemplo `color/primary/500`; los componentes siguen `component/variant/state`. En Vue, los tokens se consumen mediante tema Material de PrimeVue y variables CSS, evitando valores visuales aislados.

La tipografía institucional es Inter, con respaldo `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

| Token | Tamaño | Interlineado | Peso | Uso |
|---|---:|---:|---:|---|
| Display | 48 px / 3 rem | 56 px | 700 | Hero |
| H1 | 32 px / 2 rem | 40 px | 700 | Pantalla |
| H2 | 24 px / 1.5 rem | 32 px | 700 | Sección |
| H3 | 20 px / 1.25 rem | 28 px | 600 | Card |
| Body | 16 px / 1 rem | 24 px | 400 | Contenido |
| Small | 14 px / .875 rem | 20 px | 400 | Tabla |
| Caption | 12 px / .75 rem | 16 px | 500 | Etiqueta |

| Token | HEX | Aplicación |
|---|---|---|
| Primary 700 / 500 / 100 | #0F3D5E / #1976D2 / #E3F2FD | Marca, acción, selección |
| Secondary 500 | #FF8F00 | CTA secundario |
| Neutral 900 / 700 / 300 / 100 | #1F2933 / #52606D / #CBD2D9 / #F5F7FA | Texto, borde, fondo |
| Surface 0 | #FFFFFF | Cards y formularios |
| Success / Warning / Danger / Info | #2E7D32 / #ED6C02 / #D32F2F / #0288D1 | Estado semántico |

La escala de espaciado es 4, 8, 12, 16, 20, 24, 32, 40 y 48 px. Los contenedores usan 24 px en desktop, 20 px en tablet y 16 px en móvil; el radio estándar es 8 px y las cards aplican sombra `0 2px 8px rgba(15,61,94,.12)`.

| Diseño Figma | PrimeVue | Variantes y estados |
|---|---|---|
| Button | pv-button | Primary, secondary, text, danger; default, hover, focus, disabled, loading |
| Input | pv-input-text | Default, focus, error, disabled |
| Card | pv-card | Default, hover, loading |
| Tabla | pv-data-table | Filtros, vacío, paginación, error |
| Estado | pv-tag | Success, warning, danger, info |
| Feedback | pv-toast, pv-skeleton | Éxito, error, carga |

### 4.1.2. Web Style Guidelines

| Breakpoint | Frame | Columnas | Margen | Gutter |
|---|---:|---:|---:|---:|
| Desktop | 1440 px | 12 | 80 px | 24 px |
| Tablet | 768 px | 8 | 32 px | 16 px |
| Mobile | 375 px | 4 | 16 px | 16 px |

Figma aplica Layout Grid con columnas Stretch, Auto-layout y constraints. El AppShell usa topbar de 64 px, sidebar de 264 px y `pv-drawer` en pantallas reducidas. PrimeFlex implementa `col-12`, `md:col-6`, `lg:col-4`, `flex` y `gap-3`.

## 4.2. Information Architecture

### 4.2.1. Organization Systems

| Nivel | Contenido |
|---|---|
| 0 | Landing, acceso, recuperación |
| 1 | Dashboard, Activos, Mantenimientos, Operaciones, Alertas |
| 2 | Listado, detalle, creación, edición, historial |
| 3 | Registrar lectura, programar, cambiar estado, asignar, exportar |

### 4.2.2. Labeling Systems

| Clave | Español | English |
|---|---|---|
| nav.assets | Activos | Assets |
| nav.maintenance | Mantenimientos | Maintenance |
| nav.operations | Operaciones | Operations |
| action.save | Guardar | Save |
| status.available | Disponible | Available |
| status.inMaintenance | En mantenimiento | In maintenance |

Las claves se gestionan con `vue-i18n` en modo `legacy: false`; los componentes no contienen textos de negocio codificados.

### 4.2.3. SEO Tags and Meta Tags

~~~html
<title>TechnoLoad | Gestión inteligente de flotas</title>
<meta name="description" content="Centraliza mantenimiento, disponibilidad y operaciones de flota." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="https://technoload.pe/" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_PE" />
<meta property="og:title" content="TechnoLoad | Gestión inteligente de flotas" />
<meta property="og:description" content="Mantenimiento preventivo y disponibilidad en una plataforma." />
<meta property="og:image" content="https://technoload.pe/og-cover.png" />
<meta name="twitter:card" content="summary_large_image" />
~~~

### 4.2.4. Searching Systems

La búsqueda aplica debounce de 300 ms, filtros combinables por estado, tipo, prioridad y fecha, paginación de servidor y persistencia de filtros relevantes en la URL. Un estado vacío explica la condición, permite limpiar filtros y muestra un CTA sujeto a permisos.

### 4.2.5. Navigation Systems

La landing usa navbar con producto, beneficios, idioma y CTA. La aplicación autenticada usa sidebar/drawer con ruta activa, perfil y cierre de sesión; los breadcrumbs muestran jerarquía y la paginación inicia en diez registros.

## 4.3. Landing Page UI Design

### 4.3.1. Landing Page Wireframe

El frame desktop 1440 px contiene navbar, hero de dos columnas, problema/beneficios, módulos Activos-Mantenimiento-Operaciones-Alertas, proceso de tres pasos, prueba social validada o planes, CTA y footer.

> **Prompt Figma AI:** Diseñar wireframe responsive para TechnoLoad, SaaS B2B peruano de maquinaria pesada y transporte. Usar frame 1440, grid 12 columnas, margen 80, gutter 24, Auto-layout y escala 8 px. Incluir navbar, hero, beneficios, módulos, proceso, CTA y footer; usar placeholders sin fotografías ni colores finales.

### 4.3.2. Landing Page Mock-up

El hero usa Primary 700, H1 blanco y CTA Secondary 500: **“Controla tu flota antes de que una parada detenga tu operación.”** Los CTA son “Solicitar una demostración” y “Conocer los módulos”. Cards blancas incorporan PrimeIcon, título y texto; las capturas emplean información simulada consistente y no testimonios ficticios.

## 4.4. Web Applications UX/UI Design

### 4.4.1. Web Applications Wireframes

| Vista | Estructura |
|---|---|
| Dashboard | KPIs, uso, mantenimiento próximo, actividad |
| Activos | CTA, búsqueda, filtros, tabla, paginación |
| Detalle | Breadcrumb, resumen, tag, tabs |
| Registrar lectura | Activo, medición, fecha, observación, validación |
| Mantenimiento | Filtros, prioridad, programación |
| Operaciones | Estado, unidad y drawer de asignación |

### 4.4.2. Web Applications Wireflow Diagrams

~~~mermaid
flowchart LR
Dashboard-->Activos-->Detalle
Detalle-->Lecturas-->RegistrarLectura-->Validar-->Toast
Mantenimientos-->Programar-->OrdenCreada
Operaciones-->AsignarUnidad-->Confirmacion
~~~

### 4.4.3. Web Applications Mock-ups

Las pantallas de alta fidelidad emplean Auto-layout y Component Sets. Carga usa skeleton; vacío muestra explicación y CTA; éxito muestra toast y actualiza lista; el error es recuperable y conserva entradas; controles deshabilitados explican su restricción mediante tooltip.

### 4.4.4. Web Applications User Flow Diagrams

~~~mermaid
flowchart TD
Login-->Dashboard-->Activos-->Activo-->Lecturas-->Registrar
Registrar-->Validacion{¿Válido?}
Validacion--No-->Corregir-->Registrar
Validacion--Sí-->Guardar-->HistorialActualizado
~~~

Programar mantenimiento: Sidebar → Mantenimientos → Programar → activo/tipo → fecha/prioridad → Guardar → orden creada. Asignar unidad: Operaciones → seleccionar operación → filtrar disponibles → unidad → confirmar → operación asignada.

## 4.5. Web Applications Prototyping

| Interacción | Trigger | Resultado |
|---|---|---|
| CTA demostración | On Click | Navigate; Smart Animate 300 ms |
| Fila activo | On Click | Detalle; Smart Animate 250 ms |
| Registrar lectura | On Click | Overlay modal; Dissolve 200 ms |
| Filtros | On Click | Drawer; Move In 250 ms |
| Ayuda | On Hover | Tooltip; Dissolve 150 ms |
| Validación | On Click | Variante Error; 150 ms |

> **Prompt Figma AI:** Crear prototipo TechnoLoad con Dashboard, Activos, Detalle, modal Registrar lectura, Mantenimientos y drawer Asignar unidad. Aplicar Auto-layout, componentes con variantes, #0F3D5E, #1976D2 y #FF8F00. Incluir loading, vacío, error y éxito; conectar flujos con Smart Animate y overlays.

## 4.6. Domain-Driven Software Architecture

### 4.6.1. Design-Level EventStorming

| Contexto | Commands | Agregados/entidades | Value Objects | Eventos | Read Models |
|---|---|---|---|---|---|
| Fleet/Asset | RegisterAsset, RecordUsageReading, ChangeAssetStatus | Asset, UsageReading | AssetId, AssetCode, UsageValue, AssetStatus | AssetRegistered, UsageReadingRecorded, AssetStatusChanged | AssetListItem, AssetDetail |
| Maintenance | ScheduleMaintenance, StartMaintenance, CompleteMaintenance | MaintenanceOrder, MaintenanceTask | OrderId, Type, ScheduledDate, Priority | MaintenanceScheduled, Started, Completed, Overdue | MaintenanceBoard |
| Operations | CreateOperation, AssignAsset, StartOperation, CompleteOperation | Operation, Assignment | OperationId, Status, DateRange | OperationCreated, AssetAssigned, Started, Completed | AssignmentCalendar |

Un activo se asigna solo si está Disponible; una lectura no puede ser negativa ni menor a la anterior; una orden solo se completa desde En progreso.

### 4.6.2. Software Architecture Context Diagram

~~~plantuml
@startuml
!include <C4/C4_Context>
Person(admin,"Administrador")
Person(coordinator,"Coordinador")
System(app,"TechnoLoad","Gestión de flota")
System_Ext(iot,"Telematics API","Lecturas")
System_Ext(notification,"Notification API","Alertas")
Rel(admin,app,"Administra","HTTPS")
Rel(coordinator,app,"Asigna","HTTPS")
Rel(iot,app,"Envía lecturas","Webhook")
Rel(app,notification,"Notifica","HTTPS")
@enduml
~~~

### 4.6.3. Software Architecture Container Diagrams

~~~plantuml
@startuml
!include <C4/C4_Container>
Person(user,"Usuario")
System_Boundary(s,"TechnoLoad") {
 Container(spa,"SPA","Vue 3/Vite/PrimeVue","UI e i18n")
 Container(gateway,"API Gateway","HTTPS JSON","Seguridad y rutas")
 Container(fleet,"Fleet Service","Servicio","Activos")
 Container(maintenance,"Maintenance Service","Servicio","Órdenes")
 Container(operations,"Operations Service","Servicio","Operaciones")
 ContainerDb(db,"PostgreSQL","Database","Persistencia")
}
Rel(user,spa,"Usa")
Rel(spa,gateway,"Axios JSON")
Rel(gateway,fleet,"Enruta")
Rel(gateway,maintenance,"Enruta")
Rel(gateway,operations,"Enruta")
Rel(fleet,db,"SQL")
Rel(maintenance,db,"SQL")
Rel(operations,db,"SQL")
@enduml
~~~

### 4.6.4. Software Architecture Components Diagrams

~~~mermaid
flowchart TB
UI[Presentation: Vue/PrimeVue]-->Application[Application: Store/Casos de uso]
Application-->Infrastructure[Infrastructure: API/Assemblers]
Infrastructure-->Gateway[API Gateway]
Application-->Domain[Domain: Entidades/Reglas]
Domain-->Shared[Shared Kernel: VO/Validadores]
~~~

## 4.7. Software Object-Oriented Design

### 4.7.1. Class Diagrams

~~~plantuml
@startuml
class AssetEntity { -id:String\n-code:String\n-status:AssetStatus\n+isAvailable():Boolean }
class MaintenanceOrderEntity { -assetId:String\n-status:String\n+isOpen():Boolean }
class Url <<Value Object>>
class DateTime <<Value Object>>
class AssetAssembler { +toDomain(dto):AssetEntity }
class FleetStore { +loadAssets()\n+selectAsset() }
class AssetList <<Vue Component>>
class AssetSummary <<Vue Component>>
AssetAssembler --> AssetEntity
FleetStore --> AssetAssembler
AssetList --> FleetStore
AssetSummary --> FleetStore
MaintenanceOrderEntity --> DateTime
@enduml
~~~

Las entidades copian, validan y congelan el estado con `Object.freeze`; las modificaciones generan nuevas instancias. Los assemblers evitan que el dominio dependa de DTOs.

## 4.8. Database Design

### 4.8.1. Database Diagrams

~~~mermaid
erDiagram
ORGANIZATIONS ||--o{ ASSETS : owns
ASSETS ||--o{ USAGE_READINGS : records
ASSETS ||--o{ MAINTENANCE_ORDERS : receives
MAINTENANCE_ORDERS ||--o{ MAINTENANCE_TASKS : includes
OPERATIONS ||--o{ OPERATION_ASSIGNMENTS : contains
ASSETS ||--o{ OPERATION_ASSIGNMENTS : assigned
~~~

### 4.8.2. Script DDL

~~~sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE organizations(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),name VARCHAR(120) NOT NULL,created_at TIMESTAMPTZ NOT NULL DEFAULT now());
CREATE TABLE assets(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE RESTRICT,code VARCHAR(40) NOT NULL,name VARCHAR(120) NOT NULL,asset_type VARCHAR(30) NOT NULL CHECK(asset_type IN('MACHINERY','VEHICLE')),status VARCHAR(30) NOT NULL CHECK(status IN('AVAILABLE','IN_MAINTENANCE','IN_OPERATION','OUT_OF_SERVICE')),current_usage NUMERIC(14,2) NOT NULL DEFAULT 0 CHECK(current_usage>=0),created_at TIMESTAMPTZ NOT NULL DEFAULT now(),UNIQUE(organization_id,code));
CREATE TABLE usage_readings(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE CASCADE,reading_value NUMERIC(14,2) NOT NULL CHECK(reading_value>=0),recorded_at TIMESTAMPTZ NOT NULL,notes VARCHAR(500));
CREATE TABLE maintenance_orders(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,maintenance_type VARCHAR(40) NOT NULL,priority VARCHAR(20) NOT NULL CHECK(priority IN('LOW','MEDIUM','HIGH','CRITICAL')),status VARCHAR(30) NOT NULL CHECK(status IN('SCHEDULED','IN_PROGRESS','COMPLETED','CANCELLED')),scheduled_at TIMESTAMPTZ NOT NULL,completed_at TIMESTAMPTZ);
CREATE TABLE maintenance_tasks(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),maintenance_order_id UUID NOT NULL REFERENCES maintenance_orders(id) ON DELETE CASCADE,description VARCHAR(250) NOT NULL,is_completed BOOLEAN NOT NULL DEFAULT false);
CREATE TABLE operations(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE RESTRICT,code VARCHAR(40) NOT NULL,status VARCHAR(30) NOT NULL CHECK(status IN('DRAFT','PLANNED','IN_PROGRESS','COMPLETED','CANCELLED')),starts_at TIMESTAMPTZ NOT NULL,ends_at TIMESTAMPTZ,UNIQUE(organization_id,code),CHECK(ends_at IS NULL OR ends_at>=starts_at));
CREATE TABLE operation_assignments(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),operation_id UUID NOT NULL REFERENCES operations(id) ON DELETE CASCADE,asset_id UUID NOT NULL REFERENCES assets(id) ON DELETE RESTRICT,assigned_at TIMESTAMPTZ NOT NULL DEFAULT now(),released_at TIMESTAMPTZ,UNIQUE(operation_id,asset_id));
CREATE INDEX idx_assets_status ON assets(organization_id,status);
CREATE INDEX idx_readings_asset_date ON usage_readings(asset_id,recorded_at DESC);
CREATE INDEX idx_orders_asset_status ON maintenance_orders(asset_id,status);
CREATE INDEX idx_assignments_asset ON operation_assignments(asset_id);
~~~

Los UUID soportan generación distribuida; CHECK y FK conservan invariantes, y los índices responden a las consultas de listado y seguimiento. Las transiciones críticas se ejecutan en transacción; una solución productiva publica eventos mediante outbox.
