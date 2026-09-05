# GROW UP SYSTEM — Landing Page (v2)

Guía rápida para ti, Harold. No necesitas saber programar para usar esto.

## 1. Lo único que probablemente necesites editar

Todo tu contenido (textos, precios, WhatsApp, redes sociales, certificaciones,
botones de PayPal) vive en **un solo archivo**:

```
data/site-config.ts
```

Ábrelo con cualquier editor de texto. Los espacios marcados con
`[AGREGAR INFORMACIÓN]` son los que aún faltan por completar.

## 2. Cómo reemplazar las fotos

Hay 3 fotos de relleno en `public/images/` (con marco verde y texto indicando
qué va ahí):

- `hero-harold.jpg` — foto de portada
- `method-harold.jpg` — foto de Harold entrenando con mancuernas (sección Método GROW)
- `about-harold.jpg` — foto personal en "Sobre Harold"

Para reemplazarlas: guarda tu foto real con exactamente el mismo nombre de
archivo dentro de esa misma carpeta.

## 3. Cómo cambiar un precio o un botón de PayPal

En `data/site-config.ts`, busca el plan (por ejemplo `grow-essential`) dentro
de `onlinePlans` o `inPersonPlans`, y cambia:

- `priceCLP`: el número que se muestra en el sitio (solo el número, sin puntos)
- `paypalHostedButtonId`: el ID del botón de PayPal (lo obtienes creando un
  nuevo botón en tu cuenta de PayPal: Pagar y cobrar → Botones de PayPal →
  Crear botón nuevo)

## 4. Cómo poner esto en línea

Sigue el mismo proceso que ya usaste la primera vez: sube estos archivos a tu
repositorio de GitHub (`grow-up-system`) y Vercel va a reconstruir el sitio
automáticamente. Recuerda subir las carpetas (`app`, `components`, `data`,
`public`) una por una si el arrastre conjunto no las incluye todas.

## 5. Qué falta por tu parte (contenido, no código)

- Fotos reales (ver punto 2)
- Confirmar cuál es el link correcto de tu formulario de Evaluación Inicial
  en Tally (nos diste dos versiones distintas)
- Respuestas pendientes en el FAQ: "¿Puedo cambiar de plan?" y "¿Cómo
  funcionan las clases por videollamada?"
- Favicon (ícono de la pestaña del navegador) en `/public`
