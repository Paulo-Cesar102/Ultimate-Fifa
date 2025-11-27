export type posicao="goleiro"|"zagueiro"|"Lateral"|"meia"|"atacante";
export type raridade="bronze"|"prata"|"ouro"|"lendaria";

export type AtributosJogador={
ritmo:number;
chute:number;
drible:number;
passe:number;
defesa:number;
fisico:number;

};

export type AtributosGoleiro = {
  elasticidade: number;
  manejo: number;
  chute: number;
  reflexo: number;
  velocidade: number;
};


export interface carta{
    id:number;
    nome:String;
    posicao:posicao;
    raridade:raridade;
    AtributosJogador?:AtributosJogador;
    AtributosGoleiro?:AtributosGoleiro;
}