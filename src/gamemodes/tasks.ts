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

import { Task } from "../models/Task";

// eslint-disable-next-line no-shadow
export enum TaskType {
  WHO_WOULD_RATHER = "whowouldrather",
  TRUTH_OR_DARE = "truthordare",
  TIC_TAC_TOE = "tictactoe",
  WOULD_YOU_RATHER = "wouldyourather",
  TOD_TRUTH = "truth",
  TOD_DARE = "dare",
}

export const tasks: Task[] = [
  {
    id: TaskType.WHO_WOULD_RATHER,
    targetCount: -1,
    multiAnswer: false,
  },
  {
    id: TaskType.TRUTH_OR_DARE,
    targetCount: 1,
    multiAnswer: false,
    subTasks: [TaskType.TOD_DARE, TaskType.TOD_TRUTH],
  },
  {
    id: TaskType.TIC_TAC_TOE,
    targetCount: 2,
    multiAnswer: false,
  },
  {
    id: TaskType.WOULD_YOU_RATHER,
    targetCount: -1,
    multiAnswer: true,
  },
];
