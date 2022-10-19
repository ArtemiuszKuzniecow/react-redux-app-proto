import { legacy_createStore as createStore } from "redux";
import { taskReducer } from "./taskReducer";

const initialState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: false },
  { id: 5, title: "Task 5", completed: false },
  { id: 6, title: "Task 6", completed: false },
  { id: 7, title: "Task 7", completed: false },
];

export function initiateStore() {
  return createStore(taskReducer, initialState);
}
