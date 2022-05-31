/*****************************
 * Sober Sailor - The online Party Game
 * Copyright (c) 2021-2022.
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the
 * GNU Affero General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 * PURPOSE.  See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with this program.
 * If not, see <https://www.gnu.org/licenses/>.
 */
export interface IPlayer {
  uid: string;
  nickname: string;
  sips: number;
  answer: string | null;
}

export interface IPlayerExternal {
  nickname: string;
  sips: number;
  answer: string | null;
}

export class Player implements IPlayer {
  private _lastSeen: number;
  private _online: boolean;
  private _readyState: number;

  constructor(
    readonly uid: string,
    readonly nickname: string,
    readonly sips: number,
    readonly answer: string | null,
    lastSeen: number = -1,
    online: boolean = false,
    readyState: number = -1
  ) {
    this._lastSeen = lastSeen;
    this._online = online;
    this._readyState = readyState;
  }

  get lastSeen(): number {
    return this._lastSeen;
  }

  set lastSeen(value: number) {
    this._lastSeen = value;
  }

  get online(): boolean {
    return this._online;
  }

  set online(value: boolean) {
    this._online = value;
  }

  get readyState(): number {
    return this._readyState;
  }

  set readyState(value: number) {
    this._readyState = value;
  }
}
