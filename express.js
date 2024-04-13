const express = require('express')

const express = express();
const port = 80;

express.listen(port, () => {
    console.log(`API Mock running at http://localhost:${port}`);
});

express.get('/', (req, res) => {
        res.send("Hello World!")
    }
)
