
class HotSauce {

    static hotSauces = [];

    constructor(name, label, heatScore, scovilles, flavorProfile, description, pairings, imageLink) {
        this.name = name;
        this.label = label;
        this.heatScore = heatScore;
        this.scovilles = scovilles;
        this.flavorProfile = flavorProfile;
        this.description = description;
        this.pairings = pairings;
        this.imageLink = imageLink;

        HotSauce.hotSauces.push(this);
    };
};

export default HotSauce;


