# Portafolio Profesional - Andres Pena Gutierrez

Portafolio web personal desarrollado con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. El sitio funciona como una landing page profesional para presentar perfil, experiencia, servicios, proyectos, CV descargable y canales de contacto.

El proyecto esta pensado para publicarse en **Vercel** y mantener despliegues automaticos desde GitHub.

Incluye ademas una capa de **telemetria anonima** de vistas y sesiones (Supabase + Edge Function) y un **panel privado de metricas** en `/dashboard`, protegido con Supabase Auth.

## Estado del proyecto

Sitio en produccion en `https://portafolio-profesional-e3ii.vercel.app`.

| Area | Estado |
| --- | --- |
| Landing publica (perfil, experiencia, skills, proyectos, contacto, CV) | En produccion |
| Formulario de contacto (Resend) | Funcional; pendiente verificar remitente/dominio para uso publico |
| Telemetria anonima + panel privado de metricas | En produccion desde 2026-11-24 |
| Responsive en dispositivos reales | Pendiente de revision final |
| Foto de perfil definitiva | Pendiente |

Pendientes antes de compartir el enlace publicamente:

- Foto de perfil definitiva (`public/profile.png`).
- Probar responsive en movil y desktop.
- Verificar remitente/dominio de Resend para uso publico.
- Revisar metadata final (titulo, descripcion, idioma).

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

## Rutas de la aplicacion

| Ruta | Tipo | Acceso | Descripcion |
| --- | --- | --- | --- |
| `/` | Landing (Server Component) | Publica | Portada completa por anclas y montaje del tracker de telemetria |
| `/login` | Pagina dinamica | Publica (registro desactivado) | Formulario de correo y contrasena para el panel |
| `/auth/signout` | Route Handler `POST` | Requiere sesion | Cierra la sesion de Supabase Auth |
| `/dashboard` | Pagina dinamica | **Privada** (verificada en servidor) | Metricas: hoy, acumulado y ultimos 7 dias |
| `/api/send` | Route Handler `POST` | Publica | Envio del formulario de contacto via Resend |

El middleware solo se ejecuta en `/login` y `/dashboard`; la portada publica no paga ese coste.

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
│   └── images...              # Imagenes del sitio (incluye profile.png)
├── types/
│   └── globals.d.ts           # Tipos globales (import de CSS)
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

## Testing

No hay suite de pruebas automatizada. La validacion de cada cambio es:

1. `pnpm lint` sin errores ni warnings.
2. `pnpm build` correcto (7 rutas).
3. Revision manual del deploy preview de Vercel.
4. Para cambios de telemetria o autenticacion, verificar el checklist de la seccion "Telemetria y panel privado".

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

## Deploy de prueba vs produccion

El sitio ya esta desplegado en produccion. Esta seccion queda como referencia para futuros cambios: antes de publicar, un deploy de preview permite validar:

- Build en entorno limpio.
- Variables de entorno.
- API route del formulario.
- Carga de imagenes.
- Descarga de CVs.
- Rutas internas.
- Visualizacion en dispositivos moviles.

El deploy a produccion se hace al mergear a `main`; los previews no afectan al dominio oficial.

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

**Que se mide**

- Una **vista** = una apertura o recarga de `/` en el dominio oficial. Cambiar de ancla, hacer scroll o clic en cualquier elemento **no** genera eventos.
- Una **sesion** = un UUID v4 anonimo guardado en `sessionStorage`, reutilizado si pasan menos de 30 minutos de inactividad en esa pestana. Pestana nueva, navegador nuevo o perfil nuevo = sesion nueva.
- El dashboard muestra **vistas** (filas) y **sesiones** (`session_id` distintos) de hoy, del acumulado y de los ultimos 7 dias, en zona horaria `America/Bogota`.

**Como funciona**

- `/` monta `Components/analytics/tracker.tsx` (Client Component). El tracker solo envia datos si `window.location.hostname === NEXT_PUBLIC_SITE_HOST`; desarrollo, previews y URLs de deployment quedan fuera.
- El envio es `fetch` fire-and-forget con `keepalive`: si falla, el portafolio sigue funcionando.
- La deduplicacion por remontaje de React dura lo que dura el documento, asi que recargar **si** cuenta como vista nueva.
- El backend limita la ingesta a 60 vistas por minuto global y responde `429` al superar el cupo.
- Por ser una peticion cross-origin con `Content-Type: application/json`, el navegador envia un **preflight `OPTIONS`** (respuesta `204`) antes del `POST` real (`201`). En DevTools se ven dos filas por vista; el `OPTIONS` no escribe datos.

**Datos almacenados** (tabla `portfolio_events`)

| Campo | Contenido |
| --- | --- |
| `id` | Lo asigna PostgreSQL |
| `event_type` | `page_view` |
| `page_path` | Siempre `/` |
| `session_id` | UUID v4 anonimo |
| `created_at` | Fecha y hora del servidor |

No se guardan nombres, correos, IPs ni parametros de URL.

**Seguridad del panel**

- Supabase Auth con correo y contrasena; registro publico desactivado.
- La RPC `get_portfolio_metrics` valida el UUID del administrador y devuelve `401` sin sesion valida.
- `/dashboard` verifica la sesion **en el servidor** antes de renderizar.
- El icono de grafico de la barra de navegacion abre `/dashboard`; el enlace es visible, pero sin sesion redirige a `/login`.

**Limitaciones conocidas**

- Solo cuenta el **alias de produccion** (`portafolio-profesional-e3ii.vercel.app`). La URL inmutable del deployment (con hash) y los previews no registran vistas.
- El panel **no se auto-refresca**: hay que recargar la pagina para ver los ultimos numeros.
- No se miden clics en GitHub, demos o CV, ni profundidad por seccion.

**Como verificar en produccion**

1. Abrir `https://portafolio-profesional-e3ii.vercel.app/` (alias, no la URL del deployment).
2. DevTools -> Network -> filtrar `track-visit`: debe aparecer `OPTIONS 204` y `POST 201`.
3. DevTools -> Application -> Session Storage: debe existir `pf_telemetry_session`.
4. Abrir `/dashboard` con la cuenta administradora: la vista debe reflejarse al recargar.

## Accesibilidad y rendimiento

- Imagenes servidas con `next/image`: optimizacion y lazy loading automaticos.
- Tema claro/oscuro con `next-themes`, sin parpadeo al cargar.
- Los enlaces de la barra de navegacion tienen `aria-label` y el boton de tema tiene nombre accesible.
- Las animaciones decorativas usan keyframes de Tailwind (`animate-fade-in`).
- Pendiente para el futuro: respetar `prefers-reduced-motion` cuando se agreguen animaciones nuevas.

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
- [ ] Telemetria verificada desde el **alias de produccion** (las URLs de deployment con hash y los previews no cuentan).
- [ ] `/dashboard` sin sesion redirige a `/login`.
- [ ] Variables de Supabase cargadas en Vercel (Production y Preview) y redeploy hecho.
- [ ] Foto de perfil definitiva (`public/profile.png`).
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
