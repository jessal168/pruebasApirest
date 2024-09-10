    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();
    const port = process.env.PORT || 3000;

    // Middleware para parsear el cuerpo de las solicitudes como JSON
    app.use(bodyParser.json());

    // Ruta para manejar el webhook
    app.post('/webhook', (req, res) => {
        const data = req.body;

        // Procesar los datos recibidos
        console.log('Datos recibidos del webhook:', data);

        // Responder al webhook
        res.status(200).json({ status: 'success' });
    });

    // Iniciar el servidor
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });