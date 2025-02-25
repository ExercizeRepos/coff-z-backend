const PageSection = require("../models/PageSection");

// Get the config for a specific page section
const getConfig = async (req, res) => {
    try {
        const { pageName } = req.query;
        console.log("Page Name", pageName);
        console.log("Req", req.query);
        const config = await PageSection.findOne({ pageName });

        if (!config) {
            return res.status(404).json({ message: "Page section not found" });
        }

        res.status(200).json(config);
    } catch (error) {
        res.status(500).json({ message: "Error fetching config", error: error.message });
    }
};

// Update the config for both page sections
const updateConfig = async (req, res) => {
    try {
        const payload = req.body;

        const updateOperations = Object.entries(payload).map(async ([pageName, sections]) => {
            return PageSection.findOneAndUpdate(
                { pageName },
                { sections },
                { new: true, upsert: true }
            );
        });

        await Promise.all(updateOperations);

        res.status(200).json({ message: "Config updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating config", error: error.message });
    }
};

module.exports = { getConfig, updateConfig };
