var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('areia', 'assets/areia.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/baiacu_lado.png');
    this.load.image('crustaceo', 'assets/crustaceo.png');
    this.load.image('concha', 'assets/concha.png');
    this.load.image('tubarao', 'assets/tubarao.png');
    


}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 400, 'areia').setScale(0.5);
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(130, 550, 'concha').setScale(0.5);
    this.add.image(600, 580, 'crustaceo').setScale(0.4);
    this.add.image(700, 400, 'tubarao').setScale(0.2);


    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);
    peixinho.setFlip(true, false);
}

function update() {   
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}