export const subStatTypes: readonly string[] = ['HP', 'HPP', 'ATK', 'ATKP', 'DEF', 'DEFP', 'CRITR', 'CRITD', 'ER', 'EM']

interface SubStatValuesInter {
    [key: string]: number[]
}

export const subStatValues: SubStatValuesInter = {
    "HP": [209.13, 239.00, 268.88, 298.75],
    "HPP": [4.08, 4.66, 5.25, 5.83],
    "ATK": [13.62, 15.56, 17.51, 19.45],
    'ATKP': [4.08, 4.66, 5.25, 5.83],
    'DEF': [16.20, 18.52, 20.83, 23.15],
    'DEFP': [5.10, 5.83, 6.56, 7.29],
    'CRITR': [2.72, 3.11, 3.50, 3.89],
    'CRITD': [5.44, 6.22, 6.99, 7.77],
    'ER': [4.53, 5.18, 5.83, 6.48],
    'EM': [16.32, 18.65, 20.98, 23.31]
}
