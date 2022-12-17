export interface Clan {
    _id: string;
    name: string;
    abbr: string;
    leaderSteamId: number;
    created: string;
    balance: number;
    tax: number;
    level: number;
    experience: number;
    membersSteamIds?: (number)[] | null;
  }
  