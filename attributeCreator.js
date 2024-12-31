function generateRandomAttributes() {
    const attributes = {
        IQ: Math.floor(Math.random() * 100) + 1,
        manualSkills: Math.floor(Math.random() * 100) + 1,
        athleticAbility: Math.floor(Math.random() * 100) + 1,
        charm: Math.floor(Math.random() * 100) + 1,
        creativity: Math.floor(Math.random() * 100) + 1,
    };

    return attributes;

}

module.exports = { generateRandomAttributes };