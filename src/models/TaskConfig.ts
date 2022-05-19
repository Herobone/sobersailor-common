/*****************************
 * Sober Sailor - The online Party Game
 * Copyright (c) 2022.
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
import { Task } from "./Task";
import Util from "../Util";

export interface TaskStats extends Task {
  count: number;
}

export type TaskConfig = Map<string, TaskStats>;

export type TaskConfigExternal = {
  [key: string]: TaskStats;
};

export class TaskConfigFactory {
  static parse(input: string): TaskConfig {
    const parsed: TaskConfigExternal = JSON.parse(input);
    return Util.objToMap(parsed);
  }
}
