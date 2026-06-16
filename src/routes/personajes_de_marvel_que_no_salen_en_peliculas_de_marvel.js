const express = require('express');
const router = express.Router();

let personajes = [
    {
        id: 1, 
        nombre: 'Squirrel Girl (Doreen Green)', 
        poder: 'Fuerza proporcional de ardilla y comunicación con ardillas', 
        edad_relativa: 20
    },
    {
        id: 2, 
        nombre: 'Mephisto', 
        poder: 'Inmortalidad, manipulación de la realidad y magia demoníaca', 
        edad_relativa: 10000
    },
    {
        id: 3, 
        nombre: 'Gwenpool (Gwendolyn Poole)', 
        poder: 'Conciencia del medio y manipulación del espacio de las viñetas', 
        edad_relativa: 19
    },
    {
        id: 4, 
        nombre: 'Franklin Richards', 
        poder: 'Alteración de la realidad a nivel cósmico y poderes psiónicos', 
        edad_relativa: 12
    }
];

// GET / -- obtener datos - GetAll
router.get('/', (req, res) => {
    res.json(personajes);
});

router.get('/:id', (req, res) => {
    const personaje = personajes.find(
        p => p.id === parseInt(req.params.id)
    );
    if (!personaje) {
        return res.status(404).json(
            { error: 'Personaje no encontrado' }
        );
    }
    res.json(personaje);
});

module.exports = router;