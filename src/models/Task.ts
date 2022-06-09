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

import Util from "../Util";
import { TaskType } from "../gamemodes/tasks";

export interface Task {
  id: TaskType;
  targetCount: number;
  multiAnswer: boolean;
  subTasks?: TaskType[];
}

export type Question = string;
export type Answer = string;

export type MultiAnswer = Map<number, Answer>;

export type SingleAnswerTasksExternal = {
  [key: string]: Question;
};

export type SingleAnswerTasks = Map<number, Question>;

export type MultiAnswerTaskExternal = {
  [key: string]: IMultiAnswerQuestionExternal;
};

export type MultiAnswerExternal = {
  [key: string]: Answer;
};

export type MultiAnswerTask = Map<number, MultiAnswerQuestion>;

export interface IMultiAnswerQuestion {
  question: Question;
  answers: MultiAnswer;
}

export interface IMultiAnswerQuestionExternal {
  question: Question;
  answers: MultiAnswerExternal;
}

export class MultiAnswerQuestion implements IMultiAnswerQuestion {
  question: Question;
  answers: MultiAnswer;

  constructor(question: Question, answers: MultiAnswerExternal) {
    this.question = question;
    this.answers = Util.indexedObjectToMap(answers);
  }

  static parse(input: string): MultiAnswerQuestion {
    const parsed: IMultiAnswerQuestionExternal = JSON.parse(input);
    return new MultiAnswerQuestion(parsed.question, parsed.answers);
  }

  static parseTasks(input: string): MultiAnswerTask {
    const parsed: MultiAnswerTaskExternal = JSON.parse(input);
    const data = Util.indexedObjectToMap(parsed);
    const returnData: MultiAnswerTask = new Map<number, MultiAnswerQuestion>();
    data.forEach((value, key) => {
      returnData.set(
        key,
        new MultiAnswerQuestion(value.question, value.answers)
      );
    });
    return returnData;
  }
}
