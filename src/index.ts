import Batalha, { PVE, PVP } from "./Batalha";
import Guerreiro from "./Guerreiros";
import ChefaoGlobal from "./ChefaoGlobal";
import Monstro from "./Monstros";

const guerreiro1 = new Guerreiro('Sett');
const guerreiro2 = new Guerreiro('Riven');
const guerreiro3 = new Guerreiro('Trundle');

for (let i = 0; i < 10; i ++) guerreiro1.levelUp();

const Decoy = new Monstro();
const Kelvezu = new ChefaoGlobal();

const pvp = new PVP(guerreiro2, guerreiro3);
const pve = new PVE(guerreiro1, [Decoy, Kelvezu]);

class BatalhaTipos extends Batalha {};

const batalhando = (listaDeBatalhas: BatalhaTipos[]) => {
  for(let i = 0; i < listaDeBatalhas.length; i ++) {
    listaDeBatalhas[i].lutar();
  }
}

export { guerreiro1, guerreiro2, guerreiro3, Decoy, Kelvezu, pvp, pve, batalhando};
