import core from "@pluralsight/ps-design-system-core";
import { css, keyframes } from "glamor";
import React from "react";

const fade = keyframes({
  "100%": {
    transform: "translateY(0)",
    opacity: 1
  }
});
const styles = {
  dialog: css({
    position: "relative",
    display: "inline-block",
    padding: core.layout.spacingLarge,
    borderRadius: "2px",
    boxShadow: `0 1px 2px rgba(0,0,0,0.5)`,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightTight,
    fontWeight: core.type.fontWeightMedium,
    transform: `translateY(${core.layout.spacingXSmall})`,
    opacity: 0,
    color: core.colors.gray05,
    background: core.colors.white,
    animation: `${fade || "psds-dialog__keyframes__fade"} ${
      core.motion.speedFast
    } ease-out forwards`,

    maxWidth: `calc(100% - (2 * ${core.layout.spacingLarge}))`,
    maxHeight: `calc(100% - (2 * ${core.layout.spacingLarge}))`
  }),
  overlay: css({
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: `rgba(0,0,0,0.5)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }),
  close: css({
    position: "absolute",
    top: core.layout.spacingXSmall,
    right: core.layout.spacingXSmall,
    display: "block",
    padding: "0",
    lineHeight: "0",
    border: "none",
    background: "none",
    cursor: "pointer",
    "& > svg": {
      height: "24px",
      width: "24px",
      fill: core.colors.gray03
    }
  })
};

export default function Dialog(props) {
  return (
    <div {...styles.overlay}>
      <CloseButton onClose={props.onClose} />
      <div {...styles.dialog}>{props.children}</div>
    </div>
  );
}

const CloseButton = props => (
  <button {...styles.close} onClick={props.onClose} aria-label="Close dialog">
    <svg
      role="img"
      aria-label="close icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12" />
    </svg>
  </button>
);
