import { Injectable } from '@nestjs/common';
import * as Gamedig from 'gamedig';
import { QueryResult } from 'gamedig';

interface IServerIp {
  host: string;
  port: number;
}

interface IPlayers {
  name?: string;
  score?: number;
  time?: number | string;
}

type Players = IPlayers[];

interface IQueryResult extends QueryResult {
  connect?: string;
  ping?: number;
}

@Injectable()
export class AppService {
  private playersQuery(arrayPlayers: Players): Players {
    const sortedByScore = arrayPlayers.sort((a, b) => b.score - a.score);

    const convertTime = sortedByScore.map(value => {
      let hours: string | number = Math.floor((value.time as number) / 3600);
      let minutes: string | number = Math.floor(
        ((value.time as number) - hours * 3600) / 60,
      );

      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${hours}`;
      }

      const time = `${hours}h${minutes}m`;

      return {
        ...value,
        time,
      };
    });

    return convertTime;
  }

  async serverQuery({ host, port }: IServerIp): Promise<object> {
    const serverInfo: IQueryResult = await Gamedig.query({
      type: 'csgo',
      host,
      port,
    });

    if (!serverInfo) {
      return;
    }

    const { players } = serverInfo;

    const queryPlayersResult = this.playersQuery(players).slice(
      0,
      players.length - 1,
    );

    return {
      name: serverInfo.name,
      map: serverInfo.map,
      players: queryPlayersResult,
      maxPlayers: serverInfo.maxplayers,
      passwordRequired: serverInfo.password,
      connect: serverInfo.connect,
      ping: serverInfo.ping,
    };
  }
}
