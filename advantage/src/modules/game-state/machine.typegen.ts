// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {};
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "calculations"
    | "calculations.calculateWinState"
    | "calculations.logAffects"
    | "gameplay"
    | "gameplay.revealStory"
    | "gameplay.userInput"
    | "generate"
    | "generate.story"
    | "generate.updateState"
    | "initial"
    | "loseScreen"
    | "winScreen"
    | {
        calculations?: "calculateWinState" | "logAffects";
        gameplay?: "revealStory" | "userInput";
        generate?: "story" | "updateState";
      };
  tags: never;
}
