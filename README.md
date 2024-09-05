# Proyectos frontend

Esta carpeta contendrá diferentes tipos de proyectos creando páginas web con tecnologías HTML, CSS y Javascript

## Como crear un proyecto en Github.

-   Prerequisito. tener una cuenta en Github.

1. Ir a **Repositories** y crear un proyecto nuevo con el botón **New**
2. Ponerle un nombre al nuevo repositorio y modificar las opciones si lo ve conveniente
3. Dar click al botón **Create repository**
4. Github va a dar unas instrucciones con las que se puede vincular el repositorio remoto (el de internet 🌐) con el repositorio local (el del computado 💻)

```bash
echo "# nombre_proyecto" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Lucyjim07/nombre_proyecto.git
git push -u origin main
```
