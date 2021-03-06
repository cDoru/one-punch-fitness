// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var ReasonReact = require("reason-react/src/ReasonReact.js");
var Title = require("./styled/Title");
var Container = require("./styled/Container");
var HeroImage = require("./styled/HeroImage");
var Description = require("./styled/Description");
var WebView$BsReactNative = require("bs-react-native/src/components/webView.js");
var TextContentContainer = require("./styled/TextContentContainer");

function make(source, resizeMode, children) {
  return ReasonReact.wrapJsForReason(
    HeroImage.default,
    {
      source: source,
      resizeMode: resizeMode,
    },
    children
  );
}

var HeroImage$1 = /* module */ [/* make */ make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Container.default, {}, children);
}

var Container$1 = /* module */ [/* make */ make$1];

function make$2(children) {
  return ReasonReact.wrapJsForReason(
    TextContentContainer.default,
    {},
    children
  );
}

var TextContentContainer$1 = /* module */ [/* make */ make$2];

function make$3(children) {
  return ReasonReact.wrapJsForReason(Title.default, {}, children);
}

var Title$1 = /* module */ [/* make */ make$3];

function make$4(children) {
  return ReasonReact.wrapJsForReason(Description.default, {}, children);
}

var Description$1 = /* module */ [/* make */ make$4];

var Styled = /* module */ [
  /* HeroImage */ HeroImage$1,
  /* Container */ Container$1,
  /* TextContentContainer */ TextContentContainer$1,
  /* Title */ Title$1,
  /* Description */ Description$1,
];

var component = ReasonReact.statelessComponent("InfoScreen");

function make$5(navigation, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    var match = navigation.state.params.url;
    if (match) {
      return ReasonReact.element(
        /* None */ 0,
        /* None */ 0,
        WebView$BsReactNative.make(
          /* Some */ [
            WebView$BsReactNative.source(
              /* Some */ [match[0]],
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* () */ 0
            ),
          ],
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* Some */ [/* true */ 1],
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0,
          /* None */ 0
        )(/* array */ [])
      );
    } else {
      return ReasonReact.element(
        /* None */ 0,
        /* None */ 0,
        make$1(
          /* array */ [
            ReasonReact.element(
              /* None */ 0,
              /* None */ 0,
              make(navigation.state.params.coverImage, "cover", /* array */ [])
            ),
            ReasonReact.element(
              /* None */ 0,
              /* None */ 0,
              make$2(
                /* array */ [
                  ReasonReact.element(
                    /* None */ 0,
                    /* None */ 0,
                    make$3(/* array */ [navigation.state.params.title])
                  ),
                  ReasonReact.element(
                    /* None */ 0,
                    /* None */ 0,
                    make$4(/* array */ [navigation.state.params.content])
                  ),
                ]
              )
            ),
          ]
        )
      );
    }
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, function(jsProps) {
  return make$5(jsProps.navigation, /* array */ []);
});

exports.Styled = Styled;
exports.component = component;
exports.make = make$5;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
