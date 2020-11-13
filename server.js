const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors')
    server = app.listen(port, () => console.log(`Ya on TRAP PORT ${port}`));


    app.use(cors());
    app.use(express.json());

    require('./server/config/database.config');
    require('./server/routes/product.routes')(app);