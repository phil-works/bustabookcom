export declare module DataStore {

    export interface Events {
        "global-state": KeyValue[];
        "key-value"?: KeyValue[];
    }  
    
    export interface EventDetails {
      "key-value": KeyValue[];
    }
  
    export interface Value {
        bytes: string;
        type: number;
        uint: number;
    }
    
    export interface KeyValue {
        key: string;
        value: Value;
    }

    export interface Decoded {
        events: SportsEvent[]
    }

    export interface SportsEvent {
        id?: string;
        start_time?: number;
        away_team?: string;
        home_team?: string;
        away_spread?: number;
        home_spread?: number;
        away_money_line?: number;
        home_money_line?: number;
        over_under?: number;
        event_status?: string;
        event_name?: string;
        away_score?: number;
        home_score?: number;  
      }

  }
