export interface Player {
    _id: string;
    steamId: number;
    clanName: string;
    name: string;
    hwid: string;
    rank: number;
    firstConnectTime: Date;
    lastConnectTime: Date;
    balance: number;
    killedPlayers: number;
    killedMutants: number;
    killedAnimals: number;
    onlineOnServerNow: boolean;
    deaths: number;
    kits?: (KitsEntity)[] | null;
    farm: Farm;
    online: number;
    raid: number;
  }
  export interface TablePlayer {
    _id: string;
    steamId: number;
    clanName: string;
    name: string;
    hwid: string;
    rank: number;
    firstConnectTime: Date;
    lastConnectTime: Date;
    balance: number;
    onlineOnServerNow: boolean;
    killedPlayers: number;
    killedMutants: number;
    killedAnimals: number;
    deaths: number;
    online: number;
    raid: number;
  }
  export interface KitsEntity {
    name: string;
    countdown: string;
    disposable: boolean;
  }
  export interface Farm {
    _id: string;
    steamId: number;
    wood: number;
    metal: number;
    sulfur: number;
    leather: number;
    cloth: number;
    fat: number;
  }
  export interface Online {
    _id: string;
    count: number;
    nicknames?: (string)[] | null;
  }
 
  export interface Clan {
    _id: string;
    name: string;
    abbr: string;
    leaderSteamId: number;
    leader: Player;
    created: string;
    balance: number;
    tax: number;
    level: number;
    experience: number;
    membersSteamIds?: (number)[] | null;
    members?: (Player)[] | null;
  }
  export interface TableClan {
    _id: string;
    name: string;
    leader: Player;
    balance: number;
    tax: number;
    level: number;
    experience: number;
    abbr: string;
   
  }