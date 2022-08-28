import { createMachine } from "xstate";

export const gameplayLoop = createMachine({
  tsTypes: {} as import("./machine.typegen").Typegen0,
  id: 'gameloop',
  initial: 'initial',
  states: {
    initial: {
      on: {
        next: "generate"
      }
    },
    generate: {
      initial: "story",
      states: {
        story: {
          on: {
            next: "updateState"
          }
        },
        updateState: {
          on: {
            next: "#gameloop.gameplay"
          }
        }
      }
    },
    gameplay: {
      initial: "userInput",
      states: {
        revealStory: {
          on: {
            next: "userInput"
          }
        },
        userInput: {
          on: {
            next: "#gameloop.calculations"
          }
        }
      },
    },
    calculations: {
      initial: "logAffects",
      states: {
        logAffects: {
          on: {
            next: "calculateWinState"
          }
        },
        calculateWinState: {
          on: {
            win: "#gameloop.winScreen",
            lose: "#gameloop.loseScreen"
          },
        },
      }
    },
    winScreen: {
      on: {
        next: "generate"
      }
    },
    loseScreen: {
      on: {
        next: "generate"
      }
    }
  }
})
