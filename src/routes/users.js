/*
const express = require('express');
const router = express.Router();

// GET users localhost:3000/users
router.get('/', 
    (requ, res) => {
        res.json(
            {users: ['Jorge', 'Letelier']}
        );
    }
);

// GET users whith id localhost:3000/users:id
router.get('/:id',
    (req, res) => {
        res.json(
            {id: req.params.id}
        );        
    }

);

module.exports = router;

*/


// Modificacion para mostrar mas datos
const express = require('express');
const router = express.Router();

// Base de datos temporal en memoria
let users = [
    {id: 1, nombre: 'Daniel', edad: 33},
    {id: 2, nombre: 'Franco', edad: 3},
    {id: 3, nombre: 'Salvador', edad: 99},

];

// GET /usuario -- obtener datos - GetAll
router.get('/', (req, res) => {
    res.json(users);
});

// GET /usuario/:id - obtener uno por id / select * from users where id = 1

router.get('/:id', (req, res) =>{
    const user = users.find(
        u => u.id === parseInt(req.params.id)
    );
    if(!user){
        return res.status(404).json(
            {error: 'Usuario no encontrado'}
        );
    }
    res.json(user);
});

module.exports = router;
