import { MainStats, Stats, SubStats, Types } from "../types/enums";

export const upgradeTiers = {
  [Stats.HPFlat]: [209, 239, 269, 299],
  [Stats.HP]: [4.1, 4.7, 5.3, 5.8],
  [Stats.ATKFlat]: [14, 16, 18, 19],
  [Stats.ATK]: [4.1, 4.7, 5.3, 5.8],
  [Stats.DEFFlat]: [16, 19, 21, 23],
  [Stats.DEF]: [5.1, 5.8, 6.6, 7.3],
  [Stats.CR]: [2.7, 3.1, 3.5, 3.9],
  [Stats.CD]: [5.4, 6.2, 7.0, 7.8],
  [Stats.ER]: [4.5, 5.2, 5.8, 6.5],
  [Stats.EM]: [16, 19, 21, 23],
} satisfies Record<SubStats, [number, number, number, number]>;

const dmgBonusChances = {
  [Stats.HPFlat]: 0.1364,
  [Stats.ATKFlat]: 0.1364,
  [Stats.DEFFlat]: 0.1364,
  [Stats.HP]: 0.0909,
  [Stats.ATK]: 0.0909,
  [Stats.DEF]: 0.0909,
  [Stats.ER]: 0.0909,
  [Stats.EM]: 0.0909,
  [Stats.CR]: 0.0682,
  [Stats.CD]: 0.0682,
} satisfies Record<SubStats, number>;

export const mainStatChances: {
  [K1 in Types]: {
    [K2 in MainStats]?: number;
  };
} = {
  [Types.Flower]: {
    [Stats.HPFlat]: 1,
  },
  [Types.Plume]: {
    [Stats.ATKFlat]: 1,
  },
  [Types.Sands]: {
    [Stats.HP]: 0.2668,
    [Stats.ATK]: 0.2666,
    [Stats.DEF]: 0.2666,
    [Stats.ER]: 0.1,
    [Stats.EM]: 0.1,
  },
  [Types.Goblet]: {
    [Stats.HP]: 0.1925,
    [Stats.ATK]: 0.1925,
    [Stats.DEF]: 0.19,
    [Stats.Pyro]: 0.05,
    [Stats.Electro]: 0.05,
    [Stats.Cryo]: 0.05,
    [Stats.Hydro]: 0.05,
    [Stats.Anemo]: 0.05,
    [Stats.Geo]: 0.05,
    [Stats.Physical]: 0.05,
    [Stats.Dendro]: 0.05,
    [Stats.EM]: 0.025,
  },
  [Types.Circlet]: {
    [Stats.HP]: 0.22,
    [Stats.ATK]: 0.22,
    [Stats.DEF]: 0.22,
    [Stats.CR]: 0.1,
    [Stats.CD]: 0.1,
    [Stats.HB]: 0.1,
    [Stats.EM]: 0.04,
  },
};

export const subStatChances: {
  [K1 in Types]: {
    [K2 in MainStats]?: {
      [K3 in SubStats]?: number;
    };
  };
} = {
  [Types.Flower]: {
    [Stats.HPFlat]: {
      [Stats.ATKFlat]: 0.1579,
      [Stats.DEFFlat]: 0.1579,
      [Stats.HP]: 0.1053,
      [Stats.ATK]: 0.1053,
      [Stats.DEF]: 0.1053,
      [Stats.ER]: 0.1053,
      [Stats.EM]: 0.1053,
      [Stats.CR]: 0.0789,
      [Stats.CD]: 0.0789,
    },
  },
  [Types.Plume]: {
    [Stats.ATKFlat]: {
      [Stats.HPFlat]: 0.1579,
      [Stats.DEFFlat]: 0.1579,
      [Stats.HP]: 0.1053,
      [Stats.ATK]: 0.1053,
      [Stats.DEF]: 0.1053,
      [Stats.ER]: 0.1053,
      [Stats.EM]: 0.1053,
      [Stats.CR]: 0.0789,
      [Stats.CD]: 0.0789,
    },
  },
  [Types.Sands]: {
    [Stats.HP]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.ATK]: 0.1,
      [Stats.DEF]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.ATK]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.HP]: 0.1,
      [Stats.DEF]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.DEF]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.HP]: 0.1,
      [Stats.ATK]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.ER]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.HP]: 0.1,
      [Stats.ATK]: 0.1,
      [Stats.DEF]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.EM]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.HP]: 0.1,
      [Stats.ATK]: 0.1,
      [Stats.DEF]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
  },
  [Types.Goblet]: {
    [Stats.HP]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.DEF]: 0.1,
      [Stats.ATK]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.ATK]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.DEF]: 0.1,
      [Stats.HP]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.DEF]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.ATK]: 0.1,
      [Stats.HP]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.Pyro]: dmgBonusChances,
    [Stats.Electro]: dmgBonusChances,
    [Stats.Cryo]: dmgBonusChances,
    [Stats.Hydro]: dmgBonusChances,
    [Stats.Anemo]: dmgBonusChances,
    [Stats.Geo]: dmgBonusChances,
    [Stats.Physical]: dmgBonusChances,
    [Stats.Dendro]: dmgBonusChances,
    [Stats.EM]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.ATK]: 0.1,
      [Stats.HP]: 0.1,
      [Stats.DEF]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
  },
  [Types.Circlet]: {
    [Stats.HP]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.DEF]: 0.1,
      [Stats.ATK]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.ATK]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.DEF]: 0.1,
      [Stats.HP]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.DEF]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.ATK]: 0.1,
      [Stats.HP]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.EM]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
    [Stats.CR]: {
      [Stats.HPFlat]: 0.1463,
      [Stats.ATKFlat]: 0.1463,
      [Stats.DEFFlat]: 0.1463,
      [Stats.ATK]: 0.0976,
      [Stats.HP]: 0.0976,
      [Stats.DEF]: 0.0976,
      [Stats.ER]: 0.0976,
      [Stats.EM]: 0.0976,
      [Stats.CD]: 0.0732,
    },
    [Stats.CD]: {
      [Stats.HPFlat]: 0.1463,
      [Stats.ATKFlat]: 0.1463,
      [Stats.DEFFlat]: 0.1463,
      [Stats.ATK]: 0.0976,
      [Stats.HP]: 0.0976,
      [Stats.DEF]: 0.0976,
      [Stats.ER]: 0.0976,
      [Stats.EM]: 0.0976,
      [Stats.CR]: 0.0732,
    },
    [Stats.HB]: dmgBonusChances,
    [Stats.EM]: {
      [Stats.HPFlat]: 0.15,
      [Stats.ATKFlat]: 0.15,
      [Stats.DEFFlat]: 0.15,
      [Stats.ATK]: 0.1,
      [Stats.HP]: 0.1,
      [Stats.DEF]: 0.1,
      [Stats.ER]: 0.1,
      [Stats.CR]: 0.075,
      [Stats.CD]: 0.075,
    },
  },
};
