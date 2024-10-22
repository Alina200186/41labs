
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());


app.get('/api/user', async (req, res) => {
    try {
        const response = await axios.get('https://mocki.io/v1/8940cdc2-dd61-426f-82c5-d226bb23d7ba');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving user data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
