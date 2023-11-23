import store from './store'

const express = require('express');
const app = express();
const port = 3000;




app.post('/patients', (req, res) => {

    const { name, age, sex, email, problem } = req.body;


    store.dispatch({ type: 'ADD_PATIENT', payload: { name, age, sex, email, problem } });

    res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});