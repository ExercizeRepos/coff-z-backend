const PageSection = require('../models/PageSection');

const seedDatabase = async () => {
    const pages = [
        { pageName: 'page2', sections: { aboutMe: true, address: false, birthdate: false } },
        { pageName: 'page3', sections: { aboutMe: false, address: true, birthdate: true } }
    ];

    for (const page of pages) {
        const exists = await PageSection.findOne({ pageName: page.pageName });
        if (!exists) {
            await PageSection.create(page);
            console.log(`✅ Added default page: ${page.pageName}`);
        }
    }
};

module.exports = seedDatabase;