
const express = require('express');
const app = express();
const port = 3000;



// Define API routes
app.post('/patients', (req, res) => {
    // Extract patient data from the request body
    const { name, age, sex, email, problem } = req.body;

    // Dispatch a Redux action to add the patient to the store
    store.dispatch({ type: 'ADD_PATIENT', payload: { name, age, sex, email, problem } });

    res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});