const express = require('express');
const router = express.Router();
const Tarea = require('../modelo/TareasModel');

router.get('/', async (req, res) => {
  const tareas = await Tarea.find();
  console.log(tareas);
  res.json({
    tareas: tareas
  });
});

router.get('/:id', async (req, res) => {
  const tarea = await Tarea.findById(req.params.id);
  console.log(tarea);
  res.json({
    tarea: tarea
  });
});

router.post('/', async (req, res) => {
  const {titulo, tiempo, responsable, descripcion} = req.body;
  const tarea = new Tarea ({
    titulo: titulo,
    tiempo: tiempo,
    responsable: responsable,
    descripcion:descripcion
  });
  await tarea.save();
  res.json({
    message: 'Tarea almacenada!'
  });
});

router.put('/:id', async (req, res) => {
  const {titulo, tiempo, responsable, descripcion} = req.body;
  const tareaNueva = {
    titulo: titulo,
    tiempo: tiempo,
    responsable: responsable,
    descripcion: descripcion
  };
  await Tarea.findByIdAndUpdate(req.params.id, tareaNueva);
  res.json({
    message: 'Tarea Actualizada!'
  });
});

router.delete('/:id', async (req, res) => {
  await Tarea.findByIdAndDelete(req.params.id);
  res.json({
    message: 'La tarea se elimino!'
  });
});

module.exports = router;
