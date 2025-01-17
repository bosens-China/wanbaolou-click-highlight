import { createRequire } from "module";
const require = createRequire(import.meta.url);

const {
  version,
  author,
  description,
  license,
  greasemonkey,
  homepage,
} = require("./package.json");

export default function addNotes() {
  return {
    name: "add_notes",
    renderChunk(code) {
      const text = `
// ==UserScript==
// @name         ${greasemonkey.namespace}
// @namespace    ${homepage}
// @version      ${version}
// @description  ${description}
// @author       ${author}
// @match        ${greasemonkey.match}
// @match        ${greasemonkey.match}
// @grant        none
// @license      ${license}
// ==/UserScript==
`.trim();

      return `${text}\n${code}`;
    },
  };
}
