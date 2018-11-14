var auto = {
    merk: "ford",
    type: "modeo",
    aantalWielen: 4,
    kleur: "blauw",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5;
        console.log(this.snelheid)
    },

    toeter: function () {
        console.log("toet!")
    }
};


auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.toeter();
