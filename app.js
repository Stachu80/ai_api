const express = require('express')

const app = express();
const port = 443;

app.listen(port, () => {
    console.log(`API Mock running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
        res.send("Hello World!")
    }
)
