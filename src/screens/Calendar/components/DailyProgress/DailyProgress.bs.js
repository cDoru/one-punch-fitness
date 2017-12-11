// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/reasonReact.js");
var DailyProgressStyled = require("./styled/DailyProgressStyled.bs.js");

var component = ReasonReact.reducerComponent("DailyProgressFacet");

function make(currentWorkout, parentContainerWidth, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function(self) {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      Curry._2(
        DailyProgressStyled.Stats[/* Container */ 0][/* make */ 0],
        parentContainerWidth,
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            Curry._2(
              DailyProgressStyled.Stats[/* Column */ 1][/* make */ 0],
              /* None */ 0,
              /* array */ [
                currentWorkout.map(function(rf, i) {
                  return ReasonReact.element(
                    /* Some */ [Pervasives.string_of_int(i)],
                    /* None */ 0,
                    Curry._1(
                      DailyProgressStyled.Stats[/* Title */ 4][/* make */ 0],
                      /* array */ [rf[/* name */ 0]]
                    )
                  );
                }),
              ]
            )
          ),
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            Curry._2(
              DailyProgressStyled.Stats[/* Column */ 1][/* make */ 0],
              /* Some */ [/* true */ 1],
              /* array */ [
                currentWorkout.map(function(rf, i) {
                  return ReasonReact.element(
                    /* Some */ [Pervasives.string_of_int(i)],
                    /* None */ 0,
                    Curry._2(
                      DailyProgressStyled
                        .Stats[/* BarContainer */ 2][/* make */ 0],
                      /* Some */ [
                        Curry._1(self[/* reduce */ 3], function($$event) {
                          return /* MeasureMaxBarWidth */ [
                            $$event.nativeEvent.layout.width,
                          ];
                        }),
                      ],
                      /* array */ [
                        ReasonReact.element(
                          /* None */ 0,
                          /* None */ 0,
                          Curry._2(
                            DailyProgressStyled
                              .Stats[/* Bar */ 3][/* make */ 0],
                            self[/* state */ 4][/* maxBarWidth */ 0] *
                              (rf[/* amountCompleted */ 1] / rf[/* max */ 2]),
                            /* array */ []
                          )
                        ),
                      ]
                    )
                  );
                }),
              ]
            )
          ),
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            Curry._2(
              DailyProgressStyled.Stats[/* Column */ 1][/* make */ 0],
              /* None */ 0,
              /* array */ [
                currentWorkout.map(function(rf, i) {
                  var match = +(rf[/* name */ 0] === "running");
                  var tmp;
                  if (match !== 0) {
                    var match$1 = +(rf[/* amountCompleted */ 1] > 0);
                    tmp =
                      match$1 !== 0
                        ? Pervasives.string_of_float(
                            rf[/* amountCompleted */ 1]
                          ) + "km"
                        : Pervasives.string_of_int(
                            rf[/* amountCompleted */ 1] | 0
                          ) + " km";
                  } else {
                    tmp = Pervasives.string_of_int(
                      rf[/* amountCompleted */ 1] | 0
                    );
                  }
                  return ReasonReact.element(
                    /* Some */ [Pervasives.string_of_int(i)],
                    /* None */ 0,
                    Curry._1(
                      DailyProgressStyled.Stats[/* Amount */ 5][/* make */ 0],
                      /* array */ [tmp]
                    )
                  );
                }),
              ]
            )
          ),
        ]
      )
    );
  };
  newrecord[/* initialState */ 10] = function() {
    return /* record */ [/* maxBarWidth */ 0];
  };
  newrecord[/* reducer */ 12] = function(action, _) {
    return /* Update */ Block.__(0, [
      /* record */ [/* maxBarWidth */ action[0]],
    ]);
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, function(jsProps) {
  return make(
    jsProps.currentWorkout,
    jsProps.parentContainerWidth,
    /* array */ []
  );
});

var Stats = /* module */ [
  /* component */ component,
  /* make */ make,
  /* default */ $$default,
];

var component$1 = ReasonReact.reducerComponent("DailyProgress");

function make$1() {
  var newrecord = component$1.slice();
  newrecord[/* render */ 9] = function(self) {
    var workout = /* array */ [
      /* record */ [
        /* name */ "push-ups",
        /* amountCompleted */ 75,
        /* max */ 100,
      ],
      /* record */ [
        /* name */ "sit-ups",
        /* amountCompleted */ 75,
        /* max */ 100,
      ],
      /* record */ [
        /* name */ "squats",
        /* amountCompleted */ 75,
        /* max */ 100,
      ],
      /* record */ [
        /* name */ "running",
        /* amountCompleted */ 2.3,
        /* max */ 10,
      ],
    ];
    var totalComplete = [0];
    var max = [0];
    workout.forEach(function(rf) {
      totalComplete[0] += rf[/* amountCompleted */ 1];
      max[0] += rf[/* max */ 2];
      return /* () */ 0;
    });
    var percComplete = totalComplete[0] / max[0] * 100;
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      DailyProgressStyled.Container[/* make */ 0](
        /* Some */ [
          Curry._1(self[/* reduce */ 3], function($$event) {
            return /* MeasureContainerWidth */ Block.__(0, [
              $$event.nativeEvent.layout.width,
            ]);
          }),
        ],
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            DailyProgressStyled.Title[/* make */ 0](
              /* array */ ["today's workout"]
            )
          ),
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            DailyProgressStyled.Status[/* make */ 0](
              /* array */ [
                Pervasives.string_of_int(percComplete | 0) + "% complete",
              ]
            )
          ),
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make(
              workout,
              self[/* state */ 4][/* containerWidth */ 0],
              /* array */ []
            )
          ),
        ]
      )
    );
  };
  newrecord[/* initialState */ 10] = function() {
    return /* record */ [/* containerWidth */ 0, /* maxBarWidth */ 0];
  };
  newrecord[/* reducer */ 12] = function(action, state) {
    if (action.tag) {
      return /* Update */ Block.__(0, [
        /* record */ [
          /* containerWidth */ state[/* containerWidth */ 0],
          /* maxBarWidth */ action[0],
        ],
      ]);
    } else {
      return /* Update */ Block.__(0, [
        /* record */ [
          /* containerWidth */ action[0],
          /* maxBarWidth */ state[/* maxBarWidth */ 1],
        ],
      ]);
    }
  };
  return newrecord;
}

var $$default$1 = ReasonReact.wrapReasonForJs(component$1, function() {
  return make$1(/* array */ []);
});

exports.Stats = Stats;
exports.component = component$1;
exports.make = make$1;
exports.$$default = $$default$1;
exports.default = $$default$1;
exports.__esModule = true;
/* component Not a pure module */