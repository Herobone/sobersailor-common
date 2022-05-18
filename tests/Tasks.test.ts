/*****************************
 * Sober Sailor - The online Party Game
 * Copyright (c) 2021.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as fs from "fs";
import { MultiAnswerQuestion } from "../src/models/Task";
import tasksJSON from "./Tasks.json";
import * as path from "path";
import { TaskType } from "../src/gamemodes/tasks";

describe("Tasks", function () {
  it("parser", function () {
    const data = fs.readFileSync(path.join(__dirname, "Tasks.json"), "utf8");
    const quest = MultiAnswerQuestion.parseTasks(data);
    expect(quest.size === 2);
    expect(tasksJSON["0"].question === quest.get(0)?.question);
  });
  it("conversion", function () {
    expect(TaskType.WHO_WOULD_RATHER === "whowouldrather");
  });
});
