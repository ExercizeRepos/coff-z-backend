const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const configRoutes = require("./routes/configRoutes");
const seedDatabase = require("./services/seedDatabase");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.DATABASE_URL || "mongodb://@mongo_db:27017/zealthy?authSource=admin";

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

mongoose.connection.once('open', async () => {
    await seedDatabase();
    console.log('Database seeded');
});

// Routes
app.use('/user', userRoutes);
app.use('/config', configRoutes);

// Catch all unmatched routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(5000, () => console.log("Server running on port 5000"));
