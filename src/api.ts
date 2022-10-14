import { AppState } from "./state/appStateReducer";

export const save = (payload: AppState) => {
  return fetch("http://localhost:4000/save", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error saving data");
    }
    return response.json();
  });
};

export const load = () => {
  return fetch("http://localhost:4000/load").then((response) => {
    if (!response.ok) {
      throw new Error("Error loading data");
    }
    return response.json() as Promise<AppState>;
  });
};
