# Práctica de Configuración y Uso de ESLint

## Paso 1: Inicializar el proyecto Git
```bash
git init
```

## Paso 2: Inicializar proyecto Node.js (opción -y para valores por defecto)
```bash
npm init -y
```

## Paso 3: Configurar ESLint interactivamente
```bash
npm init @eslint/config@latest
```
**Selecciones recomendadas durante la configuración:**
1. ¿Cómo quieres usar ESLint? → **"Problemas de sintaxis y encontrar errores"**
2. ¿Qué tipo de módulos usa tu proyecto? → **"JavaScript modules (import/export)"**
3. ¿Qué framework usas? → **"Ninguno"**
4. ¿Usas TypeScript? → **"No"**
5. ¿Dónde se ejecuta tu código? → **"Navegador"** (o Node si es backend)
6. ¿Qué formato de configuración prefieres? → **"JavaScript"** (generará `eslint.config.mjs`)
7. ¿Quieres instalar las dependencias ahora? → **"Sí"**
8. ¿Qué gestor de paquetes usas? → **"npm"**

## Paso 4: Modificar configuración (opcional)
Edita el archivo generado (`eslint.config.mjs`) para agregar reglas personalizadas. 

Copiar el archivo eslint.txt en eslint.confgi.mjs

## Paso 5: Ejecutar ESLint para detectar errores
```bash
npx eslint src/incorrect.js
```
**Salida esperada:**
```
error: Missing semicolon (semi)
error: Strings must use singlequote (quotes)
error: 'edad' is not defined (no-undef)
```

## Paso 7: Corregir errores automáticamente (cuando sea posible)
```bash
npx eslint src/incorrect.js --fix
```
**Corregirá:**
- Añadirá punto y coma
- Cambiará comillas dobles a simples

## Paso 8: Corregir manualmente lo que --fix no resuelva
Ejemplo: La variable `edad` no definida requiere corrección manual.

## Paso 9: Verificar correcciones
Vuelve a ejecutar ESLint para confirmar:
```bash
npx eslint src/incorrect.js
```

## Configuración Adicional (Opcional)
- Añade un script en `package.json`:
```json
"scripts": {
  "lint": "eslint src/",
  "lint:fix": "eslint src/ --fix"
}
```

## Comandos útiles
| Comando | Descripción |
|---------|-------------|
| `npx eslint src/` | Verifica todos los archivos en `src/` |
| `npx eslint --fix` | Corrige errores automáticamente |
| `npx eslint --debug` | Muestra información de depuración |
```

---

### **📌 Notas importantes:**
1. Si usas **ESLint 9+**, la configuración por defecto usará `eslint.config.mjs` (formato plano).
2. Para proyectos con **React/Vue**, instala los plugins correspondientes durante la configuración.
3. Los errores que `--fix` no corrija (como variables no definidas) requieren intervención manual.

¿Quieres que agregue algún paso adicional o explicación más detallada? 😊