# Portafolio Profesional - Andres Pena Gutierrez

Portafolio web personal desarrollado con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. El sitio funciona como una landing page profesional para presentar perfil, experiencia, servicios, proyectos, CV descargable y canales de contacto.

El proyecto esta pensado para publicarse en **Vercel** y mantener despliegues automaticos desde GitHub.

Incluye ademas una capa de **telemetria anonima** de vistas y sesiones (Supabase + Edge Function) y un **panel privado de metricas** en `/dashboard`, protegido con Supabase Auth.

## Estado del proyecto

Proyecto en desarrollo activo. La landing esta publicada en produccion; la telemetria y el panel privado de metricas se desarrollan en la rama `feature/telemetria` (Fase 1.5).

Pendientes principales antes de cerrar la Fase 1:

- Foto de perfil definitiva (`public/profile.png`).
- Confirmar que no exista un proyecto duplicado en Vercel (`portafolio-profesional` sin el sufijo `-e3ii`).
- Probar responsive en movil y desktop.
- Verificar remitente/dominio de Resend para uso publico.

## Caracteristicas

- Landing page de una sola pagina.
- Navegacion fija por secciones.
- Modo claro/oscuro con `next-themes`.
- Introduccion con efecto de escritura usando `typed.js`.
- Secciones para perfil, experiencia, servicios, proyectos y contacto.
- Carrusel de imagenes para contenido visual.
- Boton flotante de WhatsApp.
- Formulario de contacto con validacion usando `react-hook-form` y `zod`.
- API route `POST /api/send` para envio de correos con Resend.
- Archivos de CV disponibles desde `public/cv`.
- Componentes reutilizables estilo shadcn/ui con Radix UI y Tailwind.
- Telemetria anonima de vistas y sesiones en la portada (solo en el dominio oficial).
- Panel privado de metricas en `/dashboard` con Supabase Auth.
- Acceso al panel desde la barra de navegacion (icono de grafico).

## Stack tecnologico

| Area | Tecnologia |
| --- | --- |
| Framework | Next.js 15 App Router |
| UI | React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 4 |
| Componentes | Radix UI, lucide-react, shadcn-style components |
| Formularios | react-hook-form, zod, @hookform/resolvers |
| Email | Resend, @react-email/render |
| Temas | next-themes |
| Carrusel | embla-carousel-react |
| Backend | Supabase (PostgreSQL, Auth, Edge Functions) |
| Sesion en App Router | @supabase/ssr, @supabase/supabase-js |
| Telemetria | Tracker propio + Edge Function `track-visit` |
| Package manager | pnpm |

## Estructura del proyecto

```text
portafolio_profesional/
├── app/
│   ├── api/
│   │   └── send/
│   │       └── route.ts       # Endpoint del formulario de contacto
│   ├── auth/
│   │   └── signout/
│   │       └── route.ts       # Cierre de sesion (POST)
│   ├── dashboard/
│   │   └── page.tsx           # Panel privado de metricas (protegido en servidor)
│   ├── globals.css            # Estilos globales
│   ├── layout.tsx             # Layout raiz, fuentes y ThemeProvider
│   ├── login/
│   │   └── page.tsx           # Login con Supabase Auth
│   └── page.tsx               # Composicion principal de la landing (monta el tracker)
├── Components/
│   ├── ui/                    # Componentes base de interfaz
│   ├── shared/                # Componentes compartidos
│   ├── analytics/
│   │   └── tracker.tsx        # Registro anonimo de vistas (Client Component)
│   ├── auth/
│   │   └── login-form.tsx     # Formulario de correo y contrasena
│   ├── about-me.tsx
│   ├── contact.tsx
│   ├── contact-form.tsx
│   ├── email-template.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── introduction.tsx
│   ├── navbar.tsx
│   ├── portfolio.tsx
│   ├── services.tsx
│   ├── theme-provider.tsx
│   ├── toggle-theme.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts          # Cliente navegador y lectura de variables
│   │   ├── middleware.ts      # Refresco de sesion
│   │   └── server.ts          # Cliente servidor con cookies
│   ├── telemetry/
│   │   └── types.ts           # Tipos de get_portfolio_metrics
│   └── utils.ts               # Utilidades compartidas
├── public/
│   ├── cv/                    # CVs descargables
│   └── images...              # Imagenes del sitio
├── .env.example               # Plantilla de variables de entorno (versionada)
├── Data.tsx                   # Datos de navbar, experiencia, servicios y proyectos
├── components.json            # Configuracion de componentes UI
├── next.config.ts             # Configuracion de Next.js
├── middleware.ts              # Refresco de sesion solo en /login y /dashboard
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json
```

## Requisitos

- Node.js 20 o superior recomendado.
- pnpm instalado.

Instalar pnpm si no esta disponible:

```bash
npm install -g pnpm
```

Tambien se puede activar mediante Corepack:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Instalacion local

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd portafolio_profesional
```

Instalar dependencias:

```bash
pnpm install
```

Crear un archivo `.env` en la raiz del proyecto con las variables necesarias.

## Variables de entorno

El repositorio versiona solo `.env.example` (plantilla sin valores). Copiarlo a `.env` y completar:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SITE_HOST=
RESEND_API_KEY=
```

| Variable | Uso | Publica | Entornos en Vercel |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase | Si | Production + Preview |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Clave publicable (`sb_publishable_...`) | Si | Production + Preview |
| `NEXT_PUBLIC_SITE_HOST` | Dominio oficial que acepta el tracker (sin `https://` ni barra final) | Si | Production (en Preview, opcional con el mismo valor) |
| `RESEND_API_KEY` | Envio de correo del formulario de contacto | No (secreta) | Production + Preview |

Notas importantes:

- Las `NEXT_PUBLIC_*` se incrustan en el build: cambiar una exige **redeploy** en Vercel.
- Todo lo que lleve prefijo `NEXT_PUBLIC_` es visible para el visitante; nunca usar ese prefijo con `RESEND_API_KEY`.
- No subir `.env` a GitHub: `.env*` esta en `.gitignore` con excepcion para `.env.example`.
- Nunca usar la `service_role` key de Supabase en este proyecto; las claves privadas viven solo en Supabase.
- Si se conecta un dominio propio, actualizar `NEXT_PUBLIC_SITE_HOST` y redeployar.

## Scripts disponibles

```bash
pnpm dev
```

Inicia el servidor de desarrollo con Turbopack en `http://localhost:3000`.

```bash
pnpm build
```

Compila la aplicacion para produccion.

```bash
pnpm start
```

Ejecuta la version de produccion despues de `pnpm build`.

```bash
pnpm lint
```

Ejecuta ESLint para detectar problemas de calidad de codigo.

## Flujo recomendado de trabajo

1. Hacer cambios en una rama local.
2. Ejecutar `pnpm lint`.
3. Ejecutar `pnpm build`.
4. Probar visualmente en local.
5. Crear commit con un mensaje claro.
6. Subir cambios a GitHub.
7. Revisar el deploy preview en Vercel.
8. Promover o compartir cuando el resultado este listo.

## Git y GitHub

Inicializar repositorio, si aun no existe:

```bash
git init
```

Revisar archivos:

```bash
git status
```

Primer commit sugerido:

```bash
git add .
git commit -m "Initial portfolio project"
```

Conectar con GitHub:

```bash
git remote add origin <url-del-repositorio>
git branch -M main
git push -u origin main
```

## Despliegue en Vercel

Este proyecto es una buena opcion para Vercel porque usa Next.js y una API route para el formulario de contacto.

Pasos:

1. Subir el proyecto a GitHub.
2. Entrar a Vercel.
3. Seleccionar **Add New Project**.
4. Importar el repositorio desde GitHub.
5. Confirmar que Vercel detecte **Next.js**.
6. Configurar las variables de entorno (ver seccion "Variables de entorno") en **Production** y, si se quieren probar login y dashboard en previews, tambien en **Preview**.

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SITE_HOST=
RESEND_API_KEY=
```

7. Ejecutar deploy. Despues de cambiar una `NEXT_PUBLIC_*`, redeployar sin cache de build.
8. Probar el link generado por Vercel.
9. Configurar dominio propio cuando el sitio este listo.

Configuracion esperada:

| Campo | Valor |
| --- | --- |
| Framework | Next.js |
| Install Command | `pnpm install` |
| Build Command | `pnpm build` |
| Output Directory | Automatico |

## Deploy de prueba vs deploy final

Se recomienda hacer primero un deploy de prueba, aunque el contenido todavia no este perfecto. Ese deploy ayuda a validar:

- Build en entorno limpio.
- Variables de entorno.
- API route del formulario.
- Carga de imagenes.
- Descarga de CVs.
- Rutas internas.
- Visualizacion en dispositivos moviles.

Despues del deploy de prueba se puede hacer la limpieza final de contenido y publicar el enlace definitivo.

## Contacto y formulario

El formulario se encuentra en:

```text
Components/contact-form.tsx
```

El endpoint que procesa el envio esta en:

```text
app/api/send/route.ts
```

Actualmente el endpoint usa Resend para enviar la informacion del formulario por correo. Antes de publicar el sitio ampliamente, revisar:

- Email de destino.
- Remitente configurado.
- Manejo de errores.
- Validacion del lado servidor.
- Mensaje visual de exito/error para el usuario.

## Telemetria y panel privado

- `/` monta `Components/analytics/tracker.tsx`, un Client Component que registra una vista solo cuando el hostname coincide con `NEXT_PUBLIC_SITE_HOST`; desarrollo, previews y dominios no oficiales quedan fuera.
- Cada vista se envia a la Edge Function `track-visit` de Supabase con `fetch` fire-and-forget (`keepalive`): si falla, el portafolio sigue funcionando.
- La sesion es un UUID v4 en `sessionStorage`, reutilizado si pasan menos de 30 minutos desde el ultimo evento. La deduplicacion por remontaje dura lo que dura el documento, asi que recargar cuenta como vista nueva.
- El backend limita la ingesta a 60 vistas por minuto global.
- `/login` y `/dashboard` son privados: Supabase Auth con registro publico desactivado, autorizacion por UUID del administrador dentro de la RPC `get_portfolio_metrics` y verificacion de sesion **en el servidor** de Next.
- El icono de grafico de la barra de navegacion abre `/dashboard`.
- Las metricas se calculan en la zona horaria `America/Bogota`.

## Contenido editable

La mayor parte del contenido visible del portafolio esta centralizado en:

```text
Data.tsx
```

Alli se pueden editar:

- Items del navbar.
- Datos de perfil.
- Proyectos del portafolio.
- Experiencia y habilidades.
- Servicios.
- Datos de contacto.

## Checklist antes de publicar

- [ ] `pnpm install` ejecuta correctamente.
- [ ] `pnpm lint` no reporta errores importantes.
- [ ] `pnpm build` termina correctamente.
- [ ] No hay secretos en el repositorio.
- [ ] `.env` no esta versionado.
- [ ] Links de GitHub y demos son reales.
- [ ] CVs estan actualizados.
- [ ] Formulario envia correos correctamente.
- [ ] Telemetria registrando en produccion: una vista por apertura o recarga, sin sumar al cambiar de ancla.
- [ ] `/dashboard` sin sesion redirige a `/login`.
- [ ] Variables de Supabase cargadas en Vercel (Production y Preview) y redeploy hecho.
- [ ] Sitio probado en movil.
- [ ] Metadata revisada: titulo, descripcion, idioma.
- [ ] Dominio/remitente de Resend verificado para produccion.
- [ ] Deploy de Vercel probado antes de compartir el enlace.

## Notas de mantenimiento

- Mantener `pnpm-lock.yaml` versionado para builds reproducibles.
- No versionar `node_modules`, `.next`, `out`, `build` ni `.env`.
- Registrar decisiones importantes en la bitacora del proyecto.
- Crear commits pequenos y descriptivos.
- Usar deploy previews de Vercel para revisar cambios antes de publicar.

## Licencia

Proyecto personal. Definir licencia antes de convertir el repositorio en publico si se desea permitir reutilizacion del codigo.
