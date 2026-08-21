# Portafolio Profesional - Andres Pena Gutierrez

Portafolio web personal desarrollado con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. El sitio funciona como una landing page profesional para presentar perfil, experiencia, servicios, proyectos, CV descargable y canales de contacto.

El proyecto esta pensado para publicarse en **Vercel** y mantener despliegues automaticos desde GitHub.

## Estado del proyecto

Proyecto en desarrollo activo.

Pendientes principales antes de compartir publicamente:

- Completar proyectos reales en la seccion de portafolio.
- Reemplazar enlaces temporales `#!` por URLs reales o desactivar botones sin destino.
- Revisar consistencia de idioma entre espanol e ingles.
- Verificar remitente/dominio de Resend para produccion.
- Probar responsive en movil y desktop.
- Ejecutar build de produccion antes del deploy final.

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
| Package manager | pnpm |

## Estructura del proyecto

```text
portafolio_profesional/
├── app/
│   ├── api/
│   │   └── send/
│   │       └── route.ts       # Endpoint del formulario de contacto
│   ├── globals.css            # Estilos globales
│   ├── layout.tsx             # Layout raiz, fuentes y ThemeProvider
│   └── page.tsx               # Composicion principal de la landing
├── Components/
│   ├── ui/                    # Componentes base de interfaz
│   ├── shared/                # Componentes compartidos
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
│   └── utils.ts               # Utilidades compartidas
├── public/
│   ├── cv/                    # CVs descargables
│   └── images...              # Imagenes del sitio
├── Data.tsx                   # Datos de navbar, experiencia, servicios y proyectos
├── components.json            # Configuracion de componentes UI
├── next.config.ts             # Configuracion de Next.js
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

El formulario de contacto usa Resend. Para que funcione se requiere:

```env
RESEND_API_KEY=tu_api_key_de_resend
```

Notas importantes:

- No subir `.env` a GitHub.
- `.env*` ya esta incluido en `.gitignore`.
- En produccion, configurar `RESEND_API_KEY` directamente en Vercel.
- Para uso publico conviene verificar dominio/remitente en Resend.

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
6. Configurar variable de entorno:

```env
RESEND_API_KEY=tu_api_key_de_resend
```

7. Ejecutar deploy.
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
