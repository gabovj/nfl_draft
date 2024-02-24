export const draftSnippet: string = `
<!DOCTYPE html>

<html lang="en">
<head><meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>main</title><script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>
<style type="text/css">
    pre { line-height: 125%; }
td.linenos .normal { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
span.linenos { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
td.linenos .special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
span.linenos.special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
.highlight .hll { background-color: var(--jp-cell-editor-active-background) }
.highlight { background: var(--jp-cell-editor-background); color: var(--jp-mirror-editor-variable-color) }
.highlight .c { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment */
.highlight .err { color: var(--jp-mirror-editor-error-color) } /* Error */
.highlight .k { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword */
.highlight .o { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator */
.highlight .p { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation */
.highlight .ch { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Multiline */
.highlight .cp { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Preproc */
.highlight .cpf { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Single */
.highlight .cs { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Special */
.highlight .kc { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Type */
.highlight .m { color: var(--jp-mirror-editor-number-color) } /* Literal.Number */
.highlight .s { color: var(--jp-mirror-editor-string-color) } /* Literal.String */
.highlight .ow { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator.Word */
.highlight .pm { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation.Marker */
.highlight .w { color: var(--jp-mirror-editor-variable-color) } /* Text.Whitespace */
.highlight .mb { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Bin */
.highlight .mf { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Float */
.highlight .mh { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Hex */
.highlight .mi { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer */
.highlight .mo { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Oct */
.highlight .sa { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Affix */
.highlight .sb { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Backtick */
.highlight .sc { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Char */
.highlight .dl { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Delimiter */
.highlight .sd { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Doc */
.highlight .s2 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Double */
.highlight .se { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Escape */
.highlight .sh { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Heredoc */
.highlight .si { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Interpol */
.highlight .sx { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Other */
.highlight .sr { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Regex */
.highlight .s1 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Single */
.highlight .ss { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Symbol */
.highlight .il { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer.Long */
  </style>
<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
 * Mozilla scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */
[data-jp-theme-scrollbars='true'] {
  scrollbar-color: rgb(var(--jp-scrollbar-thumb-color))
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar. These selectors
 * will match lower in the tree, and so will override the above */
[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
}

/* tiny scrollbar */

.jp-scrollbar-tiny {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
  scrollbar-width: thin;
}

/* tiny scrollbar */

.jp-scrollbar-tiny::-webkit-scrollbar,
.jp-scrollbar-tiny::-webkit-scrollbar-corner {
  background-color: transparent;
  height: 4px;
  width: 4px;
}

.jp-scrollbar-tiny::-webkit-scrollbar-thumb {
  background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:horizontal {
  border-left: 0 solid transparent;
  border-right: 0 solid transparent;
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:vertical {
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
}

/*
 * Lumino
 */

.lm-ScrollBar[data-orientation='horizontal'] {
  min-height: 16px;
  max-height: 16px;
  min-width: 45px;
  border-top: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] {
  min-width: 16px;
  max-width: 16px;
  min-height: 45px;
  border-left: 1px solid #a0a0a0;
}

.lm-ScrollBar-button {
  background-color: #f0f0f0;
  background-position: center center;
  min-height: 15px;
  max-height: 15px;
  min-width: 15px;
  max-width: 15px;
}

.lm-ScrollBar-button:hover {
  background-color: #dadada;
}

.lm-ScrollBar-button.lm-mod-active {
  background-color: #cdcdcd;
}

.lm-ScrollBar-track {
  background: #f0f0f0;
}

.lm-ScrollBar-thumb {
  background: #cdcdcd;
}

.lm-ScrollBar-thumb:hover {
  background: #bababa;
}

.lm-ScrollBar-thumb.lm-mod-active {
  background: #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal'] .lm-ScrollBar-thumb {
  height: 100%;
  min-width: 15px;
  border-left: 1px solid #a0a0a0;
  border-right: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] .lm-ScrollBar-thumb {
  width: 100%;
  min-height: 15px;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-left);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-right);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-up);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-down);
  background-size: 17px;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-Widget {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.lm-Widget.lm-mod-hidden {
  display: none !important;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.lm-AccordionPanel[data-orientation='horizontal'] > .lm-AccordionPanel-title {
  /* Title is rotated for horizontal accordion panel using CSS */
  display: block;
  transform-origin: top left;
  transform: rotate(-90deg) translate(-100%);
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-CommandPalette {
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-CommandPalette-search {
  flex: 0 0 auto;
}

.lm-CommandPalette-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  min-height: 0;
  overflow: auto;
  list-style-type: none;
}

.lm-CommandPalette-header {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.lm-CommandPalette-item {
  display: flex;
  flex-direction: row;
}

.lm-CommandPalette-itemIcon {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemContent {
  flex: 1 1 auto;
  overflow: hidden;
}

.lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemLabel {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.lm-close-icon {
  border: 1px solid transparent;
  background-color: transparent;
  position: absolute;
  z-index: 1;
  right: 3%;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 7px 0;
  display: none;
  vertical-align: middle;
  outline: 0;
  cursor: pointer;
}
.lm-close-icon:after {
  content: 'X';
  display: block;
  width: 15px;
  height: 15px;
  text-align: center;
  color: #000;
  font-weight: normal;
  font-size: 12px;
  cursor: pointer;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-DockPanel {
  z-index: 0;
}

.lm-DockPanel-widget {
  z-index: 0;
}

.lm-DockPanel-tabBar {
  z-index: 1;
}

.lm-DockPanel-handle {
  z-index: 2;
}

.lm-DockPanel-handle.lm-mod-hidden {
  display: none !important;
}

.lm-DockPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}

.lm-DockPanel-handle[data-orientation='horizontal'] {
  cursor: ew-resize;
}

.lm-DockPanel-handle[data-orientation='vertical'] {
  cursor: ns-resize;
}

.lm-DockPanel-handle[data-orientation='horizontal']:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}

.lm-DockPanel-handle[data-orientation='vertical']:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}

.lm-DockPanel-overlay {
  z-index: 3;
  box-sizing: border-box;
  pointer-events: none;
}

.lm-DockPanel-overlay.lm-mod-hidden {
  display: none !important;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-Menu {
  z-index: 10000;
  position: absolute;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: auto;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-Menu-content {
  margin: 0;
  padding: 0;
  display: table;
  list-style-type: none;
}

.lm-Menu-item {
  display: table-row;
}

.lm-Menu-item.lm-mod-hidden,
.lm-Menu-item.lm-mod-collapsed {
  display: none !important;
}

.lm-Menu-itemIcon,
.lm-Menu-itemSubmenuIcon {
  display: table-cell;
  text-align: center;
}

.lm-Menu-itemLabel {
  display: table-cell;
  text-align: left;
}

.lm-Menu-itemShortcut {
  display: table-cell;
  text-align: right;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-MenuBar {
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-MenuBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
}

.lm-MenuBar-item {
  box-sizing: border-box;
}

.lm-MenuBar-itemIcon,
.lm-MenuBar-itemLabel {
  display: inline-block;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-ScrollBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-ScrollBar[data-orientation='horizontal'] {
  flex-direction: row;
}

.lm-ScrollBar[data-orientation='vertical'] {
  flex-direction: column;
}

.lm-ScrollBar-button {
  box-sizing: border-box;
  flex: 0 0 auto;
}

.lm-ScrollBar-track {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
}

.lm-ScrollBar-thumb {
  box-sizing: border-box;
  position: absolute;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-SplitPanel-child {
  z-index: 0;
}

.lm-SplitPanel-handle {
  z-index: 1;
}

.lm-SplitPanel-handle.lm-mod-hidden {
  display: none !important;
}

.lm-SplitPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}

.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle {
  cursor: ew-resize;
}

.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle {
  cursor: ns-resize;
}

.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}

.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-TabBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-TabBar[data-orientation='horizontal'] {
  flex-direction: row;
  align-items: flex-end;
}

.lm-TabBar[data-orientation='vertical'] {
  flex-direction: column;
  align-items: flex-end;
}

.lm-TabBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1 1 auto;
  list-style-type: none;
}

.lm-TabBar[data-orientation='horizontal'] > .lm-TabBar-content {
  flex-direction: row;
}

.lm-TabBar[data-orientation='vertical'] > .lm-TabBar-content {
  flex-direction: column;
}

.lm-TabBar-tab {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow: hidden;
  touch-action: none; /* Disable native Drag/Drop */
}

.lm-TabBar-tabIcon,
.lm-TabBar-tabCloseIcon {
  flex: 0 0 auto;
}

.lm-TabBar-tabLabel {
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
}

.lm-TabBar-tabInput {
  user-select: all;
  width: 100%;
  box-sizing: border-box;
}

.lm-TabBar-tab.lm-mod-hidden {
  display: none !important;
}

.lm-TabBar-addButton.lm-mod-hidden {
  display: none !important;
}

.lm-TabBar.lm-mod-dragging .lm-TabBar-tab {
  position: relative;
}

.lm-TabBar.lm-mod-dragging[data-orientation='horizontal'] .lm-TabBar-tab {
  left: 0;
  transition: left 150ms ease;
}

.lm-TabBar.lm-mod-dragging[data-orientation='vertical'] .lm-TabBar-tab {
  top: 0;
  transition: top 150ms ease;
}

.lm-TabBar.lm-mod-dragging .lm-TabBar-tab.lm-mod-dragging {
  transition: none;
}

.lm-TabBar-tabLabel .lm-TabBar-tabInput {
  user-select: all;
  width: 100%;
  box-sizing: border-box;
  background: inherit;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-TabPanel-tabBar {
  z-index: 1;
}

.lm-TabPanel-stackedPanel {
  z-index: 0;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapse {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.jp-Collapse-header {
  padding: 1px 12px;
  background-color: var(--jp-layout-color1);
  border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
  color: var(--jp-ui-font-color1);
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;
}

.jp-Collapser-icon {
  height: 16px;
}

.jp-Collapse-header-collapsed .jp-Collapser-icon {
  transform: rotate(-90deg);
  margin: auto 0;
}

.jp-Collapser-title {
  line-height: 25px;
}

.jp-Collapse-contents {
  padding: 0 12px;
  background-color: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  overflow: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensureUiComponents() in @jupyterlab/buildutils */

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

/* Icons urls */

:root {
  --jp-icon-add-above: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzN18xOTQ5MikiPgo8cGF0aCBjbGFzcz0ianAtaWNvbjMiIGQ9Ik00Ljc1IDQuOTMwNjZINi42MjVWNi44MDU2NkM2LjYyNSA3LjAxMTkxIDYuNzkzNzUgNy4xODA2NiA3IDcuMTgwNjZDNy4yMDYyNSA3LjE4MDY2IDcuMzc1IDcuMDExOTEgNy4zNzUgNi44MDU2NlY0LjkzMDY2SDkuMjVDOS40NTYyNSA0LjkzMDY2IDkuNjI1IDQuNzYxOTEgOS42MjUgNC41NTU2NkM5LjYyNSA0LjM0OTQxIDkuNDU2MjUgNC4xODA2NiA5LjI1IDQuMTgwNjZINy4zNzVWMi4zMDU2NkM3LjM3NSAyLjA5OTQxIDcuMjA2MjUgMS45MzA2NiA3IDEuOTMwNjZDNi43OTM3NSAxLjkzMDY2IDYuNjI1IDIuMDk5NDEgNi42MjUgMi4zMDU2NlY0LjE4MDY2SDQuNzVDNC41NDM3NSA0LjE4MDY2IDQuMzc1IDQuMzQ5NDEgNC4zNzUgNC41NTU2NkM0LjM3NSA0Ljc2MTkxIDQuNTQzNzUgNC45MzA2NiA0Ljc1IDQuOTMwNjZaIiBmaWxsPSIjNjE2MTYxIiBzdHJva2U9IiM2MTYxNjEiIHN0cm9rZS13aWR0aD0iMC43Ii8+CjwvZz4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjUgOS41VjExLjVMMi41IDExLjVWOS41TDExLjUgOS41Wk0xMiA4QzEyLjU1MjMgOCAxMyA4LjQ0NzcyIDEzIDlWMTJDMTMgMTIuNTUyMyAxMi41NTIzIDEzIDEyIDEzTDIgMTNDMS40NDc3MiAxMyAxIDEyLjU1MjMgMSAxMlY5QzEgOC40NDc3MiAxLjQ0NzcxIDggMiA4TDEyIDhaIiBmaWxsPSIjNjE2MTYxIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzN18xOTQ5MiI+CjxyZWN0IGNsYXNzPSJqcC1pY29uMyIgd2lkdGg9IjYiIGhlaWdodD0iNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDEwIDEuNTU1NjYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==);
  --jp-icon-add-below: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzN18xOTQ5OCkiPgo8cGF0aCBjbGFzcz0ianAtaWNvbjMiIGQ9Ik05LjI1IDEwLjA2OTNMNy4zNzUgMTAuMDY5M0w3LjM3NSA4LjE5NDM0QzcuMzc1IDcuOTg4MDkgNy4yMDYyNSA3LjgxOTM0IDcgNy44MTkzNEM2Ljc5Mzc1IDcuODE5MzQgNi42MjUgNy45ODgwOSA2LjYyNSA4LjE5NDM0TDYuNjI1IDEwLjA2OTNMNC43NSAxMC4wNjkzQzQuNTQzNzUgMTAuMDY5MyA0LjM3NSAxMC4yMzgxIDQuMzc1IDEwLjQ0NDNDNC4zNzUgMTAuNjUwNiA0LjU0Mzc1IDEwLjgxOTMgNC43NSAxMC44MTkzTDYuNjI1IDEwLjgxOTNMNi42MjUgMTIuNjk0M0M2LjYyNSAxMi45MDA2IDYuNzkzNzUgMTMuMDY5MyA3IDEzLjA2OTNDNy4yMDYyNSAxMy4wNjkzIDcuMzc1IDEyLjkwMDYgNy4zNzUgMTIuNjk0M0w3LjM3NSAxMC44MTkzTDkuMjUgMTAuODE5M0M5LjQ1NjI1IDEwLjgxOTMgOS42MjUgMTAuNjUwNiA5LjYyNSAxMC40NDQzQzkuNjI1IDEwLjIzODEgOS40NTYyNSAxMC4wNjkzIDkuMjUgMTAuMDY5M1oiIGZpbGw9IiM2MTYxNjEiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLXdpZHRoPSIwLjciLz4KPC9nPgo8cGF0aCBjbGFzcz0ianAtaWNvbjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDUuNUwyLjUgMy41TDExLjUgMy41TDExLjUgNS41TDIuNSA1LjVaTTIgN0MxLjQ0NzcyIDcgMSA2LjU1MjI4IDEgNkwxIDNDMSAyLjQ0NzcyIDEuNDQ3NzIgMiAyIDJMMTIgMkMxMi41NTIzIDIgMTMgMi40NDc3MiAxMyAzTDEzIDZDMTMgNi41NTIyOSAxMi41NTIzIDcgMTIgN0wyIDdaIiBmaWxsPSIjNjE2MTYxIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzN18xOTQ5OCI+CjxyZWN0IGNsYXNzPSJqcC1pY29uMyIgd2lkdGg9IjYiIGhlaWdodD0iNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMS43NDg0NmUtMDcgMS43NDg0NmUtMDcgLTEgNCAxMy40NDQzKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=);
  --jp-icon-add: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-bell: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiPgogICA8cGF0aCBjbGFzcz0ianAtaWNvbjIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMzMzMzMzIgogICAgICBkPSJtOCAwLjI5Yy0xLjQgMC0yLjcgMC43My0zLjYgMS44LTEuMiAxLjUtMS40IDMuNC0xLjUgNS4yLTAuMTggMi4yLTAuNDQgNC0yLjMgNS4zbDAuMjggMS4zaDVjMC4wMjYgMC42NiAwLjMyIDEuMSAwLjcxIDEuNSAwLjg0IDAuNjEgMiAwLjYxIDIuOCAwIDAuNTItMC40IDAuNi0xIDAuNzEtMS41aDVsMC4yOC0xLjNjLTEuOS0wLjk3LTIuMi0zLjMtMi4zLTUuMy0wLjEzLTEuOC0wLjI2LTMuNy0xLjUtNS4yLTAuODUtMS0yLjItMS44LTMuNi0xLjh6bTAgMS40YzAuODggMCAxLjkgMC41NSAyLjUgMS4zIDAuODggMS4xIDEuMSAyLjcgMS4yIDQuNCAwLjEzIDEuNyAwLjIzIDMuNiAxLjMgNS4yaC0xMGMxLjEtMS42IDEuMi0zLjQgMS4zLTUuMiAwLjEzLTEuNyAwLjMtMy4zIDEuMi00LjQgMC41OS0wLjcyIDEuNi0xLjMgMi41LTEuM3ptLTAuNzQgMTJoMS41Yy0wLjAwMTUgMC4yOCAwLjAxNSAwLjc5LTAuNzQgMC43OS0wLjczIDAuMDAxNi0wLjcyLTAuNTMtMC43NC0wLjc5eiIgLz4KPC9zdmc+Cg==);
  --jp-icon-bug-dot: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuMTkgOEgyMFYxMEgxNy45MUMxNy45NiAxMC4zMyAxOCAxMC42NiAxOCAxMVYxMkgyMFYxNEgxOC41SDE4VjE0LjAyNzVDMTUuNzUgMTQuMjc2MiAxNCAxNi4xODM3IDE0IDE4LjVDMTQgMTkuMjA4IDE0LjE2MzUgMTkuODc3OSAxNC40NTQ5IDIwLjQ3MzlDMTMuNzA2MyAyMC44MTE3IDEyLjg3NTcgMjEgMTIgMjFDOS43OCAyMSA3Ljg1IDE5Ljc5IDYuODEgMThINFYxNkg2LjA5QzYuMDQgMTUuNjcgNiAxNS4zNCA2IDE1VjE0SDRWMTJINlYxMUM2IDEwLjY2IDYuMDQgMTAuMzMgNi4wOSAxMEg0VjhINi44MUM3LjI2IDcuMjIgNy44OCA2LjU1IDguNjIgNi4wNEw3IDQuNDFMOC40MSAzTDEwLjU5IDUuMTdDMTEuMDQgNS4wNiAxMS41MSA1IDEyIDVDMTIuNDkgNSAxMi45NiA1LjA2IDEzLjQyIDUuMTdMMTUuNTkgM0wxNyA0LjQxTDE1LjM3IDYuMDRDMTYuMTIgNi41NSAxNi43NCA3LjIyIDE3LjE5IDhaTTEwIDE2SDE0VjE0SDEwVjE2Wk0xMCAxMkgxNFYxMEgxMFYxMloiIGZpbGw9IiM2MTYxNjEiLz4KICAgICAgICA8cGF0aCBkPSJNMjIgMTguNUMyMiAyMC40MzMgMjAuNDMzIDIyIDE4LjUgMjJDMTYuNTY3IDIyIDE1IDIwLjQzMyAxNSAxOC41QzE1IDE2LjU2NyAxNi41NjcgMTUgMTguNSAxNUMyMC40MzMgMTUgMjIgMTYuNTY3IDIyIDE4LjVaIiBmaWxsPSIjNjE2MTYxIi8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-bug: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0yMCA4aC0yLjgxYy0uNDUtLjc4LTEuMDctMS40NS0xLjgyLTEuOTZMMTcgNC40MSAxNS41OSAzbC0yLjE3IDIuMTdDMTIuOTYgNS4wNiAxMi40OSA1IDEyIDVjLS40OSAwLS45Ni4wNi0xLjQxLjE3TDguNDEgMyA3IDQuNDFsMS42MiAxLjYzQzcuODggNi41NSA3LjI2IDcuMjIgNi44MSA4SDR2MmgyLjA5Yy0uMDUuMzMtLjA5LjY2LS4wOSAxdjFINHYyaDJ2MWMwIC4zNC4wNC42Ny4wOSAxSDR2MmgyLjgxYzEuMDQgMS43OSAyLjk3IDMgNS4xOSAzczQuMTUtMS4yMSA1LjE5LTNIMjB2LTJoLTIuMDljLjA1LS4zMy4wOS0uNjYuMDktMXYtMWgydi0yaC0ydi0xYzAtLjM0LS4wNC0uNjctLjA5LTFIMjBWOHptLTYgOGgtNHYtMmg0djJ6bTAtNGgtNHYtMmg0djJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-build: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE0LjkgMTcuNDVDMTYuMjUgMTcuNDUgMTcuMzUgMTYuMzUgMTcuMzUgMTVDMTcuMzUgMTMuNjUgMTYuMjUgMTIuNTUgMTQuOSAxMi41NUMxMy41NCAxMi41NSAxMi40NSAxMy42NSAxMi40NSAxNUMxMi40NSAxNi4zNSAxMy41NCAxNy40NSAxNC45IDE3LjQ1Wk0yMC4xIDE1LjY4TDIxLjU4IDE2Ljg0QzIxLjcxIDE2Ljk1IDIxLjc1IDE3LjEzIDIxLjY2IDE3LjI5TDIwLjI2IDE5LjcxQzIwLjE3IDE5Ljg2IDIwIDE5LjkyIDE5LjgzIDE5Ljg2TDE4LjA5IDE5LjE2QzE3LjczIDE5LjQ0IDE3LjMzIDE5LjY3IDE2LjkxIDE5Ljg1TDE2LjY0IDIxLjdDMTYuNjIgMjEuODcgMTYuNDcgMjIgMTYuMyAyMkgxMy41QzEzLjMyIDIyIDEzLjE4IDIxLjg3IDEzLjE1IDIxLjdMMTIuODkgMTkuODVDMTIuNDYgMTkuNjcgMTIuMDcgMTkuNDQgMTEuNzEgMTkuMTZMOS45NjAwMiAxOS44NkM5LjgxMDAyIDE5LjkyIDkuNjIwMDIgMTkuODYgOS41NDAwMiAxOS43MUw4LjE0MDAyIDE3LjI5QzguMDUwMDIgMTcuMTMgOC4wOTAwMiAxNi45NSA4LjIyMDAyIDE2Ljg0TDkuNzAwMDIgMTUuNjhMOS42NTAwMSAxNUw5LjcwMDAyIDE0LjMxTDguMjIwMDIgMTMuMTZDOC4wOTAwMiAxMy4wNSA4LjA1MDAyIDEyLjg2IDguMTQwMDIgMTIuNzFMOS41NDAwMiAxMC4yOUM5LjYyMDAyIDEwLjEzIDkuODEwMDIgMTAuMDcgOS45NjAwMiAxMC4xM0wxMS43MSAxMC44NEMxMi4wNyAxMC41NiAxMi40NiAxMC4zMiAxMi44OSAxMC4xNUwxMy4xNSA4LjI4OTk4QzEzLjE4IDguMTI5OTggMTMuMzIgNy45OTk5OCAxMy41IDcuOTk5OThIMTYuM0MxNi40NyA3Ljk5OTk4IDE2LjYyIDguMTI5OTggMTYuNjQgOC4yODk5OEwxNi45MSAxMC4xNUMxNy4zMyAxMC4zMiAxNy43MyAxMC41NiAxOC4wOSAxMC44NEwxOS44MyAxMC4xM0MyMCAxMC4wNyAyMC4xNyAxMC4xMyAyMC4yNiAxMC4yOUwyMS42NiAxMi43MUMyMS43NSAxMi44NiAyMS43MSAxMy4wNSAyMS41OCAxMy4xNkwyMC4xIDE0LjMxTDIwLjE1IDE1TDIwLjEgMTUuNjhaIi8+CiAgICA8cGF0aCBkPSJNNy4zMjk2NiA3LjQ0NDU0QzguMDgzMSA3LjAwOTU0IDguMzM5MzIgNi4wNTMzMiA3LjkwNDMyIDUuMjk5ODhDNy40NjkzMiA0LjU0NjQzIDYuNTA4MSA0LjI4MTU2IDUuNzU0NjYgNC43MTY1NkM1LjM5MTc2IDQuOTI2MDggNS4xMjY5NSA1LjI3MTE4IDUuMDE4NDkgNS42NzU5NEM0LjkxMDA0IDYuMDgwNzEgNC45NjY4MiA2LjUxMTk4IDUuMTc2MzQgNi44NzQ4OEM1LjYxMTM0IDcuNjI4MzIgNi41NzYyMiA3Ljg3OTU0IDcuMzI5NjYgNy40NDQ1NFpNOS42NTcxOCA0Ljc5NTkzTDEwLjg2NzIgNC45NTE3OUMxMC45NjI4IDQuOTc3NDEgMTEuMDQwMiA1LjA3MTMzIDExLjAzODIgNS4xODc5M0wxMS4wMzg4IDYuOTg4OTNDMTEuMDQ1NSA3LjEwMDU0IDEwLjk2MTYgNy4xOTUxOCAxMC44NTUgNy4yMTA1NEw5LjY2MDAxIDcuMzgwODNMOS4yMzkxNSA4LjEzMTg4TDkuNjY5NjEgOS4yNTc0NUM5LjcwNzI5IDkuMzYyNzEgOS42NjkzNCA5LjQ3Njk5IDkuNTc0MDggOS41MzE5OUw4LjAxNTIzIDEwLjQzMkM3LjkxMTMxIDEwLjQ5MiA3Ljc5MzM3IDEwLjQ2NzcgNy43MjEwNSAxMC4zODI0TDYuOTg3NDggOS40MzE4OEw2LjEwOTMxIDkuNDMwODNMNS4zNDcwNCAxMC4zOTA1QzUuMjg5MDkgMTAuNDcwMiA1LjE3MzgzIDEwLjQ5MDUgNS4wNzE4NyAxMC40MzM5TDMuNTEyNDUgOS41MzI5M0MzLjQxMDQ5IDkuNDc2MzMgMy4zNzY0NyA5LjM1NzQxIDMuNDEwNzUgOS4yNTY3OUwzLjg2MzQ3IDguMTQwOTNMMy42MTc0OSA3Ljc3NDg4TDMuNDIzNDcgNy4zNzg4M0wyLjIzMDc1IDcuMjEyOTdDMi4xMjY0NyA3LjE5MjM1IDIuMDQwNDkgNy4xMDM0MiAyLjA0MjQ1IDYuOTg2ODJMMi4wNDE4NyA1LjE4NTgyQzIuMDQzODMgNS4wNjkyMiAyLjExOTA5IDQuOTc5NTggMi4yMTcwNCA0Ljk2OTIyTDMuNDIwNjUgNC43OTM5M0wzLjg2NzQ5IDQuMDI3ODhMMy40MTEwNSAyLjkxNzMxQzMuMzczMzcgMi44MTIwNCAzLjQxMTMxIDIuNjk3NzYgMy41MTUyMyAyLjYzNzc2TDUuMDc0MDggMS43Mzc3NkM1LjE2OTM0IDEuNjgyNzYgNS4yODcyOSAxLjcwNzA0IDUuMzU5NjEgMS43OTIzMUw2LjExOTE1IDIuNzI3ODhMNi45ODAwMSAyLjczODkzTDcuNzI0OTYgMS43ODkyMkM3Ljc5MTU2IDEuNzA0NTggNy45MTU0OCAxLjY3OTIyIDguMDA4NzkgMS43NDA4Mkw5LjU2ODIxIDIuNjQxODJDOS42NzAxNyAyLjY5ODQyIDkuNzEyODUgMi44MTIzNCA5LjY4NzIzIDIuOTA3OTdMOS4yMTcxOCA0LjAzMzgzTDkuNDYzMTYgNC4zOTk4OEw5LjY1NzE4IDQuNzk1OTNaIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOS45LDEzLjYgMy42LDcuNCA0LjQsNi42IDkuOSwxMi4yIDE1LjQsNi43IDE2LjEsNy40ICIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNS45TDksOS43bDMuOC0zLjhsMS4yLDEuMmwtNC45LDVsLTQuOS01TDUuMiw1Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNy41TDksMTEuMmwzLjgtMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-left: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik0xMC44LDEyLjhMNy4xLDlsMy44LTMuOGwwLDcuNkgxMC44eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-right: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik03LjIsNS4yTDEwLjksOWwtMy44LDMuOFY1LjJINy4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-up-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTUuNCwxMy4zIDkuOSw3LjcgNC40LDEzLjIgMy42LDEyLjUgOS45LDYuMyAxNi4xLDEyLjYgIi8+Cgk8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-up: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik01LjIsMTAuNUw5LDYuOGwzLjgsMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-case-sensitive: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWFjY2VudDIiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTcuNiw4aDAuOWwzLjUsOGgtMS4xTDEwLDE0SDZsLTAuOSwySDRMNy42LDh6IE04LDkuMUw2LjQsMTNoMy4yTDgsOS4xeiIvPgogICAgPHBhdGggZD0iTTE2LjYsOS44Yy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjEtMC4xLTAuMi0wLjQtMC4yLTAuNyBjLTAuMywwLjMtMC42LDAuNS0wLjksMC43Yy0wLjMsMC4xLTAuNywwLjItMS4xLDAuMmMtMC4zLDAtMC41LDAtMC43LTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41IGMtMC4xLTAuMi0wLjEtMC40LTAuMS0wLjdjMC0wLjMsMC4xLTAuNiwwLjItMC44YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC41QzEyLDcsMTIuMiw2LjksMTIuNSw2LjhjMC4yLTAuMSwwLjUtMC4xLDAuNy0wLjIgYzAuMy0wLjEsMC41LTAuMSwwLjctMC4xYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjIsMCwwLjMtMC4xLDAuNC0wLjJjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC0xLTEuMS0xLTEuMy0xIGMtMC40LDAtMS40LDAtMS40LDEuMmgtMC45YzAtMC40LDAuMS0wLjcsMC4yLTFjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNDMTMuMyw0LDEzLjYsNCwxMy45LDQgYzAuMywwLDAuNSwwLDAuOCwwLjFjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41QzE2LDUsMTYsNS4yLDE2LDUuNnYyLjljMCwwLjIsMCwwLjQsMCwwLjUgYzAsMC4xLDAuMSwwLjIsMC4zLDAuMmMwLjEsMCwwLjIsMCwwLjMsMFY5Ljh6IE0xNS4yLDYuOWMtMS4yLDAuNi0zLjEsMC4yLTMuMSwxLjRjMCwxLjQsMy4xLDEsMy4xLTAuNVY2Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-circle-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-circle: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-clear: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8bWFzayBpZD0iZG9udXRIb2xlIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSJibGFjayIvPgogIDwvbWFzaz4KCiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxyZWN0IGhlaWdodD0iMTgiIHdpZHRoPSIyIiB4PSIxMSIgeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1LCAxMiwgMTIpIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgbWFzaz0idXJsKCNkb251dEhvbGUpIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-close: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1ub25lIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIGpwLWljb24zLWhvdmVyIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIi8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIGpwLWljb24tYWNjZW50Mi1ob3ZlciIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogIDwvZz4KCiAgPGcgY2xhc3M9ImpwLWljb24tbm9uZSBqcC1pY29uLWJ1c3kiIGZpbGw9Im5vbmUiPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-code-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+CiAgICA8cGF0aCBkPSJNNi41OSwzLjQxTDIsOEw2LjU5LDEyLjZMOCwxMS4xOEw0LjgyLDhMOCw0LjgyTDYuNTksMy40MU0xMi40MSwzLjQxTDExLDQuODJMMTQuMTgsOEwxMSwxMS4xOEwxMi40MSwxMi42TDE3LDhMMTIuNDEsMy40MU0yMS41OSwxMS41OUwxMy41LDE5LjY4TDkuODMsMTZMOC40MiwxNy40MUwxMy41LDIyLjVMMjMsMTNMMjEuNTksMTEuNTlaIiAvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-code: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTExLjQgMTguNkw2LjggMTRMMTEuNCA5LjRMMTAgOEw0IDE0TDEwIDIwTDExLjQgMTguNlpNMTYuNiAxOC42TDIxLjIgMTRMMTYuNiA5LjRMMTggOEwyNCAxNEwxOCAyMEwxNi42IDE4LjZWMTguNloiLz4KCTwvZz4KPC9zdmc+Cg==);
  --jp-icon-collapse-all: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTggMmMxIDAgMTEgMCAxMiAwczIgMSAyIDJjMCAxIDAgMTEgMCAxMnMwIDItMiAyQzIwIDE0IDIwIDQgMjAgNFMxMCA0IDYgNGMwLTIgMS0yIDItMnoiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE4IDhjMC0xLTEtMi0yLTJTNSA2IDQgNnMtMiAxLTIgMmMwIDEgMCAxMSAwIDEyczEgMiAyIDJjMSAwIDExIDAgMTIgMHMyLTEgMi0yYzAtMSAwLTExIDAtMTJ6bS0yIDB2MTJINFY4eiIgLz4KICAgICAgICA8cGF0aCBkPSJNNiAxM3YyaDh2LTJ6IiAvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-console: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgogIDxnIGNsYXNzPSJqcC1jb25zb2xlLWljb24tYmFja2dyb3VuZC1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMjg4RDEiPgogICAgPHBhdGggZD0iTTIwIDE5LjhoMTYwdjE1OS45SDIweiIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtY29uc29sZS1pY29uLWNvbG9yIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIj4KICAgIDxwYXRoIGQ9Ik0xMDUgMTI3LjNoNDB2MTIuOGgtNDB6TTUxLjEgNzdMNzQgOTkuOWwtMjMuMyAyMy4zIDEwLjUgMTAuNSAyMy4zLTIzLjNMOTUgOTkuOSA4NC41IDg5LjQgNjEuNiA2Ni41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-copy: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTExLjksMUgzLjJDMi40LDEsMS43LDEuNywxLjcsMi41djEwLjJoMS41VjIuNWg4LjdWMXogTTE0LjEsMy45aC04Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuMmMwLDAuOCwwLjcsMS41LDEuNSwxLjVoOCBjMC44LDAsMS41LTAuNywxLjUtMS41VjUuNEMxNS41LDQuNiwxNC45LDMuOSwxNC4xLDMuOXogTTE0LjEsMTUuNWgtOFY1LjRoOFYxNS41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-copyright: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+CiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0xMS44OCw5LjE0YzEuMjgsMC4wNiwxLjYxLDEuMTUsMS42MywxLjY2aDEuNzljLTAuMDgtMS45OC0xLjQ5LTMuMTktMy40NS0zLjE5QzkuNjQsNy42MSw4LDksOCwxMi4xNCBjMCwxLjk0LDAuOTMsNC4yNCwzLjg0LDQuMjRjMi4yMiwwLDMuNDEtMS42NSwzLjQ0LTIuOTVoLTEuNzljLTAuMDMsMC41OS0wLjQ1LDEuMzgtMS42MywxLjQ0QzEwLjU1LDE0LjgzLDEwLDEzLjgxLDEwLDEyLjE0IEMxMCw5LjI1LDExLjI4LDkuMTYsMTEuODgsOS4xNHogTTEyLDJDNi40OCwyLDIsNi40OCwyLDEyczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMxNy41MiwyLDEyLDJ6IE0xMiwyMGMtNC40MSwwLTgtMy41OS04LTggczMuNTktOCw4LThzOCwzLjU5LDgsOFMxNi40MSwyMCwxMiwyMHoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-cut: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-delete: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiAvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjI2MjYyIiBkPSJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0eiIgLz4KPC9zdmc+Cg==);
  --jp-icon-download: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-duplicate: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNzk5OTggMC44NzVIOC44OTU4MkM5LjIwMDYxIDAuODc1IDkuNDQ5OTggMS4xMzkxNCA5LjQ0OTk4IDEuNDYxOThDOS40NDk5OCAxLjc4NDgyIDkuMjAwNjEgMi4wNDg5NiA4Ljg5NTgyIDIuMDQ4OTZIMy4zNTQxNUMzLjA0OTM2IDIuMDQ4OTYgMi43OTk5OCAyLjMxMzEgMi43OTk5OCAyLjYzNTk0VjkuNjc5NjlDMi43OTk5OCAxMC4wMDI1IDIuNTUwNjEgMTAuMjY2NyAyLjI0NTgyIDEwLjI2NjdDMS45NDEwMyAxMC4yNjY3IDEuNjkxNjUgMTAuMDAyNSAxLjY5MTY1IDkuNjc5NjlWMi4wNDg5NkMxLjY5MTY1IDEuNDAzMjggMi4xOTA0IDAuODc1IDIuNzk5OTggMC44NzVaTTUuMzY2NjUgMTEuOVY0LjU1SDExLjA4MzNWMTEuOUg1LjM2NjY1Wk00LjE0MTY1IDQuMTQxNjdDNC4xNDE2NSAzLjY5MDYzIDQuNTA3MjggMy4zMjUgNC45NTgzMiAzLjMyNUgxMS40OTE3QzExLjk0MjcgMy4zMjUgMTIuMzA4MyAzLjY5MDYzIDEyLjMwODMgNC4xNDE2N1YxMi4zMDgzQzEyLjMwODMgMTIuNzU5NCAxMS45NDI3IDEzLjEyNSAxMS40OTE3IDEzLjEyNUg0Ljk1ODMyQzQuNTA3MjggMTMuMTI1IDQuMTQxNjUgMTIuNzU5NCA0LjE0MTY1IDEyLjMwODNWNC4xNDE2N1oiIGZpbGw9IiM2MTYxNjEiLz4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBkPSJNOS40MzU3NCA4LjI2NTA3SDguMzY0MzFWOS4zMzY1QzguMzY0MzEgOS40NTQzNSA4LjI2Nzg4IDkuNTUwNzggOC4xNTAwMiA5LjU1MDc4QzguMDMyMTcgOS41NTA3OCA3LjkzNTc0IDkuNDU0MzUgNy45MzU3NCA5LjMzNjVWOC4yNjUwN0g2Ljg2NDMxQzYuNzQ2NDUgOC4yNjUwNyA2LjY1MDAyIDguMTY4NjQgNi42NTAwMiA4LjA1MDc4QzYuNjUwMDIgNy45MzI5MiA2Ljc0NjQ1IDcuODM2NSA2Ljg2NDMxIDcuODM2NUg3LjkzNTc0VjYuNzY1MDdDNy45MzU3NCA2LjY0NzIxIDguMDMyMTcgNi41NTA3OCA4LjE1MDAyIDYuNTUwNzhDOC4yNjc4OCA2LjU1MDc4IDguMzY0MzEgNi42NDcyMSA4LjM2NDMxIDYuNzY1MDdWNy44MzY1SDkuNDM1NzRDOS41NTM2IDcuODM2NSA5LjY1MDAyIDcuOTMyOTIgOS42NTAwMiA4LjA1MDc4QzkuNjUwMDIgOC4xNjg2NCA5LjU1MzYgOC4yNjUwNyA5LjQzNTc0IDguMjY1MDdaIiBmaWxsPSIjNjE2MTYxIiBzdHJva2U9IiM2MTYxNjEiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPgo=);
  --jp-icon-edit: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-ellipses: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIyIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-error: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjE5IiByPSIyIi8+PHBhdGggZD0iTTEwIDNoNHYxMmgtNHoiLz48L2c+CjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KPC9zdmc+Cg==);
  --jp-icon-expand-all: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTggMmMxIDAgMTEgMCAxMiAwczIgMSAyIDJjMCAxIDAgMTEgMCAxMnMwIDItMiAyQzIwIDE0IDIwIDQgMjAgNFMxMCA0IDYgNGMwLTIgMS0yIDItMnoiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE4IDhjMC0xLTEtMi0yLTJTNSA2IDQgNnMtMiAxLTIgMmMwIDEgMCAxMSAwIDEyczEgMiAyIDJjMSAwIDExIDAgMTIgMHMyLTEgMi0yYzAtMSAwLTExIDAtMTJ6bS0yIDB2MTJINFY4eiIgLz4KICAgICAgICA8cGF0aCBkPSJNMTEgMTBIOXYzSDZ2MmgzdjNoMnYtM2gzdi0yaC0zeiIgLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-extension: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-fast-forward: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTQgMThsOC41LTZMNCA2djEyem05LTEydjEybDguNS02TDEzIDZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-file-upload: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-file: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuMyA4LjJsLTUuNS01LjVjLS4zLS4zLS43LS41LTEuMi0uNUgzLjljLS44LjEtMS42LjktMS42IDEuOHYxNC4xYzAgLjkuNyAxLjYgMS42IDEuNmgxNC4yYy45IDAgMS42LS43IDEuNi0xLjZWOS40Yy4xLS41LS4xLS45LS40LTEuMnptLTUuOC0zLjNsMy40IDMuNmgtMy40VjQuOXptMy45IDEyLjdINC43Yy0uMSAwLS4yIDAtLjItLjJWNC43YzAtLjIuMS0uMy4yLS4zaDcuMnY0LjRzMCAuOC4zIDEuMWMuMy4zIDEuMS4zIDEuMS4zaDQuM3Y3LjJzLS4xLjItLjIuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-filter-dot: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTE0LDEyVjE5Ljg4QzE0LjA0LDIwLjE4IDEzLjk0LDIwLjUgMTMuNzEsMjAuNzFDMTMuMzIsMjEuMSAxMi42OSwyMS4xIDEyLjMsMjAuNzFMMTAuMjksMTguN0MxMC4wNiwxOC40NyA5Ljk2LDE4LjE2IDEwLDE3Ljg3VjEySDkuOTdMNC4yMSw0LjYyQzMuODcsNC4xOSAzLjk1LDMuNTYgNC4zOCwzLjIyQzQuNTcsMy4wOCA0Ljc4LDMgNSwzVjNIMTlWM0MxOS4yMiwzIDE5LjQzLDMuMDggMTkuNjIsMy4yMkMyMC4wNSwzLjU2IDIwLjEzLDQuMTkgMTkuNzksNC42MkwxNC4wMywxMkgxNFoiIC8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWRvdCIgZmlsbD0iI0ZGRiI+CiAgICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjE3IiByPSIzIj48L2NpcmNsZT4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-filter-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-filter: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTE0LDEyVjE5Ljg4QzE0LjA0LDIwLjE4IDEzLjk0LDIwLjUgMTMuNzEsMjAuNzFDMTMuMzIsMjEuMSAxMi42OSwyMS4xIDEyLjMsMjAuNzFMMTAuMjksMTguN0MxMC4wNiwxOC40NyA5Ljk2LDE4LjE2IDEwLDE3Ljg3VjEySDkuOTdMNC4yMSw0LjYyQzMuODcsNC4xOSAzLjk1LDMuNTYgNC4zOCwzLjIyQzQuNTcsMy4wOCA0Ljc4LDMgNSwzVjNIMTlWM0MxOS4yMiwzIDE5LjQzLDMuMDggMTkuNjIsMy4yMkMyMC4wNSwzLjU2IDIwLjEzLDQuMTkgMTkuNzksNC42MkwxNC4wMywxMkgxNFoiIC8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-folder-favorite: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggY2xhc3M9ImpwLWljb24zIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxNjE2MSIgZD0iTTIwIDZoLThsLTItMkg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6bS0yLjA2IDExTDE1IDE1LjI4IDEyLjA2IDE3bC43OC0zLjMzLTIuNTktMi4yNCAzLjQxLS4yOUwxNSA4bDEuMzQgMy4xNCAzLjQxLjI5LTIuNTkgMi4yNC43OCAzLjMzeiIvPgo8L3N2Zz4K);
  --jp-icon-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-home: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGNsYXNzPSJqcC1pY29uMyBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xMCAyMHYtNmg0djZoNXYtOGgzTDEyIDMgMiAxMmgzdjh6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-html5: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMDAiIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzbTUzLjUtNjloMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjgtMTYuMS0yNC44VjY5aC0yMi42bTg5LjItNjloMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2U0NGQyNiIgZD0iTTEwNy42IDQ3MWwtMzMtMzcwLjRoMzYyLjhsLTMzIDM3MC4yTDI1NS43IDUxMiIvPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNmMTY1MjkiIGQ9Ik0yNTYgNDgwLjVWMTMxaDE0OC4zTDM3NiA0NDciLz4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNlYmViZWIiIGQ9Ik0xNDIgMTc2LjNoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0gxNTQuNG0yIDIyLjhIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNm0tNC4xIDQ2LjVIMjU1Ljh2NDUuNGg1NmwtNS4zIDU5LTUwLjcgMTMuNnY0Ny4ybDkzLTI1LjgiLz4KPC9zdmc+Cg==);
  --jp-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1icmFuZDQganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNGRkYiIGQ9Ik0yLjIgMi4yaDE3LjV2MTcuNUgyLjJ6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzNGNTFCNSIgZD0iTTIuMiAyLjJ2MTcuNWgxNy41bC4xLTE3LjVIMi4yem0xMi4xIDIuMmMxLjIgMCAyLjIgMSAyLjIgMi4ycy0xIDIuMi0yLjIgMi4yLTIuMi0xLTIuMi0yLjIgMS0yLjIgMi4yLTIuMnpNNC40IDE3LjZsMy4zLTguOCAzLjMgNi42IDIuMi0zLjIgNC40IDUuNEg0LjR6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-info: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUwLjk3OCA1MC45NzgiPgoJPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KCQk8cGF0aCBkPSJNNDMuNTIsNy40NThDMzguNzExLDIuNjQ4LDMyLjMwNywwLDI1LjQ4OSwwQzE4LjY3LDAsMTIuMjY2LDIuNjQ4LDcuNDU4LDcuNDU4CgkJCWMtOS45NDMsOS45NDEtOS45NDMsMjYuMTE5LDAsMzYuMDYyYzQuODA5LDQuODA5LDExLjIxMiw3LjQ1NiwxOC4wMzEsNy40NThjMCwwLDAuMDAxLDAsMC4wMDIsMAoJCQljNi44MTYsMCwxMy4yMjEtMi42NDgsMTguMDI5LTcuNDU4YzQuODA5LTQuODA5LDcuNDU3LTExLjIxMiw3LjQ1Ny0xOC4wM0M1MC45NzcsMTguNjcsNDguMzI4LDEyLjI2Niw0My41Miw3LjQ1OHoKCQkJIE00Mi4xMDYsNDIuMTA1Yy00LjQzMiw0LjQzMS0xMC4zMzIsNi44NzItMTYuNjE1LDYuODcyaC0wLjAwMmMtNi4yODUtMC4wMDEtMTIuMTg3LTIuNDQxLTE2LjYxNy02Ljg3MgoJCQljLTkuMTYyLTkuMTYzLTkuMTYyLTI0LjA3MSwwLTMzLjIzM0MxMy4zMDMsNC40NCwxOS4yMDQsMiwyNS40ODksMmM2LjI4NCwwLDEyLjE4NiwyLjQ0LDE2LjYxNyw2Ljg3MgoJCQljNC40MzEsNC40MzEsNi44NzEsMTAuMzMyLDYuODcxLDE2LjYxN0M0OC45NzcsMzEuNzcyLDQ2LjUzNiwzNy42NzUsNDIuMTA2LDQyLjEwNXoiLz4KCQk8cGF0aCBkPSJNMjMuNTc4LDMyLjIxOGMtMC4wMjMtMS43MzQsMC4xNDMtMy4wNTksMC40OTYtMy45NzJjMC4zNTMtMC45MTMsMS4xMS0xLjk5NywyLjI3Mi0zLjI1MwoJCQljMC40NjgtMC41MzYsMC45MjMtMS4wNjIsMS4zNjctMS41NzVjMC42MjYtMC43NTMsMS4xMDQtMS40NzgsMS40MzYtMi4xNzVjMC4zMzEtMC43MDcsMC40OTUtMS41NDEsMC40OTUtMi41CgkJCWMwLTEuMDk2LTAuMjYtMi4wODgtMC43NzktMi45NzljLTAuNTY1LTAuODc5LTEuNTAxLTEuMzM2LTIuODA2LTEuMzY5Yy0xLjgwMiwwLjA1Ny0yLjk4NSwwLjY2Ny0zLjU1LDEuODMyCgkJCWMtMC4zMDEsMC41MzUtMC41MDMsMS4xNDEtMC42MDcsMS44MTRjLTAuMTM5LDAuNzA3LTAuMjA3LDEuNDMyLTAuMjA3LDIuMTc0aC0yLjkzN2MtMC4wOTEtMi4yMDgsMC40MDctNC4xMTQsMS40OTMtNS43MTkKCQkJYzEuMDYyLTEuNjQsMi44NTUtMi40ODEsNS4zNzgtMi41MjdjMi4xNiwwLjAyMywzLjg3NCwwLjYwOCw1LjE0MSwxLjc1OGMxLjI3OCwxLjE2LDEuOTI5LDIuNzY0LDEuOTUsNC44MTEKCQkJYzAsMS4xNDItMC4xMzcsMi4xMTEtMC40MSwyLjkxMWMtMC4zMDksMC44NDUtMC43MzEsMS41OTMtMS4yNjgsMi4yNDNjLTAuNDkyLDAuNjUtMS4wNjgsMS4zMTgtMS43MywyLjAwMgoJCQljLTAuNjUsMC42OTctMS4zMTMsMS40NzktMS45ODcsMi4zNDZjLTAuMjM5LDAuMzc3LTAuNDI5LDAuNzc3LTAuNTY1LDEuMTk5Yy0wLjE2LDAuOTU5LTAuMjE3LDEuOTUxLTAuMTcxLDIuOTc5CgkJCUMyNi41ODksMzIuMjE4LDIzLjU3OCwzMi4yMTgsMjMuNTc4LDMyLjIxOHogTTIzLjU3OCwzOC4yMnYtMy40ODRoMy4wNzZ2My40ODRIMjMuNTc4eiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-inspector: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaW5zcGVjdG9yLWljb24tY29sb3IganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5eiIvPgo8L3N2Zz4K);
  --jp-icon-json: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtanNvbi1pY29uLWNvbG9yIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI0Y5QTgyNSI+CiAgICA8cGF0aCBkPSJNMjAuMiAxMS44Yy0xLjYgMC0xLjcuNS0xLjcgMSAwIC40LjEuOS4xIDEuMy4xLjUuMS45LjEgMS4zIDAgMS43LTEuNCAyLjMtMy41IDIuM2gtLjl2LTEuOWguNWMxLjEgMCAxLjQgMCAxLjQtLjggMC0uMyAwLS42LS4xLTEgMC0uNC0uMS0uOC0uMS0xLjIgMC0xLjMgMC0xLjggMS4zLTItMS4zLS4yLTEuMy0uNy0xLjMtMiAwLS40LjEtLjguMS0xLjIuMS0uNC4xLS43LjEtMSAwLS44LS40LS43LTEuNC0uOGgtLjVWNC4xaC45YzIuMiAwIDMuNS43IDMuNSAyLjMgMCAuNC0uMS45LS4xIDEuMy0uMS41LS4xLjktLjEgMS4zIDAgLjUuMiAxIDEuNyAxdjEuOHpNMS44IDEwLjFjMS42IDAgMS43LS41IDEuNy0xIDAtLjQtLjEtLjktLjEtMS4zLS4xLS41LS4xLS45LS4xLTEuMyAwLTEuNiAxLjQtMi4zIDMuNS0yLjNoLjl2MS45aC0uNWMtMSAwLTEuNCAwLTEuNC44IDAgLjMgMCAuNi4xIDEgMCAuMi4xLjYuMSAxIDAgMS4zIDAgMS44LTEuMyAyQzYgMTEuMiA2IDExLjcgNiAxM2MwIC40LS4xLjgtLjEgMS4yLS4xLjMtLjEuNy0uMSAxIDAgLjguMy44IDEuNC44aC41djEuOWgtLjljLTIuMSAwLTMuNS0uNi0zLjUtMi4zIDAtLjQuMS0uOS4xLTEuMy4xLS41LjEtLjkuMS0xLjMgMC0uNS0uMi0xLTEuNy0xdi0xLjl6Ii8+CiAgICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjEzLjgiIHI9IjIuMSIvPgogICAgPGNpcmNsZSBjeD0iMTEiIGN5PSI4LjIiIHI9IjIuMSIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-julia: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDMyNSAzMDAiPgogIDxnIGNsYXNzPSJqcC1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjY2IzYzMzIj4KICAgIDxwYXRoIGQ9Ik0gMTUwLjg5ODQzOCAyMjUgQyAxNTAuODk4NDM4IDI2Ni40MjE4NzUgMTE3LjMyMDMxMiAzMDAgNzUuODk4NDM4IDMwMCBDIDM0LjQ3NjU2MiAzMDAgMC44OTg0MzggMjY2LjQyMTg3NSAwLjg5ODQzOCAyMjUgQyAwLjg5ODQzOCAxODMuNTc4MTI1IDM0LjQ3NjU2MiAxNTAgNzUuODk4NDM4IDE1MCBDIDExNy4zMjAzMTIgMTUwIDE1MC44OTg0MzggMTgzLjU3ODEyNSAxNTAuODk4NDM4IDIyNSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzM4OTgyNiI+CiAgICA8cGF0aCBkPSJNIDIzNy41IDc1IEMgMjM3LjUgMTE2LjQyMTg3NSAyMDMuOTIxODc1IDE1MCAxNjIuNSAxNTAgQyAxMjEuMDc4MTI1IDE1MCA4Ny41IDExNi40MjE4NzUgODcuNSA3NSBDIDg3LjUgMzMuNTc4MTI1IDEyMS4wNzgxMjUgMCAxNjIuNSAwIEMgMjAzLjkyMTg3NSAwIDIzNy41IDMzLjU3ODEyNSAyMzcuNSA3NSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzk1NThiMiI+CiAgICA8cGF0aCBkPSJNIDMyNC4xMDE1NjIgMjI1IEMgMzI0LjEwMTU2MiAyNjYuNDIxODc1IDI5MC41MjM0MzggMzAwIDI0OS4xMDE1NjIgMzAwIEMgMjA3LjY3OTY4OCAzMDAgMTc0LjEwMTU2MiAyNjYuNDIxODc1IDE3NC4xMDE1NjIgMjI1IEMgMTc0LjEwMTU2MiAxODMuNTc4MTI1IDIwNy42Nzk2ODggMTUwIDI0OS4xMDE1NjIgMTUwIEMgMjkwLjUyMzQzOCAxNTAgMzI0LjEwMTU2MiAxODMuNTc4MTI1IDMyNC4xMDE1NjIgMjI1Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-jupyter-favicon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDE1MiAxNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGcgY2xhc3M9ImpwLWp1cHl0ZXItaWNvbi1jb2xvciIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3ODk0NywgMTEwLjU4MjkyNykiIGQ9Ik03NS45NDIyODQyLDI5LjU4MDQ1NjEgQzQzLjMwMjM5NDcsMjkuNTgwNDU2MSAxNC43OTY3ODMyLDE3LjY1MzQ2MzQgMCwwIEM1LjUxMDgzMjExLDE1Ljg0MDY4MjkgMTUuNzgxNTM4OSwyOS41NjY3NzMyIDI5LjM5MDQ5NDcsMzkuMjc4NDE3MSBDNDIuOTk5Nyw0OC45ODk4NTM3IDU5LjI3MzcsNTQuMjA2NzgwNSA3NS45NjA1Nzg5LDU0LjIwNjc4MDUgQzkyLjY0NzQ1NzksNTQuMjA2NzgwNSAxMDguOTIxNDU4LDQ4Ljk4OTg1MzcgMTIyLjUzMDY2MywzOS4yNzg0MTcxIEMxMzYuMTM5NDUzLDI5LjU2Njc3MzIgMTQ2LjQxMDI4NCwxNS44NDA2ODI5IDE1MS45MjExNTgsMCBDMTM3LjA4Nzg2OCwxNy42NTM0NjM0IDEwOC41ODI1ODksMjkuNTgwNDU2MSA3NS45NDIyODQyLDI5LjU4MDQ1NjEgTDc1Ljk0MjI4NDIsMjkuNTgwNDU2MSBaIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzczNjgsIDAuNzA0ODc4KSIgZD0iTTc1Ljk3ODQ1NzksMjQuNjI2NDA3MyBDMTA4LjYxODc2MywyNC42MjY0MDczIDEzNy4xMjQ0NTgsMzYuNTUzNDQxNSAxNTEuOTIxMTU4LDU0LjIwNjc4MDUgQzE0Ni40MTAyODQsMzguMzY2MjIyIDEzNi4xMzk0NTMsMjQuNjQwMTMxNyAxMjIuNTMwNjYzLDE0LjkyODQ4NzggQzEwOC45MjE0NTgsNS4yMTY4NDM5IDkyLjY0NzQ1NzksMCA3NS45NjA1Nzg5LDAgQzU5LjI3MzcsMCA0Mi45OTk3LDUuMjE2ODQzOSAyOS4zOTA0OTQ3LDE0LjkyODQ4NzggQzE1Ljc4MTUzODksMjQuNjQwMTMxNyA1LjUxMDgzMjExLDM4LjM2NjIyMiAwLDU0LjIwNjc4MDUgQzE0LjgzMzA4MTYsMzYuNTg5OTI5MyA0My4zMzg1Njg0LDI0LjYyNjQwNzMgNzUuOTc4NDU3OSwyNC42MjY0MDczIEw3NS45Nzg0NTc5LDI0LjYyNjQwNzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-jupyter: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAzOSA1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzOCAtMjI4MSkiPgogICAgIDxnIGNsYXNzPSJqcC1qdXB5dGVyLWljb24tY29sb3IiIGZpbGw9IiNGMzc3MjYiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5Ljc0IDIzMTEuOTgpIiBkPSJNIDE4LjI2NDYgNy4xMzQxMUMgMTAuNDE0NSA3LjEzNDExIDMuNTU4NzIgNC4yNTc2IDAgMEMgMS4zMjUzOSAzLjgyMDQgMy43OTU1NiA3LjEzMDgxIDcuMDY4NiA5LjQ3MzAzQyAxMC4zNDE3IDExLjgxNTIgMTQuMjU1NyAxMy4wNzM0IDE4LjI2OSAxMy4wNzM0QyAyMi4yODIzIDEzLjA3MzQgMjYuMTk2MyAxMS44MTUyIDI5LjQ2OTQgOS40NzMwM0MgMzIuNzQyNCA3LjEzMDgxIDM1LjIxMjYgMy44MjA0IDM2LjUzOCAwQyAzMi45NzA1IDQuMjU3NiAyNi4xMTQ4IDcuMTM0MTEgMTguMjY0NiA3LjEzNDExWiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5LjczIDIyODUuNDgpIiBkPSJNIDE4LjI3MzMgNS45MzkzMUMgMjYuMTIzNSA1LjkzOTMxIDMyLjk3OTMgOC44MTU4MyAzNi41MzggMTMuMDczNEMgMzUuMjEyNiA5LjI1MzAzIDMyLjc0MjQgNS45NDI2MiAyOS40Njk0IDMuNjAwNEMgMjYuMTk2MyAxLjI1ODE4IDIyLjI4MjMgMCAxOC4yNjkgMEMgMTQuMjU1NyAwIDEwLjM0MTcgMS4yNTgxOCA3LjA2ODYgMy42MDA0QyAzLjc5NTU2IDUuOTQyNjIgMS4zMjUzOSA5LjI1MzAzIDAgMTMuMDczNEMgMy41Njc0NSA4LjgyNDYzIDEwLjQyMzIgNS45MzkzMSAxOC4yNzMzIDUuOTM5MzFaIi8+CiAgICA8L2c+CiAgICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjY5LjMgMjI4MS4zMSkiIGQ9Ik0gNS44OTM1MyAyLjg0NEMgNS45MTg4OSAzLjQzMTY1IDUuNzcwODUgNC4wMTM2NyA1LjQ2ODE1IDQuNTE2NDVDIDUuMTY1NDUgNS4wMTkyMiA0LjcyMTY4IDUuNDIwMTUgNC4xOTI5OSA1LjY2ODUxQyAzLjY2NDMgNS45MTY4OCAzLjA3NDQ0IDYuMDAxNTEgMi40OTgwNSA1LjkxMTcxQyAxLjkyMTY2IDUuODIxOSAxLjM4NDYzIDUuNTYxNyAwLjk1NDg5OCA1LjE2NDAxQyAwLjUyNTE3IDQuNzY2MzMgMC4yMjIwNTYgNC4yNDkwMyAwLjA4MzkwMzcgMy42Nzc1N0MgLTAuMDU0MjQ4MyAzLjEwNjExIC0wLjAyMTIzIDIuNTA2MTcgMC4xNzg3ODEgMS45NTM2NEMgMC4zNzg3OTMgMS40MDExIDAuNzM2ODA5IDAuOTIwODE3IDEuMjA3NTQgMC41NzM1MzhDIDEuNjc4MjYgMC4yMjYyNTkgMi4yNDA1NSAwLjAyNzU5MTkgMi44MjMyNiAwLjAwMjY3MjI5QyAzLjYwMzg5IC0wLjAzMDcxMTUgNC4zNjU3MyAwLjI0OTc4OSA0Ljk0MTQyIDAuNzgyNTUxQyA1LjUxNzExIDEuMzE1MzEgNS44NTk1NiAyLjA1Njc2IDUuODkzNTMgMi44NDRaIi8+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzkuOCAyMzIzLjgxKSIgZD0iTSA3LjQyNzg5IDMuNTgzMzhDIDcuNDYwMDggNC4zMjQzIDcuMjczNTUgNS4wNTgxOSA2Ljg5MTkzIDUuNjkyMTNDIDYuNTEwMzEgNi4zMjYwNyA1Ljk1MDc1IDYuODMxNTYgNS4yODQxMSA3LjE0NDZDIDQuNjE3NDcgNy40NTc2MyAzLjg3MzcxIDcuNTY0MTQgMy4xNDcwMiA3LjQ1MDYzQyAyLjQyMDMyIDcuMzM3MTIgMS43NDMzNiA3LjAwODcgMS4yMDE4NCA2LjUwNjk1QyAwLjY2MDMyOCA2LjAwNTIgMC4yNzg2MSA1LjM1MjY4IDAuMTA1MDE3IDQuNjMyMDJDIC0wLjA2ODU3NTcgMy45MTEzNSAtMC4wMjYyMzYxIDMuMTU0OTQgMC4yMjY2NzUgMi40NTg1NkMgMC40Nzk1ODcgMS43NjIxNyAwLjkzMTY5NyAxLjE1NzEzIDEuNTI1NzYgMC43MjAwMzNDIDIuMTE5ODMgMC4yODI5MzUgMi44MjkxNCAwLjAzMzQzOTUgMy41NjM4OSAwLjAwMzEzMzQ0QyA0LjU0NjY3IC0wLjAzNzQwMzMgNS41MDUyOSAwLjMxNjcwNiA2LjIyOTYxIDAuOTg3ODM1QyA2Ljk1MzkzIDEuNjU4OTYgNy4zODQ4NCAyLjU5MjM1IDcuNDI3ODkgMy41ODMzOEwgNy40Mjc4OSAzLjU4MzM4WiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM4LjM2IDIyODYuMDYpIiBkPSJNIDIuMjc0NzEgNC4zOTYyOUMgMS44NDM2MyA0LjQxNTA4IDEuNDE2NzEgNC4zMDQ0NSAxLjA0Nzk5IDQuMDc4NDNDIDAuNjc5MjY4IDMuODUyNCAwLjM4NTMyOCAzLjUyMTE0IDAuMjAzMzcxIDMuMTI2NTZDIDAuMDIxNDEzNiAyLjczMTk4IC0wLjA0MDM3OTggMi4yOTE4MyAwLjAyNTgxMTYgMS44NjE4MUMgMC4wOTIwMDMxIDEuNDMxOCAwLjI4MzIwNCAxLjAzMTI2IDAuNTc1MjEzIDAuNzEwODgzQyAwLjg2NzIyMiAwLjM5MDUxIDEuMjQ2OTEgMC4xNjQ3MDggMS42NjYyMiAwLjA2MjA1OTJDIDIuMDg1NTMgLTAuMDQwNTg5NyAyLjUyNTYxIC0wLjAxNTQ3MTQgMi45MzA3NiAwLjEzNDIzNUMgMy4zMzU5MSAwLjI4Mzk0MSAzLjY4NzkyIDAuNTUxNTA1IDMuOTQyMjIgMC45MDMwNkMgNC4xOTY1MiAxLjI1NDYyIDQuMzQxNjkgMS42NzQzNiA0LjM1OTM1IDIuMTA5MTZDIDQuMzgyOTkgMi42OTEwNyA0LjE3Njc4IDMuMjU4NjkgMy43ODU5NyAzLjY4NzQ2QyAzLjM5NTE2IDQuMTE2MjQgMi44NTE2NiA0LjM3MTE2IDIuMjc0NzEgNC4zOTYyOUwgMi4yNzQ3MSA0LjM5NjI5WiIvPgogICAgPC9nPgogIDwvZz4+Cjwvc3ZnPgo=);
  --jp-icon-jupyterlab-wordmark: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIHZpZXdCb3g9IjAgMCAxODYwLjggNDc1Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0RTRFNEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4MC4xMzY0MDEsIDY0LjI3MTQ5MykiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDU4Ljg3NTU2NikiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NzYwMywgMC4xNDAyOTQpIj4KICAgICAgICA8cGF0aCBkPSJNLTQyNi45LDE2OS44YzAsNDguNy0zLjcsNjQuNy0xMy42LDc2LjRjLTEwLjgsMTAtMjUsMTUuNS0zOS43LDE1LjVsMy43LDI5IGMyMi44LDAuMyw0NC44LTcuOSw2MS45LTIzLjFjMTcuOC0xOC41LDI0LTQ0LjEsMjQtODMuM1YwSC00Mjd2MTcwLjFMLTQyNi45LDE2OS44TC00MjYuOSwxNjkuOHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1LjA0NTI5NiwgNTYuODM3MTA0KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTYyNDUzLCAxLjc5OTg0MikiPgogICAgICAgIDxwYXRoIGQ9Ik0tMzEyLDE0OGMwLDIxLDAsMzkuNSwxLjcsNTUuNGgtMzEuOGwtMi4xLTMzLjNoLTAuOGMtNi43LDExLjYtMTYuNCwyMS4zLTI4LDI3LjkgYy0xMS42LDYuNi0yNC44LDEwLTM4LjIsOS44Yy0zMS40LDAtNjktMTcuNy02OS04OVYwaDM2LjR2MTEyLjdjMCwzOC43LDExLjYsNjQuNyw0NC42LDY0LjdjMTAuMy0wLjIsMjAuNC0zLjUsMjguOS05LjQgYzguNS01LjksMTUuMS0xNC4zLDE4LjktMjMuOWMyLjItNi4xLDMuMy0xMi41LDMuMy0xOC45VjAuMmgzNi40VjE0OEgtMzEyTC0zMTIsMTQ4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAuMDEzMzIyLCA1My40Nzk2MzgpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43MDY0NTgsIDAuMjMxNDI1KSI+CiAgICAgICAgPHBhdGggZD0iTS00NzguNiw3MS40YzAtMjYtMC44LTQ3LTEuNy02Ni43aDMyLjdsMS43LDM0LjhoMC44YzcuMS0xMi41LDE3LjUtMjIuOCwzMC4xLTI5LjcgYzEyLjUtNywyNi43LTEwLjMsNDEtOS44YzQ4LjMsMCw4NC43LDQxLjcsODQuNywxMDMuM2MwLDczLjEtNDMuNywxMDkuMi05MSwxMDkuMmMtMTIuMSwwLjUtMjQuMi0yLjItMzUtNy44IGMtMTAuOC01LjYtMTkuOS0xMy45LTI2LjYtMjQuMmgtMC44VjI5MWgtMzZ2LTIyMEwtNDc4LjYsNzEuNEwtNDc4LjYsNzEuNHogTS00NDIuNiwxMjUuNmMwLjEsNS4xLDAuNiwxMC4xLDEuNywxNS4xIGMzLDEyLjMsOS45LDIzLjMsMTkuOCwzMS4xYzkuOSw3LjgsMjIuMSwxMi4xLDM0LjcsMTIuMWMzOC41LDAsNjAuNy0zMS45LDYwLjctNzguNWMwLTQwLjctMjEuMS03NS42LTU5LjUtNzUuNiBjLTEyLjksMC40LTI1LjMsNS4xLTM1LjMsMTMuNGMtOS45LDguMy0xNi45LDE5LjctMTkuNiwzMi40Yy0xLjUsNC45LTIuMywxMC0yLjUsMTUuMVYxMjUuNkwtNDQyLjYsMTI1LjZMLTQ0Mi42LDEyNS42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuNzQwNzI2LCA1Ni44MzcxMDQpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NTEyMjYsIDEuOTg5Mjk5KSI+CiAgICAgICAgPHBhdGggZD0iTS00NDAuOCwwbDQzLjcsMTIwLjFjNC41LDEzLjQsOS41LDI5LjQsMTIuOCw0MS43aDAuOGMzLjctMTIuMiw3LjktMjcuNywxMi44LTQyLjQgbDM5LjctMTE5LjJoMzguNUwtMzQ2LjksMTQ1Yy0yNiw2OS43LTQzLjcsMTA1LjQtNjguNiwxMjcuMmMtMTIuNSwxMS43LTI3LjksMjAtNDQuNiwyMy45bC05LjEtMzEuMSBjMTEuNy0zLjksMjIuNS0xMC4xLDMxLjgtMTguMWMxMy4yLTExLjEsMjMuNy0yNS4yLDMwLjYtNDEuMmMxLjUtMi44LDIuNS01LjcsMi45LTguOGMtMC4zLTMuMy0xLjItNi42LTIuNS05LjdMLTQ4MC4yLDAuMSBoMzkuN0wtNDQwLjgsMEwtNDQwLjgsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyLjc0ODEwNCwgMC4wMDAwMDApIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40NjQwNTAsIDAuMzc4OTE0KSI+CiAgICAgICAgPHBhdGggZD0iTS00MTMuNywwdjU4LjNoNTJ2MjguMmgtNTJWMTk2YzAsMjUsNywzOS41LDI3LjMsMzkuNWM3LjEsMC4xLDE0LjItMC43LDIxLjEtMi41IGwxLjcsMjcuN2MtMTAuMywzLjctMjEuMyw1LjQtMzIuMiw1Yy03LjMsMC40LTE0LjYtMC43LTIxLjMtMy40Yy02LjgtMi43LTEyLjktNi44LTE3LjktMTIuMWMtMTAuMy0xMC45LTE0LjEtMjktMTQuMS01Mi45IFY4Ni41aC0zMVY1OC4zaDMxVjkuNkwtNDEzLjcsMEwtNDEzLjcsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc0LjQzMzI4NiwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTkwMDM0LCAwLjYxMDMzOSkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDQ1LjgsMTEzYzAuOCw1MCwzMi4yLDcwLjYsNjguNiw3MC42YzE5LDAuNiwzNy45LTMsNTUuMy0xMC41bDYuMiwyNi40IGMtMjAuOSw4LjktNDMuNSwxMy4xLTY2LjIsMTIuNmMtNjEuNSwwLTk4LjMtNDEuMi05OC4zLTEwMi41Qy00ODAuMiw0OC4yLTQ0NC43LDAtMzg2LjUsMGM2NS4yLDAsODIuNyw1OC4zLDgyLjcsOTUuNyBjLTAuMSw1LjgtMC41LDExLjUtMS4yLDE3LjJoLTE0MC42SC00NDUuOEwtNDQ1LjgsMTEzeiBNLTMzOS4yLDg2LjZjMC40LTIzLjUtOS41LTYwLjEtNTAuNC02MC4xIGMtMzYuOCwwLTUyLjgsMzQuNC01NS43LDYwLjFILTMzOS4yTC0zMzkuMiw4Ni42TC0zMzkuMiw4Ni42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAxLjk2MTA1OCwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTc5NjQwLCAwLjcwNTA2OCkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDc4LjYsNjhjMC0yMy45LTAuNC00NC41LTEuNy02My40aDMxLjhsMS4yLDM5LjloMS43YzkuMS0yNy4zLDMxLTQ0LjUsNTUuMy00NC41IGMzLjUtMC4xLDcsMC40LDEwLjMsMS4ydjM0LjhjLTQuMS0wLjktOC4yLTEuMy0xMi40LTEuMmMtMjUuNiwwLTQzLjcsMTkuNy00OC43LDQ3LjRjLTEsNS43LTEuNiwxMS41LTEuNywxNy4ydjEwOC4zaC0zNlY2OCBMLTQ3OC42LDY4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCBkPSJNMTM1Mi4zLDMyNi4yaDM3VjI4aC0zN1YzMjYuMnogTTE2MDQuOCwzMjYuMmMtMi41LTEzLjktMy40LTMxLjEtMy40LTQ4Ljd2LTc2IGMwLTQwLjctMTUuMS04My4xLTc3LjMtODMuMWMtMjUuNiwwLTUwLDcuMS02Ni44LDE4LjFsOC40LDI0LjRjMTQuMy05LjIsMzQtMTUuMSw1My0xNS4xYzQxLjYsMCw0Ni4yLDMwLjIsNDYuMiw0N3Y0LjIgYy03OC42LTAuNC0xMjIuMywyNi41LTEyMi4zLDc1LjZjMCwyOS40LDIxLDU4LjQsNjIuMiw1OC40YzI5LDAsNTAuOS0xNC4zLDYyLjItMzAuMmgxLjNsMi45LDI1LjZIMTYwNC44eiBNMTU2NS43LDI1Ny43IGMwLDMuOC0wLjgsOC0yLjEsMTEuOGMtNS45LDE3LjItMjIuNywzNC00OS4yLDM0Yy0xOC45LDAtMzQuOS0xMS4zLTM0LjktMzUuM2MwLTM5LjUsNDUuOC00Ni42LDg2LjItNDUuOFYyNTcuN3ogTTE2OTguNSwzMjYuMiBsMS43LTMzLjZoMS4zYzE1LjEsMjYuOSwzOC43LDM4LjIsNjguMSwzOC4yYzQ1LjQsMCw5MS4yLTM2LjEsOTEuMi0xMDguOGMwLjQtNjEuNy0zNS4zLTEwMy43LTg1LjctMTAzLjcgYy0zMi44LDAtNTYuMywxNC43LTY5LjMsMzcuNGgtMC44VjI4aC0zNi42djI0NS43YzAsMTguMS0wLjgsMzguNi0xLjcsNTIuNUgxNjk4LjV6IE0xNzA0LjgsMjA4LjJjMC01LjksMS4zLTEwLjksMi4xLTE1LjEgYzcuNi0yOC4xLDMxLjEtNDUuNCw1Ni4zLTQ1LjRjMzkuNSwwLDYwLjUsMzQuOSw2MC41LDc1LjZjMCw0Ni42LTIzLjEsNzguMS02MS44LDc4LjFjLTI2LjksMC00OC4zLTE3LjYtNTUuNS00My4zIGMtMC44LTQuMi0xLjctOC44LTEuNy0xMy40VjIwOC4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzYxNjE2MSIgZD0iTTE1IDlIOXY2aDZWOXptLTIgNGgtMnYtMmgydjJ6bTgtMlY5aC0yVjdjMC0xLjEtLjktMi0yLTJoLTJWM2gtMnYyaC0yVjNIOXYySDdjLTEuMSAwLTIgLjktMiAydjJIM3YyaDJ2MkgzdjJoMnYyYzAgMS4xLjkgMiAyIDJoMnYyaDJ2LTJoMnYyaDJ2LTJoMmMxLjEgMCAyLS45IDItMnYtMmgydi0yaC0ydi0yaDJ6bS00IDZIN1Y3aDEwdjEweiIvPgo8L3N2Zz4K);
  --jp-icon-keyboard: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMTdjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tOSAzaDJ2MmgtMlY4em0wIDNoMnYyaC0ydi0yek04IDhoMnYySDhWOHptMCAzaDJ2Mkg4di0yem0tMSAySDV2LTJoMnYyem0wLTNINVY4aDJ2MnptOSA3SDh2LTJoOHYyem0wLTRoLTJ2LTJoMnYyem0wLTNoLTJWOGgydjJ6bTMgM2gtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnoiLz4KPC9zdmc+Cg==);
  --jp-icon-launch: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0yNiwyOEg2YTIuMDAyNywyLjAwMjcsMCwwLDEtMi0yVjZBMi4wMDI3LDIuMDAyNywwLDAsMSw2LDRIMTZWNkg2VjI2SDI2VjE2aDJWMjZBMi4wMDI3LDIuMDAyNywwLDAsMSwyNiwyOFoiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMjAgMiAyMCA0IDI2LjU4NiA0IDE4IDEyLjU4NiAxOS40MTQgMTQgMjggNS40MTQgMjggMTIgMzAgMTIgMzAgMiAyMCAyIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-launcher: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkgMTlINVY1aDdWM0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+Cg==);
  --jp-icon-line-form: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNS44OCA0LjEyTDEzLjc2IDEybC03Ljg4IDcuODhMOCAyMmwxMC0xMEw4IDJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-link: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xOSA1djE0SDVWNWgxNG0xLjEtMkgzLjljLS41IDAtLjkuNC0uOS45djE2LjJjMCAuNC40LjkuOS45aDE2LjJjLjQgMCAuOS0uNS45LS45VjMuOWMwLS41LS41LS45LS45LS45ek0xMSA3aDZ2MmgtNlY3em0wIDRoNnYyaC02di0yem0wIDRoNnYyaC02ek03IDdoMnYySDd6bTAgNGgydjJIN3ptMCA0aDJ2Mkg3eiIvPgo8L3N2Zz4K);
  --jp-icon-markdown: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjN0IxRkEyIiBkPSJNNSAxNC45aDEybC02LjEgNnptOS40LTYuOGMwLTEuMy0uMS0yLjktLjEtNC41LS40IDEuNC0uOSAyLjktMS4zIDQuM2wtMS4zIDQuM2gtMkw4LjUgNy45Yy0uNC0xLjMtLjctMi45LTEtNC4zLS4xIDEuNi0uMSAzLjItLjIgNC42TDcgMTIuNEg0LjhsLjctMTFoMy4zTDEwIDVjLjQgMS4yLjcgMi43IDEgMy45LjMtMS4yLjctMi42IDEtMy45bDEuMi0zLjdoMy4zbC42IDExaC0yLjRsLS4zLTQuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-move-down: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBkPSJNMTIuNDcxIDcuNTI4OTlDMTIuNzYzMiA3LjIzNjg0IDEyLjc2MzIgNi43NjMxNiAxMi40NzEgNi40NzEwMVY2LjQ3MTAxQzEyLjE3OSA2LjE3OTA1IDExLjcwNTcgNi4xNzg4NCAxMS40MTM1IDYuNDcwNTRMNy43NSAxMC4xMjc1VjEuNzVDNy43NSAxLjMzNTc5IDcuNDE0MjEgMSA3IDFWMUM2LjU4NTc5IDEgNi4yNSAxLjMzNTc5IDYuMjUgMS43NVYxMC4xMjc1TDIuNTk3MjYgNi40NjgyMkMyLjMwMzM4IDYuMTczODEgMS44MjY0MSA2LjE3MzU5IDEuNTMyMjYgNi40Njc3NFY2LjQ2Nzc0QzEuMjM4MyA2Ljc2MTcgMS4yMzgzIDcuMjM4MyAxLjUzMjI2IDcuNTMyMjZMNi4yOTI4OSAxMi4yOTI5QzYuNjgzNDIgMTIuNjgzNCA3LjMxNjU4IDEyLjY4MzQgNy43MDcxMSAxMi4yOTI5TDEyLjQ3MSA3LjUyODk5WiIgZmlsbD0iIzYxNjE2MSIvPgo8L3N2Zz4K);
  --jp-icon-move-up: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBkPSJNMS41Mjg5OSA2LjQ3MTAxQzEuMjM2ODQgNi43NjMxNiAxLjIzNjg0IDcuMjM2ODQgMS41Mjg5OSA3LjUyODk5VjcuNTI4OTlDMS44MjA5NSA3LjgyMDk1IDIuMjk0MjYgNy44MjExNiAyLjU4NjQ5IDcuNTI5NDZMNi4yNSAzLjg3MjVWMTIuMjVDNi4yNSAxMi42NjQyIDYuNTg1NzkgMTMgNyAxM1YxM0M3LjQxNDIxIDEzIDcuNzUgMTIuNjY0MiA3Ljc1IDEyLjI1VjMuODcyNUwxMS40MDI3IDcuNTMxNzhDMTEuNjk2NiA3LjgyNjE5IDEyLjE3MzYgNy44MjY0MSAxMi40Njc3IDcuNTMyMjZWNy41MzIyNkMxMi43NjE3IDcuMjM4MyAxMi43NjE3IDYuNzYxNyAxMi40Njc3IDYuNDY3NzRMNy43MDcxMSAxLjcwNzExQzcuMzE2NTggMS4zMTY1OCA2LjY4MzQyIDEuMzE2NTggNi4yOTI4OSAxLjcwNzExTDEuNTI4OTkgNi40NzEwMVoiIGZpbGw9IiM2MTYxNjEiLz4KPC9zdmc+Cg==);
  --jp-icon-new-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-not-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMTkgMTcuMTg0NCAyLjk2OTY4IDE0LjMwMzIgMS44NjA5NCAxMS40NDA5WiIvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24yIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zMTU5MiA5LjMyMDMxKSIgZD0iTTcuMzY4NDIgMEwwIDcuMzY0NzkiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzE1OTIgMTYuNjgzNikgc2NhbGUoMSAtMSkiIGQ9Ik03LjM2ODQyIDBMMCA3LjM2NDc5Ii8+Cjwvc3ZnPgo=);
  --jp-icon-notebook: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtbm90ZWJvb2staWNvbi1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNFRjZDMDAiPgogICAgPHBhdGggZD0iTTE4LjcgMy4zdjE1LjRIMy4zVjMuM2gxNS40bTEuNS0xLjVIMS44djE4LjNoMTguM2wuMS0xOC4zeiIvPgogICAgPHBhdGggZD0iTTE2LjUgMTYuNWwtNS40LTQuMy01LjYgNC4zdi0xMWgxMXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-numbering: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTQgMTlINlYxOS41SDVWMjAuNUg2VjIxSDRWMjJIN1YxOEg0VjE5Wk01IDEwSDZWNkg0VjdINVYxMFpNNCAxM0g1LjhMNCAxNS4xVjE2SDdWMTVINS4yTDcgMTIuOVYxMkg0VjEzWk05IDdWOUgyM1Y3SDlaTTkgMjFIMjNWMTlIOVYyMVpNOSAxNUgyM1YxM0g5VjE1WiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-offline-bolt: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDIuMDJjLTUuNTEgMC05Ljk4IDQuNDctOS45OCA5Ljk4czQuNDcgOS45OCA5Ljk4IDkuOTggOS45OC00LjQ3IDkuOTgtOS45OFMxNy41MSAyLjAyIDEyIDIuMDJ6TTExLjQ4IDIwdi02LjI2SDhMMTMgNHY2LjI2aDMuMzVMMTEuNDggMjB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-palette: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE4IDEzVjIwSDRWNkg5LjAyQzkuMDcgNS4yOSA5LjI0IDQuNjIgOS41IDRINEMyLjkgNCAyIDQuOSAyIDZWMjBDMiAyMS4xIDIuOSAyMiA0IDIySDE4QzE5LjEgMjIgMjAgMjEuMSAyMCAyMFYxNUwxOCAxM1pNMTkuMyA4Ljg5QzE5Ljc0IDguMTkgMjAgNy4zOCAyMCA2LjVDMjAgNC4wMSAxNy45OSAyIDE1LjUgMkMxMy4wMSAyIDExIDQuMDEgMTEgNi41QzExIDguOTkgMTMuMDEgMTEgMTUuNDkgMTFDMTYuMzcgMTEgMTcuMTkgMTAuNzQgMTcuODggMTAuM0wyMSAxMy40MkwyMi40MiAxMkwxOS4zIDguODlaTTE1LjUgOUMxNC4xMiA5IDEzIDcuODggMTMgNi41QzEzIDUuMTIgMTQuMTIgNCAxNS41IDRDMTYuODggNCAxOCA1LjEyIDE4IDYuNUMxOCA3Ljg4IDE2Ljg4IDkgMTUuNSA5WiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDZIOS4wMTg5NEM5LjAwNjM5IDYuMTY1MDIgOSA2LjMzMTc2IDkgNi41QzkgOC44MTU3NyAxMC4yMTEgMTAuODQ4NyAxMi4wMzQzIDEySDlWMTRIMTZWMTIuOTgxMUMxNi41NzAzIDEyLjkzNzcgMTcuMTIgMTIuODIwNyAxNy42Mzk2IDEyLjYzOTZMMTggMTNWMjBINFY2Wk04IDhINlYxMEg4VjhaTTYgMTJIOFYxNEg2VjEyWk04IDE2SDZWMThIOFYxNlpNOSAxNkgxNlYxOEg5VjE2WiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-paste: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-pdf: url(data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMiIgd2lkdGg9IjE2Ij4KICAgIDxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDQ1KSIgY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI0ZGMkEyQSIKICAgICAgIGQ9Im0gMjIuMzQ0MzY5LC0zLjAxNjM2NDIgaCA1LjYzODYwNCB2IDEuNTc5MjQzMyBoIC0zLjU0OTIyNyB2IDEuNTA4NjkyOTkgaCAzLjMzNzU3NiBWIDEuNjUwODE1NCBoIC0zLjMzNzU3NiB2IDMuNDM1MjYxMyBoIC0yLjA4OTM3NyB6IG0gLTcuMTM2NDQ0LDEuNTc5MjQzMyB2IDQuOTQzOTU0MyBoIDAuNzQ4OTIgcSAxLjI4MDc2MSwwIDEuOTUzNzAzLC0wLjYzNDk1MzUgMC42NzgzNjksLTAuNjM0OTUzNSAwLjY3ODM2OSwtMS44NDUxNjQxIDAsLTEuMjA0NzgzNTUgLTAuNjcyOTQyLC0xLjgzNDMxMDExIC0wLjY3Mjk0MiwtMC42Mjk1MjY1OSAtMS45NTkxMywtMC42Mjk1MjY1OSB6IG0gLTIuMDg5Mzc3LC0xLjU3OTI0MzMgaCAyLjIwMzM0MyBxIDEuODQ1MTY0LDAgMi43NDYwMzksMC4yNjU5MjA3IDAuOTA2MzAxLDAuMjYwNDkzNyAxLjU1MjEwOCwwLjg5MDAyMDMgMC41Njk4MywwLjU0ODEyMjMgMC44NDY2MDUsMS4yNjQ0ODAwNiAwLjI3Njc3NCwwLjcxNjM1NzgxIDAuMjc2Nzc0LDEuNjIyNjU4OTQgMCwwLjkxNzE1NTEgLTAuMjc2Nzc0LDEuNjM4OTM5OSAtMC4yNzY3NzUsMC43MTYzNTc4IC0wLjg0NjYwNSwxLjI2NDQ4IC0wLjY1MTIzNCwwLjYyOTUyNjYgLTEuNTYyOTYyLDAuODk1NDQ3MyAtMC45MTE3MjgsMC4yNjA0OTM3IC0yLjczNTE4NSwwLjI2MDQ5MzcgaCAtMi4yMDMzNDMgeiBtIC04LjE0NTg1NjUsMCBoIDMuNDY3ODIzIHEgMS41NDY2ODE2LDAgMi4zNzE1Nzg1LDAuNjg5MjIzIDAuODMwMzI0LDAuNjgzNzk2MSAwLjgzMDMyNCwxLjk1MzcwMzE0IDAsMS4yNzUzMzM5NyAtMC44MzAzMjQsMS45NjQ1NTcwNiBRIDkuOTg3MTk2MSwyLjI3NDkxNSA4LjQ0MDUxNDUsMi4yNzQ5MTUgSCA3LjA2MjA2ODQgViA1LjA4NjA3NjcgSCA0Ljk3MjY5MTUgWiBtIDIuMDg5Mzc2OSwxLjUxNDExOTkgdiAyLjI2MzAzOTQzIGggMS4xNTU5NDEgcSAwLjYwNzgxODgsMCAwLjkzODg2MjksLTAuMjkzMDU1NDcgMC4zMzEwNDQxLC0wLjI5ODQ4MjQxIDAuMzMxMDQ0MSwtMC44NDExNzc3MiAwLC0wLjU0MjY5NTMxIC0wLjMzMTA0NDEsLTAuODM1NzUwNzQgLTAuMzMxMDQ0MSwtMC4yOTMwNTU1IC0wLjkzODg2MjksLTAuMjkzMDU1NSB6IgovPgo8L3N2Zz4K);
  --jp-icon-python: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iLTEwIC0xMCAxMzEuMTYxMzYxNjk0MzM1OTQgMTMyLjM4ODk5OTkzODk2NDg0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMzA2OTk4IiBkPSJNIDU0LjkxODc4NSw5LjE5Mjc0MjFlLTQgQyA1MC4zMzUxMzIsMC4wMjIyMTcyNyA0NS45NTc4NDYsMC40MTMxMzY5NyA0Mi4xMDYyODUsMS4wOTQ2NjkzIDMwLjc2MDA2OSwzLjA5OTE3MzEgMjguNzAwMDM2LDcuMjk0NzcxNCAyOC43MDAwMzUsMTUuMDMyMTY5IHYgMTAuMjE4NzUgaCAyNi44MTI1IHYgMy40MDYyNSBoIC0yNi44MTI1IC0xMC4wNjI1IGMgLTcuNzkyNDU5LDAgLTE0LjYxNTc1ODgsNC42ODM3MTcgLTE2Ljc0OTk5OTgsMTMuNTkzNzUgLTIuNDYxODE5OTgsMTAuMjEyOTY2IC0yLjU3MTAxNTA4LDE2LjU4NjAyMyAwLDI3LjI1IDEuOTA1OTI4Myw3LjkzNzg1MiA2LjQ1NzU0MzIsMTMuNTkzNzQ4IDE0LjI0OTk5OTgsMTMuNTkzNzUgaCA5LjIxODc1IHYgLTEyLjI1IGMgMCwtOC44NDk5MDIgNy42NTcxNDQsLTE2LjY1NjI0OCAxNi43NSwtMTYuNjU2MjUgaCAyNi43ODEyNSBjIDcuNDU0OTUxLDAgMTMuNDA2MjUzLC02LjEzODE2NCAxMy40MDYyNSwtMTMuNjI1IHYgLTI1LjUzMTI1IGMgMCwtNy4yNjYzMzg2IC02LjEyOTk4LC0xMi43MjQ3NzcxIC0xMy40MDYyNSwtMTMuOTM3NDk5NyBDIDY0LjI4MTU0OCwwLjMyNzk0Mzk3IDU5LjUwMjQzOCwtMC4wMjAzNzkwMyA1NC45MTg3ODUsOS4xOTI3NDIxZS00IFogbSAtMTQuNSw4LjIxODc1MDEyNTc5IGMgMi43Njk1NDcsMCA1LjAzMTI1LDIuMjk4NjQ1NiA1LjAzMTI1LDUuMTI0OTk5NiAtMmUtNiwyLjgxNjMzNiAtMi4yNjE3MDMsNS4wOTM3NSAtNS4wMzEyNSw1LjA5Mzc1IC0yLjc3OTQ3NiwtMWUtNiAtNS4wMzEyNSwtMi4yNzc0MTUgLTUuMDMxMjUsLTUuMDkzNzUgLTEwZS03LC0yLjgyNjM1MyAyLjI1MTc3NCwtNS4xMjQ5OTk2IDUuMDMxMjUsLTUuMTI0OTk5NiB6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2ZmZDQzYiIgZD0ibSA4NS42Mzc1MzUsMjguNjU3MTY5IHYgMTEuOTA2MjUgYyAwLDkuMjMwNzU1IC03LjgyNTg5NSwxNi45OTk5OTkgLTE2Ljc1LDE3IGggLTI2Ljc4MTI1IGMgLTcuMzM1ODMzLDAgLTEzLjQwNjI0OSw2LjI3ODQ4MyAtMTMuNDA2MjUsMTMuNjI1IHYgMjUuNTMxMjQ3IGMgMCw3LjI2NjM0NCA2LjMxODU4OCwxMS41NDAzMjQgMTMuNDA2MjUsMTMuNjI1MDA0IDguNDg3MzMxLDIuNDk1NjEgMTYuNjI2MjM3LDIuOTQ2NjMgMjYuNzgxMjUsMCA2Ljc1MDE1NSwtMS45NTQzOSAxMy40MDYyNTMsLTUuODg3NjEgMTMuNDA2MjUsLTEzLjYyNTAwNCBWIDg2LjUwMDkxOSBoIC0yNi43ODEyNSB2IC0zLjQwNjI1IGggMjYuNzgxMjUgMTMuNDA2MjU0IGMgNy43OTI0NjEsMCAxMC42OTYyNTEsLTUuNDM1NDA4IDEzLjQwNjI0MSwtMTMuNTkzNzUgMi43OTkzMywtOC4zOTg4ODYgMi42ODAyMiwtMTYuNDc1Nzc2IDAsLTI3LjI1IC0xLjkyNTc4LC03Ljc1NzQ0MSAtNS42MDM4NywtMTMuNTkzNzUgLTEzLjQwNjI0MSwtMTMuNTkzNzUgeiBtIC0xNS4wNjI1LDY0LjY1NjI1IGMgMi43Nzk0NzgsM2UtNiA1LjAzMTI1LDIuMjc3NDE3IDUuMDMxMjUsNS4wOTM3NDcgLTJlLTYsMi44MjYzNTQgLTIuMjUxNzc1LDUuMTI1MDA0IC01LjAzMTI1LDUuMTI1MDA0IC0yLjc2OTU1LDAgLTUuMDMxMjUsLTIuMjk4NjUgLTUuMDMxMjUsLTUuMTI1MDA0IDJlLTYsLTIuODE2MzMgMi4yNjE2OTcsLTUuMDkzNzQ3IDUuMDMxMjUsLTUuMDkzNzQ3IHoiLz4KPC9zdmc+Cg==);
  --jp-icon-r-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjE5NkYzIiBkPSJNNC40IDIuNWMxLjItLjEgMi45LS4zIDQuOS0uMyAyLjUgMCA0LjEuNCA1LjIgMS4zIDEgLjcgMS41IDEuOSAxLjUgMy41IDAgMi0xLjQgMy41LTIuOSA0LjEgMS4yLjQgMS43IDEuNiAyLjIgMyAuNiAxLjkgMSAzLjkgMS4zIDQuNmgtMy44Yy0uMy0uNC0uOC0xLjctMS4yLTMuN3MtMS4yLTIuNi0yLjYtMi42aC0uOXY2LjRINC40VjIuNXptMy43IDYuOWgxLjRjMS45IDAgMi45LS45IDIuOS0yLjNzLTEtMi4zLTIuOC0yLjNjLS43IDAtMS4zIDAtMS42LjJ2NC41aC4xdi0uMXoiLz4KPC9zdmc+Cg==);
  --jp-icon-react: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMTUwIDE1MCA1NDEuOSAyOTUuMyI+CiAgPGcgY2xhc3M9ImpwLWljb24tYnJhbmQyIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxREFGQiI+CiAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgPGNpcmNsZSBjeD0iNDIwLjkiIGN5PSIyOTYuNSIgcj0iNDUuNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-redo: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4LjQgMTAuNkMxNi41NSA4Ljk5IDE0LjE1IDggMTEuNSA4Yy00LjY1IDAtOC41OCAzLjAzLTkuOTYgNy4yMkwzLjkgMTZjMS4wNS0zLjE5IDQuMDUtNS41IDcuNi01LjUgMS45NSAwIDMuNzMuNzIgNS4xMiAxLjg4TDEzIDE2aDlWN2wtMy42IDMuNnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-refresh: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTMuNWMtMi40OSAwLTQuNS0yLjAxLTQuNS00LjVTNi41MSA0LjUgOSA0LjVjMS4yNCAwIDIuMzYuNTIgMy4xNyAxLjMzTDEwIDhoNVYzbC0xLjc2IDEuNzZDMTIuMTUgMy42OCAxMC42NiAzIDkgMyA1LjY5IDMgMy4wMSA1LjY5IDMuMDEgOVM1LjY5IDE1IDkgMTVjMi45NyAwIDUuNDMtMi4xNiA1LjktNWgtMS41MmMtLjQ2IDItMi4yNCAzLjUtNC4zOCAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-regex: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiBmaWxsPSIjRkZGIj4KICAgIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjUuNSIgY3k9IjE0LjUiIHI9IjEuNSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIxIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjguNSIgeT0iNy41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAtMC41IDAuNSAwLjg2NiAtMi4zMjU1IDcuMzIxOSkiIGNsYXNzPSJzdDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgLTAuODY2IDAuODY2IDAuNSAtMC42Nzc5IDE0LjgyNTIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iMSIgaGVpZ2h0PSI4Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-run: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-running: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptOTYgMzI4YzAgOC44LTcuMiAxNi0xNiAxNkgxNzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDE2MGM4LjggMCAxNiA3LjIgMTYgMTZ2MTYweiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-save: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-search: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-settings: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwMDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXoiLz4KPC9zdmc+Cg==);
  --jp-icon-share: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTSAxOCAyIEMgMTYuMzU0OTkgMiAxNSAzLjM1NDk5MDQgMTUgNSBDIDE1IDUuMTkwOTUyOSAxNS4wMjE3OTEgNS4zNzcxMjI0IDE1LjA1NjY0MSA1LjU1ODU5MzggTCA3LjkyMTg3NSA5LjcyMDcwMzEgQyA3LjM5ODUzOTkgOS4yNzc4NTM5IDYuNzMyMDc3MSA5IDYgOSBDIDQuMzU0OTkwNCA5IDMgMTAuMzU0OTkgMyAxMiBDIDMgMTMuNjQ1MDEgNC4zNTQ5OTA0IDE1IDYgMTUgQyA2LjczMjA3NzEgMTUgNy4zOTg1Mzk5IDE0LjcyMjE0NiA3LjkyMTg3NSAxNC4yNzkyOTcgTCAxNS4wNTY2NDEgMTguNDM5NDUzIEMgMTUuMDIxNTU1IDE4LjYyMTUxNCAxNSAxOC44MDgzODYgMTUgMTkgQyAxNSAyMC42NDUwMSAxNi4zNTQ5OSAyMiAxOCAyMiBDIDE5LjY0NTAxIDIyIDIxIDIwLjY0NTAxIDIxIDE5IEMgMjEgMTcuMzU0OTkgMTkuNjQ1MDEgMTYgMTggMTYgQyAxNy4yNjc0OCAxNiAxNi42MDE1OTMgMTYuMjc5MzI4IDE2LjA3ODEyNSAxNi43MjI2NTYgTCA4Ljk0MzM1OTQgMTIuNTU4NTk0IEMgOC45NzgyMDk1IDEyLjM3NzEyMiA5IDEyLjE5MDk1MyA5IDEyIEMgOSAxMS44MDkwNDcgOC45NzgyMDk1IDExLjYyMjg3OCA4Ljk0MzM1OTQgMTEuNDQxNDA2IEwgMTYuMDc4MTI1IDcuMjc5Mjk2OSBDIDE2LjYwMTQ2IDcuNzIyMTQ2MSAxNy4yNjc5MjMgOCAxOCA4IEMgMTkuNjQ1MDEgOCAyMSA2LjY0NTAwOTYgMjEgNSBDIDIxIDMuMzU0OTkwNCAxOS42NDUwMSAyIDE4IDIgeiBNIDE4IDQgQyAxOC41NjQxMjkgNCAxOSA0LjQzNTg3MDYgMTkgNSBDIDE5IDUuNTY0MTI5NCAxOC41NjQxMjkgNiAxOCA2IEMgMTcuNDM1ODcxIDYgMTcgNS41NjQxMjk0IDE3IDUgQyAxNyA0LjQzNTg3MDYgMTcuNDM1ODcxIDQgMTggNCB6IE0gNiAxMSBDIDYuNTY0MTI5NCAxMSA3IDExLjQzNTg3MSA3IDEyIEMgNyAxMi41NjQxMjkgNi41NjQxMjk0IDEzIDYgMTMgQyA1LjQzNTg3MDYgMTMgNSAxMi41NjQxMjkgNSAxMiBDIDUgMTEuNDM1ODcxIDUuNDM1ODcwNiAxMSA2IDExIHogTSAxOCAxOCBDIDE4LjU2NDEyOSAxOCAxOSAxOC40MzU4NzEgMTkgMTkgQyAxOSAxOS41NjQxMjkgMTguNTY0MTI5IDIwIDE4IDIwIEMgMTcuNDM1ODcxIDIwIDE3IDE5LjU2NDEyOSAxNyAxOSBDIDE3IDE4LjQzNTg3MSAxNy40MzU4NzEgMTggMTggMTggeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-spreadsheet: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNENBRjUwIiBkPSJNMi4yIDIuMnYxNy42aDE3LjZWMi4ySDIuMnptMTUuNCA3LjdoLTUuNVY0LjRoNS41djUuNXpNOS45IDQuNHY1LjVINC40VjQuNGg1LjV6bS01LjUgNy43aDUuNXY1LjVINC40di01LjV6bTcuNyA1LjV2LTUuNWg1LjV2NS41aC01LjV6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-stop: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDZoMTJ2MTJINnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-tab: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-table-rows: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMSw4SDNWNGgxOFY4eiBNMjEsMTBIM3Y0aDE4VjEweiBNMjEsMTZIM3Y0aDE4VjE2eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-tag: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA0MyAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTI4LjgzMzIgMTIuMzM0TDMyLjk5OTggMTYuNTAwN0wzNy4xNjY1IDEyLjMzNEgyOC44MzMyWiIvPgoJCTxwYXRoIGQ9Ik0xNi4yMDk1IDIxLjYxMDRDMTUuNjg3MyAyMi4xMjk5IDE0Ljg0NDMgMjIuMTI5OSAxNC4zMjQ4IDIxLjYxMDRMNi45ODI5IDE0LjcyNDVDNi41NzI0IDE0LjMzOTQgNi4wODMxMyAxMy42MDk4IDYuMDQ3ODYgMTMuMDQ4MkM1Ljk1MzQ3IDExLjUyODggNi4wMjAwMiA4LjYxOTQ0IDYuMDY2MjEgNy4wNzY5NUM2LjA4MjgxIDYuNTE0NzcgNi41NTU0OCA2LjA0MzQ3IDcuMTE4MDQgNi4wMzA1NUM5LjA4ODYzIDUuOTg0NzMgMTMuMjYzOCA1LjkzNTc5IDEzLjY1MTggNi4zMjQyNUwyMS43MzY5IDEzLjYzOUMyMi4yNTYgMTQuMTU4NSAyMS43ODUxIDE1LjQ3MjQgMjEuMjYyIDE1Ljk5NDZMMTYuMjA5NSAyMS42MTA0Wk05Ljc3NTg1IDguMjY1QzkuMzM1NTEgNy44MjU2NiA4LjYyMzUxIDcuODI1NjYgOC4xODI4IDguMjY1QzcuNzQzNDYgOC43MDU3MSA3Ljc0MzQ2IDkuNDE3MzMgOC4xODI4IDkuODU2NjdDOC42MjM4MiAxMC4yOTY0IDkuMzM1ODIgMTAuMjk2NCA5Ljc3NTg1IDkuODU2NjdDMTAuMjE1NiA5LjQxNzMzIDEwLjIxNTYgOC43MDUzMyA5Ljc3NTg1IDguMjY1WiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-terminal: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiA+CiAgICA8cmVjdCBjbGFzcz0ianAtdGVybWluYWwtaWNvbi1iYWNrZ3JvdW5kLWNvbG9yIGpwLWljb24tc2VsZWN0YWJsZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIiBmaWxsPSIjMzMzMzMzIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtdGVybWluYWwtaWNvbi1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUtaW52ZXJzZSIgZD0iTTUuMDU2NjQgOC43NjE3MkM1LjA1NjY0IDguNTk3NjYgNS4wMzEyNSA4LjQ1MzEyIDQuOTgwNDcgOC4zMjgxMkM0LjkzMzU5IDguMTk5MjIgNC44NTU0NyA4LjA4MjAzIDQuNzQ2MDkgNy45NzY1NkM0LjY0MDYyIDcuODcxMDkgNC41IDcuNzc1MzkgNC4zMjQyMiA3LjY4OTQ1QzQuMTUyMzQgNy41OTk2MSAzLjk0MzM2IDcuNTExNzIgMy42OTcyNyA3LjQyNTc4QzMuMzAyNzMgNy4yODUxNiAyLjk0MzM2IDcuMTM2NzIgMi42MTkxNCA2Ljk4MDQ3QzIuMjk0OTIgNi44MjQyMiAyLjAxNzU4IDYuNjQyNTggMS43ODcxMSA2LjQzNTU1QzEuNTYwNTUgNi4yMjg1MiAxLjM4NDc3IDUuOTg4MjggMS4yNTk3NyA1LjcxNDg0QzEuMTM0NzcgNS40Mzc1IDEuMDcyMjcgNS4xMDkzOCAxLjA3MjI3IDQuNzMwNDdDMS4wNzIyNyA0LjM5ODQ0IDEuMTI4OTEgNC4wOTU3IDEuMjQyMTkgMy44MjIyN0MxLjM1NTQ3IDMuNTQ0OTIgMS41MTU2MiAzLjMwNDY5IDEuNzIyNjYgMy4xMDE1NkMxLjkyOTY5IDIuODk4NDQgMi4xNzk2OSAyLjczNDM3IDIuNDcyNjYgMi42MDkzOEMyLjc2NTYyIDIuNDg0MzggMy4wOTE4IDIuNDA0MyAzLjQ1MTE3IDIuMzY5MTRWMS4xMDkzOEg0LjM4ODY3VjIuMzgwODZDNC43NDAyMyAyLjQyNzczIDUuMDU2NjQgMi41MjM0NCA1LjMzNzg5IDIuNjY3OTdDNS42MTkxNCAyLjgxMjUgNS44NTc0MiAzLjAwMTk1IDYuMDUyNzMgMy4yMzYzM0M2LjI1MTk1IDMuNDY2OCA2LjQwNDMgMy43NDAyMyA2LjUwOTc3IDQuMDU2NjRDNi42MTkxNCA0LjM2OTE0IDYuNjczODMgNC43MjA3IDYuNjczODMgNS4xMTEzM0g1LjA0NDkyQzUuMDQ0OTIgNC42Mzg2NyA0LjkzNzUgNC4yODEyNSA0LjcyMjY2IDQuMDM5MDZDNC41MDc4MSAzLjc5Mjk3IDQuMjE2OCAzLjY2OTkyIDMuODQ5NjEgMy42Njk5MkMzLjY1MDM5IDMuNjY5OTIgMy40NzY1NiAzLjY5NzI3IDMuMzI4MTIgMy43NTE5NUMzLjE4MzU5IDMuODAyNzMgMy4wNjQ0NSAzLjg3Njk1IDIuOTcwNyAzLjk3NDYxQzIuODc2OTUgNC4wNjgzNiAyLjgwNjY0IDQuMTc5NjkgMi43NTk3NyA0LjMwODU5QzIuNzE2OCA0LjQzNzUgMi42OTUzMSA0LjU3ODEyIDIuNjk1MzEgNC43MzA0N0MyLjY5NTMxIDQuODgyODEgMi43MTY4IDUuMDE5NTMgMi43NTk3NyA1LjE0MDYyQzIuODA2NjQgNS4yNTc4MSAyLjg4MjgxIDUuMzY3MTkgMi45ODgyOCA1LjQ2ODc1QzMuMDk3NjYgNS41NzAzMSAzLjI0MDIzIDUuNjY3OTcgMy40MTYwMiA1Ljc2MTcyQzMuNTkxOCA1Ljg1MTU2IDMuODEwNTUgNS45NDMzNiA0LjA3MjI3IDYuMDM3MTFDNC40NjY4IDYuMTg1NTUgNC44MjQyMiA2LjMzOTg0IDUuMTQ0NTMgNi41QzUuNDY0ODQgNi42NTYyNSA1LjczODI4IDYuODM5ODQgNS45NjQ4NCA3LjA1MDc4QzYuMTk1MzEgNy4yNTc4MSA2LjM3MTA5IDcuNSA2LjQ5MjE5IDcuNzc3MzRDNi42MTcxOSA4LjA1MDc4IDYuNjc5NjkgOC4zNzUgNi42Nzk2OSA4Ljc1QzYuNjc5NjkgOS4wOTM3NSA2LjYyMzA1IDkuNDA0MyA2LjUwOTc3IDkuNjgxNjRDNi4zOTY0OCA5Ljk1NTA4IDYuMjM0MzggMTAuMTkxNCA2LjAyMzQ0IDEwLjM5MDZDNS44MTI1IDEwLjU4OTggNS41NTg1OSAxMC43NSA1LjI2MTcyIDEwLjg3MTFDNC45NjQ4NCAxMC45ODgzIDQuNjMyODEgMTEuMDY0NSA0LjI2NTYyIDExLjA5OTZWMTIuMjQ4SDMuMzMzOThWMTEuMDk5NkMzLjAwMTk1IDExLjA2ODQgMi42Nzk2OSAxMC45OTYxIDIuMzY3MTkgMTAuODgyOEMyLjA1NDY5IDEwLjc2NTYgMS43NzczNCAxMC41OTc3IDEuNTM1MTYgMTAuMzc4OUMxLjI5Njg4IDEwLjE2MDIgMS4xMDU0NyA5Ljg4NDc3IDAuOTYwOTM4IDkuNTUyNzNDMC44MTY0MDYgOS4yMTY4IDAuNzQ0MTQxIDguODE0NDUgMC43NDQxNDEgOC4zNDU3SDIuMzc4OTFDMi4zNzg5MSA4LjYyNjk1IDIuNDE5OTIgOC44NjMyOCAyLjUwMTk1IDkuMDU0NjlDMi41ODM5OCA5LjI0MjE5IDIuNjg5NDUgOS4zOTI1OCAyLjgxODM2IDkuNTA1ODZDMi45NTExNyA5LjYxNTIzIDMuMTAxNTYgOS42OTMzNiAzLjI2OTUzIDkuNzQwMjNDMy40Mzc1IDkuNzg3MTEgMy42MDkzOCA5LjgxMDU1IDMuNzg1MTYgOS44MTA1NUM0LjIwMzEyIDkuODEwNTUgNC41MTk1MyA5LjcxMjg5IDQuNzM0MzggOS41MTc1OEM0Ljk0OTIyIDkuMzIyMjcgNS4wNTY2NCA5LjA3MDMxIDUuMDU2NjQgOC43NjE3MlpNMTMuNDE4IDEyLjI3MTVIOC4wNzQyMlYxMUgxMy40MThWMTIuMjcxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuOTUyNjQgNikiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=);
  --jp-icon-text-editor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtdGV4dC1lZGl0b3ItaWNvbi1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xNSAxNUgzdjJoMTJ2LTJ6bTAtOEgzdjJoMTJWN3pNMyAxM2gxOHYtMkgzdjJ6bTAgOGgxOHYtMkgzdjJ6TTMgM3YyaDE4VjNIM3oiLz4KPC9zdmc+Cg==);
  --jp-icon-toc: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik03LDVIMjFWN0g3VjVNNywxM1YxMUgyMVYxM0g3TTQsNC41QTEuNSwxLjUgMCAwLDEgNS41LDZBMS41LDEuNSAwIDAsMSA0LDcuNUExLjUsMS41IDAgMCwxIDIuNSw2QTEuNSwxLjUgMCAwLDEgNCw0LjVNNCwxMC41QTEuNSwxLjUgMCAwLDEgNS41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMy41QTEuNSwxLjUgMCAwLDEgMi41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMC41TTcsMTlWMTdIMjFWMTlIN000LDE2LjVBMS41LDEuNSAwIDAsMSA1LjUsMThBMS41LDEuNSAwIDAsMSA0LDE5LjVBMS41LDEuNSAwIDAsMSAyLjUsMThBMS41LDEuNSAwIDAsMSA0LDE2LjVaIiAvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-tree-view: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMiAxMVYzaC03djNIOVYzSDJ2OGg3VjhoMnYxMGg0djNoN3YtOGgtN3YzaC0yVjhoMnYzeiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMiAxNy4xODQ0IDIuOTY5NjggMTQuMzAzMiAxLjg2MDk0IDExLjQ0MDlaIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA5Ljg2NzE5KSIgZD0iTTIuODYwMTUgNC44NjUzNUwwLjcyNjU0OSAyLjk5OTU5TDAgMy42MzA0NUwyLjg2MDE1IDYuMTMxNTdMOCAwLjYzMDg3Mkw3LjI3ODU3IDBMMi44NjAxNSA0Ljg2NTM1WiIvPgo8L3N2Zz4K);
  --jp-icon-undo: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-user: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE2IDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek0xMiAxNGE3IDcgMCAwMC03IDdoMTRhNyA3IDAgMDAtNy03eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-users: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgY2xhc3M9ImpwLWljb24zIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjczMjcgMCAwIDEuNzMyNyAtMy42MjgyIC4wOTk1NzcpIiBmaWxsPSIjNjE2MTYxIj4KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgxLjUsMCwwLDEuNSwwLC02KSIgZD0ibTEyLjE4NiA3LjUwOThjLTEuMDUzNSAwLTEuOTc1NyAwLjU2NjUtMi40Nzg1IDEuNDEwMiAwLjc1MDYxIDAuMzEyNzcgMS4zOTc0IDAuODI2NDggMS44NzMgMS40NzI3aDMuNDg2M2MwLTEuNTkyLTEuMjg4OS0yLjg4MjgtMi44ODA5LTIuODgyOHoiLz4KICA8cGF0aCBkPSJtMjAuNDY1IDIuMzg5NWEyLjE4ODUgMi4xODg1IDAgMCAxLTIuMTg4NCAyLjE4ODUgMi4xODg1IDIuMTg4NSAwIDAgMS0yLjE4ODUtMi4xODg1IDIuMTg4NSAyLjE4ODUgMCAwIDEgMi4xODg1LTIuMTg4NSAyLjE4ODUgMi4xODg1IDAgMCAxIDIuMTg4NCAyLjE4ODV6Ii8+CiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS41LDAsMCwxLjUsMCwtNikiIGQ9Im0zLjU4OTggOC40MjE5Yy0xLjExMjYgMC0yLjAxMzcgMC45MDExMS0yLjAxMzcgMi4wMTM3aDIuODE0NWMwLjI2Nzk3LTAuMzczMDkgMC41OTA3LTAuNzA0MzUgMC45NTg5OC0wLjk3ODUyLTAuMzQ0MzMtMC42MTY4OC0xLjAwMzEtMS4wMzUyLTEuNzU5OC0xLjAzNTJ6Ii8+CiAgPHBhdGggZD0ibTYuOTE1NCA0LjYyM2ExLjUyOTQgMS41Mjk0IDAgMCAxLTEuNTI5NCAxLjUyOTQgMS41Mjk0IDEuNTI5NCAwIDAgMS0xLjUyOTQtMS41Mjk0IDEuNTI5NCAxLjUyOTQgMCAwIDEgMS41Mjk0LTEuNTI5NCAxLjUyOTQgMS41Mjk0IDAgMCAxIDEuNTI5NCAxLjUyOTR6Ii8+CiAgPHBhdGggZD0ibTYuMTM1IDEzLjUzNWMwLTMuMjM5MiAyLjYyNTktNS44NjUgNS44NjUtNS44NjUgMy4yMzkyIDAgNS44NjUgMi42MjU5IDUuODY1IDUuODY1eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMy43Njg1IiByPSIyLjk2ODUiLz4KIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-vega: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbjEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjEyMTIxIj4KICAgIDxwYXRoIGQ9Ik0xMC42IDUuNGwyLjItMy4ySDIuMnY3LjNsNC02LjZ6Ii8+CiAgICA8cGF0aCBkPSJNMTUuOCAyLjJsLTQuNCA2LjZMNyA2LjNsLTQuOCA4djUuNWgxNy42VjIuMmgtNHptLTcgMTUuNEg1LjV2LTQuNGgzLjN2NC40em00LjQgMEg5LjhWOS44aDMuNHY3Ljh6bTQuNCAwaC0zLjRWNi41aDMuNHYxMS4xeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-word: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxnIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzQxNDE0MSI+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiA8L2c+CiA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNDMgLjA0MDEpIiBmaWxsPSIjZmZmIj4KICA8cGF0aCBkPSJtNC4xNCA4Ljc2cTAuMDY4Mi0xLjg5IDIuNDItMS44OSAxLjE2IDAgMS42OCAwLjQyIDAuNTY3IDAuNDEgMC41NjcgMS4xNnYzLjQ3cTAgMC40NjIgMC41MTQgMC40NjIgMC4xMDMgMCAwLjItMC4wMjMxdjAuNzE0cS0wLjM5OSAwLjEwMy0wLjY1MSAwLjEwMy0wLjQ1MiAwLTAuNjkzLTAuMjItMC4yMzEtMC4yLTAuMjg0LTAuNjYyLTAuOTU2IDAuODcyLTIgMC44NzItMC45MDMgMC0xLjQ3LTAuNDcyLTAuNTI1LTAuNDcyLTAuNTI1LTEuMjYgMC0wLjI2MiAwLjA0NTItMC40NzIgMC4wNTY3LTAuMjIgMC4xMTYtMC4zNzggMC4wNjgyLTAuMTY4IDAuMjMxLTAuMzA0IDAuMTU4LTAuMTQ3IDAuMjYyLTAuMjQyIDAuMTE2LTAuMDkxNCAwLjM2OC0wLjE2OCAwLjI2Mi0wLjA5MTQgMC4zOTktMC4xMjYgMC4xMzYtMC4wNDUyIDAuNDcyLTAuMTAzIDAuMzM2LTAuMDU3OCAwLjUwNC0wLjA3OTggMC4xNTgtMC4wMjMxIDAuNTY3LTAuMDc5OCAwLjU1Ni0wLjA2ODIgMC43NzctMC4yMjEgMC4yMi0wLjE1MiAwLjIyLTAuNDQxdi0wLjI1MnEwLTAuNDMtMC4zNTctMC42NjItMC4zMzYtMC4yMzEtMC45NzYtMC4yMzEtMC42NjIgMC0wLjk5OCAwLjI2Mi0wLjMzNiAwLjI1Mi0wLjM5OSAwLjc5OHptMS44OSAzLjY4cTAuNzg4IDAgMS4yNi0wLjQxIDAuNTA0LTAuNDIgMC41MDQtMC45MDN2LTEuMDVxLTAuMjg0IDAuMTM2LTAuODYxIDAuMjMxLTAuNTY3IDAuMDkxNC0wLjk4NyAwLjE1OC0wLjQyIDAuMDY4Mi0wLjc2NiAwLjMyNi0wLjMzNiAwLjI1Mi0wLjMzNiAwLjcwNHQwLjMwNCAwLjcwNCAwLjg2MSAwLjI1MnoiIHN0cm9rZS13aWR0aD0iMS4wNSIvPgogIDxwYXRoIGQ9Im0xMCA0LjU2aDAuOTQ1djMuMTVxMC42NTEtMC45NzYgMS44OS0wLjk3NiAxLjE2IDAgMS44OSAwLjg0IDAuNjgyIDAuODQgMC42ODIgMi4zMSAwIDEuNDctMC43MDQgMi40Mi0wLjcwNCAwLjg4Mi0xLjg5IDAuODgyLTEuMjYgMC0xLjg5LTEuMDJ2MC43NjZoLTAuODV6bTIuNjIgMy4wNHEtMC43NDYgMC0xLjE2IDAuNjQtMC40NTIgMC42My0wLjQ1MiAxLjY4IDAgMS4wNSAwLjQ1MiAxLjY4dDEuMTYgMC42M3EwLjc3NyAwIDEuMjYtMC42MyAwLjQ5NC0wLjY0IDAuNDk0LTEuNjggMC0xLjA1LTAuNDcyLTEuNjgtMC40NjItMC42NC0xLjI2LTAuNjR6IiBzdHJva2Utd2lkdGg9IjEuMDUiLz4KICA8cGF0aCBkPSJtMi43MyAxNS44IDEzLjYgMC4wMDgxYzAuMDA2OSAwIDAtMi42IDAtMi42IDAtMC4wMDc4LTEuMTUgMC0xLjE1IDAtMC4wMDY5IDAtMC4wMDgzIDEuNS0wLjAwODMgMS41LTJlLTMgLTAuMDAxNC0xMS4zLTAuMDAxNC0xMS4zLTAuMDAxNGwtMC4wMDU5Mi0xLjVjMC0wLjAwNzgtMS4xNyAwLjAwMTMtMS4xNyAwLjAwMTN6IiBzdHJva2Utd2lkdGg9Ii45NzUiLz4KIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-yaml: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1jb250cmFzdDIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjRDgxQjYwIj4KICAgIDxwYXRoIGQ9Ik03LjIgMTguNnYtNS40TDMgNS42aDMuM2wxLjQgMy4xYy4zLjkuNiAxLjYgMSAyLjUuMy0uOC42LTEuNiAxLTIuNWwxLjQtMy4xaDMuNGwtNC40IDcuNnY1LjVsLTIuOS0uMXoiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxNi41IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxMSIgcj0iMi4xIi8+CiAgPC9nPgo8L3N2Zz4K);
}

/* Icon CSS class declarations */

.jp-AddAboveIcon {
  background-image: var(--jp-icon-add-above);
}

.jp-AddBelowIcon {
  background-image: var(--jp-icon-add-below);
}

.jp-AddIcon {
  background-image: var(--jp-icon-add);
}

.jp-BellIcon {
  background-image: var(--jp-icon-bell);
}

.jp-BugDotIcon {
  background-image: var(--jp-icon-bug-dot);
}

.jp-BugIcon {
  background-image: var(--jp-icon-bug);
}

.jp-BuildIcon {
  background-image: var(--jp-icon-build);
}

.jp-CaretDownEmptyIcon {
  background-image: var(--jp-icon-caret-down-empty);
}

.jp-CaretDownEmptyThinIcon {
  background-image: var(--jp-icon-caret-down-empty-thin);
}

.jp-CaretDownIcon {
  background-image: var(--jp-icon-caret-down);
}

.jp-CaretLeftIcon {
  background-image: var(--jp-icon-caret-left);
}

.jp-CaretRightIcon {
  background-image: var(--jp-icon-caret-right);
}

.jp-CaretUpEmptyThinIcon {
  background-image: var(--jp-icon-caret-up-empty-thin);
}

.jp-CaretUpIcon {
  background-image: var(--jp-icon-caret-up);
}

.jp-CaseSensitiveIcon {
  background-image: var(--jp-icon-case-sensitive);
}

.jp-CheckIcon {
  background-image: var(--jp-icon-check);
}

.jp-CircleEmptyIcon {
  background-image: var(--jp-icon-circle-empty);
}

.jp-CircleIcon {
  background-image: var(--jp-icon-circle);
}

.jp-ClearIcon {
  background-image: var(--jp-icon-clear);
}

.jp-CloseIcon {
  background-image: var(--jp-icon-close);
}

.jp-CodeCheckIcon {
  background-image: var(--jp-icon-code-check);
}

.jp-CodeIcon {
  background-image: var(--jp-icon-code);
}

.jp-CollapseAllIcon {
  background-image: var(--jp-icon-collapse-all);
}

.jp-ConsoleIcon {
  background-image: var(--jp-icon-console);
}

.jp-CopyIcon {
  background-image: var(--jp-icon-copy);
}

.jp-CopyrightIcon {
  background-image: var(--jp-icon-copyright);
}

.jp-CutIcon {
  background-image: var(--jp-icon-cut);
}

.jp-DeleteIcon {
  background-image: var(--jp-icon-delete);
}

.jp-DownloadIcon {
  background-image: var(--jp-icon-download);
}

.jp-DuplicateIcon {
  background-image: var(--jp-icon-duplicate);
}

.jp-EditIcon {
  background-image: var(--jp-icon-edit);
}

.jp-EllipsesIcon {
  background-image: var(--jp-icon-ellipses);
}

.jp-ErrorIcon {
  background-image: var(--jp-icon-error);
}

.jp-ExpandAllIcon {
  background-image: var(--jp-icon-expand-all);
}

.jp-ExtensionIcon {
  background-image: var(--jp-icon-extension);
}

.jp-FastForwardIcon {
  background-image: var(--jp-icon-fast-forward);
}

.jp-FileIcon {
  background-image: var(--jp-icon-file);
}

.jp-FileUploadIcon {
  background-image: var(--jp-icon-file-upload);
}

.jp-FilterDotIcon {
  background-image: var(--jp-icon-filter-dot);
}

.jp-FilterIcon {
  background-image: var(--jp-icon-filter);
}

.jp-FilterListIcon {
  background-image: var(--jp-icon-filter-list);
}

.jp-FolderFavoriteIcon {
  background-image: var(--jp-icon-folder-favorite);
}

.jp-FolderIcon {
  background-image: var(--jp-icon-folder);
}

.jp-HomeIcon {
  background-image: var(--jp-icon-home);
}

.jp-Html5Icon {
  background-image: var(--jp-icon-html5);
}

.jp-ImageIcon {
  background-image: var(--jp-icon-image);
}

.jp-InfoIcon {
  background-image: var(--jp-icon-info);
}

.jp-InspectorIcon {
  background-image: var(--jp-icon-inspector);
}

.jp-JsonIcon {
  background-image: var(--jp-icon-json);
}

.jp-JuliaIcon {
  background-image: var(--jp-icon-julia);
}

.jp-JupyterFaviconIcon {
  background-image: var(--jp-icon-jupyter-favicon);
}

.jp-JupyterIcon {
  background-image: var(--jp-icon-jupyter);
}

.jp-JupyterlabWordmarkIcon {
  background-image: var(--jp-icon-jupyterlab-wordmark);
}

.jp-KernelIcon {
  background-image: var(--jp-icon-kernel);
}

.jp-KeyboardIcon {
  background-image: var(--jp-icon-keyboard);
}

.jp-LaunchIcon {
  background-image: var(--jp-icon-launch);
}

.jp-LauncherIcon {
  background-image: var(--jp-icon-launcher);
}

.jp-LineFormIcon {
  background-image: var(--jp-icon-line-form);
}

.jp-LinkIcon {
  background-image: var(--jp-icon-link);
}

.jp-ListIcon {
  background-image: var(--jp-icon-list);
}

.jp-MarkdownIcon {
  background-image: var(--jp-icon-markdown);
}

.jp-MoveDownIcon {
  background-image: var(--jp-icon-move-down);
}

.jp-MoveUpIcon {
  background-image: var(--jp-icon-move-up);
}

.jp-NewFolderIcon {
  background-image: var(--jp-icon-new-folder);
}

.jp-NotTrustedIcon {
  background-image: var(--jp-icon-not-trusted);
}

.jp-NotebookIcon {
  background-image: var(--jp-icon-notebook);
}

.jp-NumberingIcon {
  background-image: var(--jp-icon-numbering);
}

.jp-OfflineBoltIcon {
  background-image: var(--jp-icon-offline-bolt);
}

.jp-PaletteIcon {
  background-image: var(--jp-icon-palette);
}

.jp-PasteIcon {
  background-image: var(--jp-icon-paste);
}

.jp-PdfIcon {
  background-image: var(--jp-icon-pdf);
}

.jp-PythonIcon {
  background-image: var(--jp-icon-python);
}

.jp-RKernelIcon {
  background-image: var(--jp-icon-r-kernel);
}

.jp-ReactIcon {
  background-image: var(--jp-icon-react);
}

.jp-RedoIcon {
  background-image: var(--jp-icon-redo);
}

.jp-RefreshIcon {
  background-image: var(--jp-icon-refresh);
}

.jp-RegexIcon {
  background-image: var(--jp-icon-regex);
}

.jp-RunIcon {
  background-image: var(--jp-icon-run);
}

.jp-RunningIcon {
  background-image: var(--jp-icon-running);
}

.jp-SaveIcon {
  background-image: var(--jp-icon-save);
}

.jp-SearchIcon {
  background-image: var(--jp-icon-search);
}

.jp-SettingsIcon {
  background-image: var(--jp-icon-settings);
}

.jp-ShareIcon {
  background-image: var(--jp-icon-share);
}

.jp-SpreadsheetIcon {
  background-image: var(--jp-icon-spreadsheet);
}

.jp-StopIcon {
  background-image: var(--jp-icon-stop);
}

.jp-TabIcon {
  background-image: var(--jp-icon-tab);
}

.jp-TableRowsIcon {
  background-image: var(--jp-icon-table-rows);
}

.jp-TagIcon {
  background-image: var(--jp-icon-tag);
}

.jp-TerminalIcon {
  background-image: var(--jp-icon-terminal);
}

.jp-TextEditorIcon {
  background-image: var(--jp-icon-text-editor);
}

.jp-TocIcon {
  background-image: var(--jp-icon-toc);
}

.jp-TreeViewIcon {
  background-image: var(--jp-icon-tree-view);
}

.jp-TrustedIcon {
  background-image: var(--jp-icon-trusted);
}

.jp-UndoIcon {
  background-image: var(--jp-icon-undo);
}

.jp-UserIcon {
  background-image: var(--jp-icon-user);
}

.jp-UsersIcon {
  background-image: var(--jp-icon-users);
}

.jp-VegaIcon {
  background-image: var(--jp-icon-vega);
}

.jp-WordIcon {
  background-image: var(--jp-icon-word);
}

.jp-YamlIcon {
  background-image: var(--jp-icon-yaml);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

.jp-Icon,
.jp-MaterialIcon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-cover {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/**
 * (DEPRECATED) Support for specific CSS icon sizes
 */

.jp-Icon-16 {
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-18 {
  background-size: 18px;
  min-width: 18px;
  min-height: 18px;
}

.jp-Icon-20 {
  background-size: 20px;
  min-width: 20px;
  min-height: 20px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.lm-TabBar .lm-TabBar-addButton {
  align-items: center;
  display: flex;
  padding: 4px;
  padding-bottom: 5px;
  margin-right: 1px;
  background-color: var(--jp-layout-color2);
}

.lm-TabBar .lm-TabBar-addButton:hover {
  background-color: var(--jp-layout-color1);
}

.lm-DockPanel-tabBar .lm-TabBar-tab {
  width: var(--jp-private-horizontal-tab-width);
}

.lm-DockPanel-tabBar .lm-TabBar-content {
  flex: unset;
}

.lm-DockPanel-tabBar[data-orientation='horizontal'] {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for icons as inline SVG HTMLElements
 */

/* recolor the primary elements of an icon */
.jp-icon0[fill] {
  fill: var(--jp-inverse-layout-color0);
}

.jp-icon1[fill] {
  fill: var(--jp-inverse-layout-color1);
}

.jp-icon2[fill] {
  fill: var(--jp-inverse-layout-color2);
}

.jp-icon3[fill] {
  fill: var(--jp-inverse-layout-color3);
}

.jp-icon4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}

.jp-icon1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}

.jp-icon2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}

.jp-icon3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}

.jp-icon4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/* recolor the accent elements of an icon */
.jp-icon-accent0[fill] {
  fill: var(--jp-layout-color0);
}

.jp-icon-accent1[fill] {
  fill: var(--jp-layout-color1);
}

.jp-icon-accent2[fill] {
  fill: var(--jp-layout-color2);
}

.jp-icon-accent3[fill] {
  fill: var(--jp-layout-color3);
}

.jp-icon-accent4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-accent0[stroke] {
  stroke: var(--jp-layout-color0);
}

.jp-icon-accent1[stroke] {
  stroke: var(--jp-layout-color1);
}

.jp-icon-accent2[stroke] {
  stroke: var(--jp-layout-color2);
}

.jp-icon-accent3[stroke] {
  stroke: var(--jp-layout-color3);
}

.jp-icon-accent4[stroke] {
  stroke: var(--jp-layout-color4);
}

/* set the color of an icon to transparent */
.jp-icon-none[fill] {
  fill: none;
}

.jp-icon-none[stroke] {
  stroke: none;
}

/* brand icon colors. Same for light and dark */
.jp-icon-brand0[fill] {
  fill: var(--jp-brand-color0);
}

.jp-icon-brand1[fill] {
  fill: var(--jp-brand-color1);
}

.jp-icon-brand2[fill] {
  fill: var(--jp-brand-color2);
}

.jp-icon-brand3[fill] {
  fill: var(--jp-brand-color3);
}

.jp-icon-brand4[fill] {
  fill: var(--jp-brand-color4);
}

.jp-icon-brand0[stroke] {
  stroke: var(--jp-brand-color0);
}

.jp-icon-brand1[stroke] {
  stroke: var(--jp-brand-color1);
}

.jp-icon-brand2[stroke] {
  stroke: var(--jp-brand-color2);
}

.jp-icon-brand3[stroke] {
  stroke: var(--jp-brand-color3);
}

.jp-icon-brand4[stroke] {
  stroke: var(--jp-brand-color4);
}

/* warn icon colors. Same for light and dark */
.jp-icon-warn0[fill] {
  fill: var(--jp-warn-color0);
}

.jp-icon-warn1[fill] {
  fill: var(--jp-warn-color1);
}

.jp-icon-warn2[fill] {
  fill: var(--jp-warn-color2);
}

.jp-icon-warn3[fill] {
  fill: var(--jp-warn-color3);
}

.jp-icon-warn0[stroke] {
  stroke: var(--jp-warn-color0);
}

.jp-icon-warn1[stroke] {
  stroke: var(--jp-warn-color1);
}

.jp-icon-warn2[stroke] {
  stroke: var(--jp-warn-color2);
}

.jp-icon-warn3[stroke] {
  stroke: var(--jp-warn-color3);
}

/* icon colors that contrast well with each other and most backgrounds */
.jp-icon-contrast0[fill] {
  fill: var(--jp-icon-contrast-color0);
}

.jp-icon-contrast1[fill] {
  fill: var(--jp-icon-contrast-color1);
}

.jp-icon-contrast2[fill] {
  fill: var(--jp-icon-contrast-color2);
}

.jp-icon-contrast3[fill] {
  fill: var(--jp-icon-contrast-color3);
}

.jp-icon-contrast0[stroke] {
  stroke: var(--jp-icon-contrast-color0);
}

.jp-icon-contrast1[stroke] {
  stroke: var(--jp-icon-contrast-color1);
}

.jp-icon-contrast2[stroke] {
  stroke: var(--jp-icon-contrast-color2);
}

.jp-icon-contrast3[stroke] {
  stroke: var(--jp-icon-contrast-color3);
}

.jp-icon-dot[fill] {
  fill: var(--jp-warn-color0);
}

.jp-jupyter-icon-color[fill] {
  fill: var(--jp-jupyter-icon-color, var(--jp-warn-color0));
}

.jp-notebook-icon-color[fill] {
  fill: var(--jp-notebook-icon-color, var(--jp-warn-color0));
}

.jp-json-icon-color[fill] {
  fill: var(--jp-json-icon-color, var(--jp-warn-color1));
}

.jp-console-icon-color[fill] {
  fill: var(--jp-console-icon-color, white);
}

.jp-console-icon-background-color[fill] {
  fill: var(--jp-console-icon-background-color, var(--jp-brand-color1));
}

.jp-terminal-icon-color[fill] {
  fill: var(--jp-terminal-icon-color, var(--jp-layout-color2));
}

.jp-terminal-icon-background-color[fill] {
  fill: var(
    --jp-terminal-icon-background-color,
    var(--jp-inverse-layout-color2)
  );
}

.jp-text-editor-icon-color[fill] {
  fill: var(--jp-text-editor-icon-color, var(--jp-inverse-layout-color3));
}

.jp-inspector-icon-color[fill] {
  fill: var(--jp-inspector-icon-color, var(--jp-inverse-layout-color3));
}

/* CSS for icons in selected filebrowser listing items */
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}

.jp-DirListing-item.jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* stylelint-disable selector-max-class, selector-max-compound-selectors */

/**
* TODO: come up with non css-hack solution for showing the busy icon on top
*  of the close icon
* CSS for complex behavior of close icon of tabs in the main area tabbar
*/
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}

.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

/* stylelint-enable selector-max-class, selector-max-compound-selectors */

/* CSS for icons in status bar */
#jp-main-statusbar .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}

#jp-main-statusbar .jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* special handling for splash icon CSS. While the theme CSS reloads during
   splash, the splash icon can loose theming. To prevent that, we set a
   default for its color variable */
:root {
  --jp-warn-color0: var(--md-orange-700);
}

/* not sure what to do with this one, used in filebrowser listing */
.jp-DragIcon {
  margin-right: 4px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for alt colors for icons as inline SVG HTMLElements
 */

/* alt recolor the primary elements of an icon */
.jp-icon-alt .jp-icon0[fill] {
  fill: var(--jp-layout-color0);
}

.jp-icon-alt .jp-icon1[fill] {
  fill: var(--jp-layout-color1);
}

.jp-icon-alt .jp-icon2[fill] {
  fill: var(--jp-layout-color2);
}

.jp-icon-alt .jp-icon3[fill] {
  fill: var(--jp-layout-color3);
}

.jp-icon-alt .jp-icon4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-alt .jp-icon0[stroke] {
  stroke: var(--jp-layout-color0);
}

.jp-icon-alt .jp-icon1[stroke] {
  stroke: var(--jp-layout-color1);
}

.jp-icon-alt .jp-icon2[stroke] {
  stroke: var(--jp-layout-color2);
}

.jp-icon-alt .jp-icon3[stroke] {
  stroke: var(--jp-layout-color3);
}

.jp-icon-alt .jp-icon4[stroke] {
  stroke: var(--jp-layout-color4);
}

/* alt recolor the accent elements of an icon */
.jp-icon-alt .jp-icon-accent0[fill] {
  fill: var(--jp-inverse-layout-color0);
}

.jp-icon-alt .jp-icon-accent1[fill] {
  fill: var(--jp-inverse-layout-color1);
}

.jp-icon-alt .jp-icon-accent2[fill] {
  fill: var(--jp-inverse-layout-color2);
}

.jp-icon-alt .jp-icon-accent3[fill] {
  fill: var(--jp-inverse-layout-color3);
}

.jp-icon-alt .jp-icon-accent4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-alt .jp-icon-accent0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}

.jp-icon-alt .jp-icon-accent1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}

.jp-icon-alt .jp-icon-accent2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}

.jp-icon-alt .jp-icon-accent3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}

.jp-icon-alt .jp-icon-accent4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-icon-hoverShow:not(:hover) .jp-icon-hoverShow-content {
  display: none !important;
}

/**
 * Support for hover colors for icons as inline SVG HTMLElements
 */

/**
 * regular colors
 */

/* recolor the primary elements of an icon */
.jp-icon-hover :hover .jp-icon0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}

.jp-icon-hover :hover .jp-icon1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}

.jp-icon-hover :hover .jp-icon2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}

.jp-icon-hover :hover .jp-icon3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}

.jp-icon-hover :hover .jp-icon4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}

.jp-icon-hover :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}

.jp-icon-hover :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}

.jp-icon-hover :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}

.jp-icon-hover :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/* recolor the accent elements of an icon */
.jp-icon-hover :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-layout-color0);
}

.jp-icon-hover :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-layout-color1);
}

.jp-icon-hover :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-layout-color2);
}

.jp-icon-hover :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-layout-color3);
}

.jp-icon-hover :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}

.jp-icon-hover :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}

.jp-icon-hover :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}

.jp-icon-hover :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}

.jp-icon-hover :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* set the color of an icon to transparent */
.jp-icon-hover :hover .jp-icon-none-hover[fill] {
  fill: none;
}

.jp-icon-hover :hover .jp-icon-none-hover[stroke] {
  stroke: none;
}

/**
 * inverse colors
 */

/* inverse recolor the primary elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[fill] {
  fill: var(--jp-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[fill] {
  fill: var(--jp-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[fill] {
  fill: var(--jp-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[fill] {
  fill: var(--jp-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* inverse recolor the accent elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-IFrame {
  width: 100%;
  height: 100%;
}

.jp-IFrame > iframe {
  border: none;
}

/*
When drag events occur, \\`lm-mod-override-cursor\\` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-IFrame {
  position: relative;
}

body.lm-mod-override-cursor .jp-IFrame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-HoverBox {
  position: fixed;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-FormGroup-content fieldset {
  border: none;
  padding: 0;
  min-width: 0;
  width: 100%;
}

/* stylelint-disable selector-max-type */

.jp-FormGroup-content fieldset .jp-inputFieldWrapper input,
.jp-FormGroup-content fieldset .jp-inputFieldWrapper select,
.jp-FormGroup-content fieldset .jp-inputFieldWrapper textarea {
  font-size: var(--jp-content-font-size2);
  border-color: var(--jp-input-border-color);
  border-style: solid;
  border-radius: var(--jp-border-radius);
  border-width: 1px;
  padding: 6px 8px;
  background: none;
  color: var(--jp-ui-font-color0);
  height: inherit;
}

.jp-FormGroup-content fieldset input[type='checkbox'] {
  position: relative;
  top: 2px;
  margin-left: 0;
}

.jp-FormGroup-content button.jp-mod-styled {
  cursor: pointer;
}

.jp-FormGroup-content .checkbox label {
  cursor: pointer;
  font-size: var(--jp-content-font-size1);
}

.jp-FormGroup-content .jp-root > fieldset > legend {
  display: none;
}

.jp-FormGroup-content .jp-root > fieldset > p {
  display: none;
}

/** copy of \\`input.jp-mod-styled:focus\\` style */
.jp-FormGroup-content fieldset input:focus,
.jp-FormGroup-content fieldset select:focus {
  -moz-outline-radius: unset;
  outline: var(--jp-border-width) solid var(--md-blue-500);
  outline-offset: -1px;
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-FormGroup-content fieldset input:hover:not(:focus),
.jp-FormGroup-content fieldset select:hover:not(:focus) {
  background-color: var(--jp-border-color2);
}

/* stylelint-enable selector-max-type */

.jp-FormGroup-content .checkbox .field-description {
  /* Disable default description field for checkbox:
   because other widgets do not have description fields,
   we add descriptions to each widget on the field level.
  */
  display: none;
}

.jp-FormGroup-content #root__description {
  display: none;
}

.jp-FormGroup-content .jp-modifiedIndicator {
  width: 5px;
  background-color: var(--jp-brand-color2);
  margin-top: 0;
  margin-left: calc(var(--jp-private-settingeditor-modifier-indent) * -1);
  flex-shrink: 0;
}

.jp-FormGroup-content .jp-modifiedIndicator.jp-errorIndicator {
  background-color: var(--jp-error-color0);
  margin-right: 0.5em;
}

/* RJSF ARRAY style */

.jp-arrayFieldWrapper legend {
  font-size: var(--jp-content-font-size2);
  color: var(--jp-ui-font-color0);
  flex-basis: 100%;
  padding: 4px 0;
  font-weight: var(--jp-content-heading-font-weight);
  border-bottom: 1px solid var(--jp-border-color2);
}

.jp-arrayFieldWrapper .field-description {
  padding: 4px 0;
  white-space: pre-wrap;
}

.jp-arrayFieldWrapper .array-item {
  width: 100%;
  border: 1px solid var(--jp-border-color2);
  border-radius: 4px;
  margin: 4px;
}

.jp-ArrayOperations {
  display: flex;
  margin-left: 8px;
}

.jp-ArrayOperationsButton {
  margin: 2px;
}

.jp-ArrayOperationsButton .jp-icon3[fill] {
  fill: var(--jp-ui-font-color0);
}

button.jp-ArrayOperationsButton.jp-mod-styled:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* RJSF form validation error */

.jp-FormGroup-content .validationErrors {
  color: var(--jp-error-color0);
}

/* Hide panel level error as duplicated the field level error */
.jp-FormGroup-content .panel.errors {
  display: none;
}

/* RJSF normal content (settings-editor) */

.jp-FormGroup-contentNormal {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.jp-FormGroup-contentNormal .jp-FormGroup-contentItem {
  margin-left: 7px;
  color: var(--jp-ui-font-color0);
}

.jp-FormGroup-contentNormal .jp-FormGroup-description {
  flex-basis: 100%;
  padding: 4px 7px;
}

.jp-FormGroup-contentNormal .jp-FormGroup-default {
  flex-basis: 100%;
  padding: 4px 7px;
}

.jp-FormGroup-contentNormal .jp-FormGroup-fieldLabel {
  font-size: var(--jp-content-font-size1);
  font-weight: normal;
  min-width: 120px;
}

.jp-FormGroup-contentNormal fieldset:not(:first-child) {
  margin-left: 7px;
}

.jp-FormGroup-contentNormal .field-array-of-string .array-item {
  /* Display \\`jp-ArrayOperations\\` buttons side-by-side with content except
    for small screens where flex-wrap will place them one below the other.
  */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.jp-FormGroup-contentNormal .jp-objectFieldWrapper .form-group {
  padding: 2px 8px 2px var(--jp-private-settingeditor-modifier-indent);
  margin-top: 2px;
}

/* RJSF compact content (metadata-form) */

.jp-FormGroup-content.jp-FormGroup-contentCompact {
  width: 100%;
}

.jp-FormGroup-contentCompact .form-group {
  display: flex;
  padding: 0.5em 0.2em 0.5em 0;
}

.jp-FormGroup-contentCompact
  .jp-FormGroup-compactTitle
  .jp-FormGroup-description {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color2);
}

.jp-FormGroup-contentCompact .jp-FormGroup-fieldLabel {
  padding-bottom: 0.3em;
}

.jp-FormGroup-contentCompact .jp-inputFieldWrapper .form-control {
  width: 100%;
  box-sizing: border-box;
}

.jp-FormGroup-contentCompact .jp-arrayFieldWrapper .jp-FormGroup-compactTitle {
  padding-bottom: 7px;
}

.jp-FormGroup-contentCompact
  .jp-objectFieldWrapper
  .jp-objectFieldWrapper
  .form-group {
  padding: 2px 8px 2px var(--jp-private-settingeditor-modifier-indent);
  margin-top: 2px;
}

.jp-FormGroup-contentCompact ul.error-detail {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  padding-inline-start: 1em;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-SidePanel {
  display: flex;
  flex-direction: column;
  min-width: var(--jp-sidebar-min-width);
  overflow-y: auto;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  font-size: var(--jp-ui-font-size1);
}

.jp-SidePanel-header {
  flex: 0 0 auto;
  display: flex;
  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
  padding: 2px;
  text-transform: uppercase;
}

.jp-SidePanel-toolbar {
  flex: 0 0 auto;
}

.jp-SidePanel-content {
  flex: 1 1 auto;
}

.jp-SidePanel-toolbar,
.jp-AccordionPanel-toolbar {
  height: var(--jp-private-toolbar-height);
}

.jp-SidePanel-toolbar.jp-Toolbar-micro {
  display: none;
}

.lm-AccordionPanel .jp-AccordionPanel-title {
  box-sizing: border-box;
  line-height: 25px;
  margin: 0;
  display: flex;
  align-items: center;
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  font-size: var(--jp-ui-font-size0);
}

.jp-AccordionPanel-title {
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  text-transform: uppercase;
}

.lm-AccordionPanel[data-orientation='horizontal'] > .jp-AccordionPanel-title {
  /* Title is rotated for horizontal accordion panel using CSS */
  display: block;
  transform-origin: top left;
  transform: rotate(-90deg) translate(-100%);
}

.jp-AccordionPanel-title .lm-AccordionPanel-titleLabel {
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.jp-AccordionPanel-title .lm-AccordionPanel-titleCollapser {
  transform: rotate(-90deg);
  margin: auto 0;
  height: 16px;
}

.jp-AccordionPanel-title.lm-mod-expanded .lm-AccordionPanel-titleCollapser {
  transform: rotate(0deg);
}

.lm-AccordionPanel .jp-AccordionPanel-toolbar {
  background: none;
  box-shadow: none;
  border: none;
  margin-left: auto;
}

.lm-AccordionPanel .lm-SplitPanel-handle:hover {
  background: var(--jp-layout-color3);
}

.jp-text-truncated {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-layout-color0);
  outline: none;
}

.jp-SpinnerContent {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: var(--jp-brand-color3);
  background: linear-gradient(
    to right,
    #f37626 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: load3 1s infinite linear, fadeIn 1s;
}

.jp-SpinnerContent::before {
  width: 50%;
  height: 50%;
  background: #f37626;
  border-radius: 100% 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}

.jp-SpinnerContent::after {
  background: var(--jp-layout-color0);
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes load3 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

button.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: none;
  box-sizing: border-box;
  text-align: center;
  line-height: 32px;
  height: 32px;
  padding: 0 12px;
  letter-spacing: 0.8px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input.jp-mod-styled {
  background: var(--jp-input-background);
  height: 28px;
  box-sizing: border-box;
  border: var(--jp-border-width) solid var(--jp-border-color1);
  padding-left: 7px;
  padding-right: 7px;
  font-size: var(--jp-ui-font-size2);
  color: var(--jp-ui-font-color0);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type='checkbox'].jp-mod-styled {
  appearance: checkbox;
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  height: auto;
}

input.jp-mod-styled:focus {
  border: var(--jp-border-width) solid var(--md-blue-500);
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-select-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1px;
  background-color: var(--jp-layout-color1);
  box-sizing: border-box;
  margin-bottom: 12px;
}

.jp-select-wrapper:not(.multiple) {
  height: 28px;
}

.jp-select-wrapper.jp-mod-focused select.jp-mod-styled {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-input-active-background);
}

select.jp-mod-styled:hover {
  cursor: pointer;
  color: var(--jp-ui-font-color0);
  background-color: var(--jp-input-hover-background);
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);
}

select.jp-mod-styled {
  flex: 1 1 auto;
  width: 100%;
  font-size: var(--jp-ui-font-size2);
  background: var(--jp-input-background);
  color: var(--jp-ui-font-color0);
  padding: 0 25px 0 8px;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

select.jp-mod-styled:not([multiple]) {
  height: 32px;
}

select.jp-mod-styled[multiple] {
  max-height: 200px;
  overflow-y: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-switch {
  display: flex;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  font-size: var(--jp-ui-font-size1);
  background-color: transparent;
  color: var(--jp-ui-font-color1);
  border: none;
  height: 20px;
}

.jp-switch:hover {
  background-color: var(--jp-layout-color2);
}

.jp-switch-label {
  margin-right: 5px;
  font-family: var(--jp-ui-font-family);
}

.jp-switch-track {
  cursor: pointer;
  background-color: var(--jp-switch-color, var(--jp-border-color1));
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  height: 16px;
  width: 35px;
  position: relative;
}

.jp-switch-track::before {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  margin: 3px;
  left: 0;
  background-color: var(--jp-ui-inverse-font-color1);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

.jp-switch[aria-checked='true'] .jp-switch-track {
  background-color: var(--jp-switch-true-position-color, var(--jp-warn-color0));
}

.jp-switch[aria-checked='true'] .jp-switch-track::before {
  /* track width (35) - margins (3 + 3) - thumb width (10) */
  left: 19px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

:root {
  --jp-private-toolbar-height: calc(
    28px + var(--jp-border-width)
  ); /* leave 28px for content */
}

.jp-Toolbar {
  color: var(--jp-ui-font-color1);
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  background: var(--jp-toolbar-background);
  min-height: var(--jp-toolbar-micro-height);
  padding: 2px;
  z-index: 8;
  overflow-x: hidden;
}

/* Toolbar items */

.jp-Toolbar > .jp-Toolbar-item.jp-Toolbar-spacer {
  flex-grow: 1;
  flex-shrink: 1;
}

.jp-Toolbar-item.jp-Toolbar-kernelStatus {
  display: inline-block;
  width: 32px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
}

.jp-Toolbar > .jp-Toolbar-item {
  flex: 0 0 auto;
  display: flex;
  padding-left: 1px;
  padding-right: 1px;
  font-size: var(--jp-ui-font-size1);
  line-height: var(--jp-private-toolbar-height);
  height: 100%;
}

/* Toolbar buttons */

/* This is the div we use to wrap the react component into a Widget */
div.jp-ToolbarButton {
  color: transparent;
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0;
  margin: 0;
}

button.jp-ToolbarButtonComponent {
  background: var(--jp-layout-color1);
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0 6px;
  margin: 0;
  height: 24px;
  border-radius: var(--jp-border-radius);
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  min-width: unset;
  min-height: unset;
}

button.jp-ToolbarButtonComponent:disabled {
  opacity: 0.4;
}

button.jp-ToolbarButtonComponent > span {
  padding: 0;
  flex: 0 0 auto;
}

button.jp-ToolbarButtonComponent .jp-ToolbarButtonComponent-label {
  font-size: var(--jp-ui-font-size1);
  line-height: 100%;
  padding-left: 2px;
  color: var(--jp-ui-font-color1);
  font-family: var(--jp-ui-font-family);
}

#jp-main-dock-panel[data-mode='single-document']
  .jp-MainAreaWidget
  > .jp-Toolbar.jp-Toolbar-micro {
  padding: 0;
  min-height: 0;
}

#jp-main-dock-panel[data-mode='single-document']
  .jp-MainAreaWidget
  > .jp-Toolbar {
  border: none;
  box-shadow: none;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-WindowedPanel-outer {
  position: relative;
  overflow-y: auto;
}

.jp-WindowedPanel-inner {
  position: relative;
}

.jp-WindowedPanel-window {
  position: absolute;
  left: 0;
  right: 0;
  overflow: visible;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* Sibling imports */

body {
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
}

/* Disable native link decoration styles everywhere outside of dialog boxes */
a {
  text-decoration: unset;
  color: unset;
}

a:hover {
  text-decoration: unset;
  color: unset;
}

/* Accessibility for links inside dialog box text */
.jp-Dialog-content a {
  text-decoration: revert;
  color: var(--jp-content-link-color);
}

.jp-Dialog-content a:hover {
  text-decoration: revert;
}

/* Styles for ui-components */
.jp-Button {
  color: var(--jp-ui-font-color2);
  border-radius: var(--jp-border-radius);
  padding: 0 12px;
  font-size: var(--jp-ui-font-size1);

  /* Copy from blueprint 3 */
  display: inline-flex;
  flex-direction: row;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: left;
  vertical-align: middle;
  min-height: 30px;
  min-width: 30px;
}

.jp-Button:disabled {
  cursor: not-allowed;
}

.jp-Button:empty {
  padding: 0 !important;
}

.jp-Button.jp-mod-small {
  min-height: 24px;
  min-width: 24px;
  font-size: 12px;
  padding: 0 7px;
}

/* Use our own theme for hover styles */
.jp-Button.jp-mod-minimal:hover {
  background-color: var(--jp-layout-color2);
}

.jp-Button.jp-mod-minimal {
  background: none;
}

.jp-InputGroup {
  display: block;
  position: relative;
}

.jp-InputGroup input {
  box-sizing: border-box;
  border: none;
  border-radius: 0;
  background-color: transparent;
  color: var(--jp-ui-font-color0);
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
  padding-bottom: 0;
  padding-top: 0;
  padding-left: 10px;
  padding-right: 28px;
  position: relative;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
  font-weight: 400;
  height: 30px;
  line-height: 30px;
  outline: none;
  vertical-align: middle;
}

.jp-InputGroup input:focus {
  box-shadow: inset 0 0 0 var(--jp-border-width)
      var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-InputGroup input:disabled {
  cursor: not-allowed;
  resize: block;
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color2);
}

.jp-InputGroup input:disabled ~ span {
  cursor: not-allowed;
  color: var(--jp-ui-font-color2);
}

.jp-InputGroup input::placeholder,
input::placeholder {
  color: var(--jp-ui-font-color2);
}

.jp-InputGroupAction {
  position: absolute;
  bottom: 1px;
  right: 0;
  padding: 6px;
}

.jp-HTMLSelect.jp-DefaultStyle select {
  background-color: initial;
  border: none;
  border-radius: 0;
  box-shadow: none;
  color: var(--jp-ui-font-color0);
  display: block;
  font-size: var(--jp-ui-font-size1);
  font-family: var(--jp-ui-font-family);
  height: 24px;
  line-height: 14px;
  padding: 0 25px 0 10px;
  text-align: left;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.jp-HTMLSelect.jp-DefaultStyle select:disabled {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color2);
  cursor: not-allowed;
  resize: block;
}

.jp-HTMLSelect.jp-DefaultStyle select:disabled ~ span {
  cursor: not-allowed;
}

/* Use our own theme for hover and option styles */
/* stylelint-disable-next-line selector-max-type */
.jp-HTMLSelect.jp-DefaultStyle select:hover,
.jp-HTMLSelect.jp-DefaultStyle select > option {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color0);
}

select {
  box-sizing: border-box;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-StatusBar-Widget {
  display: flex;
  align-items: center;
  background: var(--jp-layout-color2);
  min-height: var(--jp-statusbar-height);
  justify-content: space-between;
  padding: 0 10px;
}

.jp-StatusBar-Left {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.jp-StatusBar-Middle {
  display: flex;
  align-items: center;
}

.jp-StatusBar-Right {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.jp-StatusBar-Item {
  max-height: var(--jp-statusbar-height);
  margin: 0 2px;
  height: var(--jp-statusbar-height);
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--jp-ui-font-color1);
  padding: 0 6px;
}

.jp-mod-highlighted:hover {
  background-color: var(--jp-layout-color3);
}

.jp-mod-clicked {
  background-color: var(--jp-brand-color1);
}

.jp-mod-clicked:hover {
  background-color: var(--jp-brand-color0);
}

.jp-mod-clicked .jp-StatusBar-TextItem {
  color: var(--jp-ui-inverse-font-color1);
}

.jp-StatusBar-HoverItem {
  box-shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)';
}

.jp-StatusBar-TextItem {
  font-size: var(--jp-ui-font-size1);
  font-family: var(--jp-ui-font-family);
  line-height: 24px;
  color: var(--jp-ui-font-color1);
}

.jp-StatusBar-GroupItem {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.jp-Statusbar-ProgressCircle svg {
  display: block;
  margin: 0 auto;
  width: 16px;
  height: 24px;
  align-self: normal;
}

.jp-Statusbar-ProgressCircle path {
  fill: var(--jp-inverse-layout-color3);
}

.jp-Statusbar-ProgressBar-progress-bar {
  height: 10px;
  width: 100px;
  border: solid 0.25px var(--jp-brand-color2);
  border-radius: 3px;
  overflow: hidden;
  align-self: center;
}

.jp-Statusbar-ProgressBar-progress-bar > div {
  background-color: var(--jp-brand-color2);
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px 40px;
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  text-align: center;
  animation: jp-Statusbar-ExecutionTime-progress-bar 2s linear infinite;
}

.jp-Statusbar-ProgressBar-progress-bar p {
  color: var(--jp-ui-font-color1);
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  line-height: 10px;
  width: 100px;
}

@keyframes jp-Statusbar-ExecutionTime-progress-bar {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 40px 40px;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-commandpalette-search-height: 28px;
}

/*-----------------------------------------------------------------------------
| Overall styles
|----------------------------------------------------------------------------*/

.lm-CommandPalette {
  padding-bottom: 0;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);

  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Modal variant
|----------------------------------------------------------------------------*/

.jp-ModalCommandPalette {
  position: absolute;
  z-index: 10000;
  top: 38px;
  left: 30%;
  margin: 0;
  padding: 4px;
  width: 40%;
  box-shadow: var(--jp-elevation-z4);
  border-radius: 4px;
  background: var(--jp-layout-color0);
}

.jp-ModalCommandPalette .lm-CommandPalette {
  max-height: 40vh;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-close-icon::after {
  display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-header {
  display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-item {
  margin-left: 4px;
  margin-right: 4px;
}

.jp-ModalCommandPalette
  .lm-CommandPalette
  .lm-CommandPalette-item.lm-mod-disabled {
  display: none;
}

/*-----------------------------------------------------------------------------
| Search
|----------------------------------------------------------------------------*/

.lm-CommandPalette-search {
  padding: 4px;
  background-color: var(--jp-layout-color1);
  z-index: 2;
}

.lm-CommandPalette-wrapper {
  overflow: overlay;
  padding: 0 9px;
  background-color: var(--jp-input-active-background);
  height: 30px;
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.lm-CommandPalette.lm-mod-focused .lm-CommandPalette-wrapper {
  box-shadow: inset 0 0 0 1px var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-SearchIconGroup {
  color: white;
  background-color: var(--jp-brand-color1);
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 5px 5px 1px;
}

.jp-SearchIconGroup svg {
  height: 20px;
  width: 20px;
}

.jp-SearchIconGroup .jp-icon3[fill] {
  fill: var(--jp-layout-color0);
}

.lm-CommandPalette-input {
  background: transparent;
  width: calc(100% - 18px);
  float: left;
  border: none;
  outline: none;
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  line-height: var(--jp-private-commandpalette-search-height);
}

.lm-CommandPalette-input::-webkit-input-placeholder,
.lm-CommandPalette-input::-moz-placeholder,
.lm-CommandPalette-input:-ms-input-placeholder {
  color: var(--jp-ui-font-color2);
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Results
|----------------------------------------------------------------------------*/

.lm-CommandPalette-header:first-child {
  margin-top: 0;
}

.lm-CommandPalette-header {
  border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
  color: var(--jp-ui-font-color1);
  cursor: pointer;
  display: flex;
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 8px;
  padding: 8px 0 8px 12px;
  text-transform: uppercase;
}

.lm-CommandPalette-header.lm-mod-active {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-header > mark {
  background-color: transparent;
  font-weight: bold;
  color: var(--jp-ui-font-color1);
}

.lm-CommandPalette-item {
  padding: 4px 12px 4px 4px;
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  font-weight: 400;
  display: flex;
}

.lm-CommandPalette-item.lm-mod-disabled {
  color: var(--jp-ui-font-color2);
}

.lm-CommandPalette-item.lm-mod-active {
  color: var(--jp-ui-inverse-font-color1);
  background: var(--jp-brand-color1);
}

.lm-CommandPalette-item.lm-mod-active .lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-inverse-font-color0);
}

.lm-CommandPalette-item.lm-mod-active .jp-icon-selectable[fill] {
  fill: var(--jp-layout-color0);
}

.lm-CommandPalette-item.lm-mod-active:hover:not(.lm-mod-disabled) {
  color: var(--jp-ui-inverse-font-color1);
  background: var(--jp-brand-color1);
}

.lm-CommandPalette-item:hover:not(.lm-mod-active):not(.lm-mod-disabled) {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-itemContent {
  overflow: hidden;
}

.lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

.lm-CommandPalette-item.lm-mod-disabled mark {
  color: var(--jp-ui-font-color2);
}

.lm-CommandPalette-item .lm-CommandPalette-itemIcon {
  margin: 0 4px 0 0;
  position: relative;
  width: 16px;
  top: 2px;
  flex: 0 0 auto;
}

.lm-CommandPalette-item.lm-mod-disabled .lm-CommandPalette-itemIcon {
  opacity: 0.6;
}

.lm-CommandPalette-item .lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemCaption {
  display: none;
}

.lm-CommandPalette-content {
  background-color: var(--jp-layout-color1);
}

.lm-CommandPalette-content:empty::after {
  content: 'No results';
  margin: auto;
  margin-top: 20px;
  width: 100px;
  display: block;
  font-size: var(--jp-ui-font-size2);
  font-family: var(--jp-ui-font-family);
  font-weight: lighter;
}

.lm-CommandPalette-emptyMessage {
  text-align: center;
  margin-top: 24px;
  line-height: 1.32;
  padding: 0 8px;
  color: var(--jp-content-font-color3);
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Dialog {
  position: absolute;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-dialog-background);
}

.jp-Dialog-content {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background: var(--jp-layout-color1);
  padding: 24px 24px 12px;
  min-width: 300px;
  min-height: 150px;
  max-width: 1000px;
  max-height: 500px;
  box-sizing: border-box;
  box-shadow: var(--jp-elevation-z20);
  word-wrap: break-word;
  border-radius: var(--jp-border-radius);

  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color1);
  resize: both;
}

.jp-Dialog-content.jp-Dialog-content-small {
  max-width: 500px;
}

.jp-Dialog-button {
  overflow: visible;
}

button.jp-Dialog-button:focus {
  outline: 1px solid var(--jp-brand-color1);
  outline-offset: 4px;
  -moz-outline-radius: 0;
}

button.jp-Dialog-button:focus::-moz-focus-inner {
  border: 0;
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-accept:focus,
button.jp-Dialog-button.jp-mod-styled.jp-mod-warn:focus,
button.jp-Dialog-button.jp-mod-styled.jp-mod-reject:focus {
  outline-offset: 4px;
  -moz-outline-radius: 0;
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-accept:focus {
  outline: 1px solid var(--jp-accept-color-normal, var(--jp-brand-color1));
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-warn:focus {
  outline: 1px solid var(--jp-warn-color-normal, var(--jp-error-color1));
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-reject:focus {
  outline: 1px solid var(--jp-reject-color-normal, var(--md-grey-600));
}

button.jp-Dialog-close-button {
  padding: 0;
  height: 100%;
  min-width: unset;
  min-height: unset;
}

.jp-Dialog-header {
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  padding-bottom: 12px;
  font-size: var(--jp-ui-font-size3);
  font-weight: 400;
  color: var(--jp-ui-font-color1);
}

.jp-Dialog-body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  font-size: var(--jp-ui-font-size1);
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  overflow: auto;
}

.jp-Dialog-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 auto;
  margin-left: -12px;
  margin-right: -12px;
  padding: 12px;
}

.jp-Dialog-checkbox {
  padding-right: 5px;
}

.jp-Dialog-checkbox > input:focus-visible {
  outline: 1px solid var(--jp-input-active-border-color);
  outline-offset: 1px;
}

.jp-Dialog-spacer {
  flex: 1 1 auto;
}

.jp-Dialog-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.jp-Dialog-body > .jp-select-wrapper {
  width: 100%;
}

.jp-Dialog-body > button {
  padding: 0 16px;
}

.jp-Dialog-body > label {
  line-height: 1.4;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-button.jp-mod-styled:not(:last-child) {
  margin-right: 12px;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-Input-Boolean-Dialog {
  flex-direction: row-reverse;
  align-items: end;
  width: 100%;
}

.jp-Input-Boolean-Dialog > label {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MainAreaWidget > :focus {
  outline: none;
}

.jp-MainAreaWidget .jp-MainAreaWidget-error {
  padding: 6px;
}

.jp-MainAreaWidget .jp-MainAreaWidget-error > pre {
  width: auto;
  padding: 10px;
  background: var(--jp-error-color3);
  border: var(--jp-border-width) solid var(--jp-error-color1);
  border-radius: var(--jp-border-radius);
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  white-space: pre-wrap;
  word-wrap: break-word;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/**
 * google-material-color v1.2.6
 * https://github.com/danlevan/google-material-color
 */
:root {
  --md-red-50: #ffebee;
  --md-red-100: #ffcdd2;
  --md-red-200: #ef9a9a;
  --md-red-300: #e57373;
  --md-red-400: #ef5350;
  --md-red-500: #f44336;
  --md-red-600: #e53935;
  --md-red-700: #d32f2f;
  --md-red-800: #c62828;
  --md-red-900: #b71c1c;
  --md-red-A100: #ff8a80;
  --md-red-A200: #ff5252;
  --md-red-A400: #ff1744;
  --md-red-A700: #d50000;
  --md-pink-50: #fce4ec;
  --md-pink-100: #f8bbd0;
  --md-pink-200: #f48fb1;
  --md-pink-300: #f06292;
  --md-pink-400: #ec407a;
  --md-pink-500: #e91e63;
  --md-pink-600: #d81b60;
  --md-pink-700: #c2185b;
  --md-pink-800: #ad1457;
  --md-pink-900: #880e4f;
  --md-pink-A100: #ff80ab;
  --md-pink-A200: #ff4081;
  --md-pink-A400: #f50057;
  --md-pink-A700: #c51162;
  --md-purple-50: #f3e5f5;
  --md-purple-100: #e1bee7;
  --md-purple-200: #ce93d8;
  --md-purple-300: #ba68c8;
  --md-purple-400: #ab47bc;
  --md-purple-500: #9c27b0;
  --md-purple-600: #8e24aa;
  --md-purple-700: #7b1fa2;
  --md-purple-800: #6a1b9a;
  --md-purple-900: #4a148c;
  --md-purple-A100: #ea80fc;
  --md-purple-A200: #e040fb;
  --md-purple-A400: #d500f9;
  --md-purple-A700: #a0f;
  --md-deep-purple-50: #ede7f6;
  --md-deep-purple-100: #d1c4e9;
  --md-deep-purple-200: #b39ddb;
  --md-deep-purple-300: #9575cd;
  --md-deep-purple-400: #7e57c2;
  --md-deep-purple-500: #673ab7;
  --md-deep-purple-600: #5e35b1;
  --md-deep-purple-700: #512da8;
  --md-deep-purple-800: #4527a0;
  --md-deep-purple-900: #311b92;
  --md-deep-purple-A100: #b388ff;
  --md-deep-purple-A200: #7c4dff;
  --md-deep-purple-A400: #651fff;
  --md-deep-purple-A700: #6200ea;
  --md-indigo-50: #e8eaf6;
  --md-indigo-100: #c5cae9;
  --md-indigo-200: #9fa8da;
  --md-indigo-300: #7986cb;
  --md-indigo-400: #5c6bc0;
  --md-indigo-500: #3f51b5;
  --md-indigo-600: #3949ab;
  --md-indigo-700: #303f9f;
  --md-indigo-800: #283593;
  --md-indigo-900: #1a237e;
  --md-indigo-A100: #8c9eff;
  --md-indigo-A200: #536dfe;
  --md-indigo-A400: #3d5afe;
  --md-indigo-A700: #304ffe;
  --md-blue-50: #e3f2fd;
  --md-blue-100: #bbdefb;
  --md-blue-200: #90caf9;
  --md-blue-300: #64b5f6;
  --md-blue-400: #42a5f5;
  --md-blue-500: #2196f3;
  --md-blue-600: #1e88e5;
  --md-blue-700: #1976d2;
  --md-blue-800: #1565c0;
  --md-blue-900: #0d47a1;
  --md-blue-A100: #82b1ff;
  --md-blue-A200: #448aff;
  --md-blue-A400: #2979ff;
  --md-blue-A700: #2962ff;
  --md-light-blue-50: #e1f5fe;
  --md-light-blue-100: #b3e5fc;
  --md-light-blue-200: #81d4fa;
  --md-light-blue-300: #4fc3f7;
  --md-light-blue-400: #29b6f6;
  --md-light-blue-500: #03a9f4;
  --md-light-blue-600: #039be5;
  --md-light-blue-700: #0288d1;
  --md-light-blue-800: #0277bd;
  --md-light-blue-900: #01579b;
  --md-light-blue-A100: #80d8ff;
  --md-light-blue-A200: #40c4ff;
  --md-light-blue-A400: #00b0ff;
  --md-light-blue-A700: #0091ea;
  --md-cyan-50: #e0f7fa;
  --md-cyan-100: #b2ebf2;
  --md-cyan-200: #80deea;
  --md-cyan-300: #4dd0e1;
  --md-cyan-400: #26c6da;
  --md-cyan-500: #00bcd4;
  --md-cyan-600: #00acc1;
  --md-cyan-700: #0097a7;
  --md-cyan-800: #00838f;
  --md-cyan-900: #006064;
  --md-cyan-A100: #84ffff;
  --md-cyan-A200: #18ffff;
  --md-cyan-A400: #00e5ff;
  --md-cyan-A700: #00b8d4;
  --md-teal-50: #e0f2f1;
  --md-teal-100: #b2dfdb;
  --md-teal-200: #80cbc4;
  --md-teal-300: #4db6ac;
  --md-teal-400: #26a69a;
  --md-teal-500: #009688;
  --md-teal-600: #00897b;
  --md-teal-700: #00796b;
  --md-teal-800: #00695c;
  --md-teal-900: #004d40;
  --md-teal-A100: #a7ffeb;
  --md-teal-A200: #64ffda;
  --md-teal-A400: #1de9b6;
  --md-teal-A700: #00bfa5;
  --md-green-50: #e8f5e9;
  --md-green-100: #c8e6c9;
  --md-green-200: #a5d6a7;
  --md-green-300: #81c784;
  --md-green-400: #66bb6a;
  --md-green-500: #4caf50;
  --md-green-600: #43a047;
  --md-green-700: #388e3c;
  --md-green-800: #2e7d32;
  --md-green-900: #1b5e20;
  --md-green-A100: #b9f6ca;
  --md-green-A200: #69f0ae;
  --md-green-A400: #00e676;
  --md-green-A700: #00c853;
  --md-light-green-50: #f1f8e9;
  --md-light-green-100: #dcedc8;
  --md-light-green-200: #c5e1a5;
  --md-light-green-300: #aed581;
  --md-light-green-400: #9ccc65;
  --md-light-green-500: #8bc34a;
  --md-light-green-600: #7cb342;
  --md-light-green-700: #689f38;
  --md-light-green-800: #558b2f;
  --md-light-green-900: #33691e;
  --md-light-green-A100: #ccff90;
  --md-light-green-A200: #b2ff59;
  --md-light-green-A400: #76ff03;
  --md-light-green-A700: #64dd17;
  --md-lime-50: #f9fbe7;
  --md-lime-100: #f0f4c3;
  --md-lime-200: #e6ee9c;
  --md-lime-300: #dce775;
  --md-lime-400: #d4e157;
  --md-lime-500: #cddc39;
  --md-lime-600: #c0ca33;
  --md-lime-700: #afb42b;
  --md-lime-800: #9e9d24;
  --md-lime-900: #827717;
  --md-lime-A100: #f4ff81;
  --md-lime-A200: #eeff41;
  --md-lime-A400: #c6ff00;
  --md-lime-A700: #aeea00;
  --md-yellow-50: #fffde7;
  --md-yellow-100: #fff9c4;
  --md-yellow-200: #fff59d;
  --md-yellow-300: #fff176;
  --md-yellow-400: #ffee58;
  --md-yellow-500: #ffeb3b;
  --md-yellow-600: #fdd835;
  --md-yellow-700: #fbc02d;
  --md-yellow-800: #f9a825;
  --md-yellow-900: #f57f17;
  --md-yellow-A100: #ffff8d;
  --md-yellow-A200: #ff0;
  --md-yellow-A400: #ffea00;
  --md-yellow-A700: #ffd600;
  --md-amber-50: #fff8e1;
  --md-amber-100: #ffecb3;
  --md-amber-200: #ffe082;
  --md-amber-300: #ffd54f;
  --md-amber-400: #ffca28;
  --md-amber-500: #ffc107;
  --md-amber-600: #ffb300;
  --md-amber-700: #ffa000;
  --md-amber-800: #ff8f00;
  --md-amber-900: #ff6f00;
  --md-amber-A100: #ffe57f;
  --md-amber-A200: #ffd740;
  --md-amber-A400: #ffc400;
  --md-amber-A700: #ffab00;
  --md-orange-50: #fff3e0;
  --md-orange-100: #ffe0b2;
  --md-orange-200: #ffcc80;
  --md-orange-300: #ffb74d;
  --md-orange-400: #ffa726;
  --md-orange-500: #ff9800;
  --md-orange-600: #fb8c00;
  --md-orange-700: #f57c00;
  --md-orange-800: #ef6c00;
  --md-orange-900: #e65100;
  --md-orange-A100: #ffd180;
  --md-orange-A200: #ffab40;
  --md-orange-A400: #ff9100;
  --md-orange-A700: #ff6d00;
  --md-deep-orange-50: #fbe9e7;
  --md-deep-orange-100: #ffccbc;
  --md-deep-orange-200: #ffab91;
  --md-deep-orange-300: #ff8a65;
  --md-deep-orange-400: #ff7043;
  --md-deep-orange-500: #ff5722;
  --md-deep-orange-600: #f4511e;
  --md-deep-orange-700: #e64a19;
  --md-deep-orange-800: #d84315;
  --md-deep-orange-900: #bf360c;
  --md-deep-orange-A100: #ff9e80;
  --md-deep-orange-A200: #ff6e40;
  --md-deep-orange-A400: #ff3d00;
  --md-deep-orange-A700: #dd2c00;
  --md-brown-50: #efebe9;
  --md-brown-100: #d7ccc8;
  --md-brown-200: #bcaaa4;
  --md-brown-300: #a1887f;
  --md-brown-400: #8d6e63;
  --md-brown-500: #795548;
  --md-brown-600: #6d4c41;
  --md-brown-700: #5d4037;
  --md-brown-800: #4e342e;
  --md-brown-900: #3e2723;
  --md-grey-50: #fafafa;
  --md-grey-100: #f5f5f5;
  --md-grey-200: #eee;
  --md-grey-300: #e0e0e0;
  --md-grey-400: #bdbdbd;
  --md-grey-500: #9e9e9e;
  --md-grey-600: #757575;
  --md-grey-700: #616161;
  --md-grey-800: #424242;
  --md-grey-900: #212121;
  --md-blue-grey-50: #eceff1;
  --md-blue-grey-100: #cfd8dc;
  --md-blue-grey-200: #b0bec5;
  --md-blue-grey-300: #90a4ae;
  --md-blue-grey-400: #78909c;
  --md-blue-grey-500: #607d8b;
  --md-blue-grey-600: #546e7a;
  --md-blue-grey-700: #455a64;
  --md-blue-grey-800: #37474f;
  --md-blue-grey-900: #263238;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| RenderedText
|----------------------------------------------------------------------------*/

:root {
  /* This is the padding value to fill the gaps between lines containing spans with background color. */
  --jp-private-code-span-padding: calc(
    (var(--jp-code-line-height) - 1) * var(--jp-code-font-size) / 2
  );
}

.jp-RenderedText {
  text-align: left;
  padding-left: var(--jp-code-padding);
  line-height: var(--jp-code-line-height);
  font-family: var(--jp-code-font-family);
}

.jp-RenderedText pre,
.jp-RenderedJavaScript pre,
.jp-RenderedHTMLCommon pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
  border: none;
  margin: 0;
  padding: 0;
}

.jp-RenderedText pre a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

.jp-RenderedText pre a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}

.jp-RenderedText pre a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* console foregrounds and backgrounds */
.jp-RenderedText pre .ansi-black-fg {
  color: #3e424d;
}

.jp-RenderedText pre .ansi-red-fg {
  color: #e75c58;
}

.jp-RenderedText pre .ansi-green-fg {
  color: #00a250;
}

.jp-RenderedText pre .ansi-yellow-fg {
  color: #ddb62b;
}

.jp-RenderedText pre .ansi-blue-fg {
  color: #208ffb;
}

.jp-RenderedText pre .ansi-magenta-fg {
  color: #d160c4;
}

.jp-RenderedText pre .ansi-cyan-fg {
  color: #60c6c8;
}

.jp-RenderedText pre .ansi-white-fg {
  color: #c5c1b4;
}

.jp-RenderedText pre .ansi-black-bg {
  background-color: #3e424d;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-red-bg {
  background-color: #e75c58;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-green-bg {
  background-color: #00a250;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-yellow-bg {
  background-color: #ddb62b;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-blue-bg {
  background-color: #208ffb;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-magenta-bg {
  background-color: #d160c4;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-cyan-bg {
  background-color: #60c6c8;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-white-bg {
  background-color: #c5c1b4;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-black-intense-fg {
  color: #282c36;
}

.jp-RenderedText pre .ansi-red-intense-fg {
  color: #b22b31;
}

.jp-RenderedText pre .ansi-green-intense-fg {
  color: #007427;
}

.jp-RenderedText pre .ansi-yellow-intense-fg {
  color: #b27d12;
}

.jp-RenderedText pre .ansi-blue-intense-fg {
  color: #0065ca;
}

.jp-RenderedText pre .ansi-magenta-intense-fg {
  color: #a03196;
}

.jp-RenderedText pre .ansi-cyan-intense-fg {
  color: #258f8f;
}

.jp-RenderedText pre .ansi-white-intense-fg {
  color: #a1a6b2;
}

.jp-RenderedText pre .ansi-black-intense-bg {
  background-color: #282c36;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-red-intense-bg {
  background-color: #b22b31;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-green-intense-bg {
  background-color: #007427;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-yellow-intense-bg {
  background-color: #b27d12;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-blue-intense-bg {
  background-color: #0065ca;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-magenta-intense-bg {
  background-color: #a03196;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-cyan-intense-bg {
  background-color: #258f8f;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-white-intense-bg {
  background-color: #a1a6b2;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-default-inverse-fg {
  color: var(--jp-ui-inverse-font-color0);
}

.jp-RenderedText pre .ansi-default-inverse-bg {
  background-color: var(--jp-inverse-layout-color0);
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-bold {
  font-weight: bold;
}

.jp-RenderedText pre .ansi-underline {
  text-decoration: underline;
}

.jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr'] {
  background: var(--jp-rendermime-error-background);
  padding-top: var(--jp-code-padding);
}

/*-----------------------------------------------------------------------------
| RenderedLatex
|----------------------------------------------------------------------------*/

.jp-RenderedLatex {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
}

/* Left-justify outputs.*/
.jp-OutputArea-output.jp-RenderedLatex {
  padding: var(--jp-code-padding);
  text-align: left;
}

/*-----------------------------------------------------------------------------
| RenderedHTML
|----------------------------------------------------------------------------*/

.jp-RenderedHTMLCommon {
  color: var(--jp-content-font-color1);
  font-family: var(--jp-content-font-family);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);

  /* Give a bit more R padding on Markdown text to keep line lengths reasonable */
  padding-right: 20px;
}

.jp-RenderedHTMLCommon em {
  font-style: italic;
}

.jp-RenderedHTMLCommon strong {
  font-weight: bold;
}

.jp-RenderedHTMLCommon u {
  text-decoration: underline;
}

.jp-RenderedHTMLCommon a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* Headings */

.jp-RenderedHTMLCommon h1,
.jp-RenderedHTMLCommon h2,
.jp-RenderedHTMLCommon h3,
.jp-RenderedHTMLCommon h4,
.jp-RenderedHTMLCommon h5,
.jp-RenderedHTMLCommon h6 {
  line-height: var(--jp-content-heading-line-height);
  font-weight: var(--jp-content-heading-font-weight);
  font-style: normal;
  margin: var(--jp-content-heading-margin-top) 0
    var(--jp-content-heading-margin-bottom) 0;
}

.jp-RenderedHTMLCommon h1:first-child,
.jp-RenderedHTMLCommon h2:first-child,
.jp-RenderedHTMLCommon h3:first-child,
.jp-RenderedHTMLCommon h4:first-child,
.jp-RenderedHTMLCommon h5:first-child,
.jp-RenderedHTMLCommon h6:first-child {
  margin-top: calc(0.5 * var(--jp-content-heading-margin-top));
}

.jp-RenderedHTMLCommon h1:last-child,
.jp-RenderedHTMLCommon h2:last-child,
.jp-RenderedHTMLCommon h3:last-child,
.jp-RenderedHTMLCommon h4:last-child,
.jp-RenderedHTMLCommon h5:last-child,
.jp-RenderedHTMLCommon h6:last-child {
  margin-bottom: calc(0.5 * var(--jp-content-heading-margin-bottom));
}

.jp-RenderedHTMLCommon h1 {
  font-size: var(--jp-content-font-size5);
}

.jp-RenderedHTMLCommon h2 {
  font-size: var(--jp-content-font-size4);
}

.jp-RenderedHTMLCommon h3 {
  font-size: var(--jp-content-font-size3);
}

.jp-RenderedHTMLCommon h4 {
  font-size: var(--jp-content-font-size2);
}

.jp-RenderedHTMLCommon h5 {
  font-size: var(--jp-content-font-size1);
}

.jp-RenderedHTMLCommon h6 {
  font-size: var(--jp-content-font-size0);
}

/* Lists */

/* stylelint-disable selector-max-type, selector-max-compound-selectors */

.jp-RenderedHTMLCommon ul:not(.list-inline),
.jp-RenderedHTMLCommon ol:not(.list-inline) {
  padding-left: 2em;
}

.jp-RenderedHTMLCommon ul {
  list-style: disc;
}

.jp-RenderedHTMLCommon ul ul {
  list-style: square;
}

.jp-RenderedHTMLCommon ul ul ul {
  list-style: circle;
}

.jp-RenderedHTMLCommon ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol ol {
  list-style: upper-alpha;
}

.jp-RenderedHTMLCommon ol ol ol {
  list-style: lower-alpha;
}

.jp-RenderedHTMLCommon ol ol ol ol {
  list-style: lower-roman;
}

.jp-RenderedHTMLCommon ol ol ol ol ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol,
.jp-RenderedHTMLCommon ul {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon ul ul,
.jp-RenderedHTMLCommon ul ol,
.jp-RenderedHTMLCommon ol ul,
.jp-RenderedHTMLCommon ol ol {
  margin-bottom: 0;
}

/* stylelint-enable selector-max-type, selector-max-compound-selectors */

.jp-RenderedHTMLCommon hr {
  color: var(--jp-border-color2);
  background-color: var(--jp-border-color1);
  margin-top: 1em;
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon > pre {
  margin: 1.5em 2em;
}

.jp-RenderedHTMLCommon pre,
.jp-RenderedHTMLCommon code {
  border: 0;
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  line-height: var(--jp-code-line-height);
  padding: 0;
  white-space: pre-wrap;
}

.jp-RenderedHTMLCommon :not(pre) > code {
  background-color: var(--jp-layout-color2);
  padding: 1px 5px;
}

/* Tables */

.jp-RenderedHTMLCommon table {
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  table-layout: fixed;
  margin-left: auto;
  margin-bottom: 1em;
  margin-right: auto;
}

.jp-RenderedHTMLCommon thead {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  vertical-align: bottom;
}

.jp-RenderedHTMLCommon td,
.jp-RenderedHTMLCommon th,
.jp-RenderedHTMLCommon tr {
  vertical-align: middle;
  padding: 0.5em;
  line-height: normal;
  white-space: normal;
  max-width: none;
  border: none;
}

.jp-RenderedMarkdown.jp-RenderedHTMLCommon td,
.jp-RenderedMarkdown.jp-RenderedHTMLCommon th {
  max-width: none;
}

:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon td,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon th,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon tr {
  text-align: right;
}

.jp-RenderedHTMLCommon th {
  font-weight: bold;
}

.jp-RenderedHTMLCommon tbody tr:nth-child(odd) {
  background: var(--jp-layout-color0);
}

.jp-RenderedHTMLCommon tbody tr:nth-child(even) {
  background: var(--jp-rendermime-table-row-background);
}

.jp-RenderedHTMLCommon tbody tr:hover {
  background: var(--jp-rendermime-table-row-hover-background);
}

.jp-RenderedHTMLCommon p {
  text-align: left;
  margin: 0;
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon img {
  -moz-force-broken-image-icon: 1;
}

/* Restrict to direct children as other images could be nested in other content. */
.jp-RenderedHTMLCommon > img {
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1em;
}

/* Change color behind transparent images if they need it... */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-light-background {
  background-color: var(--jp-inverse-layout-color1);
}

[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-dark-background {
  background-color: var(--jp-inverse-layout-color1);
}

.jp-RenderedHTMLCommon img,
.jp-RenderedImage img,
.jp-RenderedHTMLCommon svg,
.jp-RenderedSVG svg {
  max-width: 100%;
  height: auto;
}

.jp-RenderedHTMLCommon img.jp-mod-unconfined,
.jp-RenderedImage img.jp-mod-unconfined,
.jp-RenderedHTMLCommon svg.jp-mod-unconfined,
.jp-RenderedSVG svg.jp-mod-unconfined {
  max-width: none;
}

.jp-RenderedHTMLCommon .alert {
  padding: var(--jp-notebook-padding);
  border: var(--jp-border-width) solid transparent;
  border-radius: var(--jp-border-radius);
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon .alert-info {
  color: var(--jp-info-color0);
  background-color: var(--jp-info-color3);
  border-color: var(--jp-info-color2);
}

.jp-RenderedHTMLCommon .alert-info hr {
  border-color: var(--jp-info-color3);
}

.jp-RenderedHTMLCommon .alert-info > p:last-child,
.jp-RenderedHTMLCommon .alert-info > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-warning {
  color: var(--jp-warn-color0);
  background-color: var(--jp-warn-color3);
  border-color: var(--jp-warn-color2);
}

.jp-RenderedHTMLCommon .alert-warning hr {
  border-color: var(--jp-warn-color3);
}

.jp-RenderedHTMLCommon .alert-warning > p:last-child,
.jp-RenderedHTMLCommon .alert-warning > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-success {
  color: var(--jp-success-color0);
  background-color: var(--jp-success-color3);
  border-color: var(--jp-success-color2);
}

.jp-RenderedHTMLCommon .alert-success hr {
  border-color: var(--jp-success-color3);
}

.jp-RenderedHTMLCommon .alert-success > p:last-child,
.jp-RenderedHTMLCommon .alert-success > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-danger {
  color: var(--jp-error-color0);
  background-color: var(--jp-error-color3);
  border-color: var(--jp-error-color2);
}

.jp-RenderedHTMLCommon .alert-danger hr {
  border-color: var(--jp-error-color3);
}

.jp-RenderedHTMLCommon .alert-danger > p:last-child,
.jp-RenderedHTMLCommon .alert-danger > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon blockquote {
  margin: 1em 2em;
  padding: 0 1em;
  border-left: 5px solid var(--jp-border-color2);
}

a.jp-InternalAnchorLink {
  visibility: hidden;
  margin-left: 8px;
  color: var(--md-blue-800);
}

h1:hover .jp-InternalAnchorLink,
h2:hover .jp-InternalAnchorLink,
h3:hover .jp-InternalAnchorLink,
h4:hover .jp-InternalAnchorLink,
h5:hover .jp-InternalAnchorLink,
h6:hover .jp-InternalAnchorLink {
  visibility: visible;
}

.jp-RenderedHTMLCommon kbd {
  background-color: var(--jp-rendermime-table-row-background);
  border: 1px solid var(--jp-border-color0);
  border-bottom-color: var(--jp-border-color2);
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: var(--jp-ui-font-size0);
  line-height: 1em;
  padding: 0.2em 0.5em;
}

/* Most direct children of .jp-RenderedHTMLCommon have a margin-bottom of 1.0.
 * At the bottom of cells this is a bit too much as there is also spacing
 * between cells. Going all the way to 0 gets too tight between markdown and
 * code cells.
 */
.jp-RenderedHTMLCommon > *:last-child {
  margin-bottom: 0.5em;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-cursor-backdrop {
  position: fixed;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: -100px;
  will-change: transform;
  z-index: 100;
}

.lm-mod-drag-image {
  will-change: transform;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-lineFormSearch {
  padding: 4px 12px;
  background-color: var(--jp-layout-color2);
  box-shadow: var(--jp-toolbar-box-shadow);
  z-index: 2;
  font-size: var(--jp-ui-font-size1);
}

.jp-lineFormCaption {
  font-size: var(--jp-ui-font-size0);
  line-height: var(--jp-ui-font-size1);
  margin-top: 4px;
  color: var(--jp-ui-font-color0);
}

.jp-baseLineForm {
  border: none;
  border-radius: 0;
  position: absolute;
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
}

.jp-lineFormButtonContainer {
  top: 4px;
  right: 8px;
  height: 24px;
  padding: 0 12px;
  width: 12px;
}

.jp-lineFormButtonIcon {
  top: 0;
  right: 0;
  background-color: var(--jp-brand-color1);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 4px 6px;
}

.jp-lineFormButton {
  top: 0;
  right: 0;
  background-color: transparent;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.jp-lineFormWrapper {
  overflow: hidden;
  padding: 0 8px;
  border: 1px solid var(--jp-border-color0);
  background-color: var(--jp-input-active-background);
  height: 22px;
}

.jp-lineFormWrapperFocusWithin {
  border: var(--jp-border-width) solid var(--md-blue-500);
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-lineFormInput {
  background: transparent;
  width: 200px;
  height: 100%;
  border: none;
  outline: none;
  color: var(--jp-ui-font-color0);
  line-height: 28px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-JSONEditor {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.jp-JSONEditor-host {
  flex: 1 1 auto;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0;
  background: var(--jp-layout-color0);
  min-height: 50px;
  padding: 1px;
}

.jp-JSONEditor.jp-mod-error .jp-JSONEditor-host {
  border-color: red;
  outline-color: red;
}

.jp-JSONEditor-header {
  display: flex;
  flex: 1 0 auto;
  padding: 0 0 0 12px;
}

.jp-JSONEditor-header label {
  flex: 0 0 auto;
}

.jp-JSONEditor-commitButton {
  height: 16px;
  width: 16px;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center;
}

.jp-JSONEditor-host.jp-mod-focused {
  background-color: var(--jp-input-active-background);
  border: 1px solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

.jp-Editor.jp-mod-dropTarget {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/
.jp-DocumentSearch-input {
  border: none;
  outline: none;
  color: var(--jp-ui-font-color0);
  font-size: var(--jp-ui-font-size1);
  background-color: var(--jp-layout-color0);
  font-family: var(--jp-ui-font-family);
  padding: 2px 1px;
  resize: none;
}

.jp-DocumentSearch-overlay {
  position: absolute;
  background-color: var(--jp-toolbar-background);
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  border-left: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  top: 0;
  right: 0;
  z-index: 7;
  min-width: 405px;
  padding: 2px;
  font-size: var(--jp-ui-font-size1);

  --jp-private-document-search-button-height: 20px;
}

.jp-DocumentSearch-overlay button {
  background-color: var(--jp-toolbar-background);
  outline: 0;
}

.jp-DocumentSearch-overlay button:hover {
  background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-overlay button:active {
  background-color: var(--jp-layout-color3);
}

.jp-DocumentSearch-overlay-row {
  display: flex;
  align-items: center;
  margin-bottom: 2px;
}

.jp-DocumentSearch-button-content {
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.jp-DocumentSearch-button-content svg {
  width: 100%;
  height: 100%;
}

.jp-DocumentSearch-input-wrapper {
  border: var(--jp-border-width) solid var(--jp-border-color0);
  display: flex;
  background-color: var(--jp-layout-color0);
  margin: 2px;
}

.jp-DocumentSearch-input-wrapper:focus-within {
  border-color: var(--jp-cell-editor-active-border-color);
}

.jp-DocumentSearch-toggle-wrapper,
.jp-DocumentSearch-button-wrapper {
  all: initial;
  overflow: hidden;
  display: inline-block;
  border: none;
  box-sizing: border-box;
}

.jp-DocumentSearch-toggle-wrapper {
  width: 14px;
  height: 14px;
}

.jp-DocumentSearch-button-wrapper {
  width: var(--jp-private-document-search-button-height);
  height: var(--jp-private-document-search-button-height);
}

.jp-DocumentSearch-toggle-wrapper:focus,
.jp-DocumentSearch-button-wrapper:focus {
  outline: var(--jp-border-width) solid
    var(--jp-cell-editor-active-border-color);
  outline-offset: -1px;
}

.jp-DocumentSearch-toggle-wrapper,
.jp-DocumentSearch-button-wrapper,
.jp-DocumentSearch-button-content:focus {
  outline: none;
}

.jp-DocumentSearch-toggle-placeholder {
  width: 5px;
}

.jp-DocumentSearch-input-button::before {
  display: block;
  padding-top: 100%;
}

.jp-DocumentSearch-input-button-off {
  opacity: var(--jp-search-toggle-off-opacity);
}

.jp-DocumentSearch-input-button-off:hover {
  opacity: var(--jp-search-toggle-hover-opacity);
}

.jp-DocumentSearch-input-button-on {
  opacity: var(--jp-search-toggle-on-opacity);
}

.jp-DocumentSearch-index-counter {
  padding-left: 10px;
  padding-right: 10px;
  user-select: none;
  min-width: 35px;
  display: inline-block;
}

.jp-DocumentSearch-up-down-wrapper {
  display: inline-block;
  padding-right: 2px;
  margin-left: auto;
  white-space: nowrap;
}

.jp-DocumentSearch-spacer {
  margin-left: auto;
}

.jp-DocumentSearch-up-down-wrapper button {
  outline: 0;
  border: none;
  width: var(--jp-private-document-search-button-height);
  height: var(--jp-private-document-search-button-height);
  vertical-align: middle;
  margin: 1px 5px 2px;
}

.jp-DocumentSearch-up-down-button:hover {
  background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-up-down-button:active {
  background-color: var(--jp-layout-color3);
}

.jp-DocumentSearch-filter-button {
  border-radius: var(--jp-border-radius);
}

.jp-DocumentSearch-filter-button:hover {
  background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-filter-button-enabled {
  background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-filter-button-enabled:hover {
  background-color: var(--jp-layout-color3);
}

.jp-DocumentSearch-search-options {
  padding: 0 8px;
  margin-left: 3px;
  width: 100%;
  display: grid;
  justify-content: start;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: stretch;
}

.jp-DocumentSearch-search-filter-disabled {
  color: var(--jp-ui-font-color2);
}

.jp-DocumentSearch-search-filter {
  display: flex;
  align-items: center;
  user-select: none;
}

.jp-DocumentSearch-regex-error {
  color: var(--jp-error-color0);
}

.jp-DocumentSearch-replace-button-wrapper {
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  border: var(--jp-border-width) solid var(--jp-border-color0);
  margin: auto 2px;
  padding: 1px 4px;
  height: calc(var(--jp-private-document-search-button-height) + 2px);
}

.jp-DocumentSearch-replace-button-wrapper:focus {
  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
}

.jp-DocumentSearch-replace-button {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  color: var(--jp-ui-font-color1);

  /* height - 2 * (padding of wrapper) */
  line-height: calc(var(--jp-private-document-search-button-height) - 2px);
  width: 100%;
  height: 100%;
}

.jp-DocumentSearch-replace-button:focus {
  outline: none;
}

.jp-DocumentSearch-replace-wrapper-class {
  margin-left: 14px;
  display: flex;
}

.jp-DocumentSearch-replace-toggle {
  border: none;
  background-color: var(--jp-toolbar-background);
  border-radius: var(--jp-border-radius);
}

.jp-DocumentSearch-replace-toggle:hover {
  background-color: var(--jp-layout-color2);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.cm-editor {
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  border: 0;
  border-radius: 0;
  height: auto;

  /* Changed to auto to autogrow */
}

.cm-editor pre {
  padding: 0 var(--jp-code-padding);
}

.jp-CodeMirrorEditor[data-type='inline'] .cm-dialog {
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

.jp-CodeMirrorEditor {
  cursor: text;
}

/* When zoomed out 67% and 33% on a screen of 1440 width x 900 height */
@media screen and (min-width: 2138px) and (max-width: 4319px) {
  .jp-CodeMirrorEditor[data-type='inline'] .cm-cursor {
    border-left: var(--jp-code-cursor-width1) solid
      var(--jp-editor-cursor-color);
  }
}

/* When zoomed out less than 33% */
@media screen and (min-width: 4320px) {
  .jp-CodeMirrorEditor[data-type='inline'] .cm-cursor {
    border-left: var(--jp-code-cursor-width2) solid
      var(--jp-editor-cursor-color);
  }
}

.cm-editor.jp-mod-readOnly .cm-cursor {
  display: none;
}

.jp-CollaboratorCursor {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: none;
  border-bottom: 3px solid;
  background-clip: content-box;
  margin-left: -5px;
  margin-right: -5px;
}

.cm-searching,
.cm-searching span {
  /* \\`.cm-searching span\\`: we need to override syntax highlighting */
  background-color: var(--jp-search-unselected-match-background-color);
  color: var(--jp-search-unselected-match-color);
}

.cm-searching::selection,
.cm-searching span::selection {
  background-color: var(--jp-search-unselected-match-background-color);
  color: var(--jp-search-unselected-match-color);
}

.jp-current-match > .cm-searching,
.jp-current-match > .cm-searching span,
.cm-searching > .jp-current-match,
.cm-searching > .jp-current-match span {
  background-color: var(--jp-search-selected-match-background-color);
  color: var(--jp-search-selected-match-color);
}

.jp-current-match > .cm-searching::selection,
.cm-searching > .jp-current-match::selection,
.jp-current-match > .cm-searching span::selection {
  background-color: var(--jp-search-selected-match-background-color);
  color: var(--jp-search-selected-match-color);
}

.cm-trailingspace {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII=);
  background-position: center left;
  background-repeat: repeat-x;
}

.jp-CollaboratorCursor-hover {
  position: absolute;
  z-index: 1;
  transform: translateX(-50%);
  color: white;
  border-radius: 3px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: center;
  font-size: var(--jp-ui-font-size1);
  white-space: nowrap;
}

.jp-CodeMirror-ruler {
  border-left: 1px dashed var(--jp-border-color2);
}

/* Styles for shared cursors (remote cursor locations and selected ranges) */
.jp-CodeMirrorEditor .cm-ySelectionCaret {
  position: relative;
  border-left: 1px solid black;
  margin-left: -1px;
  margin-right: -1px;
  box-sizing: border-box;
}

.jp-CodeMirrorEditor .cm-ySelectionCaret > .cm-ySelectionInfo {
  white-space: nowrap;
  position: absolute;
  top: -1.15em;
  padding-bottom: 0.05em;
  left: -1px;
  font-size: 0.95em;
  font-family: var(--jp-ui-font-family);
  font-weight: bold;
  line-height: normal;
  user-select: none;
  color: white;
  padding-left: 2px;
  padding-right: 2px;
  z-index: 101;
  transition: opacity 0.3s ease-in-out;
}

.jp-CodeMirrorEditor .cm-ySelectionInfo {
  transition-delay: 0.7s;
  opacity: 0;
}

.jp-CodeMirrorEditor .cm-ySelectionCaret:hover > .cm-ySelectionInfo {
  opacity: 1;
  transition-delay: 0s;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MimeDocument {
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-filebrowser-button-height: 28px;
  --jp-private-filebrowser-button-width: 48px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-FileBrowser .jp-SidePanel-content {
  display: flex;
  flex-direction: column;
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  flex-wrap: wrap;
  row-gap: 12px;
  border-bottom: none;
  height: auto;
  margin: 8px 12px 0;
  box-shadow: none;
  padding: 0;
  justify-content: flex-start;
}

.jp-FileBrowser-Panel {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.jp-BreadCrumbs {
  flex: 0 0 auto;
  margin: 8px 12px;
}

.jp-BreadCrumbs-item {
  margin: 0 2px;
  padding: 0 2px;
  border-radius: var(--jp-border-radius);
  cursor: pointer;
}

.jp-BreadCrumbs-item:hover {
  background-color: var(--jp-layout-color2);
}

.jp-BreadCrumbs-item:first-child {
  margin-left: 0;
}

.jp-BreadCrumbs-item.jp-mod-dropTarget {
  background-color: var(--jp-brand-color2);
  opacity: 0.7;
}

/*-----------------------------------------------------------------------------
| Buttons
|----------------------------------------------------------------------------*/

.jp-FileBrowser-toolbar > .jp-Toolbar-item {
  flex: 0 0 auto;
  padding-left: 0;
  padding-right: 2px;
  align-items: center;
  height: unset;
}

.jp-FileBrowser-toolbar > .jp-Toolbar-item .jp-ToolbarButtonComponent {
  width: 40px;
}

/*-----------------------------------------------------------------------------
| Other styles
|----------------------------------------------------------------------------*/

.jp-FileDialog.jp-mod-conflict input {
  color: var(--jp-error-color1);
}

.jp-FileDialog .jp-new-name-title {
  margin-top: 12px;
}

.jp-LastModified-hidden {
  display: none;
}

.jp-FileSize-hidden {
  display: none;
}

.jp-FileBrowser .lm-AccordionPanel > h3:first-child {
  display: none;
}

/*-----------------------------------------------------------------------------
| DirListing
|----------------------------------------------------------------------------*/

.jp-DirListing {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  outline: 0;
}

.jp-DirListing-header {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  border-top: var(--jp-border-width) solid var(--jp-border-color2);
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  box-shadow: var(--jp-toolbar-box-shadow);
  z-index: 2;
}

.jp-DirListing-headerItem {
  padding: 4px 12px 2px;
  font-weight: 500;
}

.jp-DirListing-headerItem:hover {
  background: var(--jp-layout-color2);
}

.jp-DirListing-headerItem.jp-id-name {
  flex: 1 0 84px;
}

.jp-DirListing-headerItem.jp-id-modified {
  flex: 0 0 112px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
}

.jp-DirListing-headerItem.jp-id-filesize {
  flex: 0 0 75px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
}

.jp-id-narrow {
  display: none;
  flex: 0 0 5px;
  padding: 4px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
  color: var(--jp-border-color2);
}

.jp-DirListing-narrow .jp-id-narrow {
  display: block;
}

.jp-DirListing-narrow .jp-id-modified,
.jp-DirListing-narrow .jp-DirListing-itemModified {
  display: none;
}

.jp-DirListing-headerItem.jp-mod-selected {
  font-weight: 600;
}

/* increase specificity to override bundled default */
.jp-DirListing-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

.jp-DirListing-content mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

.jp-DirListing-content .jp-DirListing-item.jp-mod-selected mark {
  color: var(--jp-ui-inverse-font-color0);
}

/* Style the directory listing content when a user drops a file to upload */
.jp-DirListing.jp-mod-native-drop .jp-DirListing-content {
  outline: 5px dashed rgba(128, 128, 128, 0.5);
  outline-offset: -10px;
  cursor: copy;
}

.jp-DirListing-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-DirListing-checkboxWrapper {
  /* Increases hit area of checkbox. */
  padding: 4px;
}

.jp-DirListing-header
  .jp-DirListing-checkboxWrapper
  + .jp-DirListing-headerItem {
  padding-left: 4px;
}

.jp-DirListing-content .jp-DirListing-checkboxWrapper {
  position: relative;
  left: -4px;
  margin: -4px 0 -4px -8px;
}

.jp-DirListing-checkboxWrapper.jp-mod-visible {
  visibility: visible;
}

/* For devices that support hovering, hide checkboxes until hovered, selected...
*/
@media (hover: hover) {
  .jp-DirListing-checkboxWrapper {
    visibility: hidden;
  }

  .jp-DirListing-item:hover .jp-DirListing-checkboxWrapper,
  .jp-DirListing-item.jp-mod-selected .jp-DirListing-checkboxWrapper {
    visibility: visible;
  }
}

.jp-DirListing-item[data-is-dot] {
  opacity: 75%;
}

.jp-DirListing-item.jp-mod-selected {
  color: var(--jp-ui-inverse-font-color1);
  background: var(--jp-brand-color1);
}

.jp-DirListing-item.jp-mod-dropTarget {
  background: var(--jp-brand-color3);
}

.jp-DirListing-item:hover:not(.jp-mod-selected) {
  background: var(--jp-layout-color2);
}

.jp-DirListing-itemIcon {
  flex: 0 0 20px;
  margin-right: 4px;
}

.jp-DirListing-itemText {
  flex: 1 0 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}

.jp-DirListing-itemText:focus {
  outline-width: 2px;
  outline-color: var(--jp-inverse-layout-color1);
  outline-style: solid;
  outline-offset: 1px;
}

.jp-DirListing-item.jp-mod-selected .jp-DirListing-itemText:focus {
  outline-color: var(--jp-layout-color1);
}

.jp-DirListing-itemModified {
  flex: 0 0 125px;
  text-align: right;
}

.jp-DirListing-itemFileSize {
  flex: 0 0 90px;
  text-align: right;
}

.jp-DirListing-editor {
  flex: 1 0 64px;
  outline: none;
  border: none;
  color: var(--jp-ui-font-color1);
  background-color: var(--jp-layout-color1);
}

.jp-DirListing-item.jp-mod-running .jp-DirListing-itemIcon::before {
  color: var(--jp-success-color1);
  content: '\\25CF';
  font-size: 8px;
  position: absolute;
  left: -8px;
}

.jp-DirListing-item.jp-mod-running.jp-mod-selected
  .jp-DirListing-itemIcon::before {
  color: var(--jp-ui-inverse-font-color1);
}

.jp-DirListing-item.lm-mod-drag-image,
.jp-DirListing-item.jp-mod-selected.lm-mod-drag-image {
  font-size: var(--jp-ui-font-size1);
  padding-left: 4px;
  margin-left: 4px;
  width: 160px;
  background-color: var(--jp-ui-inverse-font-color2);
  box-shadow: var(--jp-elevation-z2);
  border-radius: 0;
  color: var(--jp-ui-font-color1);
  transform: translateX(-40%) translateY(-58%);
}

.jp-Document {
  min-width: 120px;
  min-height: 120px;
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Main OutputArea
| OutputArea has a list of Outputs
|----------------------------------------------------------------------------*/

.jp-OutputArea {
  overflow-y: auto;
}

.jp-OutputArea-child {
  display: table;
  table-layout: fixed;
  width: 100%;
  overflow: hidden;
}

.jp-OutputPrompt {
  width: var(--jp-cell-prompt-width);
  color: var(--jp-cell-outprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);

  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-OutputArea-prompt {
  display: table-cell;
  vertical-align: top;
}

.jp-OutputArea-output {
  display: table-cell;
  width: 100%;
  height: auto;
  overflow: auto;
  user-select: text;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
}

.jp-OutputArea .jp-RenderedText {
  padding-left: 1ch;
}

/**
 * Prompt overlay.
 */

.jp-OutputArea-promptOverlay {
  position: absolute;
  top: 0;
  width: var(--jp-cell-prompt-width);
  height: 100%;
  opacity: 0.5;
}

.jp-OutputArea-promptOverlay:hover {
  background: var(--jp-layout-color2);
  box-shadow: inset 0 0 1px var(--jp-inverse-layout-color0);
  cursor: zoom-out;
}

.jp-mod-outputsScrolled .jp-OutputArea-promptOverlay:hover {
  cursor: zoom-in;
}

/**
 * Isolated output.
 */
.jp-OutputArea-output.jp-mod-isolated {
  width: 100%;
  display: block;
}

/*
When drag events occur, \\`lm-mod-override-cursor\\` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated {
  position: relative;
}

body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/* pre */

.jp-OutputArea-output pre {
  border: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: auto;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* tables */

.jp-OutputArea-output.jp-RenderedHTMLCommon table {
  margin-left: 0;
  margin-right: 0;
}

/* description lists */

.jp-OutputArea-output dl,
.jp-OutputArea-output dt,
.jp-OutputArea-output dd {
  display: block;
}

.jp-OutputArea-output dl {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dt {
  font-weight: bold;
  float: left;
  width: 20%;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dd {
  float: left;
  width: 80%;
  padding: 0;
  margin: 0;
}

.jp-TrimmedOutputs pre {
  background: var(--jp-layout-color3);
  font-size: calc(var(--jp-code-font-size) * 1.4);
  text-align: center;
  text-transform: uppercase;
}

/* Hide the gutter in case of
 *  - nested output areas (e.g. in the case of output widgets)
 *  - mirrored output areas
 */
.jp-OutputArea .jp-OutputArea .jp-OutputArea-prompt {
  display: none;
}

/* Hide empty lines in the output area, for instance due to cleared widgets */
.jp-OutputArea-prompt:empty {
  padding: 0;
  border: 0;
}

/*-----------------------------------------------------------------------------
| executeResult is added to any Output-result for the display of the object
| returned by a cell
|----------------------------------------------------------------------------*/

.jp-OutputArea-output.jp-OutputArea-executeResult {
  margin-left: 0;
  width: 100%;
}

/* Text output with the Out[] prompt needs a top padding to match the
 * alignment of the Out[] prompt itself.
 */
.jp-OutputArea-executeResult .jp-RenderedText.jp-OutputArea-output {
  padding-top: var(--jp-code-padding);
  border-top: var(--jp-border-width) solid transparent;
}

/*-----------------------------------------------------------------------------
| The Stdin output
|----------------------------------------------------------------------------*/

.jp-Stdin-prompt {
  color: var(--jp-content-font-color0);
  padding-right: var(--jp-code-padding);
  vertical-align: baseline;
  flex: 0 0 auto;
}

.jp-Stdin-input {
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  color: inherit;
  background-color: inherit;
  width: 42%;
  min-width: 200px;

  /* make sure input baseline aligns with prompt */
  vertical-align: baseline;

  /* padding + margin = 0.5em between prompt and cursor */
  padding: 0 0.25em;
  margin: 0 0.25em;
  flex: 0 0 70%;
}

.jp-Stdin-input::placeholder {
  opacity: 0;
}

.jp-Stdin-input:focus {
  box-shadow: none;
}

.jp-Stdin-input:focus::placeholder {
  opacity: 1;
}

/*-----------------------------------------------------------------------------
| Output Area View
|----------------------------------------------------------------------------*/

.jp-LinkedOutputView .jp-OutputArea {
  height: 100%;
  display: block;
}

.jp-LinkedOutputView .jp-OutputArea-output:only-child {
  height: 100%;
}

/*-----------------------------------------------------------------------------
| Printing
|----------------------------------------------------------------------------*/

@media print {
  .jp-OutputArea-child {
    break-inside: avoid-page;
  }
}

/*-----------------------------------------------------------------------------
| Mobile
|----------------------------------------------------------------------------*/
@media only screen and (max-width: 760px) {
  .jp-OutputPrompt {
    display: table-row;
    text-align: left;
  }

  .jp-OutputArea-child .jp-OutputArea-output {
    display: table-row;
    margin-left: var(--jp-notebook-padding);
  }
}

/* Trimmed outputs warning */
.jp-TrimmedOutputs > a {
  margin: 10px;
  text-decoration: none;
  cursor: pointer;
}

.jp-TrimmedOutputs > a:hover {
  text-decoration: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Table of Contents
|----------------------------------------------------------------------------*/

:root {
  --jp-private-toc-active-width: 4px;
}

.jp-TableOfContents {
  display: flex;
  flex-direction: column;
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  height: 100%;
}

.jp-TableOfContents-placeholder {
  text-align: center;
}

.jp-TableOfContents-placeholderContent {
  color: var(--jp-content-font-color2);
  padding: 8px;
}

.jp-TableOfContents-placeholderContent > h3 {
  margin-bottom: var(--jp-content-heading-margin-bottom);
}

.jp-TableOfContents .jp-SidePanel-content {
  overflow-y: auto;
}

.jp-TableOfContents-tree {
  margin: 4px;
}

.jp-TableOfContents ol {
  list-style-type: none;
}

/* stylelint-disable-next-line selector-max-type */
.jp-TableOfContents li > ol {
  /* Align left border with triangle icon center */
  padding-left: 11px;
}

.jp-TableOfContents-content {
  /* left margin for the active heading indicator */
  margin: 0 0 0 var(--jp-private-toc-active-width);
  padding: 0;
  background-color: var(--jp-layout-color1);
}

.jp-tocItem {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-tocItem-heading {
  display: flex;
  cursor: pointer;
}

.jp-tocItem-heading:hover {
  background-color: var(--jp-layout-color2);
}

.jp-tocItem-content {
  display: block;
  padding: 4px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
}

.jp-tocItem-collapser {
  height: 20px;
  margin: 2px 2px 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}

.jp-tocItem-collapser:hover {
  background-color: var(--jp-layout-color3);
}

/* Active heading indicator */

.jp-tocItem-heading::before {
  content: ' ';
  background: transparent;
  width: var(--jp-private-toc-active-width);
  height: 24px;
  position: absolute;
  left: 0;
  border-radius: var(--jp-border-radius);
}

.jp-tocItem-heading.jp-tocItem-active::before {
  background-color: var(--jp-brand-color1);
}

.jp-tocItem-heading:hover.jp-tocItem-active::before {
  background: var(--jp-brand-color0);
  opacity: 1;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapser {
  flex: 0 0 var(--jp-cell-collapser-width);
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
  border-radius: var(--jp-border-radius);
  opacity: 1;
}

.jp-Collapser-child {
  display: block;
  width: 100%;
  box-sizing: border-box;

  /* height: 100% doesn't work because the height of its parent is computed from content */
  position: absolute;
  top: 0;
  bottom: 0;
}

/*-----------------------------------------------------------------------------
| Printing
|----------------------------------------------------------------------------*/

/*
Hiding collapsers in print mode.

Note: input and output wrappers have "display: block" propery in print mode.
*/

@media print {
  .jp-Collapser {
    display: none;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Header/Footer
|----------------------------------------------------------------------------*/

/* Hidden by zero height by default */
.jp-CellHeader,
.jp-CellFooter {
  height: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Input
|----------------------------------------------------------------------------*/

/* All input areas */
.jp-InputArea {
  display: table;
  table-layout: fixed;
  width: 100%;
  overflow: hidden;
}

.jp-InputArea-editor {
  display: table-cell;
  overflow: hidden;
  vertical-align: top;

  /* This is the non-active, default styling */
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  border-radius: 0;
  background: var(--jp-cell-editor-background);
}

.jp-InputPrompt {
  display: table-cell;
  vertical-align: top;
  width: var(--jp-cell-prompt-width);
  color: var(--jp-cell-inprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  opacity: var(--jp-cell-prompt-opacity);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;

  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*-----------------------------------------------------------------------------
| Mobile
|----------------------------------------------------------------------------*/
@media only screen and (max-width: 760px) {
  .jp-InputArea-editor {
    display: table-row;
    margin-left: var(--jp-notebook-padding);
  }

  .jp-InputPrompt {
    display: table-row;
    text-align: left;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------*/

.jp-Placeholder {
  display: table;
  table-layout: fixed;
  width: 100%;
}

.jp-Placeholder-prompt {
  display: table-cell;
  box-sizing: border-box;
}

.jp-Placeholder-content {
  display: table-cell;
  padding: 4px 6px;
  border: 1px solid transparent;
  border-radius: 0;
  background: none;
  box-sizing: border-box;
  cursor: pointer;
}

.jp-Placeholder-contentContainer {
  display: flex;
}

.jp-Placeholder-content:hover,
.jp-InputPlaceholder > .jp-Placeholder-content:hover {
  border-color: var(--jp-layout-color3);
}

.jp-Placeholder-content .jp-MoreHorizIcon {
  width: 32px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: var(--jp-border-radius);
}

.jp-Placeholder-content .jp-MoreHorizIcon:hover {
  border: 1px solid var(--jp-border-color1);
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--jp-layout-color0);
}

.jp-PlaceholderText {
  white-space: nowrap;
  overflow-x: hidden;
  color: var(--jp-inverse-layout-color3);
  font-family: var(--jp-code-font-family);
}

.jp-InputPlaceholder > .jp-Placeholder-content {
  border-color: var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-cell-scrolling-output-offset: 5px;
}

/*-----------------------------------------------------------------------------
| Cell
|----------------------------------------------------------------------------*/

.jp-Cell {
  padding: var(--jp-cell-padding);
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Common input/output
|----------------------------------------------------------------------------*/

.jp-Cell-inputWrapper,
.jp-Cell-outputWrapper {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;

  /* Added to reveal the box-shadow on the input and output collapsers. */
  overflow: visible;
}

/* Only input/output areas inside cells */
.jp-Cell-inputArea,
.jp-Cell-outputArea {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Collapser
|----------------------------------------------------------------------------*/

/* Make the output collapser disappear when there is not output, but do so
 * in a manner that leaves it in the layout and preserves its width.
 */
.jp-Cell.jp-mod-noOutputs .jp-Cell-outputCollapser {
  border: none !important;
  background: transparent !important;
}

.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputCollapser {
  min-height: var(--jp-cell-collapser-min-height);
}

/*-----------------------------------------------------------------------------
| Output
|----------------------------------------------------------------------------*/

/* Put a space between input and output when there IS output */
.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputWrapper {
  margin-top: 5px;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea {
  overflow-y: auto;
  max-height: 24em;
  margin-left: var(--jp-private-cell-scrolling-output-offset);
  resize: vertical;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea[style*='height'] {
  max-height: unset;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea::after {
  content: ' ';
  box-shadow: inset 0 0 6px 2px rgb(0 0 0 / 30%);
  width: 100%;
  height: 100%;
  position: sticky;
  bottom: 0;
  top: 0;
  margin-top: -50%;
  float: left;
  display: block;
  pointer-events: none;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-child {
  padding-top: 6px;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
  width: calc(
    var(--jp-cell-prompt-width) - var(--jp-private-cell-scrolling-output-offset)
  );
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-promptOverlay {
  left: calc(-1 * var(--jp-private-cell-scrolling-output-offset));
}

/*-----------------------------------------------------------------------------
| CodeCell
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| MarkdownCell
|----------------------------------------------------------------------------*/

.jp-MarkdownOutput {
  display: table-cell;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: var(--jp-code-padding);
}

.jp-MarkdownOutput.jp-RenderedHTMLCommon {
  overflow: auto;
}

/* collapseHeadingButton (show always if hiddenCellsButton is _not_ shown) */
.jp-collapseHeadingButton {
  display: flex;
  min-height: var(--jp-cell-collapser-min-height);
  font-size: var(--jp-code-font-size);
  position: absolute;
  background-color: transparent;
  background-size: 25px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  background-image: var(--jp-icon-caret-down);
  right: 0;
  top: 0;
  bottom: 0;
}

.jp-collapseHeadingButton.jp-mod-collapsed {
  background-image: var(--jp-icon-caret-right);
}

/*
 set the container font size to match that of content
 so that the nested collapse buttons have the right size
*/
.jp-MarkdownCell .jp-InputPrompt {
  font-size: var(--jp-content-font-size1);
}

/*
  Align collapseHeadingButton with cell top header
  The font sizes are identical to the ones in packages/rendermime/style/base.css
*/
.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='1'] {
  font-size: var(--jp-content-font-size5);
  background-position-y: calc(0.3 * var(--jp-content-font-size5));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='2'] {
  font-size: var(--jp-content-font-size4);
  background-position-y: calc(0.3 * var(--jp-content-font-size4));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='3'] {
  font-size: var(--jp-content-font-size3);
  background-position-y: calc(0.3 * var(--jp-content-font-size3));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='4'] {
  font-size: var(--jp-content-font-size2);
  background-position-y: calc(0.3 * var(--jp-content-font-size2));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='5'] {
  font-size: var(--jp-content-font-size1);
  background-position-y: top;
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='6'] {
  font-size: var(--jp-content-font-size0);
  background-position-y: top;
}

/* collapseHeadingButton (show only on (hover,active) if hiddenCellsButton is shown) */
.jp-Notebook.jp-mod-showHiddenCellsButton .jp-collapseHeadingButton {
  display: none;
}

.jp-Notebook.jp-mod-showHiddenCellsButton
  :is(.jp-MarkdownCell:hover, .jp-mod-active)
  .jp-collapseHeadingButton {
  display: flex;
}

/* showHiddenCellsButton (only show if jp-mod-showHiddenCellsButton is set, which
is a consequence of the showHiddenCellsButton option in Notebook Settings)*/
.jp-Notebook.jp-mod-showHiddenCellsButton .jp-showHiddenCellsButton {
  margin-left: calc(var(--jp-cell-prompt-width) + 2 * var(--jp-code-padding));
  margin-top: var(--jp-code-padding);
  border: 1px solid var(--jp-border-color2);
  background-color: var(--jp-border-color3) !important;
  color: var(--jp-content-font-color0) !important;
  display: flex;
}

.jp-Notebook.jp-mod-showHiddenCellsButton .jp-showHiddenCellsButton:hover {
  background-color: var(--jp-border-color2) !important;
}

.jp-showHiddenCellsButton {
  display: none;
}

/*-----------------------------------------------------------------------------
| Printing
|----------------------------------------------------------------------------*/

/*
Using block instead of flex to allow the use of the break-inside CSS property for
cell outputs.
*/

@media print {
  .jp-Cell-inputWrapper,
  .jp-Cell-outputWrapper {
    display: block;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-notebook-toolbar-padding: 2px 5px 2px 2px;
}

/*-----------------------------------------------------------------------------

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-NotebookPanel-toolbar {
  padding: var(--jp-notebook-toolbar-padding);

  /* disable paint containment from lumino 2.0 default strict CSS containment */
  contain: style size !important;
}

.jp-Toolbar-item.jp-Notebook-toolbarCellType .jp-select-wrapper.jp-mod-focused {
  border: none;
  box-shadow: none;
}

.jp-Notebook-toolbarCellTypeDropdown select {
  height: 24px;
  font-size: var(--jp-ui-font-size1);
  line-height: 14px;
  border-radius: 0;
  display: block;
}

.jp-Notebook-toolbarCellTypeDropdown span {
  top: 5px !important;
}

.jp-Toolbar-responsive-popup {
  position: absolute;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  background: var(--jp-toolbar-background);
  min-height: var(--jp-toolbar-micro-height);
  padding: var(--jp-notebook-toolbar-padding);
  z-index: 1;
  right: 0;
  top: 0;
}

.jp-Toolbar > .jp-Toolbar-responsive-opener {
  margin-left: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-Notebook-ExecutionIndicator {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 9997;
}

.jp-Notebook-ExecutionIndicator-tooltip {
  visibility: hidden;
  height: auto;
  width: max-content;
  width: -moz-max-content;
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color1);
  text-align: justify;
  border-radius: 6px;
  padding: 0 5px;
  position: fixed;
  display: table;
}

.jp-Notebook-ExecutionIndicator-tooltip.up {
  transform: translateX(-50%) translateY(-100%) translateY(-32px);
}

.jp-Notebook-ExecutionIndicator-tooltip.down {
  transform: translateX(calc(-100% + 16px)) translateY(5px);
}

.jp-Notebook-ExecutionIndicator-tooltip.hidden {
  display: none;
}

.jp-Notebook-ExecutionIndicator:hover .jp-Notebook-ExecutionIndicator-tooltip {
  visibility: visible;
}

.jp-Notebook-ExecutionIndicator span {
  font-size: var(--jp-ui-font-size1);
  font-family: var(--jp-ui-font-family);
  color: var(--jp-ui-font-color1);
  line-height: 24px;
  display: block;
}

.jp-Notebook-ExecutionIndicator-progress-bar {
  display: flex;
  justify-content: center;
  height: 100%;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*
 * Execution indicator
 */
.jp-tocItem-content::after {
  content: '';

  /* Must be identical to form a circle */
  width: 12px;
  height: 12px;
  background: none;
  border: none;
  position: absolute;
  right: 0;
}

.jp-tocItem-content[data-running='0']::after {
  border-radius: 50%;
  border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);
  background: none;
}

.jp-tocItem-content[data-running='1']::after {
  border-radius: 50%;
  border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);
  background-color: var(--jp-inverse-layout-color3);
}

.jp-tocItem-content[data-running='0'],
.jp-tocItem-content[data-running='1'] {
  margin-right: 12px;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-Notebook-footer {
  height: 27px;
  margin-left: calc(
    var(--jp-cell-prompt-width) + var(--jp-cell-collapser-width) +
      var(--jp-cell-padding)
  );
  width: calc(
    100% -
      (
        var(--jp-cell-prompt-width) + var(--jp-cell-collapser-width) +
          var(--jp-cell-padding) + var(--jp-cell-padding)
      )
  );
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  color: var(--jp-ui-font-color3);
  margin-top: 6px;
  background: none;
  cursor: pointer;
}

.jp-Notebook-footer:focus {
  border-color: var(--jp-cell-editor-active-border-color);
}

/* For devices that support hovering, hide footer until hover */
@media (hover: hover) {
  .jp-Notebook-footer {
    opacity: 0;
  }

  .jp-Notebook-footer:focus,
  .jp-Notebook-footer:hover {
    opacity: 1;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Imports
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-side-by-side-output-size: 1fr;
  --jp-side-by-side-resized-cell: var(--jp-side-by-side-output-size);
  --jp-private-notebook-dragImage-width: 304px;
  --jp-private-notebook-dragImage-height: 36px;
  --jp-private-notebook-selected-color: var(--md-blue-400);
  --jp-private-notebook-active-color: var(--md-green-400);
}

/*-----------------------------------------------------------------------------
| Notebook
|----------------------------------------------------------------------------*/

/* stylelint-disable selector-max-class */

.jp-NotebookPanel {
  display: block;
  height: 100%;
}

.jp-NotebookPanel.jp-Document {
  min-width: 240px;
  min-height: 120px;
}

.jp-Notebook {
  padding: var(--jp-notebook-padding);
  outline: none;
  overflow: auto;
  background: var(--jp-layout-color0);
}

.jp-Notebook.jp-mod-scrollPastEnd::after {
  display: block;
  content: '';
  min-height: var(--jp-notebook-scroll-padding);
}

.jp-MainAreaWidget-ContainStrict .jp-Notebook * {
  contain: strict;
}

.jp-Notebook .jp-Cell {
  overflow: visible;
}

.jp-Notebook .jp-Cell .jp-InputPrompt {
  cursor: move;
}

/*-----------------------------------------------------------------------------
| Notebook state related styling
|
| The notebook and cells each have states, here are the possibilities:
|
| - Notebook
|   - Command
|   - Edit
| - Cell
|   - None
|   - Active (only one can be active)
|   - Selected (the cells actions are applied to)
|   - Multiselected (when multiple selected, the cursor)
|   - No outputs
|----------------------------------------------------------------------------*/

/* Command or edit modes */

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-InputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

/* cell is active */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser {
  background: var(--jp-brand-color1);
}

/* cell is dirty */
.jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt {
  color: var(--jp-warn-color1);
}

.jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt::before {
  color: var(--jp-warn-color1);
  content: '•';
}

.jp-Notebook .jp-Cell.jp-mod-active.jp-mod-dirty .jp-Collapser {
  background: var(--jp-warn-color1);
}

/* collapser is hovered */
.jp-Notebook .jp-Cell .jp-Collapser:hover {
  box-shadow: var(--jp-elevation-z2);
  background: var(--jp-brand-color1);
  opacity: var(--jp-cell-collapser-not-active-hover-opacity);
}

/* cell is active and collapser is hovered */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser:hover {
  background: var(--jp-brand-color0);
  opacity: 1;
}

/* Command mode */

.jp-Notebook.jp-mod-commandMode .jp-Cell.jp-mod-selected {
  background: var(--jp-notebook-multiselected-color);
}

.jp-Notebook.jp-mod-commandMode
  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {
  background: transparent;
}

/* Edit mode */

.jp-Notebook.jp-mod-editMode .jp-Cell.jp-mod-active .jp-InputArea-editor {
  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-cell-editor-active-background);
}

/*-----------------------------------------------------------------------------
| Notebook drag and drop
|----------------------------------------------------------------------------*/

.jp-Notebook-cell.jp-mod-dropSource {
  opacity: 0.5;
}

.jp-Notebook-cell.jp-mod-dropTarget,
.jp-Notebook.jp-mod-commandMode
  .jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-dropTarget {
  border-top-color: var(--jp-private-notebook-selected-color);
  border-top-style: solid;
  border-top-width: 2px;
}

.jp-dragImage {
  display: block;
  flex-direction: row;
  width: var(--jp-private-notebook-dragImage-width);
  height: var(--jp-private-notebook-dragImage-height);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background);
  overflow: visible;
}

.jp-dragImage-singlePrompt {
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.12);
}

.jp-dragImage .jp-dragImage-content {
  flex: 1 1 auto;
  z-index: 2;
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  line-height: var(--jp-code-line-height);
  padding: var(--jp-code-padding);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background-color);
  color: var(--jp-content-font-color3);
  text-align: left;
  margin: 4px 4px 4px 0;
}

.jp-dragImage .jp-dragImage-prompt {
  flex: 0 0 auto;
  min-width: 36px;
  color: var(--jp-cell-inprompt-font-color);
  padding: var(--jp-code-padding);
  padding-left: 12px;
  font-family: var(--jp-cell-prompt-font-family);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: 1.9;
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
}

.jp-dragImage-multipleBack {
  z-index: -1;
  position: absolute;
  height: 32px;
  width: 300px;
  top: 8px;
  left: 8px;
  background: var(--jp-layout-color2);
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.12);
}

/*-----------------------------------------------------------------------------
| Cell toolbar
|----------------------------------------------------------------------------*/

.jp-NotebookTools {
  display: block;
  min-width: var(--jp-sidebar-min-width);
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);

  /* This is needed so that all font sizing of children done in ems is
    * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  overflow: auto;
}

.jp-ActiveCellTool {
  padding: 12px 0;
  display: flex;
}

.jp-ActiveCellTool-Content {
  flex: 1 1 auto;
}

.jp-ActiveCellTool .jp-ActiveCellTool-CellContent {
  background: var(--jp-cell-editor-background);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  border-radius: 0;
  min-height: 29px;
}

.jp-ActiveCellTool .jp-InputPrompt {
  min-width: calc(var(--jp-cell-prompt-width) * 0.75);
}

.jp-ActiveCellTool-CellContent > pre {
  padding: 5px 4px;
  margin: 0;
  white-space: normal;
}

.jp-MetadataEditorTool {
  flex-direction: column;
  padding: 12px 0;
}

.jp-RankedPanel > :not(:first-child) {
  margin-top: 12px;
}

.jp-KeySelector select.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: var(--jp-border-width) solid var(--jp-border-color1);
}

.jp-KeySelector label,
.jp-MetadataEditorTool label,
.jp-NumberSetter label {
  line-height: 1.4;
}

.jp-NotebookTools .jp-select-wrapper {
  margin-top: 4px;
  margin-bottom: 0;
}

.jp-NumberSetter input {
  width: 100%;
  margin-top: 4px;
}

.jp-NotebookTools .jp-Collapse {
  margin-top: 16px;
}

/*-----------------------------------------------------------------------------
| Presentation Mode (.jp-mod-presentationMode)
|----------------------------------------------------------------------------*/

.jp-mod-presentationMode .jp-Notebook {
  --jp-content-font-size1: var(--jp-content-presentation-font-size1);
  --jp-code-font-size: var(--jp-code-presentation-font-size);
}

.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-InputPrompt,
.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-OutputPrompt {
  flex: 0 0 110px;
}

/*-----------------------------------------------------------------------------
| Side-by-side Mode (.jp-mod-sideBySide)
|----------------------------------------------------------------------------*/
.jp-mod-sideBySide.jp-Notebook .jp-Notebook-cell {
  margin-top: 3em;
  margin-bottom: 3em;
  margin-left: 5%;
  margin-right: 5%;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) min-content minmax(
      0,
      var(--jp-side-by-side-output-size)
    );
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas:
    'header header header'
    'input handle output'
    'footer footer footer';
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell.jp-mod-resizedCell {
  grid-template-columns: minmax(0, 1fr) min-content minmax(
      0,
      var(--jp-side-by-side-resized-cell)
    );
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellHeader {
  grid-area: header;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-Cell-inputWrapper {
  grid-area: input;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-Cell-outputWrapper {
  /* overwrite the default margin (no vertical separation needed in side by side move */
  margin-top: 0;
  grid-area: output;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellFooter {
  grid-area: footer;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellResizeHandle {
  grid-area: handle;
  user-select: none;
  display: block;
  height: 100%;
  cursor: ew-resize;
  padding: 0 var(--jp-cell-padding);
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellResizeHandle::after {
  content: '';
  display: block;
  background: var(--jp-border-color2);
  height: 100%;
  width: 5px;
}

.jp-mod-sideBySide.jp-Notebook
  .jp-CodeCell.jp-mod-resizedCell
  .jp-CellResizeHandle::after {
  background: var(--jp-border-color0);
}

.jp-CellResizeHandle {
  display: none;
}

/*-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------*/

.jp-Cell-Placeholder {
  padding-left: 55px;
}

.jp-Cell-Placeholder-wrapper {
  background: #fff;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  margin: 10px 15px;
}

.jp-Cell-Placeholder-wrapper-inner {
  padding: 15px;
  position: relative;
}

.jp-Cell-Placeholder-wrapper-body {
  background-repeat: repeat;
  background-size: 50% auto;
}

.jp-Cell-Placeholder-wrapper-body div {
  background: #f6f7f8;
  background-image: -webkit-linear-gradient(
    left,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  height: 104px;
  position: absolute;
  right: 15px;
  left: 15px;
  top: 15px;
}

div.jp-Cell-Placeholder-h1 {
  top: 20px;
  height: 20px;
  left: 15px;
  width: 150px;
}

div.jp-Cell-Placeholder-h2 {
  left: 15px;
  top: 50px;
  height: 10px;
  width: 100px;
}

div.jp-Cell-Placeholder-content-1,
div.jp-Cell-Placeholder-content-2,
div.jp-Cell-Placeholder-content-3 {
  left: 15px;
  right: 15px;
  height: 10px;
}

div.jp-Cell-Placeholder-content-1 {
  top: 100px;
}

div.jp-Cell-Placeholder-content-2 {
  top: 120px;
}

div.jp-Cell-Placeholder-content-3 {
  top: 140px;
}

</style>
<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
The following CSS variables define the main, public API for styling JupyterLab.
These variables should be used by all plugins wherever possible. In other
words, plugins should not define custom colors, sizes, etc unless absolutely
necessary. This enables users to change the visual theme of JupyterLab
by changing these variables.

Many variables appear in an ordered sequence (0,1,2,3). These sequences
are designed to work well together, so for example, \\`--jp-border-color1\\` should
be used with \\`--jp-layout-color1\\`. The numbers have the following meanings:

* 0: super-primary, reserved for special emphasis
* 1: primary, most important under normal situations
* 2: secondary, next most important under normal situations
* 3: tertiary, next most important under normal situations

Throughout JupyterLab, we are mostly following principles from Google's
Material Design when selecting colors. We are not, however, following
all of MD as it is not optimized for dense, information rich UIs.
*/

:root {
  /* Elevation
   *
   * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:
   *
   * https://github.com/material-components/material-components-web
   * https://material-components-web.appspot.com/elevation.html
   */

  --jp-shadow-base-lightness: 0;
  --jp-shadow-umbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.2
  );
  --jp-shadow-penumbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.14
  );
  --jp-shadow-ambient-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.12
  );
  --jp-elevation-z0: none;
  --jp-elevation-z1: 0 2px 1px -1px var(--jp-shadow-umbra-color),
    0 1px 1px 0 var(--jp-shadow-penumbra-color),
    0 1px 3px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z2: 0 3px 1px -2px var(--jp-shadow-umbra-color),
    0 2px 2px 0 var(--jp-shadow-penumbra-color),
    0 1px 5px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z4: 0 2px 4px -1px var(--jp-shadow-umbra-color),
    0 4px 5px 0 var(--jp-shadow-penumbra-color),
    0 1px 10px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z6: 0 3px 5px -1px var(--jp-shadow-umbra-color),
    0 6px 10px 0 var(--jp-shadow-penumbra-color),
    0 1px 18px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z8: 0 5px 5px -3px var(--jp-shadow-umbra-color),
    0 8px 10px 1px var(--jp-shadow-penumbra-color),
    0 3px 14px 2px var(--jp-shadow-ambient-color);
  --jp-elevation-z12: 0 7px 8px -4px var(--jp-shadow-umbra-color),
    0 12px 17px 2px var(--jp-shadow-penumbra-color),
    0 5px 22px 4px var(--jp-shadow-ambient-color);
  --jp-elevation-z16: 0 8px 10px -5px var(--jp-shadow-umbra-color),
    0 16px 24px 2px var(--jp-shadow-penumbra-color),
    0 6px 30px 5px var(--jp-shadow-ambient-color);
  --jp-elevation-z20: 0 10px 13px -6px var(--jp-shadow-umbra-color),
    0 20px 31px 3px var(--jp-shadow-penumbra-color),
    0 8px 38px 7px var(--jp-shadow-ambient-color);
  --jp-elevation-z24: 0 11px 15px -7px var(--jp-shadow-umbra-color),
    0 24px 38px 3px var(--jp-shadow-penumbra-color),
    0 9px 46px 8px var(--jp-shadow-ambient-color);

  /* Borders
   *
   * The following variables, specify the visual styling of borders in JupyterLab.
   */

  --jp-border-width: 1px;
  --jp-border-color0: var(--md-grey-400);
  --jp-border-color1: var(--md-grey-400);
  --jp-border-color2: var(--md-grey-300);
  --jp-border-color3: var(--md-grey-200);
  --jp-inverse-border-color: var(--md-grey-600);
  --jp-border-radius: 2px;

  /* UI Fonts
   *
   * The UI font CSS variables are used for the typography all of the JupyterLab
   * user interface elements that are not directly user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-ui-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-ui-font-scale-factor: 1.2;
  --jp-ui-font-size0: 0.83333em;
  --jp-ui-font-size1: 13px; /* Base font size */
  --jp-ui-font-size2: 1.2em;
  --jp-ui-font-size3: 1.44em;
  --jp-ui-font-family: system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI',
    helvetica, arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';

  /*
   * Use these font colors against the corresponding main layout colors.
   * In a light theme, these go from dark to light.
   */

  /* Defaults use Material Design specification */
  --jp-ui-font-color0: rgba(0, 0, 0, 1);
  --jp-ui-font-color1: rgba(0, 0, 0, 0.87);
  --jp-ui-font-color2: rgba(0, 0, 0, 0.54);
  --jp-ui-font-color3: rgba(0, 0, 0, 0.38);

  /*
   * Use these against the brand/accent/warn/error colors.
   * These will typically go from light to darker, in both a dark and light theme.
   */

  --jp-ui-inverse-font-color0: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color1: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color2: rgba(255, 255, 255, 0.7);
  --jp-ui-inverse-font-color3: rgba(255, 255, 255, 0.5);

  /* Content Fonts
   *
   * Content font variables are used for typography of user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-content-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-content-line-height: 1.6;
  --jp-content-font-scale-factor: 1.2;
  --jp-content-font-size0: 0.83333em;
  --jp-content-font-size1: 14px; /* Base font size */
  --jp-content-font-size2: 1.2em;
  --jp-content-font-size3: 1.44em;
  --jp-content-font-size4: 1.728em;
  --jp-content-font-size5: 2.0736em;

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-content-presentation-font-size1: 17px;
  --jp-content-heading-line-height: 1;
  --jp-content-heading-margin-top: 1.2em;
  --jp-content-heading-margin-bottom: 0.8em;
  --jp-content-heading-font-weight: 500;

  /* Defaults use Material Design specification */
  --jp-content-font-color0: rgba(0, 0, 0, 1);
  --jp-content-font-color1: rgba(0, 0, 0, 0.87);
  --jp-content-font-color2: rgba(0, 0, 0, 0.54);
  --jp-content-font-color3: rgba(0, 0, 0, 0.38);
  --jp-content-link-color: var(--md-blue-900);
  --jp-content-font-family: system-ui, -apple-system, blinkmacsystemfont,
    'Segoe UI', helvetica, arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';

  /*
   * Code Fonts
   *
   * Code font variables are used for typography of code and other monospaces content.
   */

  --jp-code-font-size: 13px;
  --jp-code-line-height: 1.3077; /* 17px for 13px base */
  --jp-code-padding: 5px; /* 5px for 13px base, codemirror highlighting needs integer px value */
  --jp-code-font-family-default: menlo, consolas, 'DejaVu Sans Mono', monospace;
  --jp-code-font-family: var(--jp-code-font-family-default);

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-code-presentation-font-size: 16px;

  /* may need to tweak cursor width if you change font size */
  --jp-code-cursor-width0: 1.4px;
  --jp-code-cursor-width1: 2px;
  --jp-code-cursor-width2: 4px;

  /* Layout
   *
   * The following are the main layout colors use in JupyterLab. In a light
   * theme these would go from light to dark.
   */

  --jp-layout-color0: white;
  --jp-layout-color1: white;
  --jp-layout-color2: var(--md-grey-200);
  --jp-layout-color3: var(--md-grey-400);
  --jp-layout-color4: var(--md-grey-600);

  /* Inverse Layout
   *
   * The following are the inverse layout colors use in JupyterLab. In a light
   * theme these would go from dark to light.
   */

  --jp-inverse-layout-color0: #111;
  --jp-inverse-layout-color1: var(--md-grey-900);
  --jp-inverse-layout-color2: var(--md-grey-800);
  --jp-inverse-layout-color3: var(--md-grey-700);
  --jp-inverse-layout-color4: var(--md-grey-600);

  /* Brand/accent */

  --jp-brand-color0: var(--md-blue-900);
  --jp-brand-color1: var(--md-blue-700);
  --jp-brand-color2: var(--md-blue-300);
  --jp-brand-color3: var(--md-blue-100);
  --jp-brand-color4: var(--md-blue-50);
  --jp-accent-color0: var(--md-green-900);
  --jp-accent-color1: var(--md-green-700);
  --jp-accent-color2: var(--md-green-300);
  --jp-accent-color3: var(--md-green-100);

  /* State colors (warn, error, success, info) */

  --jp-warn-color0: var(--md-orange-900);
  --jp-warn-color1: var(--md-orange-700);
  --jp-warn-color2: var(--md-orange-300);
  --jp-warn-color3: var(--md-orange-100);
  --jp-error-color0: var(--md-red-900);
  --jp-error-color1: var(--md-red-700);
  --jp-error-color2: var(--md-red-300);
  --jp-error-color3: var(--md-red-100);
  --jp-success-color0: var(--md-green-900);
  --jp-success-color1: var(--md-green-700);
  --jp-success-color2: var(--md-green-300);
  --jp-success-color3: var(--md-green-100);
  --jp-info-color0: var(--md-cyan-900);
  --jp-info-color1: var(--md-cyan-700);
  --jp-info-color2: var(--md-cyan-300);
  --jp-info-color3: var(--md-cyan-100);

  /* Cell specific styles */

  --jp-cell-padding: 5px;
  --jp-cell-collapser-width: 8px;
  --jp-cell-collapser-min-height: 20px;
  --jp-cell-collapser-not-active-hover-opacity: 0.6;
  --jp-cell-editor-background: var(--md-grey-100);
  --jp-cell-editor-border-color: var(--md-grey-300);
  --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-cell-editor-active-background: var(--jp-layout-color0);
  --jp-cell-editor-active-border-color: var(--jp-brand-color1);
  --jp-cell-prompt-width: 64px;
  --jp-cell-prompt-font-family: var(--jp-code-font-family-default);
  --jp-cell-prompt-letter-spacing: 0;
  --jp-cell-prompt-opacity: 1;
  --jp-cell-prompt-not-active-opacity: 0.5;
  --jp-cell-prompt-not-active-font-color: var(--md-grey-700);

  /* A custom blend of MD grey and blue 600
   * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */
  --jp-cell-inprompt-font-color: #307fc1;

  /* A custom blend of MD grey and orange 600
   * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */
  --jp-cell-outprompt-font-color: #bf5b3d;

  /* Notebook specific styles */

  --jp-notebook-padding: 10px;
  --jp-notebook-select-background: var(--jp-layout-color1);
  --jp-notebook-multiselected-color: var(--md-blue-50);

  /* The scroll padding is calculated to fill enough space at the bottom of the
  notebook to show one single-line cell (with appropriate padding) at the top
  when the notebook is scrolled all the way to the bottom. We also subtract one
  pixel so that no scrollbar appears if we have just one single-line cell in the
  notebook. This padding is to enable a 'scroll past end' feature in a notebook.
  */
  --jp-notebook-scroll-padding: calc(
    100% - var(--jp-code-font-size) * var(--jp-code-line-height) -
      var(--jp-code-padding) - var(--jp-cell-padding) - 1px
  );

  /* Rendermime styles */

  --jp-rendermime-error-background: #fdd;
  --jp-rendermime-table-row-background: var(--md-grey-100);
  --jp-rendermime-table-row-hover-background: var(--md-light-blue-50);

  /* Dialog specific styles */

  --jp-dialog-background: rgba(0, 0, 0, 0.25);

  /* Console specific styles */

  --jp-console-padding: 10px;

  /* Toolbar specific styles */

  --jp-toolbar-border-color: var(--jp-border-color1);
  --jp-toolbar-micro-height: 8px;
  --jp-toolbar-background: var(--jp-layout-color1);
  --jp-toolbar-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.24);
  --jp-toolbar-header-margin: 4px 4px 0 4px;
  --jp-toolbar-active-background: var(--md-grey-300);

  /* Statusbar specific styles */

  --jp-statusbar-height: 24px;

  /* Input field styles */

  --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-input-active-background: var(--jp-layout-color1);
  --jp-input-hover-background: var(--jp-layout-color1);
  --jp-input-background: var(--md-grey-100);
  --jp-input-border-color: var(--jp-inverse-border-color);
  --jp-input-active-border-color: var(--jp-brand-color1);
  --jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);

  /* General editor styles */

  --jp-editor-selected-background: #d9d9d9;
  --jp-editor-selected-focused-background: #d7d4f0;
  --jp-editor-cursor-color: var(--jp-ui-font-color0);

  /* Code mirror specific styles */

  --jp-mirror-editor-keyword-color: #008000;
  --jp-mirror-editor-atom-color: #88f;
  --jp-mirror-editor-number-color: #080;
  --jp-mirror-editor-def-color: #00f;
  --jp-mirror-editor-variable-color: var(--md-grey-900);
  --jp-mirror-editor-variable-2-color: rgb(0, 54, 109);
  --jp-mirror-editor-variable-3-color: #085;
  --jp-mirror-editor-punctuation-color: #05a;
  --jp-mirror-editor-property-color: #05a;
  --jp-mirror-editor-operator-color: #a2f;
  --jp-mirror-editor-comment-color: #408080;
  --jp-mirror-editor-string-color: #ba2121;
  --jp-mirror-editor-string-2-color: #708;
  --jp-mirror-editor-meta-color: #a2f;
  --jp-mirror-editor-qualifier-color: #555;
  --jp-mirror-editor-builtin-color: #008000;
  --jp-mirror-editor-bracket-color: #997;
  --jp-mirror-editor-tag-color: #170;
  --jp-mirror-editor-attribute-color: #00c;
  --jp-mirror-editor-header-color: blue;
  --jp-mirror-editor-quote-color: #090;
  --jp-mirror-editor-link-color: #00c;
  --jp-mirror-editor-error-color: #f00;
  --jp-mirror-editor-hr-color: #999;

  /*
    RTC user specific colors.
    These colors are used for the cursor, username in the editor,
    and the icon of the user.
  */

  --jp-collaborator-color1: #ffad8e;
  --jp-collaborator-color2: #dac83d;
  --jp-collaborator-color3: #72dd76;
  --jp-collaborator-color4: #00e4d0;
  --jp-collaborator-color5: #45d4ff;
  --jp-collaborator-color6: #e2b1ff;
  --jp-collaborator-color7: #ff9de6;

  /* Vega extension styles */

  --jp-vega-background: white;

  /* Sidebar-related styles */

  --jp-sidebar-min-width: 250px;

  /* Search-related styles */

  --jp-search-toggle-off-opacity: 0.5;
  --jp-search-toggle-hover-opacity: 0.8;
  --jp-search-toggle-on-opacity: 1;
  --jp-search-selected-match-background-color: rgb(245, 200, 0);
  --jp-search-selected-match-color: black;
  --jp-search-unselected-match-background-color: var(
    --jp-inverse-layout-color0
  );
  --jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);

  /* Icon colors that work well with light or dark backgrounds */
  --jp-icon-contrast-color0: var(--md-purple-600);
  --jp-icon-contrast-color1: var(--md-green-600);
  --jp-icon-contrast-color2: var(--md-pink-600);
  --jp-icon-contrast-color3: var(--md-blue-600);

  /* Button colors */
  --jp-accept-color-normal: var(--md-blue-700);
  --jp-accept-color-hover: var(--md-blue-800);
  --jp-accept-color-active: var(--md-blue-900);
  --jp-warn-color-normal: var(--md-red-700);
  --jp-warn-color-hover: var(--md-red-800);
  --jp-warn-color-active: var(--md-red-900);
  --jp-reject-color-normal: var(--md-grey-600);
  --jp-reject-color-hover: var(--md-grey-700);
  --jp-reject-color-active: var(--md-grey-800);

  /* File or activity icons and switch semantic variables */
  --jp-jupyter-icon-color: #f37626;
  --jp-notebook-icon-color: #f37626;
  --jp-json-icon-color: var(--md-orange-700);
  --jp-console-icon-background-color: var(--md-blue-700);
  --jp-console-icon-color: white;
  --jp-terminal-icon-background-color: var(--md-grey-800);
  --jp-terminal-icon-color: var(--md-grey-200);
  --jp-text-editor-icon-color: var(--md-grey-700);
  --jp-inspector-icon-color: var(--md-grey-700);
  --jp-switch-color: var(--md-grey-400);
  --jp-switch-true-position-color: var(--md-orange-900);
}
</style>
<style type="text/css">
/* Force rendering true colors when outputing to pdf */
* {
  -webkit-print-color-adjust: exact;
}

/* Misc */
a.anchor-link {
  display: none;
}

/* Input area styling */
.jp-InputArea {
  overflow: hidden;
}

.jp-InputArea-editor {
  overflow: hidden;
}

.cm-editor.cm-s-jupyter .highlight pre {
/* weird, but --jp-code-padding defined to be 5px but 4px horizontal padding is hardcoded for pre.cm-line */
  padding: var(--jp-code-padding) 4px;
  margin: 0;

  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;

}

.jp-OutputArea-output pre {
  line-height: inherit;
  font-family: inherit;
}

.jp-RenderedText pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
}

/* Hiding the collapser by default */
.jp-Collapser {
  display: none;
}

@page {
    margin: 0.5in; /* Margin for each printed piece of paper */
}

@media print {
  .jp-Cell-inputWrapper,
  .jp-Cell-outputWrapper {
    display: block;
  }
}
</style>
<!-- Load mathjax -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_CHTML-full,Safe"> </script>
<!-- MathJax configuration -->
<script type="text/x-mathjax-config">
    init_mathjax = function() {
        if (window.MathJax) {
        // MathJax loaded
            MathJax.Hub.Config({
                TeX: {
                    equationNumbers: {
                    autoNumber: "AMS",
                    useLabelIds: true
                    }
                },
                tex2jax: {
                    inlineMath: [ ['$','$'], ["\\\\(","\\\\)"] ],
                    displayMath: [ ['$$','$$'], ["\\\\[","\\\\]"] ],
                    processEscapes: true,
                    processEnvironments: true
                },
                displayAlign: 'center',
                CommonHTML: {
                    linebreaks: {
                    automatic: true
                    }
                }
            });

            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        }
    }
    init_mathjax();
    </script>
<!-- End of mathjax configuration --><script type="module">
  document.addEventListener("DOMContentLoaded", async () => {
    const diagrams = document.querySelectorAll(".jp-Mermaid > pre.mermaid");
    // do not load mermaidjs if not needed
    if (!diagrams.length) {
      return;
    }
    const mermaid = (await import("https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.7.0/mermaid.esm.min.mjs")).default;
    const parser = new DOMParser();

    mermaid.initialize({
      maxTextSize: 100000,
      maxEdges: 100000,
      startOnLoad: false,
      fontFamily: window
        .getComputedStyle(document.body)
        .getPropertyValue("--jp-ui-font-family"),
      theme: document.querySelector("body[data-jp-theme-light='true']")
        ? "default"
        : "dark",
    });

    let _nextMermaidId = 0;

    function makeMermaidImage(svg) {
      const img = document.createElement("img");
      const doc = parser.parseFromString(svg, "image/svg+xml");
      const svgEl = doc.querySelector("svg");
      const { maxWidth } = svgEl?.style || {};
      const firstTitle = doc.querySelector("title");
      const firstDesc = doc.querySelector("desc");

      img.setAttribute("src", \\`data:image/svg+xml,${encodeURIComponent(svg)}\\`);
      if (maxWidth) {
        img.width = parseInt(maxWidth);
      }
      if (firstTitle) {
        img.setAttribute("alt", firstTitle.textContent);
      }
      if (firstDesc) {
        const caption = document.createElement("figcaption");
        caption.className = "sr-only";
        caption.textContent = firstDesc.textContent;
        return [img, caption];
      }
      return [img];
    }

    async function makeMermaidError(text) {
      let errorMessage = "";
      try {
        await mermaid.parse(text);
      } catch (err) {
        errorMessage = \\`${err}\\`;
      }

      const result = document.createElement("details");
      result.className = 'jp-RenderedMermaid-Details';
      const summary = document.createElement("summary");
      summary.className = 'jp-RenderedMermaid-Summary';
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.innerText = text;
      pre.appendChild(code);
      summary.appendChild(pre);
      result.appendChild(summary);

      const warning = document.createElement("pre");
      warning.innerText = errorMessage;
      result.appendChild(warning);
      return [result];
    }

    async function renderOneMarmaid(src) {
      const id = \\`jp-mermaid-${_nextMermaidId++}\\`;
      const parent = src.parentNode;
      let raw = src.textContent.trim();
      const el = document.createElement("div");
      el.style.visibility = "hidden";
      document.body.appendChild(el);
      let results = null;
      let output = null;
      try {
        let { svg } = await mermaid.render(id, raw, el);
        svg = cleanMermaidSvg(svg);
        results = makeMermaidImage(svg);
        output = document.createElement("figure");
        results.map(output.appendChild, output);
      } catch (err) {
        parent.classList.add("jp-mod-warning");
        results = await makeMermaidError(raw);
        output = results[0];
      } finally {
        el.remove();
      }
      parent.classList.add("jp-RenderedMermaid");
      parent.appendChild(output);
    }


    /**
     * Post-process to ensure mermaid diagrams contain only valid SVG and XHTML.
     */
    function cleanMermaidSvg(svg) {
      return svg.replace(RE_VOID_ELEMENT, replaceVoidElement);
    }


    /**
     * A regular expression for all void elements, which may include attributes and
     * a slash.
     *
     * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
     *
     * Of these, only \\`<br>\\` is generated by Mermaid in place of \\`\\n\\`,
     * but _any_ "malformed" tag will break the SVG rendering entirely.
     */
    const RE_VOID_ELEMENT =
      /<\\s*(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\\s*([^>]*?)\\s*>/gi;

    /**
     * Ensure a void element is closed with a slash, preserving any attributes.
     */
    function replaceVoidElement(match, tag, rest) {
      rest = rest.trim();
      if (!rest.endsWith('/')) {
        rest = \\`${rest} /\\`;
      }
      return \\`<${tag} ${rest}>\\`;
    }

    void Promise.all([...diagrams].map(renderOneMarmaid));
  });
</script>
<style>
  .jp-Mermaid:not(.jp-RenderedMermaid) {
    display: none;
  }

  .jp-RenderedMermaid {
    overflow: auto;
    display: flex;
  }

  .jp-RenderedMermaid.jp-mod-warning {
    width: auto;
    padding: 0.5em;
    margin-top: 0.5em;
    border: var(--jp-border-width) solid var(--jp-warn-color2);
    border-radius: var(--jp-border-radius);
    color: var(--jp-ui-font-color1);
    font-size: var(--jp-ui-font-size1);
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .jp-RenderedMermaid figure {
    margin: 0;
    overflow: auto;
    max-width: 100%;
  }

  .jp-RenderedMermaid img {
    max-width: 100%;
  }

  .jp-RenderedMermaid-Details > pre {
    margin-top: 1em;
  }

  .jp-RenderedMermaid-Summary {
    color: var(--jp-warn-color2);
  }

  .jp-RenderedMermaid:not(.jp-mod-warning) pre {
    display: none;
  }

  .jp-RenderedMermaid-Summary > pre {
    display: inline-block;
    white-space: normal;
  }
</style>
<!-- End of mermaid configuration --></head>
<body class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">
<main><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">from</span> <span class="nn">sklearn.feature_selection</span> <span class="kn">import</span> <span class="n">RFE</span>
<span class="kn">from</span> <span class="nn">sklearn.linear_model</span> <span class="kn">import</span> <span class="n">LogisticRegression</span>
<span class="kn">from</span> <span class="nn">sklearn.preprocessing</span> <span class="kn">import</span> <span class="n">StandardScaler</span>
<span class="kn">from</span> <span class="nn">sklearn.model_selection</span> <span class="kn">import</span> <span class="n">train_test_split</span>
<span class="kn">from</span> <span class="nn">sklearn.ensemble</span> <span class="kn">import</span> <span class="n">RandomForestClassifier</span>
<span class="kn">from</span> <span class="nn">sklearn.metrics</span> <span class="kn">import</span> <span class="n">accuracy_score</span><span class="p">,</span> <span class="n">classification_report</span>
<span class="kn">from</span> <span class="nn">sklearn.model_selection</span> <span class="kn">import</span> <span class="n">GridSearchCV</span>
<span class="kn">import</span> <span class="nn">joblib</span>
</pre></div>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Load the data</span>
<span class="n">data</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="s1">'df_all.csv'</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h3 id="Data-Cleanning">Data Cleanning<a class="anchor-link" href="#Data-Cleanning">¶</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Rename columns for clarity</span>
<span class="n">data</span><span class="o">.</span><span class="n">rename</span><span class="p">(</span><span class="n">columns</span><span class="o">=</span><span class="p">{</span><span class="s1">'Pos_x'</span><span class="p">:</span> <span class="s1">'Position'</span><span class="p">,</span> <span class="s1">'Pos_y'</span><span class="p">:</span> <span class="s1">'Draft_Position'</span><span class="p">},</span> <span class="n">inplace</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="c1"># Replace the '-' in 'Ht' with '.' and convert to float</span>
<span class="n">data</span><span class="p">[</span><span class="s1">'Ht'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data</span><span class="p">[</span><span class="s1">'Ht'</span><span class="p">]</span><span class="o">.</span><span class="n">str</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s1">'-'</span><span class="p">,</span> <span class="s1">'.'</span><span class="p">)</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="nb">float</span><span class="p">)</span>
<span class="c1"># Drop the 'Unnamed: 0' column as it's just an index</span>
<span class="n">data</span><span class="o">.</span><span class="n">drop</span><span class="p">(</span><span class="n">columns</span><span class="o">=</span><span class="p">[</span><span class="s1">'Unnamed: 0'</span><span class="p">],</span> <span class="n">inplace</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="c1"># Handling missing values</span>
<span class="n">numerical_columns</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'Ht'</span><span class="p">,</span> <span class="s1">'Wt'</span><span class="p">,</span> <span class="s1">'40yd'</span><span class="p">,</span> <span class="s1">'Vertical'</span><span class="p">,</span> <span class="s1">'Bench'</span><span class="p">,</span> <span class="s1">'Broad Jump'</span><span class="p">,</span> <span class="s1">'3Cone'</span><span class="p">,</span> <span class="s1">'Shuttle'</span><span class="p">,</span> <span class="s1">'Age'</span><span class="p">]</span>
<span class="c1"># Group by 'Position' and fill missing numerical values with the median of that group</span>
<span class="k">for</span> <span class="n">col</span> <span class="ow">in</span> <span class="n">numerical_columns</span><span class="p">:</span>
    <span class="n">data</span><span class="p">[</span><span class="n">col</span><span class="p">]</span> <span class="o">=</span> <span class="n">data</span><span class="o">.</span><span class="n">groupby</span><span class="p">(</span><span class="s1">'Position'</span><span class="p">)[</span><span class="n">col</span><span class="p">]</span><span class="o">.</span><span class="n">transform</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="n">x</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="n">x</span><span class="o">.</span><span class="n">median</span><span class="p">()))</span>
<span class="c1"># Note: This approach will leave NaNs intact if a particular position group doesn't have any non-NaN values for a column</span>
<span class="c1"># So, as a fallback, fill remaining NaNs with the overall median</span>
<span class="n">data</span><span class="p">[</span><span class="n">numerical_columns</span><span class="p">]</span> <span class="o">=</span> <span class="n">data</span><span class="p">[</span><span class="n">numerical_columns</span><span class="p">]</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="n">data</span><span class="p">[</span><span class="n">numerical_columns</span><span class="p">]</span><span class="o">.</span><span class="n">median</span><span class="p">())</span>
<span class="c1"># Handling NaN values in 'Rnd' and 'Pick' with a placeholder value</span>
<span class="n">data</span><span class="p">[</span><span class="s1">'Rnd'</span><span class="p">]</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="n">inplace</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">data</span><span class="p">[</span><span class="s1">'Pick'</span><span class="p">]</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="n">inplace</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="c1"># Handling NaN values in 'Tm' and 'Draft Position' with a string 'Undrafted'</span>
<span class="n">data</span><span class="p">[</span><span class="s1">'Tm'</span><span class="p">]</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="s1">'Undrafted'</span><span class="p">,</span> <span class="n">inplace</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">data</span><span class="p">[</span><span class="s1">'Draft_Position'</span><span class="p">]</span><span class="o">.</span><span class="n">fillna</span><span class="p">(</span><span class="s1">'Undrafted'</span><span class="p">,</span> <span class="n">inplace</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="application/vnd.jupyter.stderr" tabindex="0">
<pre>/home/gabot/Documents/datascience/nfl_draft/myenv/lib/python3.9/site-packages/numpy/lib/nanfunctions.py:1215: RuntimeWarning: Mean of empty slice
  return np.nanmean(a, axis, out=out, keepdims=keepdims)
/home/gabot/Documents/datascience/nfl_draft/myenv/lib/python3.9/site-packages/numpy/lib/nanfunctions.py:1215: RuntimeWarning: Mean of empty slice
  return np.nanmean(a, axis, out=out, keepdims=keepdims)
</pre>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h3 id="Feature-Engineering">Feature Engineering<a class="anchor-link" href="#Feature-Engineering">¶</a></h3>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p>BMI (Body Mass Index)</p>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Convert height from feet to meters (1 foot = 0.3048 meters)</span>
<span class="n">data</span><span class="p">[</span><span class="s1">'Ht_m'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data</span><span class="p">[</span><span class="s1">'Ht'</span><span class="p">]</span> <span class="o">*</span> <span class="mf">0.3048</span>
<span class="c1"># Convert weight from pounds to kilograms (1 pound = 0.453592 kilograms)</span>
<span class="n">data</span><span class="p">[</span><span class="s1">'Wt_kg'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data</span><span class="p">[</span><span class="s1">'Wt'</span><span class="p">]</span> <span class="o">*</span> <span class="mf">0.453592</span>
<span class="c1"># Calculate BMI</span>
<span class="n">data</span><span class="p">[</span><span class="s1">'BMI'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data</span><span class="p">[</span><span class="s1">'Wt_kg'</span><span class="p">]</span> <span class="o">/</span> <span class="p">(</span><span class="n">data</span><span class="p">[</span><span class="s1">'Ht_m'</span><span class="p">]</span> <span class="o">**</span> <span class="mi">2</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Define a function to calculate the index based on position</span>
<span class="k">def</span> <span class="nf">calculate_position_index</span><span class="p">(</span><span class="n">row</span><span class="p">):</span>
    <span class="k">if</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'WR'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'CB'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'RB'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'S'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'OT'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'DE'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'DT'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'OLB'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'TE'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'QB'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'OG'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'ILB'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'C'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'LB'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'OL'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'FB'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'DL'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'EDGE'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">elif</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Position'</span><span class="p">]</span> <span class="o">==</span> <span class="s1">'DB'</span><span class="p">:</span>
        <span class="k">return</span> <span class="n">row</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">]</span> <span class="o">+</span> <span class="n">row</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">]</span>
    <span class="k">else</span><span class="p">:</span>
        <span class="k">return</span> <span class="mi">0</span>  <span class="c1"># Default value for other positions</span>
</pre></div>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Apply the function to each row</span>
<span class="n">data</span><span class="p">[</span><span class="s1">'Position_Performance_Index'</span><span class="p">]</span> <span class="o">=</span> <span class="n">data</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">calculate_position_index</span><span class="p">,</span> <span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Save the cleaned data (optional)</span>
<span class="n">data</span><span class="o">.</span><span class="n">to_csv</span><span class="p">(</span><span class="s1">'cleaned_df.csv'</span><span class="p">,</span> <span class="n">index</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h3 id="Exploratory-Data-Analysis-(EDA)">Exploratory Data Analysis (EDA)<a class="anchor-link" href="#Exploratory-Data-Analysis-(EDA)">¶</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Summary statistics</span>
<span class="nb">print</span><span class="p">(</span><span class="n">data</span><span class="o">.</span><span class="n">describe</span><span class="p">())</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>                Ht           Wt         40yd     Vertical        Bench  \\
count  7686.000000  7686.000000  7686.000000  7686.000000  7686.000000   
mean      6.075713   242.693794     4.777555    32.850059    20.082292   
std       0.455551    45.220932     0.301377     3.922108     5.827572   
min       5.100000   144.000000     4.220000    17.500000     2.000000   
25%       6.000000   205.000000     4.540000    30.000000    15.000000   
50%       6.200000   232.000000     4.700000    33.000000    19.500000   
75%       6.400000   280.000000     4.970000    35.500000    24.000000   
max       6.900000   384.000000     6.050000    46.500000    49.000000   

        Broad Jump        3Cone      Shuttle      drafted          Rnd  \\
count  7686.000000  7686.000000  7686.000000  7686.000000  7686.000000   
mean    114.456024     7.257050     4.384748     0.627114     2.063882   
std       8.780606     0.376837     0.241730     0.483604     2.817771   
min      74.000000     6.280000     3.730000     0.000000    -1.000000   
25%     109.000000     6.980000     4.220000     0.000000    -1.000000   
50%     115.000000     7.150000     4.330000     1.000000     2.000000   
75%     121.000000     7.490000     4.530000     1.000000     4.000000   
max     147.000000     9.120000     5.560000     1.000000     7.000000   

              Pick          Age         year         Ht_m        Wt_kg  \\
count  7686.000000  7686.000000  7686.000000  7686.000000  7686.000000   
mean     72.577934    22.457845  2011.227687     1.851877   110.083963   
std      79.750666     0.779523     6.693198     0.138852    20.511853   
min      -1.000000    20.000000  2000.000000     1.554480    65.317248   
25%      -1.000000    22.000000  2005.000000     1.828800    92.986360   
50%      45.000000    22.000000  2011.000000     1.889760   105.233344   
75%     136.000000    23.000000  2017.000000     1.950720   127.005760   
max     262.000000    29.000000  2022.000000     2.103120   174.179328   

               BMI  Position_Performance_Index  
count  7686.000000                 7686.000000  
mean     32.127001                  162.683905  
std       4.926595                   47.919707  
min      20.959900                    0.000000  
25%      27.817087                  167.350000  
50%      31.359829                  175.615000  
75%      36.228672                  185.957500  
max      52.915158                  221.590000  
</pre>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Distribution of the 'drafted' column</span>
<span class="n">sns</span><span class="o">.</span><span class="n">countplot</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="s1">'drafted'</span><span class="p">,</span> <span class="n">data</span><span class="o">=</span><span class="n">data</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Distribution of Drafted vs. Undrafted Players'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Drafted'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Count'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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wIFaunSp2rZtK3d3d4d+bm5uat26tVq3bq20tDQ999xzeu+99zRixIhb/rNws7r37duX6bKDBw86jC27692wYYMuXrzo8Ic2fZ1ZsXv3bv3yyy/68MMP1a1bN7M9O4cLM3tdfXx8VLx4caWmpjpcsygzFSpU0J49e2QYhsO6sjOOnMju2Lt166YJEyboyy+/1OrVq+Xj4+PwezL9ULndbr/tmG8nKChIL774ol588UUdOnRItWvX1oQJExzO/kXmOGSGXLFx40a98cYbCgwMNE/Jzcy5c+cytKX/R5R+qmz69TRy66rEH330kcM8lyVLlujUqVNq3ry52RYUFKTvvvtOKSkpZtvKlSsznLqdndpatGih1NRUTZ8+3aF90qRJstlsDtu/Ey1atFBcXJzD/JZr165p2rRpKlasmLkbP7dcvnxZXbt21blz5/Tqq69mKSSm77W4fm/Xjh07FB0dnaVt3ux5b9eunVxcXDR69OgMe9IMw9DZs2clSXXr1pWPj49mzZrl8BrPnz8/W++zTp066bvvvtPcuXN15swZh8NlksztpStUqJAZvNPf31evXtWBAwd06tSp226vRYsW+uOPPzJczTk5OVlz5sxR6dKl9cADD2S5/uvXe+3aNb377rtmW2pqqqZNm5bldWT2mhqGka1LDHh6emZ4/l1cXNS+fXt9/vnn5l7I650+fdr8uUWLFjp58qTD1/P89ddfmj17dpZryInsjr1mzZqqWbOm5syZo88//1ydO3d2uD5bSEiIgoKC9M4775iHoq93/Zhv5q+//tKVK1cc2oKCglS8ePE7vgyBVbCHCNm2evVqHThwQNeuXVN8fLw2btyodevWqUKFCvriiy8y7MK/3pgxY7R161a1bNlSFSpUUEJCgmbOnKly5cqZ19IICgqSt7e3Zs2apeLFi8vT01P16tW76dyU2ylRooQeffRR9ejRQ/Hx8Zo8ebIqVarkcGmA3r17a8mSJWrWrJk6duyo3377TZ988onDJOfs1ta6dWs1atRIr776qo4cOaJatWrp66+/1ooVKzR48OAM686pvn376r333lP37t0VExOjihUrasmSJdq2bZsmT558yzldt3PixAnzP8uLFy9q3759Wrx4seLi4vTiiy+qX79+WVpPq1attHTpUj311FNq2bKlDh8+rFmzZik4ODjTPwA3CgkJkfT3KdydO3eWq6urWrduraCgIL355psaPny4jhw5orZt26p48eI6fPiwli1bpr59+2ro0KFydXXVm2++qX79+qlx48bq1KmTDh8+rHnz5mV5DpEkdezYUUOHDtXQoUNVokSJDP/N9+7dW+fOnVPjxo1Vrlw5HT16VNOmTTMvK5D+nFarVk0RERG3/dqNvn37au7cufrXv/6lnj17qk6dOjp79qwWLlyoPXv26KOPPsrRBUlbt26tRx55RP/+97915MgRBQcHa+nSpdma91O1alUFBQVp6NChOnHihOx2uz7//PNsTegNCQnR+vXrNXHiRPn7+yswMFD16tXTf/7zH23atEn16tVTnz59FBwcrHPnzmnXrl1av369+Y9Vnz59NH36dHXr1k0xMTEqU6aMPv744zy/unROxt6tWzcNHTpUkjJc7LRQoUKaM2eOmjdvrurVq6tHjx4qW7asTpw4oU2bNslut+vLL7+8ZU2//PKLmjRpoo4dOyo4OFiFCxfWsmXLFB8fb14WAreR7+e14a6Vfopq+s3Nzc3w8/MznnjiCWPKlCkOp3enu/G0+w0bNhht2rQx/P39DTc3N8Pf39/o0qWL8csvvzg8bsWKFUZwcLBRuHBhh9NTH3/8caN69eqZ1nez0+7/97//GcOHDzdKly5teHh4GC1btnQ4LTbdhAkTjLJlyxru7u7GI488Yvzwww8Z1nmr2m487d4wDOPChQtGVFSU4e/vb7i6uhqVK1c2xo8f73BqrWH8fdp9ZGRkhppudjmAG8XHxxs9evQwSpUqZbi5uRk1atTI9NIA2T3tPv21ttlsht1uN6pXr2706dPH2LFjR4b+6afdZ3bab1pamjF27FijQoUKhru7u1GnTh1j5cqVmT5nN6vxjTfeMMqWLWsUKlQowyn4n3/+ufHoo48anp6ehqenp1G1alUjMjLSOHjwoMM6Zs6caQQGBhru7u5G3bp1ja1bt2b6Gt/KI488YkgyevfunWHZkiVLjKZNmxqlS5c23NzcjPLlyxv9+vUzTp06leF5ysrrahh/n04dFRVlBAYGGq6urobdbjcaNWpkrF69OkPfiIgIw9PTM0P7jZ9DwzCMs2fPGl27djXsdrvh5eVldO3a1fjxxx8zPe0+s3UahmHs27fPCAsLM4oVK2aUKlXK6NOnj3m5iOvXcbPT7g8cOGA89thjhoeH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AABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYHoEIAABYnlMD0datW9W6dWv5+/vLZrNp+fLlDssNw9DIkSNVpkwZeXh4KCwsTIcOHXLoc+7cOT3zzDOy2+3y9vZWr169dPHiRYc+P//8sxo0aKAiRYooICBAb7/9dl4PDQAA3EWcGoguXbqkWrVqacaMGZkuf/vttzV16lTNmjVLO3bskKenp8LDw3XlyhWzzzPPPKO9e/dq3bp1WrlypbZu3aq+ffuay5OSktS0aVNVqFBBMTExGj9+vEaNGqXZs2fn+fgAAMDdobAzN968eXM1b94802WGYWjy5Ml67bXX1KZNG0nSRx99JF9fXy1fvlydO3fW/v37tWbNGu3cuVN169aVJE2bNk0tWrTQO++8I39/fy1YsEApKSmaO3eu3NzcVL16dcXGxmrixIkOwQkAAFhXgZ1DdPjwYcXFxSksLMxs8/LyUr169RQdHS1Jio6Olre3txmGJCksLEyFChXSjh07zD6PPfaY3NzczD7h4eE6ePCg/vzzz3waDQAAKMicuofoVuLi4iRJvr6+Du2+vr7msri4OJUuXdpheeHChVWiRAmHPoGBgRnWkb7snnvuybDt5ORkJScnm/eTkpLucDQAAKAgK7B7iJxp3Lhx8vLyMm8BAQHOLgkAAOShAhuI/Pz8JEnx8fEO7fHx8eYyPz8/JSQkOCy/du2azp0759Ans3Vcv40bDR8+XImJiebt+PHjdz4gAABQYBXYQBQYGCg/Pz9t2LDBbEtKStKOHTsUGhoqSQoNDdX58+cVExNj9tm4caPS0tJUr149s8/WrVt19epVs8+6detUpUqVTA+XSZK7u7vsdrvDDQAA/HM5NRBdvHhRsbGxio2NlfT3ROrY2FgdO3ZMNptNgwcP1ptvvqkvvvhCu3fvVrdu3eTv76+2bdtKkqpVq6ZmzZqpT58++v7777Vt2zYNHDhQnTt3lr+/vyTp6aeflpubm3r16qW9e/dq4cKFmjJlioYMGeKkUQMAgILGqZOqf/jhBzVq1Mi8nx5SIiIiNH/+fL388su6dOmS+vbtq/Pnz+vRRx/VmjVrVKRIEfMxCxYs0MCBA9WkSRMVKlRI7du319SpU83lXl5e+vrrrxUZGamQkBCVKlVKI0eO5JR7AABgshmGYTi7iIIuKSlJXl5eSkxMzNPDZyEvfZRn6wbuZjHjuzm7hDvG5xvIXF5+vrPz97vAziECAADILwQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeQQiAABgeZYKRDNmzFDFihVVpEgR1atXT99//72zSwIAAAWAZQLRwoULNWTIEL3++uvatWuXatWqpfDwcCUkJDi7NAAA4GSWCUQTJ05Unz591KNHDwUHB2vWrFkqWrSo5s6d6+zSAACAk1kiEKWkpCgmJkZhYWFmW6FChRQWFqbo6GgnVgYAAAqCws4uID+cOXNGqamp8vX1dWj39fXVgQMHMvRPTk5WcnKyeT8xMVGSlJSUlKd1piZfztP1A3ervP7s5Qc+30Dm8vLznb5uwzBu29cSgSi7xo0b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"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">13</span><span class="p">,</span> <span class="mi">8</span><span class="p">))</span>
<span class="c1"># Select only numeric columns for correlation matrix</span>
<span class="n">numeric_data</span> <span class="o">=</span> <span class="n">data</span><span class="o">.</span><span class="n">select_dtypes</span><span class="p">(</span><span class="n">include</span><span class="o">=</span><span class="p">[</span><span class="n">np</span><span class="o">.</span><span class="n">number</span><span class="p">])</span>
<span class="n">sns</span><span class="o">.</span><span class="n">heatmap</span><span class="p">(</span><span class="n">numeric_data</span><span class="o">.</span><span class="n">corr</span><span class="p">(),</span> <span class="n">annot</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">cmap</span><span class="o">=</span><span class="s1">'coolwarm'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Correlation Matrix'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Histogram of BMI</span>
<span class="n">sns</span><span class="o">.</span><span class="n">histplot</span><span class="p">(</span><span class="n">data</span><span class="p">[</span><span class="s1">'BMI'</span><span class="p">],</span> <span class="n">kde</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Distribution of BMI'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'BMI'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Frequency'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Histogram of 40yd Dash Times</span>
<span class="n">sns</span><span class="o">.</span><span class="n">histplot</span><span class="p">(</span><span class="n">data</span><span class="p">[</span><span class="s1">'40yd'</span><span class="p">],</span> <span class="n">kde</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'green'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Distribution of 40yd Dash Times'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'40yd Dash Time (seconds)'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Frequency'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjsAAAHHCAYAAABZbpmkAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjguMiwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8g+/7EAAAACXBIWXMAAA9hAAAPYQGoP6dpAAB9xUlEQVR4nO3dd3gU1frA8e8mu9n0ThqEEHoHAYEIAkKkiqAooICAoFfEAlzBy70KiiCICqgXwYKAoiJwRRDpVaT33lsCaZQU0rfM74+Y/bEkgSQkmc3m/TzPPGRmzsy8J5shb86cc0ajKIqCEEIIIYSdclA7ACGEEEKI0iTJjhBCCCHsmiQ7QgghhLBrkuwIIYQQwq5JsiOEEEIIuybJjhBCCCHsmiQ7QgghhLBrkuwIIYQQwq5JsiOEEEIIuybJjhDAe++9h0ajKZNrdejQgQ4dOljWt27dikajYdmyZWVy/SFDhlCtWrUyuVZxpaamMnz4cIKCgtBoNIwaNUrtkArt8uXLaDQaFixYoHYo9zRkyBDc3d1L/ToajYb33nuv1K8jxL1IsiPszoIFC9BoNJbF2dmZkJAQunTpwueff87t27dL5DoxMTG89957HD58uETOV5JsObbC+PDDD1mwYAEjRozghx9+YNCgQYU6LikpiYCAgAKTx6ysLN5++21CQkJwcXGhVatWbNiwoaTDL5TcJDd30ev1BAYG0qFDBz788EOuX7+uSlz3c/f9VdBi6wm1qFi0agcgRGmZNGkS4eHhGAwG4uLi2Lp1K6NGjWLGjBmsXLmSxo0bW8q+8847/Otf/yrS+WNiYnj//fepVq0aTZs2LfRx69evL9J1iuNesX3zzTeYzeZSj+FBbN68mdatWzNx4sQiHTdhwgTS09ML3D9kyBCWLVvGqFGjqFWrFgsWLKB79+5s2bKFtm3bPmjYxfLGG2/w8MMPYzKZuH79Ojt37mTixInMmDGDJUuW0LFjR1XiKki7du344YcfrLYNHz6cli1b8vLLL1u25bYaZWRkoNXKrxqhLvkJFHarW7dutGjRwrI+fvx4Nm/ezBNPPMGTTz7JqVOncHFxAUCr1Zb6f8jp6em4urri5ORUqte5H51Op+r1CyMhIYH69esX6Zjjx48zZ84cJkyYwIQJE/Ls37t3L4sXL+bjjz/mrbfeAuCFF16gYcOGjBs3jp07d5ZI7EX16KOP8swzz1htO3LkCJ07d6ZPnz6cPHmS4OBgVWLLT/Xq1alevbrVtldeeYXq1aszcODAPOWdnZ3LKjQhCiSPsUSF0rFjR959912uXLnCokWLLNvz67OzYcMG2rZti7e3N+7u7tSpU4d///vfQM4jiIcffhiAoUOHWpruc/tpdOjQgYYNG3LgwAHatWuHq6ur5di7++zkMplM/Pvf/yYoKAg3NzeefPJJoqOjrcpUq1aNIUOG5Dn2znPeL7b8+uykpaXxz3/+k9DQUPR6PXXq1OGTTz5BURSrchqNhtdee43ffvuNhg0botfradCgAWvXrs3/G36XhIQEhg0bRmBgIM7OzjRp0oSFCxda9uc+2rl06RJ//PGHJfbLly/f99xvvvkmTz31FI8++mi++5ctW4ajo6NV64OzszPDhg1j165dlu91+/btadKkSb7nqFOnDl26dLGsJyUlMWTIELy8vPD29mbw4MEkJSUV4jtxb02aNGHWrFkkJSXx3//+17L9ypUrvPrqq9SpUwcXFxf8/Px49tln83x/DAYD77//PrVq1cLZ2Rk/Pz/atm2b7yO7a9eu0bt3b9zd3alUqRJvvfUWJpPpgeuQ6+4+O7n32tmzZxk4cCBeXl5UqlSJd999F0VRiI6OplevXnh6ehIUFMSnn36a55xZWVlMnDiRmjVrotfrCQ0NZdy4cWRlZVmVu9c9LCoWSXZEhZPb/+Nej5NOnDjBE088QVZWFpMmTeLTTz/lySefZMeOHQDUq1ePSZMmAfDyyy/zww8/8MMPP9CuXTvLOW7evEm3bt1o2rQps2bN4rHHHrtnXFOmTOGPP/7g7bff5o033mDDhg1ERkaSkZFRpPoVJrY7KYrCk08+ycyZM+natSszZsygTp06jB07ljFjxuQp/9dff/Hqq6/Sv39/pk+fTmZmJn369OHmzZv3jCsjI4MOHTrwww8/MGDAAD7++GO8vLwYMmQIn332mSX2H374AX9/f5o2bWqJvVKlSvc899KlS9m5cyfTp08vsMyhQ4eoXbs2np6eVttbtmwJYOnfNGjQII4ePcrx48etyu3bt8/yCzr3+9arVy9++OEHBg4cyOTJk7l69SqDBw++Z6yF9cwzz+Di4mL1c7pv3z527txJ//79+fzzz3nllVfYtGkTHTp0sHp899577/H+++/z2GOP8d///pf//Oc/VK1alYMHD1pdw2Qy0aVLF/z8/Pjkk09o3749n376KV9//XWJ1OFe+vXrh9lsZtq0abRq1YrJkycza9YsHn/8cSpXrsxHH31EzZo1eeutt/jzzz8tx5nNZp588kk++eQTevbsyRdffEHv3r2ZOXMm/fr1s5S73z0sKhhFCDszf/58BVD27dtXYBkvLy/loYcesqxPnDhRufN2mDlzpgIo169fL/Ac+/btUwBl/vz5efa1b99eAZS5c+fmu699+/aW9S1btiiAUrlyZSUlJcWyfcmSJQqgfPbZZ5ZtYWFhyuDBg+97znvFNnjwYCUsLMyy/ttvvymAMnnyZKtyzzzzjKLRaJTz589btgGKk5OT1bYjR44ogPLFF1/kudadZs2apQDKokWLLNuys7OViIgIxd3d3aruYWFhSo8ePe55vlzp6elK1apVlfHjxyuK8v/fz6VLl1qVa9CggdKxY8c8x584ccLqs0pKSlKcnZ2Vt99+26rcG2+8obi5uSmpqamKovz/92369OmWMkajUXn00UcL/N7fqaA479SkSRPFx8fHqq5327VrlwIo33//vdVx9/v+DR48WAGUSZMmWW1/6KGHlObNm9/z2Lu5ubnl+3OpKDk/MxMnTrSs595rL7/8smWb0WhUqlSpomg0GmXatGmW7YmJiYqLi4vVuX/44QfFwcFB2b59u9V15s6dqwDKjh07FEUp3D0sKg5p2REVkru7+z1HZXl7ewOwYsWKYnfm1ev1DB06tNDlX3jhBTw8PCzrzzzzDMHBwaxevbpY1y+s1atX4+joyBtvvGG1/Z///CeKorBmzRqr7ZGRkdSoUcOy3rhxYzw9Pbl48eJ9rxMUFMRzzz1n2abT6XjjjTdITU1l27ZtxYp/2rRpGAyG+z6eyMjIQK/X59me26cktwXNy8uLXr168fPPP1se45lMJn755Rd69+6Nm5ubpT5arZYRI0ZYzuXo6Mjrr79erHrk5+6f09w+ZpDzqOrmzZvUrFkTb29vq1Ybb29vTpw4wblz5+57jVdeecVq/dFHH73vZ1kShg8fbvna0dGRFi1aoCgKw4YNs2z39vamTp06VvEsXbqUevXqUbduXW7cuGFZcjtyb9myxXIsPNg9LOyHJDuiQkpNTbVKLO7Wr18/2rRpw/DhwwkMDKR///4sWbKkSP9pVq5cuUidkWvVqmW1rtFoqFmzZqH6qzyIK1euEBISkuf7Ua9ePcv+O1WtWjXPOXx8fEhMTLzvdWrVqoWDg/V/OwVdpzAuX77Mxx9/zJQpU+47Z4yLi0uePh0AmZmZlv25XnjhBaKioti+fTsAGzduJD4+3moI/JUrVwgODs5z3Tp16hS5HgW5++c0IyODCRMmWPpW+fv7U6lSJZKSkkhOTraUmzRpEklJSdSuXZtGjRoxduxYjh49muf8zs7OeR4RFuazLAl3/xx5eXnh7OyMv79/nu13xnPu3DlOnDhBpUqVrJbatWsDOf3CoGTuYWE/ZDSWqHCuXr1KcnIyNWvWLLCMi4sLf/75J1u2bOGPP/5g7dq1/PLLL3Ts2JH169fj6Oh43+vc+cuzpBQ08aHJZCpUTCWhoOsod3VmLgsTJkygcuXKdOjQwZIUxsXFAXD9+nUuX75M1apVcXBwIDg4mGvXruU5R2xsLAAhISGWbV26dCEwMJBFixbRrl07Fi1aRFBQEJGRkaVfqb8ZDAbOnj1Lw4YNLdtef/115s+fz6hRo4iIiMDLywuNRkP//v2tfom3a9eOCxcusGLFCtavX8+3337LzJkzmTt3bp4WFbXkd+3C/GyZzWYaNWrEjBkz8i0bGhoKlMw9LOyHtOyICid3jpA7R9Xkx8HBgU6dOjFjxgxOnjzJlClT2Lx5s6WZvKRnXL77kYOiKJw/f95q5JSPj0++o33ubhUpSmxhYWHExMTkeax3+vRpy/6SEBYWxrlz5/L8Zf0g14mKiuL8+fNUr16d8PBwwsPDLY/JXn31VcLDw0lJSQGgadOmnD171rKea8+ePZb9uRwdHXn++edZtmwZiYmJ/Pbbbzz33HNWvyDDwsKIjY0lNTXV6nxnzpwpcj3ys2zZMjIyMqx+TpctW8bgwYP59NNPeeaZZ3j88cdp27Ztvj8Tvr6+DB06lJ9//pno6GgaN25sFzMZ16hRg1u3btGpUyciIyPzLHe2rN3vHhYVhyQ7okLZvHkzH3zwAeHh4QwYMKDAcrdu3cqzLfeXYe6jkNy+GyUx1Bjg+++/t0o4li1bRmxsLN26dbNsq1GjBrt37yY7O9uybdWqVXmGqBcltu7du2MymayGOAPMnDkTjUZjdf0H0b17d+Li4vjll18s24xGI1988QXu7u60b9++yOecPHkyy5cvt1o++OADAMaNG8fy5cst34tnnnkGk8lkNdIoKyuL+fPn06pVK0uLQK5BgwaRmJjIP/7xD1JTU/PMIdO9e3eMRiNz5syxbDOZTHzxxRdFrsfdjhw5wqhRo/Dx8WHkyJGW7Y6Ojnla0L744os8Q8XvHhnn7u5OzZo1832MV9707duXa9eu8c033+TZl5GRQVpaGlC4e1hUHPIYS9itNWvWcPr0aYxGI/Hx8WzevJkNGzYQFhbGypUr7znZ2aRJk/jzzz/p0aMHYWFhJCQk8OWXX1KlShXLTLs1atTA29ubuXPn4uHhgZubG61atSI8PLxY8fr6+tK2bVuGDh1KfHw8s2bNombNmrz00kuWMsOHD2fZsmV07dqVvn37cuHCBRYtWmTVYbiosfXs2ZPHHnuM//znP1y+fJkmTZqwfv16VqxYwahRo/Kcu7hefvllvvrqK4YMGcKBAweoVq0ay5YtY8eOHcyaNeuefagKkt+sx7kdUx9++GF69+5t2d6qVSueffZZxo8fT0JCAjVr1mThwoVcvnyZefPm5TnPQw89RMOGDS0dYps1a2a1v2fPnrRp04Z//etfXL58mfr16/Prr79a9Z0pjO3bt5OZmYnJZOLmzZvs2LGDlStX4uXlxfLlywkKCrKUfeKJJ/jhhx/w8vKifv367Nq1i40bN+Ln52d1zvr169OhQweaN2+Or68v+/fvZ9myZbz22mtFis0WDRo0iCVLlvDKK6+wZcsW2rRpg8lk4vTp0yxZsoR169bRokWLQt3DogJRcSSYEKUid+h57uLk5KQEBQUpjz/+uPLZZ59ZDXHOdffQ802bNim9evVSQkJCFCcnJyUkJER57rnnlLNnz1odt2LFCqV+/fqKVqu1Gm7cvn17pUGDBvnGV9DQ859//lkZP368EhAQoLi4uCg9evRQrly5kuf4Tz/9VKlcubKi1+uVNm3aKPv3789zznvFdvfQc0VRlNu3byujR49WQkJCFJ1Op9SqVUv5+OOPFbPZbFUOUEaOHJknpoKGxN8tPj5eGTp0qOLv7684OTkpjRo1yneIdlGGnt/tXkO6MzIylLfeeksJCgpS9Hq98vDDDytr164t8FzTp09XAOXDDz/Md//NmzeVQYMGKZ6enoqXl5cyaNAg5dChQ0Uaep676HQ6pVKlSkq7du2UKVOmKAkJCXmOSUxMtHz/3N3dlS5duiinT5/O8/2fPHmy0rJlS8Xb21txcXFR6tatq0yZMkXJzs62lBk8eLDi5uaW5xp33wuFUZyh53cPCS8onvzupezsbOWjjz5SGjRooOj1esXHx0dp3ry58v777yvJycmKohT+HhYVg0ZRVOhVKIQQ5cBnn33G6NGjLR2dhRDlkyQ7QgiRD0VRaNKkCX5+ftKhVYhyTvrsCCHEHdLS0li5ciVbtmzh2LFjrFixQu2QhBAPSFp2hBDiDpcvXyY8PBxvb29effVVpkyZonZIQogHJMmOEEIIIeyazLMjhBBCCLsmyY4QQggh7Jp0UCbnXSsxMTF4eHiU+CsAhBBCCFE6FEXh9u3bhISE5HnJ8J0k2QFiYmLyTBUvhBBCiPIhOjqaKlWqFLhfkh2wTFMfHR2Np6enytEIIYQQojBSUlIIDQ297+tmJNnh/98Q7enpKcmOEEIIUc7crwuKdFAWQgghhF2TZEcIIYQQdk2SHSGEEELYNUl2hBBCCGHXJNkRQgghhF2TZEcIIYQQdk2SHSGEEELYNUl2hBBCCGHXJNkRQgghhF2TZEcIIYQQdk2SHSGEEELYNUl2hBBCCGHXJNkRQgghhF2TZEcIIYQQdk2rdgBCFIfBYMBoNBaqrFarRafTlXJEQgghbJUkO6LcMRgMhIaFEh8bX6jygcGBRF+JloRHCCEqKEl2RLljNBqJj41n3IpxaPX3/hE2ZhmZ3ms6RqNRkh0hhKigJNkR5ZZWr0WnlwRGCCHEvUkHZSGEEELYNUl2hBBCCGHXJNkRQgghhF2TZEcIIYQQdk2SHSGEEELYNUl2hBBCCGHXJNkRQgghhF2TZEcIIYQQdk31ZOfatWsMHDgQPz8/XFxcaNSoEfv377fsVxSFCRMmEBwcjIuLC5GRkZw7d87qHLdu3WLAgAF4enri7e3NsGHDSE1NLeuqCCGEEMIGqZrsJCYm0qZNG3Q6HWvWrOHkyZN8+umn+Pj4WMpMnz6dzz//nLlz57Jnzx7c3Nzo0qULmZmZljIDBgzgxIkTbNiwgVWrVvHnn3/y8ssvq1ElIYQQQtgYVV8X8dFHHxEaGsr8+fMt28LDwy1fK4rCrFmzeOedd+jVqxcA33//PYGBgfz222/079+fU6dOsXbtWvbt20eLFi0A+OKLL+jevTuffPIJISEhZVspIYQQQtgUVVt2Vq5cSYsWLXj22WcJCAjgoYce4ptvvrHsv3TpEnFxcURGRlq2eXl50apVK3bt2gXArl278Pb2tiQ6AJGRkTg4OLBnz558r5uVlUVKSorVIoQQQgj7pGqyc/HiRebMmUOtWrVYt24dI0aM4I033mDhwoUAxMXFARAYGGh1XGBgoGVfXFwcAQEBVvu1Wi2+vr6WMnebOnUqXl5eliU0NLSkqyaEEEIIG6HqYyyz2UyLFi348MMPAXjooYc4fvw4c+fOZfDgwaV23fHjxzNmzBjLekpKiiQ8pchgMGA0Gu9bTqvVotPJW8yFEEKULFVbdoKDg6lfv77Vtnr16hEVFQVAUFAQAPHx8VZl4uPjLfuCgoJISEiw2m80Grl165alzN30ej2enp5WiygdBoOB0LBQXF1d77uEhoViMBjUDlkIIYSdUbVlp02bNpw5c8Zq29mzZwkLCwNyOisHBQWxadMmmjZtCuS0wuzZs4cRI0YAEBERQVJSEgcOHKB58+YAbN68GbPZTKtWrcquMiJfRqOR+Nh4xq0Yh1Zf8I+bMcvI9F7TMRqN0rojhBCiRKma7IwePZpHHnmEDz/8kL59+7J3716+/vprvv76awA0Gg2jRo1i8uTJ1KpVi/DwcN59911CQkLo3bs3kNMS1LVrV1566SXmzp2LwWDgtddeo3///jISy4Zo9Vp0eklihBBClD1Vk52HH36Y5cuXM378eCZNmkR4eDizZs1iwIABljLjxo0jLS2Nl19+maSkJNq2bcvatWtxdna2lPnxxx957bXX6NSpEw4ODvTp04fPP/9cjSoJIYQQwsaomuwAPPHEEzzxxBMF7tdoNEyaNIlJkyYVWMbX15effvqpNMITQgghRDmn+usihBBCCCFKk+otO0IURFEUNl3axE/HfsJV50qLkBZ0DO9IJadKaocmhBCiHJFkR9ikXdG7GLpiKGduWo/W0zvqmfn4TJWiEkIIUR5JsiNszpG4I3T7sRvJWcl4OHkwsPFAXHWubL28lQOxB3h17avwJJjMJnTICC8hhBD3JsmOsCkXEi/Q5acuJGcl07ZqW/54/g889TmTPpoVM9P+msa7W97F3MzMxisbeaJuwZ3bhRBCCJAOysKWaOD5354nPi2eJoFN+P253y2JDoCDxoF/P/pvfuz1IwAH4g9wPOG4WtEKIYQoJyTZEbbjITh2/Rg+zj6sHbgWb2fvfIv1qt0L/sz5euWZlVxPu152MQohhCh3JNkRNiHLlAUdc76e0H4CQe75v9fMYiuEeYZhMBtYdXYViqKUeoxCCCHKJ0l2hE3YHbMb3KGGdw1effjV+x9ghp41eqJ10BKVEsWpG6dKP0ghhBDlkiQ7QnXphnT2xO4BYMIjEzBlm8jIyLjnAuCp9+SRKo8AsPHiRoxmo2p1EEIIYbsk2RGqOxJ3JCdRiYXBLQfj6up6z8XPzw8Ak8lEm6ptcHdyJzEzkb3X9qpcEyGEELZIhp4LVSmKwoHYAzkr+2H0stG4uLvc85iMlAxm9p2J2WzG2dGZjuEdWXlmJX9F/UWLkBY4OTqVQeRCCCHKC2nZEaq6knyFmxk30Tno4Bho9Vp0et09F63eOkdvEtgEH2cfMowZHIk7olJNhBBC2CpJdoSqclt16vnUg+zincNB40DrKq0B2HV1F2bFXFLhCSGEsAOS7AjVpBvSOXU9ZxRVE/8mD3SupkFNcdG6kJiZyJkbZ+5/gBBCiApDkh2hmhPXT2BSTAS7BxPkep95de7DydGJFiEtANh5dWdJhCeEEMJOSLIjVJPbAtOgUoMSOV/Lyi1x1DhyNeUqMbdjSuScQgghyj9JdoQqMo2ZXEq6BEBd/7olck53J3fqV6oPwMHYgyVyTiGEEOWfJDtCFeduncOsmPF39cfP1a/EzvtQ0EMAHE84jsFkKLHzCiGEKL8k2RGqyH2EVdevZFp1clXzroa3szdZpix5hYQQQghAkh2hAqPZyLlb5wCo41+nRM+t0WhoGtQUgEOxh0r03EIIIconSXZEmbucdJlsUzbuTu5U9qhc4udvGtg05zrJl0nMTCzx8wshhChfJNkRZe7MzZxHWHX86qDRaEr8/F7OXtTwqQHA8RvHS/z8QgghyhdJdkSZu5SYMwqrlm+tUrtGo4BGAJy8ebLUriGEEKJ8kBeBijKVkpXCzYybaNAQ5h1Watep418Hx7OO3My4CQGQkZFRqOO0Wi06na7U4hJCCFH2JNkRZepy0mUAgj2CcdY6l9p1nLXO1PStmfPIrCH4+RVueHtgcCDRV6Il4RFCCDsiyY4oU7kTCVbzrlbq12oQ0CAn2WkAo0aMwtXD9Z7ljVlGpveajtFolGRHCCHsiCQ7okzltuyEe4eX+rXq+NVBq9Fi9DNyy3wLL71XqV9TCCGE7ZEOyqLMJGYkkpSZhIPGgapeVUv9ek6OTlT3qg7A6VunS/16QgghbJMkO6LM5D7CquxRGSdHpzK5Zl3vnBmazyWdQ1GUMrmmEEII2yLJjigzZfkIK1e4ZzgYITErkRvpN8rsukIIIWyHJDuiTCiKYkl2yqJzci4nRyfIaVCyTGYohBCiYpFkR5SJ29m3uZ19Gw0aKnuW/Csi7unv7jq5Lx8VQghRsUiyI8rE1dSrAAS5B5VZfx2Ls3/HcPsqqdmpZXttIYQQqpNkR5SJa7evAVDFs0rZX/w2BLkGAfIoSwghKiJJdkSZiEmNAVRKdoCa3jUBeZQlhBAVkSQ7ovQ5QlxaHKB+snMx8SIGk0GVGIQQQqhDkh1R+oLBpJhw1bni4+yjSgj+zv546b0wKSbLqDAhhBAVgyQ7ovT93ZhTxbMKGo1GlRA0Gg01fXNad87dOqdKDEIIIdQhyY4ofaE5/6j1CCtXLd9aAJy/dV5mUxZCiApEkh1R+nJbdjzUTXbCfcJx1DiSmJnIzYybqsYihBCi7EiyI0pVzO0Y8EKdyQTv4uToRJhXGJDTuiOEEKJikGRHlKpD8YcA8HfxL/vJBPMh/XaEEKLikWRHlKpDcTnJTpBbkMqR5Kjll9Nv50rSFbJN2SpHI4QQoixIsiNK1eH4w4DtJDt+Ln54O3vLEHQhhKhAVE123nvvPTQajdVSt25dy/7MzExGjhyJn58f7u7u9OnTh/j4eKtzREVF0aNHD1xdXQkICGDs2LEYjcayroooQO5jrCB320h2NBoN1X2qAzkTDAohhLB/qrfsNGjQgNjYWMvy119/WfaNHj2a33//naVLl7Jt2zZiYmJ4+umnLftNJhM9evQgOzubnTt3snDhQhYsWMCECRPUqIq4S1xqHLGpsaBAoGug2uFYSLIjhBAVi1b1ALRagoLy/tWfnJzMvHnz+Omnn+jYsSMA8+fPp169euzevZvWrVuzfv16Tp48ycaNGwkMDKRp06Z88MEHvP3227z33ns4OanfIbYiOxh7MOeLG9hE5+Rc4d7hAFxPv87trNt46D1UjkgIIURpUr1l59y5c4SEhFC9enUGDBhAVFQUAAcOHMBgMBAZGWkpW7duXapWrcquXbsA2LVrF40aNSIw8P9bDbp06UJKSgonTpwo8JpZWVmkpKRYLaLkWZKdWHXjuJurzpVg92AALiZJ644QQtg7VZOdVq1asWDBAtauXcucOXO4dOkSjz76KLdv3yYuLg4nJye8vb2tjgkMDCQuLuelknFxcVaJTu7+3H0FmTp1Kl5eXpYlNDS0ZCsmADgQeyDnixh148hP7qOsS4mXVI5ECCFEaVP1MVa3bt0sXzdu3JhWrVoRFhbGkiVLcHFxKbXrjh8/njFjxljWU1JSJOEpBbbasgM5yc6O6B1cSLyAoiiqvbNLCCFE6VO9z86dvL29qV27NufPn+fxxx8nOzubpKQkq9ad+Ph4Sx+foKAg9u7da3WO3NFa+fUDyqXX69Hr9SVfgQrEYDDcc9TbjfQbRCXnPJKk4EY21VT1qorWQUtqdirX068T4BagdkhCCCFKiep9du6UmprKhQsXCA4Opnnz5uh0OjZt2mTZf+bMGaKiooiIiAAgIiKCY8eOkZCQYCmzYcMGPD09qV+/fpnHX1EYDAZCw0JxdXUtcKnaqmpO4ZtAVs7IOVuiddBaXh0ho7KEEMK+qdqy89Zbb9GzZ0/CwsKIiYlh4sSJODo68txzz+Hl5cWwYcMYM2YMvr6+eHp68vrrrxMREUHr1q0B6Ny5M/Xr12fQoEFMnz6duLg43nnnHUaOHCktN6XIaDQSHxvPuBXj0Orz/xHadW0XW6K3UDu8Nmc5i9lsLuMo7y/cJ5wLiRe4mHiR1lVaqx2OEEKIUqJqsnP16lWee+45bt68SaVKlWjbti27d++mUqVKAMycORMHBwf69OlDVlYWXbp04csvv7Qc7+joyKpVqxgxYgQRERG4ubkxePBgJk2apFaVKhStXotOr8t3342sGwAEugVylrNlGVah1fCpwUY2cjnpMiazbbU8CSGEKDmqJjuLFy++535nZ2dmz57N7NmzCywTFhbG6tWrSzo08YDi03L6TlVyqaRyJAULdAvEVedKuiGdqylXCXEJUTskIYQQpcCm+uwI+2A0G7mRntOyE+Biux1/NRoN1b1lNmUhhLB3kuyIEncj/QZmxYyz1hl3nbva4dyT5dURMrmgEELYLUl2RImLT815hBXoFmjz89fkJjvXUq6RacxUORohhBClQZIdUeLi0nIm1gl0t52XfxbEy9kLPxc/FBSiUqLUDkcIIUQpkGRHlLiE1Jx5jwLdbD/ZgTteHZEsr44QQgh7JMmOKHG5I7Ek2RFCCGELJNkRJSo1O5U0QxoaNOXmFQzVvKuhQcOtzFvgqXY0QgghSpokO6JE5XZO9nXxReeY/4SDtsZZ60yIx99z7ISrG4sQQoiSJ8mOKFGWR1jloHPyncK9/85yqqsbhxBCiJInyY4oUXcOOy9PcvvtUB0URVE3GCGEECVKkh1RohLSc0ZilZf+OrlCvULRarTgAWdunVE7HCGEECVIkh1RYsyKmetp14Hyl+xoHbRU8awCwJbLW1SORgghREmSZEeUmMSMREyKCa2DFh9nH7XDKbJqntUA2HJFkh0hhLAnkuyIEpP7CKuSayWbf01Efqp5VQNge/R2jGajusEIIYQoMZLsiBKTkFY+++vkCnILggxIzkrmQMwBtcMRQghRQiTZESUmt79OJddKKkdSPA4aB7ic8/WmS5tUjUUIIUTJkWRHlJjy3rIDwMWcfzZe3KhuHEIIIUqMJDuiRJjMJm5m3ASgklv5bNkBLMnOjugdpBvS1Y1FCCFEiZBkR5SImxk3MStmnByd8NJ7qR1O8d2EEPcQsk3Z7IjaoXY0QgghSoAkO6JE3NlfpzyOxLpTx2odAem3I4QQ9kKSHVEi7KK/zt86hHUAJNkRQgh7IcmOKBHX0/9u2SnP/XX+1qFqBwAOxBzgVsYtdYMRQgjxwCTZESXC0rLjWv5bdkI8QqjnXw8Fhc2XNqsdjhBCiAckyY54YEaz0dICYg8tOwCda3QGYP2F9SpHIoQQ4kFJsiMe2K2MWygoODk64eHkoXY4JeLOZEdRFJWjEUII8SAk2REP7Eb6DQD8Xf3L/UisXO3D2uPk6MSV5Cucu3VO7XCEEEI8AEl2xAPLTXbK62si8uPm5Ebbqm0BWHd+ncrRCCGEeBCS7IgHlpvs+Ln6qRxJyepc/e9HWRel344QQpRnkuyIB2aPLTvw//12tlzaQrYpW+VohBBCFJckO+KBKIpi1WfHnjQJakKAWwBphjR2Ru9UOxwhhBDFJMmOeCApWSkYzAYcNA74OPuoHU6JctA48Hj1xwHptyOEEOWZJDvigeS26vi6+OLo4KhyNCWva82uAKw+v1rlSIQQQhSXJDvigVgeYbnY1yOsXF1rdkWDhqPxR7maclXtcIQQQhSDJDvigeS+E8ve+uvk8nf1p1WVVgCsObdG5WiEEEIUhyQ74oHcTL8J2G+yA9CjVg8A/jj3h8qRCCGEKA5JdsQDsfeWHYDutboDsPHiRrKMWSpHI4QQoqgk2RHFlmHMIM2QBth3svNQ0EMEuweTZkhje9R2tcMRQghRRJLsiGLLfdO5h5MHeq1e5WhKj0ajoVvNbgD8cVYeZQkhRHkjyY4othsZ9jmZYH561M7pt/P72d/lLehCCFHOSLIjiu1mhv13Ts7VuUZn9I56LiRe4MT1E2qHI4QQoggk2RHFdjOz4iQ77k7uPF4jZzbl5aeWqxyNEEKIopBkRxRbbsuOvb0AtCBP1X0KgN/O/KZuIEIIIYpEkh1RPI6QmJkIVIyWHYCetXvioHHgYOxBriRdUTscIYQQhSTJjigeX1BQcHJ0wt3JXe1oykQlt0q0rdoWgBVnVqgcjRBCiMKSZEcUz99Priq5VkKj0agbSxnKfZS1/LT02xFCiPLCZpKdadOmodFoGDVqlGVbZmYmI0eOxM/PD3d3d/r06UN8fLzVcVFRUfTo0QNXV1cCAgIYO3YsRqOxjKOvgP5+clVRHmHl6l23NwB/XvmThLQEdYMRQghRKDaR7Ozbt4+vvvqKxo0bW20fPXo0v//+O0uXLmXbtm3ExMTw9NNPW/abTCZ69OhBdnY2O3fuZOHChSxYsIAJEyaUdRUqngqa7FTzrkaLkBaYFTPLTi5TOxwhhBCFoHqyk5qayoABA/jmm2/w8fGxbE9OTmbevHnMmDGDjh070rx5c+bPn8/OnTvZvXs3AOvXr+fkyZMsWrSIpk2b0q1bNz744ANmz55Ndna2WlWqGCposgPwXMPnAPj5+M8qRyKEEKIwVE92Ro4cSY8ePYiMjLTafuDAAQwGg9X2unXrUrVqVXbt2gXArl27aNSoEYGBgZYyXbp0ISUlhRMnCp74LSsri5SUFKtFFJ5ZMVfoZKdfg35o0PBX1F9EJUepHY4QQoj7UDXZWbx4MQcPHmTq1Kl59sXFxeHk5IS3t7fV9sDAQOLi4ixl7kx0cvfn7ivI1KlT8fLysiyhoaEPWJOK5drta+AEDhoHfJx97n+AnansWZl2Ye0AWHx8scrRCCGEuB/Vkp3o6GjefPNNfvzxR5ydncv02uPHjyc5OdmyREdHl+n1y7szN88A4OPsg6ODo8rRqOP5Rs8D8ihLCCHKA9WSnQMHDpCQkECzZs3QarVotVq2bdvG559/jlarJTAwkOzsbJKSkqyOi4+PJygoCICgoKA8o7Ny13PL5Eev1+Pp6Wm1iMLLTXb8nP1UjkQ9fer1Qeug5XDcYU5dP6V2OEIIIe5BtWSnU6dOHDt2jMOHD1uWFi1aMGDAAMvXOp2OTZs2WY45c+YMUVFRREREABAREcGxY8dISPj/IcAbNmzA09OT+vXrl3mdKoozt3KSHX+XitdfJ5efqx9da3YFYMHhBeoGI4QQ4p60al3Yw8ODhg0bWm1zc3PDz8/Psn3YsGGMGTMGX19fPD09ef3114mIiKB169YAdO7cmfr16zNo0CCmT59OXFwc77zzDiNHjkSv15d5nSoKS8uOS8Vt2QEY9tAwVp1dxYIjC5jccTI6R53aIQkhhMiH6qOx7mXmzJk88cQT9OnTh3bt2hEUFMSvv/5q2e/o6MiqVatwdHQkIiKCgQMH8sILLzBp0iQVo7Z/uS07FT3Z6VGrB4FugSSkJbDq7Cq1wxFCCFEA1Vp28rN161ardWdnZ2bPns3s2bMLPCYsLIzVq1eXcmQiV2JGomXm4Iqe7OgcdQxtOpRpO6bxzcFveKreU2qHJIQQIh/Fatm5ePFiScchyonTN07nfJECekd5VPjiQy8CsPb8WqKTZVSfEELYomIlOzVr1uSxxx5j0aJFZGZmlnRMwoZZkp3r6sZhK2r51aJDtQ4oKHx78Fu1wxFCCJGPYiU7Bw8epHHjxowZM4agoCD+8Y9/sHfv3pKOTdigUzf+HmZ9Q904bMkrzV8BYO6BuWQaJfkXQghbU6xkp2nTpnz22WfExMTw3XffERsbS9u2bWnYsCEzZszg+nX5s99eWVp2JNmxeLre04R6hpKQlsCPR39UOxwhhBB3eaDRWFqtlqeffpqlS5fy0Ucfcf78ed566y1CQ0N54YUXiI2NLak4hY2Qlp28dI463mz1JgAzds9AURSVIxJCCHGnB0p29u/fz6uvvkpwcDAzZszgrbfe4sKFC2zYsIGYmBh69epVUnEKG5BlzOJi4t+d06XxzsrwZsPxcPLg5PWTrLuwTu1whBBC3KFYyc6MGTNo1KgRjzzyCDExMXz//fdcuXKFyZMnEx4ezqOPPsqCBQs4ePBgSccrVHT+1nnMihlPJ09IVTsadRkMBjIyMiyLk+LEkMZDAPho+0dW+wwGg7rBCiFEBVeseXbmzJnDiy++yJAhQwgODs63TEBAAPPmzXug4IRtyX2EVcevDvvYp3I06jEYDISGhRIfa/1eNryAN2Br1FZc67pCVM7mwOBAoq9Eo9PJDMtCCKGGYiU7586du28ZJycnBg8eXJzTCxuV2zm5oic7RqOR+Nh4xq0Yh1ZvfQutubiGQwmHCH0zlIH1B2LKNjG913SMRqMkO0IIoZJiPcaaP38+S5cuzbN96dKlLFy48IGDErbpzpYdAVq9Fp1eZ7W0D2+Po8aR6NvRXM24micZEkIIUfaKlexMnToVf/+8b7wOCAjgww8/fOCghG3Kbdmp7Vtb5Uhsl5ezF81DmgOw5dIWGZklhBA2oFjJTlRUFOHh4Xm2h4WFERUV9cBBCdtjVsz//xjLV1p27uXRqo+iddBy9fZVTt86rXY4QghR4RUr2QkICODo0aN5th85cgQ/v4r9ckh7dTXlKumGdHQOOsK98ya64v+5O7nTJrQNAJuubAIdVqOz7rXIyC0hhCh5xepQ8Nxzz/HGG2/g4eFBu3btANi2bRtvvvkm/fv3L9EAhW04dT2nv05N35roHKWj7f20CW3D4bjDJGclQxsK/UeAjNwSQoiSV6xk54MPPuDy5ct06tQJrTbnFGazmRdeeEH67Nip3EdY9SrVUzmS8kHnqKNzjc4sPbkU2sCLL79IkG/QPY8xZhll5JYQQpSCYiU7Tk5O/PLLL3zwwQccOXIEFxcXGjVqRFhYWEnHJ2xEbrJT16+uypGUvoyMjAfan6uefz2qulclKjWKTbGbGBw0GI1GUxIhCiGEKIIHGhdbu3ZtateWkTkVQe6wc3tu2TEZTaAp/CMnk8mEjoJbYDQaDY+HPs68o/O4cvsKh+IO0Sy4WUmFK4QQopCKleyYTCYWLFjApk2bSEhIwGw2W+3fvHlziQQnbIelZcffflt2zCYzKDB62Whc3F0KLJeRksHMvjPz/Nznx9fZF7YAnWH9hfXU9K2Jp96zBKMWQghxP8VKdt58800WLFhAjx49aNiwoTTN27nEjETi03JejVDXvy6YVA6olOVOFlgQg76II6Z2QfBTwcSmxbLizAoGNhoo94wQQpShYiU7ixcvZsmSJXTv3r2k4xE2KLdVp4pnFdyd3AvdZ0X8TYFuYd34/vT3XEy8yI7oHbSt2lbtqIQQosIo1jw7Tk5O1KxZs6RjETbK0l/H337765Q2Pxc/utfM+eNg86XNRCdHqxyREEJUHMVKdv75z3/y2WefyVT4FURF6K9TFpoGNaVRQCMUFP536n9kGKSFTAghykKxHmP99ddfbNmyhTVr1tCgQYM8c4L8+uuvJRKcsA25LTuS7DwYjUZDj1o9uHb7GrcybrHyzEr6Nugr/XeEEKKUFSvZ8fb25qmnnirpWISNskwoKI+xHpheq+eZes8w79A8Tt88zd6YvbSq3ErtsIQQwq4VK9mZP39+ScchbFSWMYuLiRcBadkpKcEewTxe/XHWXljLhgsbCPUMJcQjRO2whBDCbhWrzw6A0Whk48aNfPXVV9y+fRuAmJgYUlNTSyw4ob5zt85hVsx46b0Icr/36w5E4bWs3JK6fnUxKSaWnFgi/XeEEKIUFSvZuXLlCo0aNaJXr16MHDmS69evA/DRRx/x1ltvlWiAQl13dk6WviUlR6PR0KtuL3ycfUjOSmb56eXS4V8IIUpJsZKdN998kxYtWpCYmIiLy//PNPvUU0+xadOmEgtOqC/3bef2/JoItThrnenboC9aBy3nbp1jZ8xOtUMSQgi7VKw+O9u3b2fnzp04OTlZba9WrRrXrl0rkcCEbTh9s+K8AFQNQe5BdK/ZnZVnV/Jn9J8QrnZEQghhf4rVsmM2mzGZ8r4z4OrVq3h4eDxwUMJ2SMtO6Xso+CGaBjVFQYFn4Npt+YNBCCFKUrGSnc6dOzNr1izLukajITU1lYkTJ8orJOyIWTFz5uYZQEZilbbuNbsT6BoIbjBo5SAMpiK+f0sIIUSBipXsfPrpp+zYsYP69euTmZnJ888/b3mE9dFHH5V0jEIlV1Oukm5IR+ego7pPdbXDsWs6Rx1P134aMmH3td2M2zBO7ZCEEMJuFKvPTpUqVThy5AiLFy/m6NGjpKamMmzYMAYMGGDVYVmUb7mPsGr51ULrUKwfFVEEPs4+sBx4DmbtmcUjoY/wbINn1Q5LCCHKvWL/BtNqtQwcOLAkYxE2RmZOVsEZGNNyDDP2zuDFlS/SOLAxdfzrqB2VEEKUa8VKdr7//vt77n/hhReKFYywLfJOLHW81+49DsQfYNuVbfRZ0oc9w/fg5uSWp5zBYMBoNN73fFqtNs/764QQoiIpVrLz5ptvWq0bDAbS09NxcnLC1dVVkh07IW87V4fWQcviZxbz0FcPceL6CV754xW+7/291aSOBoOB0LBQ4mPj73u+wOBAoq9ES8IjhKiwipXsJCYm5tl27tw5RowYwdixYx84KGEbclt25DFW2QtyD+KXZ36h48KOLDq6iDahbXilxSuW/UajkfjYeMatGIdWX/BtbMwyMr3XdIxGoyQ7QogKq9jvxrpbrVq1mDZtWp5WH1E+3cq4RUJaAoD0GVFJu7B2TO00FYA3177J/pj9ecpo9Vp0el2By70SISGEqChKLNmBnL4BMTExJXlKoZLcR1hVPKvg7uSucjQV11uPvEXvur3JNmXzzJJnuJl+U+2QhBCi3CnWn30rV660WlcUhdjYWP773//Spk2bEglMqMsyc7I8wlKVRqNhfq/5HIs/xoXECwxaPohVz69SOywhhChXipXs9O7d22pdo9FQqVIlOnbsyKeffloScQmVSX8d2+Ht7M3/+v6P1vNas+b8Gib/OZmxLaVvnBBCFFaxkh2z2VzScQgbY0l25J1YNqFJUBPm9pjLkBVDeG/rezTxb6J2SEIIUW6UaJ8dYT/kMZbtGdx0MP9o/g8UFF5c9SJ4qx2REEKUD8Vq2RkzZkyhy86YMaM4lxAqyjBkcDnpMgD1K9VXNxhh5bOun3Eg9kDOyKy+YDQb0SFDyoUQ4l6KlewcOnSIQ4cOYTAYqFMnZ1jy2bNncXR0pFmzZpZyd06CJsqPMzfPoKDg5+JHJbdKaocj7qDX6ln27DKafdWMWyG3WH95Pb3q9VI7LCGEsGnFeozVs2dP2rVrx9WrVzl48CAHDx4kOjqaxx57jCeeeIItW7awZcsWNm/efM/zzJkzh8aNG+Pp6YmnpycRERGsWbPGsj8zM5ORI0fi5+eHu7s7ffr0IT7eesbYqKgoevTogaurKwEBAYwdO7ZQU+iLglkeYUl/HZsU5h3Ggp4LQIHDCYfZd22f2iEJIYRNK1ay8+mnnzJ16lR8fHws23x8fJg8eXKRRmNVqVKFadOmceDAAfbv30/Hjh3p1asXJ06cAGD06NH8/vvvLF26lG3bthETE8PTTz9tOd5kMtGjRw+ys7PZuXMnCxcuZMGCBUyYMKE41RJ/k5FYti8yPBI25ny95vwaLiZeVDcgIYSwYcVKdlJSUrh+/Xqe7devX+f27duFPk/Pnj3p3r07tWrVonbt2kyZMgV3d3d2795NcnIy8+bNY8aMGXTs2JHmzZszf/58du7cye7duwFYv349J0+eZNGiRTRt2pRu3brxwQcfMHv2bLKzs4tTNYEkO+XGDmjo3xAFhaUnl8qEg0IIUYBiJTtPPfUUQ4cO5ddff+Xq1atcvXqV//3vfwwbNsyq5aUoTCYTixcvJi0tjYiICA4cOIDBYCAyMtJSpm7dulStWpVdu3YBsGvXLho1akRgYKClTJcuXUhJSbG0DuUnKyuLlJQUq0XkvFwyIyODkwknAajuWZ2MjIx8F2EbulfvThWPKmQaM/n5+M9kGOSzEUKIuxUr2Zk7dy7dunXj+eefJywsjLCwMJ5//nm6du3Kl19+WaRzHTt2DHd3d/R6Pa+88grLly+nfv36xMXF4eTkhLe3t1X5wMBA4uLiAIiLi7NKdHL35+4ryNSpU/Hy8rIsoaGhRYrZHuW+RdvV3ZWT8TnJTu82vXF1dc2z+Pn5ATkJqlCX1kFLv4b98NR7cjPjJstOLsOsyDxYQghxp2KNxnJ1deXLL7/k448/5sKFCwDUqFEDNze3Ip+rTp06HD58mOTkZJYtW8bgwYPZtm1bccIqtPHjx1sNn09JSanwCU/uW7SH/zKcb099i85Bx1uL38p3RF1GSgYz+86UySVthLuTO881fI7vDn3HxaSLrD63mh61ehRrNKTBYCh0B3+tVitvUhdClAsP9Erk2NhYYmNjadeuHS4uLiiKUuT/YJ2cnKhZsyYAzZs3Z9++fXz22Wf069eP7OxskpKSrFp34uPjCQoKAiAoKIi9e/danS93tFZumfzo9Xr0en2R4qwoEk2JAPi7+uPk7JRvGYPeUJYhiUIIcg/i6XpP88uJXzgQewBvZ2/aVm1bpHPktu7Fx8bfvzAQGBxI9JVoSXiEEDavWMnOzZs36du3L1u2bEGj0XDu3DmqV6/OsGHD8PHxeaD3Y5nNZrKysmjevDk6nY5NmzbRp08fAM6cOUNUVBQREREAREREMGXKFBISEggICABgw4YNeHp6Ur++TIZXHDczcjq5+rv6qxyJKKq6/nXpWqMray+sZdOlTXjqPannXfhO5rmte+NWjEOrv/d/DcYsI9N7TcdoNEqyI4SwecXqszN69Gh0Oh1RUVG4urpatvfr14+1a9cW+jzjx4/nzz//5PLlyxw7dozx48ezdetWBgwYgJeXF8OGDWPMmDFs2bKFAwcOMHToUCIiImjdujUAnTt3pn79+gwaNIgjR46wbt063nnnHUaOHCktN8V0I+MGIMlOedWqSisiquT8MbDizAouJ18u8jm0ei06ve6ey/2SISGEsCXF+h9r/fr1rFu3jipVqlhtr1WrFleuXCn0eRISEnjhhReIjY3Fy8uLxo0bs27dOh5//HEAZs6ciYODA3369CErK4suXbpYdYB2dHRk1apVjBgxgoiICNzc3Bg8eDCTJk0qTrUE/9+yU8lVZk4urx6v/jgpWSmcuH6C/539HwSoHZEQQqirWMlOWlqaVYtOrlu3bhWpRWXevHn33O/s7Mzs2bOZPXt2gWXCwsJYvXp1oa8p7k0eY5V/Go2G3nV7czv7NlHJUTAArt6+Si2XWmqHJoQQqijWY6xHH32U77//3rKu0Wgwm81Mnz6dxx57rMSCE2XME7LN2ThoHPB18VU7GvEAtA5a+jfoj5+zH3hBn2V9SM5MVjssIYRQRbFadqZPn06nTp3Yv38/2dnZjBs3jhMnTnDr1i127NhR0jGKsvL3kytfF18cHRzVjUU8MBedC/3q9uPL7V9yjGP0WdKH1QNW4+SY/yg7IYSwV8Vq2WnYsCFnz56lbdu29OrVi7S0NJ5++mkOHTpEjRo1SjpGUVb+fnIlj7Dsh7ezN/wEbjo3Nl3axEu/v4SiKGqHJYQQZarILTsGg4GuXbsyd+5c/vOf/5RGTEItf7fsSLKjrsK8jqNIr+yIhR97/Uif//Xh+yPfU9WzKh90/OABIhRCiPKlyC07Op2Oo0ePlkYsQm1/5zgyEksdJqMJNODn55fvazoe5JUdnat35uueXwMweftkvj34banVQwghbE2x+uwMHDiQefPmMW3atJKOR6hJWnZUZTaZQYHRy0bj4u5yz7LFeWXHiw+9SFRyFO9ve59X/3iVev71aFO1zYOGLYQQNq9YyY7RaOS7775j48aNNG/ePM87sWbMmFEiwYmyczPjJvz9MUqyo67cSf3upbiv7JjYfiInr59k6cml9FnSh/0v76eKZ5X7HyiEEOVYkZKdixcvUq1aNY4fP06zZs0AOHv2rFWZ4rx8UKjvzM0zAHg6ecpoHTum0WiY32s+p2+c5lhCzgit7UO3y2cuhLBrRUp2atWqRWxsLFu2bAFyXg/x+eefExgYWCrBibJz+uZpAPxdpFXH3rk5ubGi/wqaf92cvdf28q+N/2JGF2mNFULYryJ1UL57yOqaNWtIS0sr0YCEOnJbdiTZqRjCfcJZ2HshADN3z2TF6RUqRySEEKWnWPPs5JL5OuxHbsuOn4ufypGIstKzTk/+GfFPAIasGMLVlKsqRySEEKWjSMmORqPJ0ydH+ujYh1M3TgHSslPRTO00lZaVW5KUmcQ/1vwD5HYWQtihIvXZURSFIUOGWF72mZmZySuvvJJnNNavv/5achGKUpeSlcLV2zl/1ctIrIpF56jjh6d+oOncpmy5sgVaqh2REEKUvCIlO4MHD7ZaHzhwYIkGI9Rx8vrJnC9ug4v23vO7CPtT2682n3T+hJGrR0Ik3Mi4QbA+WO2whBCixBQp2Zk/f35pxSFUdCLhRM4XCerGIdQzosUIlp9azsZLG1l9cTUvPvSiPKIWQtiNYk0qKOzLieuS7Ni7wrxL69P2n9LkdBOucpX9sft5OOThMojMmsFgwGg0FqqsVqtFp7v35ItCCAGS7AjgeMLxnC+uqxuHKHl3vm+rUFoC3WHjxY3U8auDp96zVOO7k8FgIDQslPjY+EKVDwwOJPpKtCQ8Qoj7kmRHSMuOHSvy+7b6zSTk2RBi0mJYc34N/Rr0K6NIc15DEx8bz7gV49Dq7/1fkzHLyPRe0zEajZLsCCHu64Hm2RHlX1JmEjG3Y3JWpGXHbuW+b+tei1avBQU6h3VGg4bTN05z4dYF241VCCEKSZKdCi63c3Jlj8qQpXIwwiZUcqlEy8o5Y9DXnF+DyWxSOSIhhHgwkuxUcLmPsOr511M5EmFLOlTrgJvOjZsZN9lzbY/a4QghxAORZKeCy23ZaeDfQOVIhC1x1joTWT0SgG1XtnE767bKEQkhRPFJslPBHb+eMxJLWnbE3ZoENqGKRxWyTdlsvLhR7XCEEKLYJNmp4HJbdiTZEXfTaDR0q9UNgKMJR4lKjlI5otJnMBjIyMgo1GIwGNQOVwhRSJLsVGA3028Sn5Yzp0k9P0l2RF4hHiE0C24GwOpzqzErZpUjKj258/y4uroWagkNC5WER4hyQsZvVmC5nZPDvMJwd3JXORphqzqFd+Lk9ZPEp8VzMPYgLUJaqB1SqZB5foSwX9KyU4FZOicHSOdkUTBXnSsdqnUAYMvlLWQaM9UNqJTJPD9C2B9Jdiqw3JadBpUk2RH31iK4Bf6u/qQb0tl2eZva4QghRJFIslOB5b4Tq2FAQ5UjEbbO0cGRLjW6ALA3Zi83Mm6oHJEQQhSeJDsVmLTsiKKo6VuT2r61MStmNl3ZpHY4QghRaJLsVFAJaQncSL+BBg31KslILFE4nWt0xkHjwIWkC1BT7WiEEKJwJNmpoHI7J4f7hOOqc1U5GlFe+Ln60apyq5yVrmAwydBrIYTtk2SngpJHWKK42oW1w1XrCv7w1aGv1A5HCCHuS5KdCsoy7FySHVFEzlpn2oe2B2DyX5OJS41TOSIhhLg3SXYqqNx3YskcO6I4mgQ0gWuQkp3CuA3j1A5HCCHuSZKdCkhRFGnZEQ/EQeMAf4AGDT8c/YE/r/ypdkhCCFEgSXYqoLjUOBIzE3HQOFDXv67a4YjyKgaGNhkKwMjVI8k2ZasckBBC5E+SnQoot3NyDZ8auOhcVI5GlGfvt3sff1d/jiccZ/qO6WqHI4QQ+ZJkpwI6Gn8UkJmTxYPzc/Hjs66fAfDBnx9w6voplSMSQoi8JNmpgHKTnSaBTVSORNiD5xo+R49aPcg2ZTNs5TBMZpPaIQkhhBVJdiqgI/FHAGgc2FjlSIQ90Gg0zOkxBw8nD3Zd3cUnOz9ROyQhhLAiyU4FYzAZOHn9JABNgqRlR5SMUK9QZnaZCcA7W95hf8x+lSMSQoj/J8lOBXPm5hmyTdl4OHlQzbua2uGIci4jI8OyPFf3OZ6q8xRGs5H+S/tzPfk6GRkZGAzySgkhhLq0agcgylZuf51GgY1y5koRohhMRhNowM/Pz3qHMzACLnCBgOEBsAwCgwOJvhKNTqdTJVYhhJBkp4I5EpfTX0c6J4sHYTaZQYHRy0bj4m49fUF0SjQ/nvoRc0MzbR9vy1//+Auj0SjJjhBCNar+aT916lQefvhhPDw8CAgIoHfv3pw5c8aqTGZmJiNHjsTPzw93d3f69OlDfHy8VZmoqCh69OiBq6srAQEBjB07FqPRWJZVKTeOJuS07EjnZFEStHotOr3OaqleqTrda3UH4K/Yv6CeykEKISo8VZOdbdu2MXLkSHbv3s2GDRswGAx07tyZtLQ0S5nRo0fz+++/s3TpUrZt20ZMTAxPP/20Zb/JZKJHjx5kZ2ezc+dOFi5cyIIFC5gwYYIaVbJ50rIjykLz4Oa0rNwyZ6UPbLy0Ud2AhBAVmqqPsdauXWu1vmDBAgICAjhw4ADt2rUjOTmZefPm8dNPP9GxY0cA5s+fT7169di9ezetW7dm/fr1nDx5ko0bNxIYGEjTpk354IMPePvtt3nvvfdwcnJSo2o26XradWJTYwGZUFCUvi41upCUnsTZxLP0Xd6XP1z+oGN4R7XDEkJUQDbVQzU5ORkAX19fAA4cOIDBYCAyMtJSpm7dulStWpVdu3YBsGvXLho1akRgYKClTJcuXUhJSeHEiRP5XicrK4uUlBSrpSLI7Zxcw6cGHnoPlaMR9s5B48BTtZ6CM5BpzOSJn55g6YmlaoclhKiAbCbZMZvNjBo1ijZt2tCwYU6rQ1xcHE5OTnh7e1uVDQwMJC4uzlLmzkQnd3/uvvxMnToVLy8vyxIaGlrCtbFNlpmTZX4dUUYcHRxhCXSv0Z0MYwZ9l/Vl0rZJmBWz2qEJISoQm0l2Ro4cyfHjx1m8eHGpX2v8+PEkJydblujo6FK/pi2wzJwcIJ2TRRkywS9P/cLo1qMBmLh1Ip2+78SlxEsqByaEqChsItl57bXXWLVqFVu2bKFKlSqW7UFBQWRnZ5OUlGRVPj4+nqCgIEuZu0dn5a7nlrmbXq/H09PTaqkIcpMdadkRZc3RwZEZXWYw78l5uOpc2Xp5K43mNGLq9qmkG9LVDk8IYedUTXYUReG1115j+fLlbN68mfDwcKv9zZs3R6fTsWnTJsu2M2fOEBUVRUREBAAREREcO3aMhIQES5kNGzbg6elJ/fr1y6Yi5cCdr4mQYedCLS8+9CJHXzlK+7D2pBnS+Pfmf1Pz85rM2j2LpMwktcMTQtgpVZOdkSNHsmjRIn766Sc8PDyIi4sjLi6OjIwMALy8vBg2bBhjxoxhy5YtHDhwgKFDhxIREUHr1q0B6Ny5M/Xr12fQoEEcOXKEdevW8c477zBy5Ej0er2a1bMp8poIYStq+NZg8+DNfN/7e6p5VyM2NZbR60ZTc05N6AnxafH3P4kQQhSBqkPP58yZA0CHDh2sts+fP58hQ4YAMHPmTBwcHOjTpw9ZWVl06dKFL7/80lLW0dGRVatWMWLECCIiInBzc2Pw4MFMmjSprKph0wwGA0ajkf3ROS9mbFCpAVmZWXnK5SaYQpQFB40Dg5oMom+Dviw4vIAv9n7BiesnoDnMOzaPKp5VaBbUjAYBDXBylOkjhBAPRtVkR1GU+5ZxdnZm9uzZzJ49u8AyYWFhrF69uiRDswsGg4HQsFDiY+MhEmgLu3/bjetLrgUeYzKZ0CHT+ouyodfq+UeLf/By85fZdG4Tj//7cRwaO3A15SpXU66y9sJaGlRqwENBD1HFswoajUbtkIUQ5ZC8G8uOGY1G4mPjGbdiHMsuLuNi8kW69u1Ks9eb5SmbkZLBzL4zMZtlSLAoexqNhjahbeB/8Nrg1ziReIJDcYe4lXGLQ3GHOBR3iEqulXg45GEaBzbGwTbGVgghyglJdioArV5LQkZOB+4QrxB0+rwtNwa9oazDEiJf7k7utK3aljahbYhKjuJQ3CFOXj/J9fTrrD6/mo2XNtLIvxH4l24cGYYMYm7HcCvjFomZiZa5gVx1rvg6+YJ36V5fCFFyJNmpANIMaaRmpwIQ6B54n9JC2AaNRkOYdxhh3mF0rdmVI/FH2HdtHzczbnIg/gC8Bt0Xd+f11q/zZJ0n0To82H9nZsUMVWDzlc1cvn2ZuNT8JyW1GAWtF7Smf8P+vNT8JfxdSzn7EkIUmyQ7FUBCek6rjo+zj3T2FOWSs9aZVpVb0TKkJZeSLrEneg9nb55la9RWtkZtpYpnFV5p/grDmg0jyD3/+bXyk2nMZNPFTaw4s4KVZ1bCcNgdu9uy39fFl0qulfB29kbnoENB4Xb2bRJSE4i7HcfRhKMc3XyUKdun8HrL1xnbZiy+Lr6l8S0QQjwASXYqgOvp1wGK9EtACFuk0Wio7lOdUNdQPuz3IW/98hYLji7gaspV3tnyDu9ueZfWVVrTo1YPHq78ME0Cm+Dv6o+jgyNmxUxSZhJnbpxhf8x+tl7Zyrrz60gzpP3/BbKgfkh96gbUpZpXtQLfIWfIMvDh0x8ye9Ns5h2dx8HYg0zbMY3vDn/HnB5zeLre02X0HRFCFIYkOxVA7rwlAW4BKkciRAlKhkntJjG502SWnlzKl/u+ZNfVXZblTu5O7mQYMjAppjynqexRmSfrPEnX8K70atyL3n/0zrdfWx7pMLTJUEa0GsGqs6t4e+PbnLpxij5L+vB8o+f5+omvcXNyK6naCiEegCQ7FUDuYyxp2RH2SK/VM7DxQAY2Hsi1lGusPLOSrVe2cij2EOdunQOw9FmDnPugeXBzWlZuSfda3Wke3ByNRpMz11TeXOi+NBoNPev0pHONzkzaNomPdnzET8d+4njCcVb0XyGTeAphAyTZsXeOcD0j5zFWoJt0Thb2rbJnZUY8PIIRD48AIMuYRXJWMilZKbhoXfB39UevLZ2Z1fVaPVM6TaF7re70WdKHo/FHefibh1n9/GoervxwqVxTCFE4MlmFvQvIGWXirHXG29lb7WiEKFN6rZ4AtwBq+taksmflUkt07tSmahv2vbSPZsHNuJF+g07fd2L7le2lfl0hRMEk2bF3wTn/hLiHyOyzQpSwjIyMfBd/J3/W9F1Du9B23M6+TZdFXdh8abPa4QpRYcljLHv3d7IT5CH9dYQoKSajCTTg5+d374JaoC9k1M6g1+JebH5hszzSEkIFkuzYu7+TnWD3YHXjEMKOmE1mUGD0stG4uLvcs2xmRiYzfp1Bao1Uuv3Yje1Dt1OvUr0yilQIAfIYy64ZTAb4u0FHkh0hSp5Wr0Wn191zcXZxhl+gRXALbmbcpOuPXYlPjVc7dCEqFEl27Njpm6dBC3pHvczqKoSasmH5M8up7VebqOQonvrlKTKNmWpHJUSFIcmOHTscfxiAQNdA6ZwshMpccWXpU0vx1nuz6+ouXlz+Iunp6Xk6NxsM8lJeIUqaJDt2LDfZCXKTzslCqOXOzsxNqjQh6eskMMPPJ3/G7TE3XF1drZbQsFBJeIQoYdJB2Y5Zkh2ZOVkI1eTXmXlv7F42XtmIQw8HBo0dRGWPygAYs4xM7zUdo9GITleIV1YIIQpFWnbslMls4kjCEUBadoSwBXd2Zn4k7BHqV6qPWTGz/PxyDA4GdHodWr38/SlEaZBkx06duXmGdEM6ZIOvs3ROFsKWaDQanqz9JH4ufqRkpfD7md9RFEXtsISwW5Ls2Kl91/blfBELDhr5mIWwNXqtnmfqP4ODxoHTN09zKO6Q2iEJYbfkt6Cd2nttb84X19SNQwhRsCD3IDqGdwRg7fm13Mq8pXJEQtgnSXbs1L6Yv1t2JNkRwqZFVImgmlc1DGYDv5//Xf5XFqIUyG1lh7KMWRyOO5yzEqNqKEKI+3DQONC7bm/0jnqupV6DR9WOSAj7I8mOHToafxSD2YCfix8kqh2NEOJ+vJy96FGrR85Ke9h+aXuBb1SXyQeFKDpJduxQbn+dZkHNVI5ECFFYjQIbUc+3HjhAl7ldcPV0zTPhoEw+KETxyKQOdii3v06L4BZsYIPK0QghCiuyciSnLp8CP4j4MoLHqj6WbzmZfFCIopGWHTuUm+w0D2quciRCiKJw1jrDqpyvd8fs5nr29XzfpC6TDwpRNJLs2JnbWbc5df0UAM2DJdkR9u1+/VrKZf+Ws1DXpy4KCivPrMRkNqkdkRDlniQ7duZA7AEUFKp6VSXQLVDtcIQoFXe+XPNe/VrKa/+WjqEdcdG6EJ8Wz87onWqHI0S5J22hdmb31d0AtKzcUuVIhCg9+b1csyC5/Vtu376Ni0vBZTMyMko6zGJz07nRtWZXlp9ezrYr26hXqR7+rv5qhyVEuSXJjp3ZdXUXkDNRmRD2LvflmvdyZytQYZhMJnSo3+m3UUAjjiUc4/yt86w8s5KhTYei0WjUDkuIckmSHTuiKAq7onOSnUdCH1E5GiFsQ2FbgTJSMpjZdyZms7kMoyuYRqPhiVpP8OX+L4lOiWZfzD5psRWimCTZsSMXEi9wPf06To5OPBT0EGaDbfynLURhHhGV9mOk+7UCGfS216fHy9mLyPBIVp9fzcaLG6ntVxtvZ2+1wxKi3JEOynYkt1WneXBz9Fq9ytEIUbSOxLmPmUwmGX10pxYhLajqWRWD2cCqs6tQFEXtkIQod6Rlx47kjtqQR1jCVhSlI7GtPUayFRqNhp51ejJ3/1wuJF7gSPwRGvg0UDssIcoVadmxI9I5Wdiq3EdI91pkoryC+bv606FaBwDWXVhHanaqugEJUc5IsmMnbmfd5ljCMQAiQiXZEcLeRFSJIMg9iExjJusvr1c7HCHKFUl27MTea3sxK2bCvMII8QhROxwhRAlzdHDkydpPokHD6Vunoa7aEQlRfkiyYydyH2FJfx0h7FewRzBtQtvkrPSApMwkVeMRoryQZMdO7IjeAUh/HSHsXftq7fF19gUP+PfWf6sdjhDlgiQ7dsBoNvJX1F8AtAtrp3I0QojSpHXQ0qN6DwAWHF3ApoubVI5ICNsnyU45ZTAYLG903n15N6nZqXjrvanhUcPqbc9CCPsT6hkKe3O+fnnVy6Rlp6kbkBA2TpKdcshgMBAaFmqZjO3RgY8CkHQ0CQ93D5mkTYiKYCNU8ajCxcSLTNgyQe1ohLBpMrFFOWQ0GomPjWfcinFo9VqWnlnKucRzdHy8I60Ht7aUk0nahLBj2fB55895+n9PM2vPLPo17CfvzhKiANKyU45p9Vq0Tlqib0cDUN2vukzSJkQF0rVGVwY2HohZMTNs5TCyTdlqhySETVI12fnzzz/p2bMnISEhaDQafvvtN6v9iqIwYcIEgoODcXFxITIyknPnzlmVuXXrFgMGDMDT0xNvb2+GDRtGamrFmV00IS2BTGMmOgcdQe5BaocjhChjM7vMpJJrJY4nHGfyn5PVDkcIm6RqspOWlkaTJk2YPXt2vvunT5/O559/zty5c9mzZw9ubm506dKFzMxMS5kBAwZw4sQJNmzYwKpVq/jzzz95+eWXy6oKqruSfAWAql5VcXRwVDkaIURZ83f1Z3b3nP9DP9z+IXuu7lE5IiFsj6rJTrdu3Zg8eTJPPfVUnn2KojBr1izeeecdevXqRePGjfn++++JiYmxtACdOnWKtWvX8u2339KqVSvatm3LF198weLFi4mJiSnj2qjjzmRHCFExPdvgWQY0GoBJMTFo+SAZnSXEXWy2z86lS5eIi4sjMjLSss3Ly4tWrVqxa1fObMG7du3C29ubFi1aWMpERkbi4ODAnj32/9eNoihcScpJdsK8wlSORgihpv92/y9VPKtw7tY5xm4Yq3Y4QtgUm0124uLiAAgMDLTaHhgYaNkXFxdHQECA1X6tVouvr6+lTH6ysrJISUmxWsqj6xnXSTOkoXPQUdmzstrhCCFU5O3szYJeCwCYs38Oa8+vVTcgIWyIzSY7pWnq1Kl4eXlZltDQULVDKpZLyZeAnFYdrYOMvBKiorlzAtGMjAweCX6EV5u/CsDQ34Zy9dZVMjIyMBgMKkcqhLpsNtkJCsoZWRQfH2+1PT4+3rIvKCiIhIQEq/1Go5Fbt25ZyuRn/PjxJCcnW5bo6OgSjr5sXE6+DEB1n+rqBiKEKFMmowk04OfnZ5lENHf58qkv4TrEpcUR+krO5KOhYaGS8IgKzWabA8LDwwkKCmLTpk00bdoUgJSUFPbs2cOIESMAiIiIICkpiQMHDtC8eXMANm/ejNlsplWrVgWeW6/Xo9frS70OpcoRolKiAEl2hKhozCYzKDB62Whc3F3y7I9NjWXhiYWYG5h5vOvjbBi2AaPRiE6nUyFaIdSnarKTmprK+fPnLeuXLl3i8OHD+Pr6UrVqVUaNGsXkyZOpVasW4eHhvPvuu4SEhNC7d28A6tWrR9euXXnppZeYO3cuBoOB1157jf79+xMSEqJSrcpIFTCYDbjp3AhwC7h/eSGE3dHqtej0eROYqvqqdArvxIaLG9h8dTMEqxCcEDZE1WRn//79PPbYY5b1MWPGADB48GAWLFjAuHHjSEtL4+WXXyYpKYm2bduydu1anJ2dLcf8+OOPvPbaa3Tq1AkHBwf69OnD559/XuZ1KXN/N+ZU96mORqNRNxYhhM2JqBJBVHIUZ26egb6QmJmIi0veViAhKgJVk50OHTqgKEqB+zUaDZMmTWLSpEkFlvH19eWnn34qjfBs29/JTrhPuLpxCCFskkajoXfd3ny1/yuSfJL4x+p/sPL5lfLHkaiQbLaDsihYUmYS/D3SvLq39NcRQuTPWevMU7WeAiOsOr+KGbtmqB2SEKqQZKcc2nx5MziAn7MfXs5eaocjhLBhwe7B8PeUO29vfJvtV7arG5AQKpBkpxxac2ENADV9aqociRCiXNgP/er1w6SY6LOkD5eTLqsdkRBlSpKdcsZkNrHu4joAanpLsiOEKJz/dvkvzYKbcT39Oj1/7klKVvmcOV6I4pBkp5zZF7OPGxk3IBOqeFRROxwhRDnh5uTGiv4rCHYP5njCcfot64fBJBMNiopBkp1yZtXZVTlfnAdHB0d1gxFClCtVPKuwov8KXLQurD2/luG/D7/niFgh7IUkO+WMJdk5q24cQojy6eHKD7P02aU4ahz5/sj3vL3xbUl4hN2TZKcciU6O5kj8ERw0DnD+/uWFECI/PWr34NsnvwXg450fM2lbwXOZCWEPJNkpR34/+zsArUJaQbrKwQghyrUhTYcwo3POvDvvbXuPKX9OUTkiIUqPzb4IVOS17OQyAJ6o+QS72KVyNEKI8m50xGgMZgNvb3ybd7a8g8Fs4N+P/BuTyVSo47VarbxcVJQL0rJTTiSkJbDtyjYAnqrzlMrRCCHsxbg245jaaSoA7297H+/nvXF1c8XV9f5LaFgoBoOM6BK2T1p2yolfT/2KWTHTIqQF1byrqR2OEMKO/Kvtv/Bw8uC1Na+R0SiDuo/WpWetnugcC261MWYZmd5rOkajUVp3hM2TZKecWHJiCQDP1n9W5UiEEPZoZMuRuDi4MGzlME4nnSb5VDL9G/bHU++pdmhCPDB5jFUO3PkIS5IdIURpea7Bc/A9uGhdiE2N5ZuD33A15araYQnxwCTZKQfufIQV7hOudjhCiHIoIyOjUAtXYGjDoQS4BZCancqCwws4En9E7fCFeCDyGKsc+Pn4z4C06gghis5kNIEG/Pz8Cn2Mh86DF5u+yPLTyzlz8wy/nf6NK0lX6FqzK06OTqUYrRClQ5IdG3cx8SJ/XvkTDRqea/ic2uEIIcoZs8kMCoxeNhoXd5d7ls1IyWBm35mYzWZcta70a9CPrVe28ueVPzkUd4io5Cieqf8MQe5BZRS9ECVDHmPZuAWHFwDweI3HCfUKVTcYIUS5pdVr0el191y0euu/fzUaDY9Ve4wXGr+Ah5MHNzNu8u3Bb9lzdY+8YkKUK5Ls2DCzYmbhkYUADG06VOVohBAVVbhPOK+0eIU6fnUwKSbWXljLL6d/ARmoJcoJSXZs2OZLm4lKjsLb2ZvedXurHY4QogJz1eU81upWsxuOGkcuJl+EV+GHYz9IK4+weZLs2LD5h+cD8FzD53DWOqscjRCiotNoNLSs3JJXWrxCiHsIOMM/1vyDJxc/ScztGLXDE6JAkuzYqBvpN/j11K+APMISQtgWf1d/XmjwAmwAJwcnVp1dRcMvGzJ//3zS09PzDGeXV0oItUmyY6O+PvA1mcZMmgc3p0VIC7XDEUIIK4pJgZ2Q/UU2XIPEzERe/ONF3F50w7WSvENL2BYZem6DDCYDs/fNBmBU61FoNBqVIxJCCGuWIe1zRqN307MrZhfbr27HXM+MSyMXulTrQj2/epiyTfIOLaE6admxQctOLiPmdgxB7kH0bdBX7XCEEKJAWr0WvbOeDtU78HKzlwlyDyLDmMFv53/jtwu/kanJVDtEIaRlx9YoisLM3TMBeLXFqzJbqRCi3Ah0D2T4Q8PZHrWd7VHbOXXjFJcSL8FDyIgtoSpp2bExf0X9xb6Yfegd9fyjxT/UDkcIIYrE0cGRDtU68FKzlwh2DybTlAm9oOeSnlxMvKh2eKKCkmTHxkzcOhGAwU0GE+AWoHI0QghRPEHuQQxvNpyOVTuCATZf2UyjOY2YuWsmJrNJ7fBEBSPJjg3ZcmkLWy5vwcnRiXfavaN2OEII8UAcNA60DmkNc+DR0EdJN6QzZv0Y2nzXhqPxR9UOT1QgkuzYCEVRmLB1AgAvN3tZ3oMlhLAft2BN/zV89cRXeOo92XNtD82+asY/1/2T21m31Y5OVACS7NiIDRc38FfUXzhrnRn/6Hi1wxFCiBKVlZnFoPqD2P/ifnrX7o1JMTFj9wzq/LcOPx760TIZoczHI0qDjMayAdmmbEatHQXAiBYjCPEIUTcgIYQoISajCTTg5+dnvaMm0B1iiWXgyoFwHlgNgfpAoq9Ey5w8okRJsmMDPtv9GadunKKSayUmtJ+gdjhCCFFiLJMPLhuNi7uL1T6D2cCua7vYFbMLU00Tjm86Er8lnpSMFPx0fgWcUYiik8dYKruacpX3t70PwMePf4y3s7e6AQkhRCnQ6rXo9DqrxdXFlU41OzGixQhq+NTApJigAzT5tgmLji7CrJjVDlvYCUl2VKQoCq+tfo00Qxptq7blhSYvqB2SEEKUOT9XPwY0GsBTtZ6CJLh2+xqDlg+i9bet+SvqL7XDE3ZAkh0VfX3ga1acWYHOQcfs7rPlHVhCiApLo9FQz68e/BcmtZuEh5MH+2L28ej8R3l26bMyIaF4IJLsqOREwglGrRsFwLTIaTQObKxuQEIIYQuMMLLJSI6+dJQXm7yIg8aBZSeXUW92PUavHs3VW1fJyMiQkVuiSKSDsgpuZ92m///6k2nMpEuNLoxqPQoAg8GA0Wi87/EZGRmlHKEQQpS9fEduBQBdILtGNrP2zWLWX7NgF7ALAn1l5JYoHEl2ypjBZOCZpc9wPOE4gW6BLOy9EAeNAwaDgdCwUOJj4wt9LpPJhA65yYUQ9qGgkVuKonAh6QLborcRTzx0AOdOzsSvjSc5PRl/L3/1ghblgiQ7ZUhRFF76/SXWX1iPq86VVc+vItA9EACj0Uh8bDzjVoxDq7/3x5KRksHMvjMxm2WkghDC/uSO3LpTvaB61A2sy8kbJ9l6eSs30m/A41Bnbh1eb/U6r7V8DX9XSXpE/qTPThkxmo0MXzmchUcW4qhxZOmzS2kR0iJPufyGZ9693C8ZEkIIe6TRaGhQqQEjWoygZ42ecAtuZd7i/W3vU3VmVd5Y8waXky6rHaawQZLslIEMQwbPLn2W7w5/h4PGge96fUf3Wt3VDksIIcolB40DjSo1gi/ghyd/oFlwMzKMGXyx9wtqfF6DHj/1YPmp5RhM0oFZ5JBkp5SduXGGiHkR/Hb6N/SOev7X938yn44QQpQEBfrU7cP+l/azYdAGHq/+OGbFzOpzq3l6ydNUnVWV8RvHczzhOIqiqB2tUJEkO6VEURQWHl5I86+bcyT+CP6u/qwbuI7edXurHZoQQtgVjUZDZPVI1g9az9nXzvJ2m7cJdAskLjWOaTum0WhOI2p9UYt/rvsn269sx2Q2qR2yKGPS+aOUJGYmMmb9GNIMaXQM78gPT/0gL/gUQogSdvdUHFVcqzCxzUT+3frf/HHhDxYdW8Smy5u4kHiBGbtnMGP3DHxdfGkT2oY2oW1oW7UtzUOa46x1VqkGoizYTbIze/ZsPv74Y+Li4mjSpAlffPEFLVu2VC0eXxdfFvRawKHYQ4x5eAyODo73nB9H5s4RQojCK/Bt6vnwr+LPt799y5pLa1hzYQ23Mm7x+9nf+f3s7wA4OTpRz68e9fzr0SCgAY0CG1GvUj2qelWVJMhO2EWy88svvzBmzBjmzp1Lq1atmDVrFl26dOHMmTMEBASoFlfX6l156bGXmBg7sdDHyNw5Qghxf/d6m/qdstKy+PSZTxnUYlDOBgcgGKgKhOb8m+2ezZGEIxxJOAInrY+v5FqJKh5VqOJZhQDXAHxdfPF19sXHxYdKbpUI8MjZ5qpzxUXrgrPWGRedCzoHXbFeAVTYyWUBtFqtTKhYSHaR7MyYMYOXXnqJoUOHAjB37lz++OMPvvvuO/71r3+pFpfMnSOEEKUrvzl57mTIMtwzKVIUhaSsJK6nXycuOY6/NvwFlQA/wAmup1/nevp1DsUfKlJcGjS46FzQO+rROmjROmhxdHDM+VfjmO+6g8aBg/sP5sRsJu9i+HvJzlncnd35cOKHeDp74u7kjpuTG246N8vX7k7uuOnccHNyQ+tgF7/ui63c1z47O5sDBw4wfvx4yzYHBwciIyPZtWuXipH9v/vdjAAGvQyRFEKI0nKv/4cDnAMI8Aog3C2cv379i9HLRuPs5kymKZOUrBRSslNIzkomw5hhWdKz0rl06hLVG1QnKSuJdGM6mcZMyzkVFNIN6aQb0osWaHDhi6aSyhvr3ihUWb2jPk8ypHPQoZAzSi13tJqCgqIomM1mq3252y1l7li/83hHB0dL8mZJ8jSO6Bx1zOs1j1Cv0MJXsASV+2Tnxo0bmEwmAgMDrbYHBgZy+vTpfI/JysoiKyvLsp6cnAxASkpKicaW2w8nLTENrdN9WnZu/39Zc/a9W3cKW7Y0zimxqn/98hSr2teXWNUvWx6vn5WehYPGAQcc8MYbbydvcLIum5WexX//+V8uctfb2B0AHTm/XbWA49/btIDy99e5iyafrzXQ+c3OaHVazJgxKzmLoigYzAayTdk5/xqyObbtGF2e7EKWOYu07DTSDelkGDNIzU4lw5BBmiENs5JT5yyyyErL4ha37vk9KE0xETF4abxK9Jy5v7fvO7WAUs5du3ZNAZSdO3dabR87dqzSsmXLfI+ZOHGiQs6PnSyyyCKLLLLIUs6X6Ojoe+YK5b5lx9/fH0dHR+LjrV+gGR8fT1BQUL7HjB8/njFjxljWzWYzt27dws/Pr1gdyoorJSWF0NBQoqOj8fT0LLPrqqki1hkqZr0rYp1B6l2R6l0R6wy2VW9FUbh9+zYhIfee2qXcJztOTk40b96cTZs20bt3byAnedm0aROvvfZavsfo9Xr0er3VNm9v71KOtGCenp6q/8CUtYpYZ6iY9a6IdQapd0VSEesMtlNvLy+v+5Yp98kOwJgxYxg8eDAtWrSgZcuWzJo1i7S0NMvoLCGEEEJUXHaR7PTr14/r168zYcIE4uLiaNq0KWvXrs3TaVkIIYQQFY9dJDsAr732WoGPrWyVXq9n4sSJeR6p2bOKWGeomPWuiHUGqXdFqndFrDOUz3prFEVeBSuEEEII+yVvPRdCCCGEXZNkRwghhBB2TZIdIYQQQtg1SXaEEEIIYdck2SkF06ZNQ6PRMGrUqALLfPPNNzz66KP4+Pjg4+NDZGQke/futSozZMgQNBqN1dK1a9dSjr74ClPvBQsW5KmTs7OzVRlFUZgwYQLBwcG4uLgQGRnJuXPnSjn64ilMnTt06JCnzhqNhh49eljK2Ppn/d577+WJr27duvc8ZunSpdStWxdnZ2caNWrE6tWrrfaXh8+5qPW2h/u6qHW2l3u6qPW2h/sa4Nq1awwcOBA/Pz9cXFxo1KgR+/fvv+cxW7dupVmzZuj1emrWrMmCBQvylJk9ezbVqlXD2dmZVq1a5bkPypokOyVs3759fPXVVzRu3Pie5bZu3cpzzz3Hli1b2LVrF6GhoXTu3Jlr165ZlevatSuxsbGW5eeffy7N8IutsPWGnFk376zTlStXrPZPnz6dzz//nLlz57Jnzx7c3Nzo0qULmZmZBZxRHYWt86+//mpV3+PHj+Po6Mizzz5rVc7WP+sGDRpYxffXX38VWHbnzp0899xzDBs2jEOHDtG7d2969+7N8ePHLWXKy+dclHrby31dlDqD/dzTRam3PdzXiYmJtGnTBp1Ox5o1azh58iSffvopPj4+BR5z6dIlevTowWOPPcbhw4cZNWoUw4cPZ926dZYyv/zyC2PGjGHixIkcPHiQJk2a0KVLFxISEsqiWvkrgXdxir/dvn1bqVWrlrJhwwalffv2yptvvlnoY41Go+Lh4aEsXLjQsm3w4MFKr169Sj7QElaUes+fP1/x8vIqcL/ZbFaCgoKUjz/+2LItKSlJ0ev1ys8//1yCUT+YB/msZ86cqXh4eCipqamWbbb+WU+cOFFp0qRJocv37dtX6dGjh9W2Vq1aKf/4xz8URSk/n3NR63238nhfF7XO9nJPP+hnXR7v67fffltp27ZtkY4ZN26c0qBBA6tt/fr1U7p06WJZb9mypTJy5EjLuslkUkJCQpSpU6c+WMAPQFp2StDIkSPp0aMHkZGRRT42PT0dg8GAr6+v1fatW7cSEBBAnTp1GDFiBDdv3iypcEtMUeudmppKWFgYoaGh9OrVixMnTlj2Xbp0ibi4OKtzeXl50apVK3bt2lXisRfXg3zW8+bNo3///ri5uVltt/XP+ty5c4SEhFC9enUGDBhAVFRUgWV37dqV53vTpUsXy2dYXj5nKFq971Ze7+ui1tke7ml4sM+6PN7XK1eupEWLFjz77LMEBATw0EMP8c0339zzmPvd29nZ2Rw4cMCqjIODA5GRkap+3pLslJDFixdz8OBBpk6dWqzj3377bUJCQqx+QLp27cr333/Ppk2b+Oijj9i2bRvdunXDZDKVVNgPrKj1rlOnDt999x0rVqxg0aJFmM1mHnnkEa5evQpAXFwcQJ5XfQQGBlr2qe1BPuu9e/dy/Phxhg8fbrXd1j/rVq1asWDBAtauXcucOXO4dOkSjz76KLdv3863fFxc3D0/w/LwOUPR63238nhfF7XO9nBPw4N91uX1vr548SJz5syhVq1arFu3jhEjRvDGG2+wcOHCAo8p6N5OSUkhIyODGzduYDKZbO/zVq1NyY5ERUUpAQEBypEjRyzbivJoY+rUqYqPj4/V8fm5cOGCAigbN258kHBLzIPWW1EUJTs7W6lRo4byzjvvKIqiKDt27FAAJSYmxqrcs88+q/Tt27dE4n4QD1rnl19+WWnUqNF9y9naZ323xMRExdPTU/n222/z3a/T6ZSffvrJatvs2bOVgIAARVFs/3MuyP3qfafyel/frSh1VpTyd08XpCj1Lq/3tU6nUyIiIqy2vf7660rr1q0LPKZWrVrKhx9+aLXtjz/+UAAlPT1duXbtmgIoO3futCozduxYpWXLliUXfBFJy04JOHDgAAkJCTRr1gytVotWq2Xbtm18/vnnaLXae2bxn3zyCdOmTWP9+vX37ehavXp1/P39OX/+fElXoVgepN65dDodDz30kKVOQUFBAMTHx1uVi4+Pt+xT04PUOS0tjcWLFzNs2LD7XsfWPuu7eXt7U7t27QLjCwoKuudnaOufc0HuV+9c5fm+vlth65yrvN3TBSlsvcvzfR0cHEz9+vWtttWrV++ej+8Kurc9PT1xcXHB398fR0dHm/u8JdkpAZ06deLYsWMcPnzYsrRo0YIBAwZw+PBhHB0d8z1u+vTpfPDBB6xdu5YWLVrc9zpXr17l5s2bBAcHl3QViqW49b6TyWTi2LFjljqFh4cTFBTEpk2bLGVSUlLYs2cPERERpVaXwnqQOi9dupSsrCwGDhx43+vY2md9t9TUVC5cuFBgfBEREVafIcCGDRssn6Gtf84FuV+9ofzf13crTJ3vVN7u6YIUtt7l+b5u06YNZ86csdp29uxZwsLCCjzmfve2k5MTzZs3typjNpvZtGmTup+3am1Kdu7uRxuDBg1S/vWvf1nWp02bpjg5OSnLli1TYmNjLcvt27cVRckZ7fPWW28pu3btUi5duqRs3LhRadasmVKrVi0lMzOzrKtTaPer9/vvv6+sW7dOuXDhgnLgwAGlf//+irOzs3LixAlLmWnTpine3t7KihUrlKNHjyq9evVSwsPDlYyMjLKsSqHdr8652rZtq/Tr1y/P9vLwWf/zn/9Utm7dqly6dEnZsWOHEhkZqfj7+ysJCQmKouSt844dOxStVqt88sknyqlTp5SJEycqOp1OOXbsmKVMefici1pve7ivi1pne7mni1rvXOX5vt67d6+i1WqVKVOmKOfOnVN+/PFHxdXVVVm0aJGlzL/+9S9l0KBBlvWLFy8qrq6uytixY5VTp04ps2fPVhwdHZW1a9dayixevFjR6/XKggULlJMnTyovv/yy4u3trcTFxZVp/e4kyU4pufsXYPv27ZXBgwdb1sPCwhQgzzJx4kRFURQlPT1d6dy5s1KpUiVFp9MpYWFhyksvvaTqD0th3K/eo0aNUqpWrao4OTkpgYGBSvfu3ZWDBw9ancNsNivvvvuuEhgYqOj1eqVTp07KmTNnyqgGRXe/OiuKopw+fVoBlPXr1+c5vjx81v369VOCg4MVJycnpXLlykq/fv2U8+fPW/bnV+clS5YotWvXVpycnJQGDRoof/zxh9X+8vA5F7Xe9nBfF7XO9nJPF+dnvLzf14qiKL///rvSsGFDRa/XK3Xr1lW+/vprq/2DBw9W2rdvb7Vty5YtStOmTRUnJyelevXqyvz58/Oc94svvrD8XLRs2VLZvXt3Kdbi/jSKoijqtCkJIYQQQpQ+6bMjhBBCCLsmyY4QQggh7JokO0IIIYSwa5LsCCGEEMKuSbIjhBBCCLsmyY4QQggh7JokO0IIIYSwa5LsCFHBaDQafvvtN7XDYOvWrWg0GpKSkkr0vGrW7+bNmwQEBHD58mVVrl9SOnTowKhRowpVtn///nz66aelG5AQD0iSHSFUNm3aNDQaTZ5fLpmZmYwcORI/Pz/c3d3p06dPnpfrlYYhQ4ag0WjQaDTodDoCAwN5/PHH+e677zCbzaV+/YIsWLDAEldBy+XLl4mNjaVbt26qxDhlyhR69epFtWrVVLm+Gt555x2mTJlCcnKy2qEIUSBJdoRQ0b59+/jqq6/yfTP26NGj+f3331m6dCnbtm0jJiaGp59+ukzi6tq1K7GxsVy+fJk1a9bw2GOP8eabb/LEE09gNBrLJIa79evXj9jYWMsSERHBSy+9ZLUtNDSUoKAg9Hp9mceXnp7OvHnzCvX2a3vSsGFDatSowaJFi9QORYgCSbIjhEpSU1MZMGAA33zzDT4+Plb7kpOTmTdvHjNmzKBjx440b96c+fPns3PnTnbv3o2iKNSsWZNPPvnE6rjDhw+j0Wg4f/48AOfOnaNdu3Y4OztTv359NmzYUKjY9Ho9QUFBVK5cmWbNmvHvf/+bFStWsGbNGhYsWGApN2PGDBo1aoSbmxuhoaG8+uqrpKamWvZfuXKFnj174uPjg5ubGw0aNGD16tVW1zpw4AAtWrTA1dWVRx55JM9bmHO5uLgQFBRkWZycnHB1dbXa5ujoaPUY6/Lly2g0GpYsWcKjjz6Ki4sLDz/8MGfPnmXfvn20aNECd3d3unXrxvXr162u9+2331KvXj2cnZ2pW7cuX3755T2/Z6tXr0av19O6dWvLtsTERAYMGEClSpVwcXGhVq1azJ8/37I/Ojqavn374u3tja+vL7169crzCOy7776jQYMG6PV6goODee211yz7oqKi6NWrF+7u7nh6etK3b1+r1r/33nuPpk2b8sMPP1CtWjW8vLzo378/t2/ftpRJS0vjhRdewN3dneDg4HwfSX355ZfUqlULZ2dnAgMDeeaZZ6z29+zZk8WLF9/z+yOEmiTZEUIlI0eOpEePHkRGRubZd+DAAQwGg9W+unXrUrVqVXbt2oVGo+HFF1+0+sUJMH/+fNq1a0fNmjUxm808/fTTODk5sWfPHubOncvbb79d7Hg7duxIkyZN+PXXXy3bHBwc+Pzzzzlx4gQLFy5k8+bNjBs3zqqOWVlZ/Pnnnxw7doyPPvoId3d3q/P+5z//4dNPP2X//v1otVpefPHFYsdYkIkTJ/LOO+9w8OBBtFotzz//POPGjeOzzz5j+/btnD9/ngkTJljK//jjj0yYMIEpU6Zw6tQpPvzwQ959910WLlxY4DW2b99O8+bNrba9++67nDx5kjVr1nDq1CnmzJmDv78/AAaDgS5duuDh4cH27dvZsWMH7u7udO3alezsbADmzJnDyJEjefnllzl27BgrV66kZs2aAJjNZnr16sWtW7fYtm0bGzZs4OLFi/Tr188qhgsXLvDbb7+xatUqVq1axbZt25g2bZpl/9ixY9m2bRsrVqxg/fr1bN26lYMHD1r279+/nzfeeINJkyZx5swZ1q5dS7t27ayu0bJlS/bu3UtWVlZRPhYhyo6qryEVooL6+eeflYYNGyoZGRmKouR9c/qPP/6oODk55Tnu4YcfVsaNG6coiqJcu3ZNcXR0VPbs2aMoiqJkZ2cr/v7+yoIFCxRFUZR169YpWq1WuXbtmuX4NWvWKICyfPnyAmMbPHiw0qtXr3z39evXT6lXr16Bxy5dulTx8/OzrDdq1Eh577338i27ZcsWBVA2btxo2fbHH38ogOX7ci93f89y3Vm/S5cuKYDy7bffWvb//PPPCqBs2rTJsm3q1KlKnTp1LOs1atRQfvrpJ6vzfvDBB0pERESB8fTq1Ut58cUXrbb17NlTGTp0aL7lf/jhB6VOnTqK2Wy2bMvKylJcXFyUdevWKYqiKCEhIcp//vOffI9fv3694ujoqERFRVm2nThxQgGUvXv3KoqiKBMnTlRcXV2VlJQUS5mxY8cqrVq1UhRFUW7fvq04OTkpS5Yssey/efOm4uLiYvne/u9//1M8PT2tznG3I0eOKIBy+fLlAssIoSZp2RGijEVHR/Pmm2/y448/4uzsXOzzhISE0KNHD7777jsAfv/9d7Kysnj22WcBOHXqFKGhoYSEhFiOiYiIeKDYFUVBo9FY1jdu3EinTp2oXLkyHh4eDBo0iJs3b5Keng7AG2+8weTJk2nTpg0TJ07k6NGjec55Z3+l4OBgABISEh4ozntdIzAwEIBGjRpZbcu9ZlpaGhcuXGDYsGG4u7tblsmTJ3PhwoUCr5GRkZHn8xwxYgSLFy+madOmjBs3jp07d1r2HTlyhPPnz+Ph4WG5hq+vL5mZmVy4cIGEhARiYmLo1KlTvtfL/XxDQ0Mt2+rXr4+3tzenTp2ybKtWrRoeHh6W9eDgYEtdL1y4QHZ2Nq1atbLs9/X1pU6dOpb1xx9/nLCwMKpXr86gQYP48ccfLZ9vLhcXF4A824WwFZLsCFHGDhw4QEJCAs2aNUOr1aLVatm2bRuff/45Wq0Wk8lEUFAQ2dnZeYZlx8fHExQUZFkfPnw4ixcvJiMjg/nz59OvXz9cXV1LLfZTp04RHh4O5PSHeeKJJ2jcuDH/+9//OHDgALNnzwawPIYZPnw4Fy9eZNCgQRw7dowWLVrwxRdfWJ1Tp9NZvs5NpEp61Fd+17h7W+41c/scffPNNxw+fNiyHD9+nN27dxd4DX9/fxITE622devWjStXrjB69GhL4vLWW29ZrtO8eXOraxw+fJizZ8/y/PPPWxKIkqz73XUtDA8PDw4ePMjPP/9McHAwEyZMoEmTJlY/m7du3QKgUqVKJRKzECVNkh0hylinTp04duyY1S+4Fi1aMGDAAA4fPoyjoyPNmzdHp9OxadMmy3FnzpwhKirKqnWme/fuuLm5MWfOHNauXWvV36VevXpER0cTGxtr2XavX9b3s3nzZo4dO0afPn2AnKTNbDbz6aef0rp1a2rXrk1MTEye40JDQ3nllVf49ddf+ec//8k333xT7BjKQmBgICEhIVy8eJGaNWtaLbmJXn4eeughTp48mWd7pUqVGDx4MIsWLWLWrFl8/fXXADRr1oxz584REBCQ5zpeXl54eHhQrVo1q5+BO+V+vtHR0ZZtJ0+eJCkpifr16xeqrjVq1ECn07Fnzx7LtsTERM6ePWtVTqvVEhkZyfTp0zl69CiXL19m8+bNlv3Hjx+nSpUqlv5IQtgardoBCFHReHh40LBhQ6ttbm5u+Pn5WbZ7eXkxbNgwxowZg6+vL56enrz++utERERYjfZxdHRkyJAhjB8/nlq1alklQpGRkdSuXZvBgwfz8ccfk5KSwn/+859CxZiVlUVcXBwmk4n4+HjWrl3L1KlTeeKJJ3jhhRcAqFmzJgaDgS+++IKePXuyY8cO5s6da3WeUaNG0a1bN2rXrk1iYiJbtmyhXr16xfq+laX333+fN954Ay8vL7p27UpWVhb79+8nMTGRMWPG5HtMly5dGD9+PImJiZbRdRMmTKB58+Y0aNCArKwsVq1aZan/gAED+Pjjj+nVqxeTJk2iSpUqXLlyhV9//ZVx48ZRpUoV3nvvPV555RUCAgLo1q0bt2/fZseOHbz++utERkbSqFEjBgwYwKxZszAajbz66qu0b9+eFi1aFKqe7u7uDBs2jLFjx+Ln50dAQAD/+c9/cHD4/7+DV61axcWLF2nXrh0+Pj6sXr0as9ls9ahr+/btdO7cubjfbiFKnbTsCGGjZs6cyRNPPEGfPn1o164dQUFBViOhcg0bNozs7GyGDh1qtd3BwYHly5eTkZFBy5YtGT58OFOmTCnUtdeuXUtwcDDVqlWja9eubNmyhc8//5wVK1bg6OgIQJMmTZgxYwYfffQRDRs25Mcff2Tq1KlW5zGZTIwcOZJ69erRtWtXateufd8h3LZg+PDhfPvtt8yfP59GjRrRvn17FixYcM+WnUaNGtGsWTOWLFli2ebk5MT48eNp3Lgx7dq1w9HR0TJE29XVlT///JOqVavy9NNPU69ePYYNG0ZmZiaenp4ADB48mFmzZvHll1/SoEEDnnjiCc6dOwfkPI5asWIFPj4+tGvXjsjISKpXr84vv/xSpLp+/PHHPProo/Ts2ZPIyEjatm1rNarM29ubX3/9lY4dO1KvXj3mzp3Lzz//TIMGDYCcyS9/++03XnrppSJdV4iypFEURVE7CCFE8W3fvp1OnToRHR1t6Xwr1PHHH38wduxYjh8/btU6Ys/mzJnD8uXLWb9+vdqhCFEgeYwlRDmVlZXF9evXee+993j22Wcl0bEBPXr04Ny5c1y7ds1qlJQ90+l0eTqdC2FrpGVHiHJqwYIFDBs2jKZNm7Jy5UoqV66sdkhCCGGTJNkRQgghhF2rGA+VhRBCCFFhSbIjhBBCCLsmyY4QQggh7JokO0IIIYSwa5LsCCGEEMKuSbIjhBBCCLsmyY4QQggh7JokO0IIIYSwa5LsCCGEEMKu/R8n0CNyuWb1yAAAAABJRU5ErkJggg=="/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Histogram of Vertical jump</span>
<span class="n">sns</span><span class="o">.</span><span class="n">histplot</span><span class="p">(</span><span class="n">data</span><span class="p">[</span><span class="s1">'Vertical'</span><span class="p">],</span> <span class="n">kde</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'red'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Distribution of Vertical jump'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Vertical jump (inches)'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Frequency'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjsAAAHHCAYAAABZbpmkAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjguMiwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8g+/7EAAAACXBIWXMAAA9hAAAPYQGoP6dpAABmFElEQVR4nO3deZxOdf/H8dc1+4zZrDNkDNnXFsRkSciEpOguItKUuxoV2m5FC0UbSYm6fyJKxB2VfclWKGQrZQtjmUVkxsjs5/fHMVcusxhjZs4117yfj8d5XOc651znfK7jmPnMd7UZhmEgIiIi4qLcrA5AREREpDgp2RERERGXpmRHREREXJqSHREREXFpSnZERETEpSnZEREREZemZEdERERcmpIdERERcWlKdkRERMSlKdkRKSKvvPIKNputRK7VoUMHOnToYH+/du1abDYb8+fPL5HrP/jgg9SsWbNErlVYycnJPPzww4SGhmKz2Rg6dKjVIeXr8OHD2Gw2ZsyYUSznz35G1q5dm+9xM2bMwGazcfjw4WKJQ8QKSnZEcpH9Az978fHxoVq1akRGRjJp0iTOnj1bJNc5ceIEr7zyCjt27CiS8xUlZ46tIMaOHcuMGTN47LHHmDVrFg888ECOY37++WdsNhsjR47M8zz79+/HZrMxfPjwIolr9uzZTJw4sUjOJSIFZIhIDtOnTzcAY/To0casWbOMTz75xBg7dqzRpUsXw2azGeHh4cbOnTsdPpOenm6cP3/+iq6zZcsWAzCmT59+RZ9LTU01UlNT7e/XrFljAMa8efOu6DyFjS0tLc1ISUkpsmsVh1atWhlt2rS57HENGjQwrr322jz3v/LKKwZgbNu2rUji6t69uxEeHp5je1ZWlnH+/HkjIyOjSK5zqexnZM2aNfkel5GRYZw/f97IysoqljhErKCSHZF8dO3alf79+zNo0CBGjBjB8uXLWbVqFQkJCdx5552cP3/efqyHhwc+Pj7FGs/ff/8NgJeXF15eXsV6rfx4enri7e1t2fULIiEhgeDg4Mse169fP/744w82b96c6/4vvviCBg0acOONN15VPOfOnct3f3YJoru7+1Vd52q5u7vj4+NTYlWyIiVByY7IFerYsSOjRo3iyJEjfPbZZ/btubXZWblyJW3btiU4OBh/f3/q16/PCy+8AJhtKFq2bAnAoEGD7FVm2W02OnToQJMmTdi2bRvt27fHz8/P/tlL2+xky8zM5IUXXiA0NJRy5cpx5513cvToUYdjatasyYMPPpjjsxef83Kx5dZm59y5czz99NOEhYXh7e1N/fr1eeeddzAMw+E4m83GkCFDWLhwIU2aNMHb25vGjRuzbNmy3G/4JRISEoiKiiIkJAQfHx+uu+46Pv30U/v+7LYphw4dYvHixfbY82qD0q9fP8CsXrrUtm3b2Lt3r/0YgKVLl9KuXTvKlStHQEAA3bt359dff3X43IMPPoi/vz8HDx6kW7duBAQE0K9fPzp06MDixYs5cuSIPa7s+5hXm53ff/+de++9l8qVK+Pr60v9+vV58cUX7fuPHDnC448/Tv369fH19aVixYr861//KnSbm9za7NhsNl555ZUcx176LGV/9vvvv+fJJ5+kcuXKBAcH8+9//5u0tDTOnDnDgAEDKF++POXLl+e5555zeD6y78E777zDu+++S3h4OL6+vtxyyy388ssvhfo+IgAeVgcgUho98MADvPDCC6xYsYJHHnkk12N+/fVX7rjjDpo1a8bo0aPx9vbmwIED/PDDDwA0bNiQ0aNH89JLLzF48GDatWsHwM0332w/x6lTp+jatSt9+vShf//+hISE5BvX66+/js1m4/nnnychIYGJEyfSuXNnduzYga+vb4G/X0Fiu5hhGNx5552sWbOGqKgorr/+epYvX86zzz7L8ePHeffddx2O//777/nqq694/PHHCQgIYNKkSfTu3ZuYmBgqVqyYZ1znz5+nQ4cOHDhwgCFDhlCrVi3mzZvHgw8+yJkzZ3jqqado2LAhs2bNYtiwYVSvXp2nn34agMqVK+d6zlq1anHzzTfz5Zdf8u677zqUrGQnQPfffz8As2bNYuDAgURGRvLmm2/y999/M2XKFNq2bcv27dsdEsCMjAwiIyNp27Yt77zzDn5+foSGhpKYmMixY8fs98Tf3z/P77tr1y7atWuHp6cngwcPpmbNmhw8eJBvv/2W119/HYAtW7awceNG+vTpQ/Xq1Tl8+DBTpkyhQ4cO7NmzBz8/vzzPX1yeeOIJQkNDefXVV9m8eTMff/wxwcHBbNy4kRo1ajB27FiWLFnC22+/TZMmTRgwYIDD52fOnMnZs2eJjo4mJSWF9957j44dO7J79+7L/h8QyZXF1WgiTim7zc6WLVvyPCYoKMi44YYb7O9ffvll4+L/Uu+++64BGCdPnszzHPm1i7nlllsMwJg6dWqu+2655Rb7++z2GNdcc42RlJRk3/7ll18agPHee+/Zt4WHhxsDBw687Dnzi23gwIEO7U4WLlxoAMZrr73mcNw999xj2Gw248CBA/ZtgOHl5eWwbefOnQZgvP/++zmudbGJEycagPHZZ5/Zt6WlpRkRERGGv7+/w3cPDw83unfvnu/5sk2ePNkAjOXLl9u3ZWZmGtdcc40RERFhGIZhnD171ggODjYeeeQRh8/GxcUZQUFBDtsHDhxoAMZ//vOfHNfKq83OoUOHctzv9u3bGwEBAcaRI0ccjr24Pc3ff/+d41ybNm0yAGPmzJn2bQVts5P97B86dMi+DTBefvnlHMde+ixlfzYyMtIhxoiICMNmsxmPPvqofVtGRoZRvXp1h2cu+x74+voax44ds2//8ccfDcAYNmxYvrGL5EXVWCKF5O/vn2+vrOz2Il9//TVZWVmFuoa3tzeDBg0q8PEDBgwgICDA/v6ee+6hatWqLFmypFDXL6glS5bg7u7Ok08+6bD96aefxjAMli5d6rC9c+fO1K5d2/6+WbNmBAYG8scff1z2OqGhofTt29e+zdPTkyeffJLk5GTWrVtXqPjvu+8+PD09Haqy1q1bx/Hjx+1VWCtXruTMmTP07duXP//80764u7vTqlUr1qxZk+O8jz32WKHiATh58iTr16/noYceokaNGg77Lq4uvbjELj09nVOnTlGnTh2Cg4P5+eefC339qxEVFeUQY6tWrTAMg6ioKPs2d3d3WrRokeu/+V133cU111xjf3/TTTfRqlWrYn+OxXUp2REppOTkZIfE4lL33Xcfbdq04eGHHyYkJIQ+ffrw5ZdfXlHic80111xRQ+S6des6vLfZbNSpU6fYx0w5cuQI1apVy3E/GjZsaN9/sUt/eQOUL1+ev/7667LXqVu3Lm5ujj+68rpOQVWsWJHIyEgWLFhASkoKYFZheXh4cO+99wJmF3Qw22xVrlzZYVmxYgUJCQkO5/Tw8KB69eqFigewJwFNmjTJ97jz58/z0ksv2dtKVapUicqVK3PmzBkSExMLff2rcem/b1BQEABhYWE5tuf2b37pcwxQr149jf0jhaY2OyKFcOzYMRITE6lTp06ex/j6+rJ+/XrWrFnD4sWLWbZsGXPnzqVjx46sWLGiQL1urqSdTUHl1csmMzOzxHoC5XUd45LGzCWpf//+LFq0iEWLFnHnnXfyv//9jy5dutjb+mQnqbNmzSI0NDTH5z08HH+cent750jKisMTTzzB9OnTGTp0KBEREQQFBWGz2ejTp0+hSxQLKjMzM9ftef375rbdyn9zKTuU7IgUwqxZswCIjIzM9zg3Nzc6depEp06dmDBhAmPHjuXFF19kzZo1dO7cuci792aXPmQzDIMDBw7QrFkz+7by5ctz5syZHJ89cuQI1157rf39lcQWHh7OqlWrOHv2rEPpzu+//27fXxTCw8PZtWsXWVlZDolEUVznzjvvJCAggNmzZ+Pp6clff/3l0Asru9qtSpUqdO7cudDXKeh9zf63uFwvpPnz5zNw4EDGjx9v35aSkpLrv3Fh5fbMpKWlERsbW2TXuNilzzHAvn37nH7UbnFeqsYSuULfffcdY8aMoVatWg6/DC91+vTpHNuuv/56AFJTUwEoV64cQJH9YsruxZJt/vz5xMbG0rVrV/u22rVrs3nzZtLS0uzbFi1alKOL+pXE1q1bNzIzM/nggw8ctr/77rvYbDaH61+Nbt26ERcXx9y5c+3bMjIyeP/99/H39+eWW24p9Ll9fX25++67WbJkCVOmTKFcuXL07NnTvj8yMpLAwEDGjh1Lenp6js+fPHmyQNcpV65cgaqXKleuTPv27fnkk0+IiYlx2HdxaYi7u3uO0pH3338/z1KXwqhduzbr16932Pbxxx8X6TUutnDhQo4fP25//9NPP/Hjjz8W2XMkZY9KdkTysXTpUn7//XcyMjKIj4/nu+++Y+XKlYSHh/PNN9/kO4jg6NGjWb9+Pd27dyc8PJyEhAQ+/PBDqlevTtu2bQHzl0hwcDBTp04lICCAcuXK0apVK2rVqlWoeCtUqEDbtm0ZNGgQ8fHxTJw4kTp16jh0j3/44YeZP38+t99+O/feey8HDx7ks88+c2gwfKWx9ejRg1tvvZUXX3yRw4cPc91117FixQq+/vprhg4dmuPchTV48GA++ugjHnzwQbZt20bNmjWZP38+P/zwAxMnTsy3DVVB9O/fn5kzZ7J8+XL69etnT/gAAgMDmTJlCg888AA33ngjffr0oXLlysTExLB48WLatGmTI9nLTfPmzZk7dy7Dhw+nZcuW+Pv706NHj1yPnTRpEm3btuXGG29k8ODB1KpVi8OHD7N48WL7NB533HEHs2bNIigoiEaNGrFp0yZWrVqVbxf+K/Xwww/z6KOP0rt3b2677TZ27tzJ8uXLqVSpUpFd42J16tShbdu2PPbYY6SmpjJx4kQqVqzIc889VyzXkzLAwp5gIk4ruwtt9uLl5WWEhoYat912m/Hee+85dHHOdmnX89WrVxs9e/Y0qlWrZnh5eRnVqlUz+vbta+zbt8/hc19//bXRqFEjw8PDw6Hr8S233GI0btw41/jy6nr+xRdfGCNGjDCqVKli+Pr6Gt27d8/RbdkwDGP8+PHGNddcY3h7extt2rQxtm7dmuOc+cV2addzwzC7Zg8bNsyoVq2a4enpadStW9d4++23c0w7ABjR0dE5YsqrS/yl4uPjjUGDBhmVKlUyvLy8jKZNm+baPf5Kup5ny8jIMKpWrWoAxpIlS3I9Zs2aNUZkZKQRFBRk+Pj4GLVr1zYefPBBY+vWrfZjBg4caJQrVy7XzycnJxv333+/ERwcbAD2+5hb13PDMIxffvnFuPvuu43g4GDDx8fHqF+/vjFq1Cj7/r/++st+P/z9/Y3IyEjj999/z3E/r6breWZmpvH8888blSpVMvz8/IzIyEjjwIEDeXY9v3TIhuz/G5cOw3Dpfcq+B2+//bYxfvx4IywszPD29jbatWuXY3oWkSthMwy1DhMREdO0adN4+OGHOXr06FX1JiuMw4cPU6tWLd5++22eeeaZEr22uDa12REREbvY2FhsNhsVKlSwOhSRIqM2OyIiQnx8PPPnz2fq1KlERERYMs2ESHFRyY6IiPDbb7/x7LPPUqdOnRyTkYqUdmqzIyIiIi5NJTsiIiLi0pTsiIiIiEtTA2XMOW9OnDhBQEBAkQ/fLyIiIsXDMAzOnj1LtWrV8p2LTskOcOLEiRyz8YqIiEjpcLlxoZTsgH2I+aNHjxIYGGhxNCIiIlIQSUlJhIWFXXaqGCU7/DMLcWBgoJIdERGRUuZyTVDUQFlERERcmpIdERERcWlKdkRERMSlKdkRERERl6ZkR0RERFyakh0RERFxaUp2RERExKUp2RERERGXpmRHREREXJqSHREREXFpSnZERETEpSnZEREREZemZEdERERcmpIdERERcWlKdkRERMSleVgdgIhIWdWuZUvi4+Ly3B8SGsqGLVtKMCIR16RkR0TEIvFxceyLispzf71p00owGhHXpWosERERcWlKdkRERMSlKdkRERERl6ZkR0RERFyakh0RERFxaUp2RERExKVZnuwcP36c/v37U7FiRXx9fWnatClbt2617zcMg5deeomqVavi6+tL586d2b9/v8M5Tp8+Tb9+/QgMDCQ4OJioqCiSk5NL+quIiIiIE7I02fnrr79o06YNnp6eLF26lD179jB+/HjKly9vP+att95i0qRJTJ06lR9//JFy5coRGRlJSkqK/Zh+/frx66+/snLlShYtWsT69esZPHiwFV9JREREnIylgwq++eabhIWFMX36dPu2WrVq2dcNw2DixImMHDmSnj17AjBz5kxCQkJYuHAhffr04bfffmPZsmVs2bKFFi1aAPD+++/TrVs33nnnHapVq1ayX0pERESciqUlO9988w0tWrTgX//6F1WqVOGGG27gv//9r33/oUOHiIuLo3PnzvZtQUFBtGrVik2bNgGwadMmgoOD7YkOQOfOnXFzc+PHH38suS8jIiIiTsnSZOePP/5gypQp1K1bl+XLl/PYY4/x5JNP8umnnwIQd2HOmJCQEIfPhYSE2PfFxcVRpUoVh/0eHh5UqFDBfsylUlNTSUpKclhERETENVlajZWVlUWLFi0YO3YsADfccAO//PILU6dOZeDAgcV23XHjxvHqq68W2/lFRETEeVhaslO1alUaNWrksK1hw4bExMQAEBoaCkB8fLzDMfHx8fZ9oaGhJCQkOOzPyMjg9OnT9mMuNWLECBITE+3L0aNHi+T7iIiIiPOxNNlp06YNe/fuddi2b98+wsPDAbOxcmhoKKtXr7bvT0pK4scffyQiIgKAiIgIzpw5w7Zt2+zHfPfdd2RlZdGqVatcr+vt7U1gYKDDIiIiIq7J0mqsYcOGcfPNNzN27FjuvfdefvrpJz7++GM+/vhjAGw2G0OHDuW1116jbt261KpVi1GjRlGtWjXuuusuwCwJuv3223nkkUeYOnUq6enpDBkyhD59+qgnloiIiFib7LRs2ZIFCxYwYsQIRo8eTa1atZg4cSL9+vWzH/Pcc89x7tw5Bg8ezJkzZ2jbti3Lli3Dx8fHfsznn3/OkCFD6NSpE25ubvTu3ZtJkyZZ8ZVERETEydgMwzCsDsJqSUlJBAUFkZiYqCotESkx9cLC2BcVlff+adPYpzaFInkq6O9vy6eLEBER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"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Histogram of Bench press</span>
<span class="n">sns</span><span class="o">.</span><span class="n">histplot</span><span class="p">(</span><span class="n">data</span><span class="p">[</span><span class="s1">'Bench'</span><span class="p">],</span> <span class="n">kde</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'yellow'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Distribution of Bench Press 225 pounds'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Bench Press (times)'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Frequency'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjsAAAHHCAYAAABZbpmkAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjguMiwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8g+/7EAAAACXBIWXMAAA9hAAAPYQGoP6dpAABuL0lEQVR4nO3dd3gU5drH8W86IZWWJr13UFAMoiJEQhELWFAUUJBXDajg4SjnqCAWFBUQpXgUwY6CiorSq9KECIiASAclhSIJNQnJvH/M7pIlhSRsMsnm97muuWZ25tmZezbtztPGwzAMAxERERE35Wl1ACIiIiLFScmOiIiIuDUlOyIiIuLWlOyIiIiIW1OyIyIiIm5NyY6IiIi4NSU7IiIi4taU7IiIiIhbU7IjIiIibk3JjpQqo0ePxsPDo0Su1bFjRzp27Oh4vWLFCjw8PJgzZ06JXH/AgAHUrl27RK5VVKdOnWLQoEFERETg4eHBk08+aXVIl6Vjx440b97c6jDEzXh4eDB69Girw5B8KNmRYjNz5kw8PDwcS4UKFYiKiiI2NpZJkyZx8uRJl1zn8OHDjB49ms2bN7vkfK5UmmMriFdeeYWZM2fy6KOP8vHHH/PAAw/kWbZ27do5vt4NGjRgxIgRHD9+vASjLj4X32NYWBjXX38933zzjdWhFdjSpUt56KGHaNiwIRUrVqRu3boMGjSIhIQEp3Jnzpxh8uTJdOnShcjISIKCgrjyyiuZOnUqmZmZTmX379/v9LlkX2bNmlWStyeSK2+rAxD3N2bMGOrUqUNGRgaJiYmsWLGCJ598kvHjx/Pdd9/RsmVLR9lnn32WZ555plDnP3z4MC+88AK1a9emdevWBX7fokWLCnWdosgvtvfee4+srKxij+FyLFu2jGuvvZZRo0YVqHzr1q156qmnADh37hzx8fFMnDiRlStX8ssvvxRnqCUm+z0ePnyYd999l169ejF16lQeeeQRi6O7tKeffprjx49z11130aBBA/bu3cs777zDvHnz2Lx5MxEREQDs3buXoUOH0rlzZ4YPH05wcDALFy7kscceY926dXz44Yc5zn3vvffSvXt3p33R0dElcl8i+VGyI8WuW7dutG3b1vF65MiRLFu2jFtuuYVbb72VHTt24O/vD4C3tzfe3sX7bXnmzBkqVqyIr69vsV7nUnx8fCy9fkEkJyfTtGnTApe/4ooruP/++x2vBw0aRGBgIG+88Qa7du2iQYMGxRFmibr4Hvv160f9+vWZMGFCnsnO+fPnycrKsvx7DmD8+PF06NABT88LFftdu3blxhtv5J133uGll14CICIigq1bt9KsWTNHuf/7v//joYceYsaMGTz33HPUr1/f6dxXXXWV02cjUlqoGUss0alTJ5577jkOHDjAJ5984tifW5+dxYsX06FDB0JDQwkMDKRRo0b85z//Acx+NldffTUADz74oKPqfObMmcCFPhrx8fHccMMNVKxY0fHei/vs2GVmZvKf//yHiIgIAgICuPXWWzl06JBTmdq1azNgwIAc781+zkvFllufndOnT/PUU09Ro0YN/Pz8aNSoEW+88QaGYTiV8/DwYMiQIcydO5fmzZvj5+dHs2bNWLBgQe4f+EWSk5MZOHAg4eHhVKhQgVatWjn9p27vv7Rv3z5++OEHR+z79+8v0Pmzs9cUXJzE/vHHH9x5551UrlyZChUq0LZtW7777junMvam0NWrVzN8+HCqVatGQEAAd9xxB0eOHMlxrfnz53PjjTcSFBREcHAwV199NZ999lmOctu3b+emm26iYsWKXHHFFYwbN67Q95X9/po0acK+ffuAC006b7zxBhMnTqRevXr4+fmxffv2At93RkYGL7zwAg0aNKBChQpUqVKFDh06sHjxYkeZxMREHnzwQapXr46fnx+RkZHcdtttl/wa3XDDDU6Jjn1f5cqV2bFjh2Nf1apVnRIduzvuuAPAqWx2p0+fJj09Pd8YLjZgwAACAwPZu3cvsbGxBAQEEBUVxZgxY3J87xfkZ8T+NbD/rGV3cf8a+++c3bt3M2DAAEJDQwkJCeHBBx/kzJkzTu9NS0tj2LBhVKtWjaCgIG699Vb++uuvHNc4efIkTz75JLVr18bPz4+wsDBuvvlmfv3110J9LuI6qtkRyzzwwAP85z//YdGiRTz88MO5ltm2bRu33HILLVu2ZMyYMfj5+bF7925Wr14NQJMmTRgzZgzPP/88gwcP5vrrrwegffv2jnMcO3aMbt260adPH+6//37Cw8Pzjevll1/Gw8ODp59+muTkZCZOnEhMTAybN2921EAVREFiy84wDG699VaWL1/OwIEDad26NQsXLmTEiBH8/fffTJgwwan8zz//zNdff81jjz1GUFAQkyZNonfv3hw8eJAqVarkGdfZs2fp2LEju3fvZsiQIdSpU4fZs2czYMAATpw4wRNPPEGTJk34+OOPGTZsGNWrV3c021SrVi3fe87IyODo0aOA2Yy1adMmxo8fzw033ECdOnUc5bZt28Z1113HFVdcwTPPPENAQABffvklt99+O1999ZXjD6rd0KFDqVSpEqNGjWL//v1MnDiRIUOG8MUXXzjKzJw5k4ceeohmzZoxcuRIQkND2bRpEwsWLOC+++5zlPvnn3/o2rUrvXr14u6772bOnDk8/fTTtGjRgm7duuV7f3nd86FDh3J85jNmzODcuXMMHjwYPz8/KleuXOD7Hj16NGPHjmXQoEFcc801pKamsnHjRn799VduvvlmAHr37s22bdsYOnQotWvXJjk5mcWLF3Pw4MFCd3w/deoUp06domrVqpcsm5iYCJBr2RdeeIERI0bg4eFBmzZtePnll+nSpUuBYsjMzKRr165ce+21jBs3jgULFjBq1CjOnz/PmDFjgML/jBTG3XffTZ06dRg7diy//vor77//PmFhYbz22muOMoMGDeKTTz7hvvvuo3379ixbtowePXrkONcjjzzCnDlzGDJkCE2bNuXYsWP8/PPP7Nixg6uuuqrIMcplMESKyYwZMwzA2LBhQ55lQkJCjCuvvNLxetSoUUb2b8sJEyYYgHHkyJE8z7FhwwYDMGbMmJHj2I033mgAxrRp03I9duONNzpeL1++3ACMK664wkhNTXXs//LLLw3AeOuttxz7atWqZfTv3/+S58wvtv79+xu1atVyvJ47d64BGC+99JJTuTvvvNPw8PAwdu/e7dgHGL6+vk77tmzZYgDG22+/neNa2U2cONEAjE8++cSxLz093YiOjjYCAwOd7r1WrVpGjx498j1f9rJAjuW6664zjh496lS2c+fORosWLYxz58459mVlZRnt27c3GjRo4Nhn/x6KiYkxsrKyHPuHDRtmeHl5GSdOnDAMwzBOnDhhBAUFGe3atTPOnj3rdK3s77N/P3z00UeOfWlpaUZERITRu3fvAt1jly5djCNHjhhHjhwxtmzZYvTp08cAjKFDhxqGYRj79u0zACM4ONhITk4u0n23atUq38/9n3/+MQDj9ddfv2TMBfHiiy8agLF06dJ8y6WlpRlNmzY16tSpY2RkZDj2HzhwwOjSpYsxdepU47vvvjMmTpxo1KxZ0/D09DTmzZt3yev379/f6TM0DPNz6dGjh+Hr6+v4+S/oz4j9a5Dbzx1gjBo1yvHa/jvnoYcecip3xx13GFWqVHG83rx5swEYjz32mFO5++67L8c5Q0JCjLi4uEvet5QcNWOJpQIDA/MdlRUaGgrAt99+W+TOvH5+fjz44IMFLt+vXz+CgoIcr++8804iIyP58ccfi3T9gvrxxx/x8vLi8ccfd9r/1FNPYRgG8+fPd9ofExNDvXr1HK9btmxJcHAwe/fuveR1IiIiuPfeex37fHx8ePzxxzl16hQrV64s8j20a9eOxYsXs3jxYubNm8fLL7/Mtm3buPXWWzl79iwAx48fZ9myZdx9992cPHmSo0ePcvToUY4dO0ZsbCy7du3i77//djrv4MGDnZo3r7/+ejIzMzlw4ABgNnWePHmSZ555hgoVKji99+Jm0cDAQKd+Jb6+vlxzzTWX/NzsFi1aRLVq1ahWrRqtWrVi9uzZPPDAA041AGDWvGSvCSvMfYeGhrJt2zZ27dqVawz+/v74+vqyYsUK/vnnnwLFnZdVq1bxwgsvcPfdd9OpU6d8yw4ZMoTt27fzzjvvODVL1qxZk4ULF/LII4/Qs2dPnnjiCTZt2kS1atUctYIFMWTIEMe2vak2PT2dJUuWAIX/GSmMi/tbXX/99Rw7dozU1FTHtYEc185tOobQ0FDWr1/P4cOHixyPuJaSHbHUqVOnnBKLi91zzz1cd911DBo0iPDwcPr06cOXX35ZqMTniiuuKFTH0Is70Xp4eFC/fv0i9VcpjAMHDhAVFZXj82jSpInjeHY1a9bMcY5KlSpd8o/fgQMHaNCgQY5+G3ldpzCqVq1KTEwMMTEx9OjRg//85z+8//77rFmzhvfffx+A3bt3YxgGzz33nCNpsC/2UV/Jycn53mulSpUAHPe6Z88egALNoVO9evUcCVBBPjc7e0K3ZMkS1qxZw9GjR/noo49yNHFmb7aDwt33mDFjOHHiBA0bNqRFixaMGDGC3377zXEuPz8/XnvtNebPn094eDg33HAD48aNczQxFdQff/zBHXfcQfPmzR1fn7y8/vrrvPfee7z44os5RlzlpnLlyjz44IPs3Lkz134tF/P09KRu3bpO+xo2bAjg+Nkr7M9IYVzqe+zAgQN4eno6/YMB0KhRoxznGjduHL///js1atTgmmuuYfTo0QVOpqV4qM+OWOavv/4iJSUlx4iO7Pz9/Vm1ahXLly/nhx9+YMGCBXzxxRd06tSJRYsW4eXldcnrFKafTUHlNfFhZmZmgWJyhbyuY1zUodNqnTt3BswahKFDhzoS1X/961/Exsbm+p6Lvydcea+Xey57QncpF3/fFea+b7jhBvbs2cO3337LokWLeP/995kwYQLTpk1j0KBBgFmj0LNnT+bOncvChQt57rnnGDt2LMuWLePKK6+8ZHyHDh2iS5cuhISE8OOPP+b7T8fMmTN5+umneeSRR3j22WcveW67GjVqAGatVvXq1Qv8vsuV389nXlz5PXb33Xc75l9atGgRr7/+Oq+99hpff/11kfqFyeVTzY5Y5uOPPwbI8xe/naenJ507d2b8+PFs376dl19+mWXLlrF8+XIg719sRXVx04FhGOzevdup02elSpU4ceJEjvde/J9lYWKrVasWhw8fztGs98cffziOu0KtWrXYtWtXjtoxV1/H7vz584BZiwc4/nv38fFx1AJdvOT3hzc39v+2f//9dxdG7lqFvW97zcjnn3/OoUOHaNmyZY5ZeuvVq8dTTz3FokWL+P3330lPT+fNN9+8ZCzHjh2jS5cupKWlsXDhQiIjI/Ms++233zJo0CB69erF5MmTC3XP9tqMS3VsBzMZvLj2488//wRw/OwV9GfEXitz8c/o5dT81KpVi6ysLEctot3OnTtzLR8ZGcljjz3G3Llz2bdvH1WqVOHll18u8vXl8ijZEUssW7aMF198kTp16tC3b988y+U28659cr60tDQAAgICgJy/2Irqo48+cvplOmfOHBISEpz+I6tXrx7r1q1zGmI7b968HEPUCxNb9+7dyczM5J133nHaP2HCBDw8PFz2H2H37t1JTEx0Gsl0/vx53n77bQIDA7nxxhtdch2777//HoBWrVoBEBYWRseOHXn33XdzzNoL5Dqk/FK6dOlCUFAQY8eO5dy5c07HSktNV2Hu+9ixY07HAgMDqV+/vuN7/syZMznus169egQFBTnK5OX06dN0796dv//+mx9//DHfuY9WrVpFnz59uOGGG/j0009zNH3mFrvd33//zQcffEDLli3zTaayy/69bxgG77zzDj4+Po7awYL+jAQHB1O1alVWrVrlVG7KlCkFiiM39nNPmjTJaf/EiROdXmdmZpKSkuK0LywsjKioqEt+baT4qBlLit38+fP5448/OH/+PElJSSxbtozFixdTq1YtvvvuuxwdSrMbM2YMq1atokePHtSqVYvk5GSmTJlC9erV6dChA2D+kg8NDWXatGkEBQUREBBAu3btcvSZKKjKlSvToUMHHnzwQZKSkpg4cSL169d3Gh4/aNAg5syZQ9euXbn77rvZs2cPn3zySY72/MLE1rNnT2666Sb++9//sn//flq1asWiRYv49ttvefLJJ3Ocu6gGDx7Mu+++y4ABA4iPj6d27drMmTOH1atXM3HixELXqmT3999/O+ZNSk9PZ8uWLbz77rtUrVqVoUOHOspNnjyZDh060KJFCx5++GHq1q1LUlISa9eu5a+//mLLli2Fum5wcDATJkxg0KBBXH311dx3331UqlSJLVu2cObMmVxn+7VCQe+7adOmdOzYkTZt2lC5cmU2btzoGMoMZo1H586dufvuu2natCne3t588803JCUl0adPn3xj6Nu3L7/88gsPPfQQO3bscJovJzAwkNtvvx0wa0FuvfVWPDw8uPPOO5k9e7bTeVq2bOmY/fzf//43e/bsoXPnzkRFRbF//37effddTp8+zVtvvVWgz6ZChQosWLCA/v37065dO+bPn88PP/zAf/7zH0fNUGF+RgYNGsSrr77KoEGDaNu2LatWrXLUFBVF69atuffee5kyZQopKSm0b9+epUuXsnv3bqdyJ0+epHr16tx55520atWKwMBAlixZwoYNGwpU6ybFxKJRYFIO2IcN2xdfX18jIiLCuPnmm4233nrLaYiz3cVDz5cuXWrcdtttRlRUlOHr62tERUUZ9957r/Hnn386ve/bb781mjZtanh7ezsNOb3xxhuNZs2a5RpfXkPPP//8c2PkyJFGWFiY4e/vb/To0cM4cOBAjve/+eabxhVXXGH4+fkZ1113nbFx48Yc58wvtouHnhuGYZw8edIYNmyYERUVZfj4+BgNGjQwXn/9dafh04ZhDp/NbWhrXkPiL5aUlGQ8+OCDRtWqVQ1fX1+jRYsWuQ7TvZyh556enkZYWJhx7733Og2Rt9uzZ4/Rr18/IyIiwvDx8TGuuOIK45ZbbjHmzJnjKJPX9AX2r9Xy5cud9n/33XdG+/btDX9/fyM4ONi45pprjM8//9xxPK/vh9y+Fnnd46U+D/uw57yGhRfkvl966SXjmmuuMUJDQw1/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GwcOHADMZo/du3cTFBREYGAggYGBVK5cmXPnzjk1dTRr1gwvLy/H68jISJKTkwHYvHkzXl5e3HjjjfnG0rJlS6f3A45z5OXee+8lMDCQoKAgvvrqK6ZPn+50nuy1Kvb7GTNmjONeAgMDefjhh0lISODMmTPcddddnD17lrp16/Lwww/zzTffOJq4br75ZmrVqkXdunV54IEH+PTTTzlz5kyesZ09exY/Pz9HU1Vh1a5dm6CgIMfr8PBwmjZtiqenp9M++2e0ZcsWTp06RZUqVZzub9++fY6v1fDhwxk0aBAxMTG8+uqruTZX+fv753tfIu5KzVgibiogIID69es7Xr///vuEhITw3nvv8dJLL3Hq1CnatGmT6widatWqObazN4WA2V/GPoTZ3rx0KdnPYU8QLjUMesKECcTExBASEuIUj11AQIDT61OnTvHCCy/Qq1evHGUrVKhAjRo12LlzJ0uWLGHx4sU89thjvP7666xcuZKgoCB+/fVXVqxYwaJFi3j++ecZPXo0GzZsyHXYeNWqVTlz5gzp6emO5r7CyO0zze9zPnXqFJGRkaxYsSLHuezxjR49mvvuu48ffviB+fPnM2rUKGbNmsUdd9zhKHv8+PFcP0sRd6dkR6Sc8PDwwNPTk7NnzwJw1VVX8cUXXxAWFkZwcHCRztmiRQuysrJYuXIlMTExrgyXiIgIp2TtUq666ip27tyZ73v8/f3p2bMnPXv2JC4ujsaNG7N161auuuoqvL29iYmJISYmhlGjRhEaGsqyZctyTZ5at24NwPbt2x3bAL6+vmRmZhY45oK66qqrSExMxNvbm9q1a+dZrmHDhjRs2JBhw4Zx7733MmPGDEeyY6+xu/LKK10en0hpp2YsETeVlpZGYmIiiYmJ7Nixg6FDh3Lq1CnHCKK+fftStWpVbrvtNn766Sf27dvHihUrePzxx/nrr78KdI3atWvTv39/HnroIebOnes4x5dfflmct5ar559/no8++ogXXniBbdu2sWPHDmbNmsWzzz4LmKOipk+fzu+//87evXv55JNP8Pf3p1atWsybN49JkyaxefNmDhw4wEcffURWVhaNGjXK9VrVqlXjqquu4ueff3baX7t2bVatWsXff/+do5P25YiJiSE6Oprbb7+dRYsWsX//ftasWcN///tfNm7cyNmzZxkyZAgrVqzgwIEDrF69mg0bNtCkSRPHOdatW4efnx/R0dEui0ukrFCyI+KmFixYQGRkJJGRkbRr144NGzYwe/ZsOnbsCEDFihVZtWoVNWvWpFevXjRp0oSBAwdy7ty5QtX0TJ06lTvvvJPHHnuMxo0b8/DDD3P69Oliuqu8xcbGMm/ePBYtWsTVV1/Ntddey4QJE6hVqxZgNve89957XHfddbRs2ZIlS5bw/fffU6VKFUJDQ/n666/p1KkTTZo0Ydq0aXz++ec0a9Ysz+sNGjQoRxPgmDFj2L9/P/Xq1XNpc5GHhwc//vgjN9xwAw8++CANGzakT58+HDhwgPDwcLy8vDh27Bj9+vWjYcOG3H333XTr1o0XXnjBcY7PP/+cvn37UrFiRZfFJVJWeBiGYVgdhIhIWXP27FkaNWrEF198UeprS44ePUqjRo3YuHEjderUsTockRKnmh0RkSLw9/fno48+cmlzVXHZv38/U6ZMUaIj5ZZqdkRERMStqWZHRERE3JqSHREREXFrSnZERETErSnZEREREbemZEdERETcmpIdERERcWtKdkRERMStKdkRERERt6ZkR0RERNza/wNWOjZF7vsEQQAAAABJRU5ErkJggg=="/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Histogram of Broad Jump</span>
<span class="n">sns</span><span class="o">.</span><span class="n">histplot</span><span class="p">(</span><span class="n">data</span><span class="p">[</span><span class="s1">'Broad Jump'</span><span class="p">],</span> <span class="n">kde</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'orange'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Distribution of Broad Jump'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Broad Jump (inches)'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Frequency'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAHHCAYAAABeLEexAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjguMiwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8g+/7EAAAACXBIWXMAAA9hAAAPYQGoP6dpAABpSElEQVR4nO3dd3wUdf7H8dem9wQCaZTQqxQBxQhngUhVULhTOFTwUH8K2FBUFCx4iqIi6iHcWcCO5WyHgtJVOkgHkV4kBUIKCaTP748hC0sSSMImk+y+n4/HPmZ2Znbm881C+PCtNsMwDERERETcmIfVAYiIiIhYTQmRiIiIuD0lRCIiIuL2lBCJiIiI21NCJCIiIm5PCZGIiIi4PSVEIiIi4vaUEImIiIjbU0IkIiIibk8JkUgVeOaZZ7DZbFXyrGuuuYZrrrnG/n7p0qXYbDa+/PLLKnn+iBEjaNSoUZU8q6IyMzO58847iYqKwmaz8eCDD1odktM0atSIESNGWB2GSI2jhEiknGbPno3NZrO//Pz8iImJoXfv3rzxxhucOHHCKc85cuQIzzzzDBs3bnTK/ZypOsdWFi+88AKzZ8/m3nvv5cMPP+S2224r9dpGjRoV+76bN2/OuHHjOH78eBVG7Vw2m40xY8ZYHYZIteFldQAiNdWkSZNo3LgxeXl5JCYmsnTpUh588EGmTp3Kd999R/v27e3XTpgwgccff7xc9z9y5AjPPvssjRo1omPHjmX+3E8//VSu51TE+WJ7++23KSwsrPQYLsbixYu54oorePrpp8t0fceOHXn44YcByM7OZv369UybNo1ly5axZs2aygxVRKqIEiKRCurbty9dunSxvx8/fjyLFy/m+uuvZ8CAAezYsQN/f38AvLy88PKq3L9uJ0+eJCAgAB8fn0p9zoV4e3tb+vyySE5Opk2bNmW+vl69etx6663293feeSdBQUG88sor7Nq1i+bNm5f62aysLAIDAy8qXhGpfGoyE3GiHj16MHHiRA4cOMBHH31kP15SH6IFCxbQvXt3wsLCCAoKomXLljzxxBOA2e/nsssuA+COO+6wN9fMnj0bMPsJXXLJJaxfv56rrrqKgIAA+2fP7UNUpKCggCeeeIKoqCgCAwMZMGAAhw4dcrimtP4nZ9/zQrGV1IcoKyuLhx9+mAYNGuDr60vLli155ZVXMAzD4bqiZpxvvvmGSy65BF9fX9q2bcv8+fNL/oGfIzk5mZEjRxIZGYmfnx8dOnTg/ffft58v6k+1b98+vv/+e3vs+/fvL9P9zxYVFQXgkOiOGDGCoKAg9uzZQ79+/QgODmbYsGHl+hnMmjWLHj16EBERga+vL23atGHGjBnFnm8YBv/85z+pX78+AQEBXHvttWzbtq3c5ShS1BR87s+i6Ge2dOlS+7GiP3+bN2/m6quvJiAggGbNmtn7qS1btoyuXbvi7+9Py5YtWbhwocM9i/4+/P7779x8882EhIQQHh7OAw88QHZ2doXLIHIxlBCJOFlRf5TzNV1t27aN66+/npycHCZNmsSrr77KgAEDWL58OQCtW7dm0qRJANx99918+OGHfPjhh1x11VX2e6SkpNC3b186duzItGnTuPbaa88b1/PPP8/333/PY489xv3338+CBQuIj4/n1KlT5SpfWWI7m2EYDBgwgNdee40+ffowdepUWrZsybhx4xg7dmyx63/99VdGjRrFkCFDmDJlCtnZ2QwePJiUlJTzxnXq1CmuueYaPvzwQ4YNG8bLL79MaGgoI0aM4PXXX7fH/uGHH1KnTh06duxoj71u3brnvXdeXh7Hjh3j2LFjHD58mP/9739MnTqVq666isaNGztcm5+fT+/evYmIiOCVV15h8ODB5foZzJgxg9jYWJ544gleffVVGjRowKhRo5g+fbrDdU899RQTJ06kQ4cOvPzyyzRp0oRevXqRlZV13rI4S2pqKtdffz1du3ZlypQp+Pr6MmTIED777DOGDBlCv379ePHFF8nKyuKvf/1riX3rbr75ZrKzs5k8eTL9+vXjjTfe4O67766S+EWKMUSkXGbNmmUAxtq1a0u9JjQ01Lj00kvt759++mnj7L9ur732mgEYR48eLfUea9euNQBj1qxZxc5dffXVBmDMnDmzxHNXX321/f2SJUsMwKhXr56RkZFhP/75558bgPH666/bj8XGxhrDhw+/4D3PF9vw4cON2NhY+/tvvvnGAIx//vOfDtf99a9/NWw2m7F79277McDw8fFxOLZp0yYDMN58881izzrbtGnTDMD46KOP7Mdyc3ONuLg4IygoyKHssbGxRv/+/c97v7OvBYq9unXrZhw7dqxY2QHj8ccfdzhenp/ByZMni8XQu3dvo0mTJvb3ycnJho+Pj9G/f3+jsLDQfvyJJ54wgBK/w3MBxujRo+3vi/5c79u3z+G6oj8/S5YssR8r+vP3ySef2I/9/vvvBmB4eHgYq1atsh//8ccfi/1ZKfr7MGDAAIdnjRo1ygCMTZs2XTB+EWdTDZFIJQgKCjrvaLOwsDAAvv322wp3QPb19eWOO+4o8/W33347wcHB9vd//etfiY6O5ocffqjQ88vqhx9+wNPTk/vvv9/h+MMPP4xhGMybN8/heHx8PE2bNrW/b9++PSEhIezdu/eCz4mKimLo0KH2Y97e3tx///1kZmaybNmyCpeha9euLFiwgAULFjB37lyef/55tm3bxoABA0qsYbv33nuLxVbWn0FRvzOA9PR0jh07xtVXX83evXtJT08HYOHCheTm5nLfffc5NMVW5fQBQUFBDBkyxP6+ZcuWhIWF0bp1a7p27Wo/XrRf0vc3evRoh/f33XcfQKX/mRQpiRIikUqQmZnpkHyc65ZbbqFbt27ceeedREZGMmTIED7//PNyJUf16tUrVwfqczv+2mw2mjVrVqH+M+Vx4MABYmJiiv08WrdubT9/toYNGxa7R61atUhNTb3gc5o3b46Hh+OvtdKeUx516tQhPj6e+Ph4+vfvzxNPPME777zDihUreOeddxyu9fLyon79+sViK+vPYPny5cTHxxMYGEhYWBh169a19w8rSoiKrj/3O61bty61atWqcDnLo379+sX6xYWGhtKgQYNix4ASv79z42/atCkeHh6V/mdSpCRKiESc7PDhw6Snp9OsWbNSr/H39+fnn39m4cKF3HbbbWzevJlbbrmF6667joKCgjI95+yaBGcpbfLIssbkDJ6eniUeN87pfGy1nj17AvDzzz87HPf19S2WlJXVnj176NmzJ8eOHWPq1Kl8//33LFiwgIceegigUqczKO93X9r3dDHfX1VNXipSEiVEIk724YcfAtC7d+/zXufh4UHPnj2ZOnUq27dv5/nnn2fx4sUsWbIEcP4/Drt27XJ4bxgGu3fvdhgRVqtWLdLS0op99tzalfLEFhsby5EjR4o1If7+++/2884QGxvLrl27iiUNzn5Okfz8fMCsDSxLbGX5Gfzvf/8jJyeH7777jv/7v/+jX79+xMfHF0t+i64/9zs9evToBWvSSlNUs3Tu938xNWsXcm78u3fvprCwsNrPdC6uSQmRiBMtXryY5557jsaNG9uH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Ji1btmTfvn32+xU1v9WtW7dM8Yi4EyVEIi7OZrPh4eHBqVOnSr0mJCSEmJgYli9f7nB8+fLltGnTBoAVK1YQGxvLk08+SZcuXWjevHmxWqfWrVsX67OzatWqcsVbt25dTpw44dAZ2JlD8s+NZ9WqVbRu3brU6y+99FK2b99+Uc8MDg6mUaNGLFq0qML36NSpE9u2baNRo0b2hLfoVZTc2mw2unXrxrPPPsuGDRvw8fHh66+/tt9j69ateHt707Zt24sqj4gr8rI6ABFxrpycHBITEwFITU3lX//6l7124XzGjRvH008/TdOmTenYsSOzZs1i48aNfPzxxwA0b96cgwcPMmfOHC677DK+//57h39sAR544AFGjBhBly5d6NatGx9//DHbtm2jSZMmZY6/a9euBAQE8MQTT3D//fezevVqZs+eXb4fwnl88cUXdOnShe7du/Pxxx+zZs0a3n333VKv7927N+PHjyc1NZVatWpV+LnPPPMM99xzDxEREfTt25cTJ06wfPnyMk+WOHr0aN5++22GDh3Ko48+Su3atdm9ezdz5szhnXfeYd26dSxatIhevXoRERHB6tWrOXr0qEOy98svv/CXv/ylzDVWIu5ENUQiLmb+/PlER0cTHR1N165dWbt2LV988QXXXHPNeT93//33M3bsWB5++GHatWvH/Pnz+e6772jevDkAAwYM4KGHHmLMmDF07NiRFStWMHHiRId73HLLLUycOJFHH32Uzp07c+DAAe69997zPreoScjLy/z/We3atfnoo4/44YcfaNeuHZ9++inPPPNMxX4YJXj22WeZM2cO7du354MPPuDTTz+114KVpF27dnTq1InPP//8op47fPhwpk2bxltvvUXbtm25/vrrHUbwXUhRDV5BQQG9evWiXbt2PPjgg4SFheHh4UFISAg///wz/fr1o0WLFkyYMIFXX32Vvn372u8xZ84c7rrrrosqh4irshnnNtaLiFShVatWERcXx9GjR6lTp06lPstms/H1119z4403lutz33//PePGjWPr1q0OnbZrknnz5vHwww+zefNme/IpImfob4WIWCI/P5/9+/fz8ssv06FDh0pPhi5G//792bVrF3/++ScNGjSwOpwKycrKYtasWUqGREqhvxkiYomtW7dy5ZVX0rFjRz744AOrw7mgBx980OoQLspf//pXq0MQqdbUZCYiIiJur2Y2houIiIg4kRIiERERcXtKiERERMTtKSESERERt6eESERERNyeEiIRERFxe0qIRERExO0pIRIRERG3p4RIRERE3N7/AwY1pIn2bFVsAAAAAElFTkSuQmCC"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Histogram of 3Cone</span>
<span class="n">sns</span><span class="o">.</span><span class="n">histplot</span><span class="p">(</span><span class="n">data</span><span class="p">[</span><span class="s1">'3Cone'</span><span class="p">],</span> <span class="n">kde</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'purple'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Distribution of 3Cone'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'3Cone (seconds)'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Frequency'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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ueT7pUuX4O7uLnE1REREdDMMBgNCQ0NveOsWhh1cvduyu7s7ww4REZGDudEUFE5QJiIiIllj2CEiIiJZY9ghIiIiWWPYISIiIllj2CEiIiJZY9ghIiIiWWPYISIiIllj2CEiIiJZY9ghIiIiWWPYISIiIllj2CEiIiJZY9ghIiIiWWPYISIiIllj2CEiIiJZY9ghIiIiWXOSugCiuqJnt55ITUm9bpuAwABs27mtlioiIqobGHaIaklqSirmD5t/3TZjl4ytpWqIiOoODmMRERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkaxJGnaMRiPeeOMNNGzYEHq9Ho0aNcL06dMhhLC0EULgzTffRFBQEPR6PaKjoxEXF2f1OpmZmRgyZAjc3d3h6emJUaNGIS8vr7bfDhEREdkhScPO+++/j3nz5uHzzz/HqVOn8P777+ODDz7AZ599ZmnzwQcfYM6cOZg/fz727t0LFxcX9O7dG0VFRZY2Q4YMwYkTJ7Bx40asWrUK27dvx5gxY6R4S0RERGRnnKQ8+a5du9C/f3/ExMQAABo0aIAffvgB+/btA2Du1Zk9ezZef/119O/fHwCwePFiBAQE4Pfff8egQYNw6tQprFu3Dvv370eHDh0AAJ999hn69u2Ljz76CMHBwdK8OSIiIrILkvbsdO3aFZs2bcKZM2cAAEePHsWOHTtw//33AwDOnz+PlJQUREdHW47x8PBA586dsXv3bgDA7t274enpaQk6ABAdHQ2lUom9e/fW4rshIiIieyRpz84rr7wCg8GAiIgIqFQqGI1GzJgxA0OGDAEApKSkAAACAgKsjgsICLDsS0lJgb+/v9V+JycneHt7W9r8V3FxMYqLiy3PDQaDzd4TERER2RdJe3Z++uknfP/991i2bBkOHTqERYsW4aOPPsKiRYtq9LwzZ86Eh4eH5REaGlqj5yMiIiLpSBp2XnzxRbzyyisYNGgQWrZsiWHDhuG5557DzJkzAQCBgYEAgNTUVKvjUlNTLfsCAwORlpZmtb+srAyZmZmWNv81depU5OTkWB6XLl2y9VsjIiIiOyFp2CkoKIBSaV2CSqWCyWQCADRs2BCBgYHYtGmTZb/BYMDevXsRFRUFAIiKikJ2djYOHjxoabN582aYTCZ07ty50vNqtVq4u7tbPYiIiEieJJ2z88ADD2DGjBmoX78+mjdvjsOHD2PWrFl46qmnAAAKhQKTJ0/Gu+++i8aNG6Nhw4Z44403EBwcjIceeggAEBkZiT59+mD06NGYP38+SktLMWHCBAwaNIgrsYiIiEjasPPZZ5/hjTfewDPPPIO0tDQEBwfj//7v//Dmm29a2rz00kvIz8/HmDFjkJ2dje7du2PdunXQ6XSWNt9//z0mTJiAXr16QalUYuDAgZgzZ44Ub4mIiIjsjEJce7niOspgMMDDwwM5OTkc0qIaE9EoAvOHzb9um7FLxuL02dO1VBERkWO72d/fvDcWERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJmpPUBRDJRc9uPZGaklrl/qTEpFqshoiIyjHsENlIakoq5g+bX+X+mBkxtVgNERGV4zAWERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJGsMOERERyRrDDhEREckaww4RERHJmpPUBRDZi57deiI1JbXK/QGBAdi2c1stVkRERLbAsEP0r9SUVMwfNr/K/WOXjK3FaoiIyFY4jEVERESyxrBDREREssawQ0RERLLGsENERESyxrBDREREssawQ0RERLLGsENERESyxrBDRERE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GyNGjEDv3r3xwAMP4NNPP0VycrJl/9GjRzFt2jSrc4wePRrJyckoKCjAkSNHEBISgiZNmlT5Xv87P6hbt26Ii4uD0Wis9L0qFAoEBgZa3uupU6fQqlUrq7qjoqKsXnPcuHFYvnw52rRpg5deegm7du2qUIter0dBQUGldRKRmZPUBRCR9DQaDcLDwwEA7du3x/79+/Hpp5/iyy+/tPzCP336dIVfxtWhVqutnisUCphMJgBAXl4egoKCsHXr1grHeXp6Vvp6Pj4+UCgUyMrKstq+YMECTJw4EevWrcOPP/6I119/HRs3bkSXLl2Ql5eHd955BwMGDKjwejqdDnq9vnpv7j+u915vxv3334+LFy9izZo12LhxI3r16oXx48fjo48+srTJzMyEn5+fTeolkiv27BBRBSaTCcXFxQCA++67D76+vvjggw8qbZudnQ0AiIyMxO7du616gnbu3Ak3NzeEhITc1HnbtWuHlJQUODk5ITw83Orh6+tb6TEajQbNmjWz9ERdq23btpg6dSp27dqFFi1aYNmyZZbzxMbGVjhHeHg4lEolWrVqhcuXL1e5rD4yMhI7d+602rZz5040adIEKpXqpt5rZGQkjh07hqKiIsu2PXv2VGjn5+eH4cOHY+nSpZg9eza++uorq/3Hjx9H27Ztb+qcRHUVww5RHTd16lRs374dFy5cwD///IOpU6di69atGDJkCADAxcUF33zzDVavXo0HH3wQf/31Fy5cuIADBw7gpZdewtixYwEAzzzzDC5duoRnn30Wp0+fxh9//IG33noLU6ZMgVJ5cz9qoqOjERUVhYceeggbNmzAhQsXsGvXLrz22ms4cOBAlcf17t0bO3bssDw/f/48pk6dit27d+PixYvYsGED4uLiEBkZCQB48803sXjxYrzzzjs4ceIETp06heXLl+P1118HAPTs2RM9evTAwIEDsXHjRpw/fx5r167FunXrAADPP/88Nm3ahOnTp+PMmTNYtGgRPv/8c7zwwgs3/bkPHjwYCoUCo0ePxsmTJ7FmzRqrHpvyOv/44w/Ex8fjxIkTWLVqleU9AEBBQQEOHjzo8BdTJKpxUk8aIiJpPfXUUyIsLExoNBrh5+cnevXqZbU6qtz+/fvFgAEDhJ+fn9BqtSI8PFyMGTNGxMXFWdrczNLzSZMmWb1u//79rVYTGQwG8eyzz4rg4GChVqtFaGioGDJkiEhISKjyPZw4cULo9XqRnZ0thBAiJSVFPPTQQyIoKMiyNPzNN9+0TJQWQoh169aJrl27Cr1eL9zd3UWnTp3EV199ZdmfkZEhRo4cKXx8fIROpxMtWrQQq1atsuwvX3quVqtF/fr1xYcffmhVU1hYmPjkk0+strVu3dpqddru3btF69athUajEW3atBG//PKL1QTl6dOni8jISKHX64W3t7fo37+/OHfunOX4ZcuWiaZNm1b5uRCRmUKIm5x9SERkxx599FG0a9cOU6dOlbqUWtOlSxdMnDgRgwcPlroUIrvGYSwikoUPP/wQrq6uUpdRa65cuYIBAwbgiSeekLoUIrvHnh0iIiKSNfbsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrDHsEBERkawx7BAREZGsMewQERGRrP0/fiGQBlFsR3IAAAAASUVORK5CYII="/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Histogram of Shuttle Run</span>
<span class="n">sns</span><span class="o">.</span><span class="n">histplot</span><span class="p">(</span><span class="n">data</span><span class="p">[</span><span class="s1">'Shuttle'</span><span class="p">],</span> <span class="n">kde</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'brown'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Distribution of Shuttle Run'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Shuttle Run (seconds)'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Frequency'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Compare distributions of numerical data across categories like player positions</span>
<span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">12</span><span class="p">,</span> <span class="mi">6</span><span class="p">))</span>
<span class="n">sns</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="s1">'Position'</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="s1">'BMI'</span><span class="p">,</span> <span class="n">data</span><span class="o">=</span><span class="n">data</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'BMI Distribution by Position'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xticks</span><span class="p">(</span><span class="n">rotation</span><span class="o">=</span><span class="mi">45</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Position'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'BMI'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+QAAAI7CAYAAABlQlFfAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjguMiwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8g+/7EAAAACXBIWXMAAA9hAAAPYQGoP6dpAAC01UlEQVR4nOzdfVzV9f3/8SccheMVILk4mMKgpS7spLXUE4u5sgtNs60xK6yclia0uazbmomecLDahV1sX9Cwq6U4i7lylq1lF57VQLP0d9TKSglKhS4IMBXQw/n94c4ZR1APcOBzDjzut5s35fN58zkvQM45r8/7/X69wtxut1sAAAAAAKBLhRsdAAAAAAAAPREJOQAAAAAABiAhBwAAAADAACTkAAAAAAAYgIQcAAAAAAADkJADAAAAAGAAEnIAAAAAAAxAQg4AAAAAgAFIyAEAAAAAMAAJOQAApzBjxgx9+9vf7pLH+va3v60ZM2Z4P37qqacUFhamrVu3dsnjjx8/XuPHj++Sx2quq7/OrvLGG28oLCxMb7zxxmnHfvLJJwoLC9NTTz3V6XEBAIIHCTkAoNN4Eq3mf84880z98Ic/1EsvvdRivGfMrbfe2ur1Fi5c6B3z5Zdfeo/PmDFD/fv3P2089913n08sffv2VUJCgqZMmaInn3xSDQ0N7f9im3nvvfd033336ZNPPgnI9QIpmGPrbDNmzPD5+UdFRen888/X0qVLA/azP53Vq1fr4Ycf7pLHAgAEv15GBwAA6P6WLFmipKQkud1uVVVV6amnntKkSZO0fv16TZ482Wes2WzW2rVrVVBQoIiICJ9zf/3rX2U2m1VfX9+heJYtW6b+/furoaFB+/bt08svv6yZM2fq4Ycf1gsvvKChQ4d6x65YsUJNTU1tuv57772nnJwcjR8/vk2z67t371Z4eOfeKz9VbP/617869bGDQWRkpB577DFJUk1NjdauXau7775bb7/9ttasWRPQx0pLS9ORI0d8/h+vXr1aO3fu1C9/+UufsYmJiTpy5Ih69+4d0BgAAMGNhBwA0OkmTpyo733ve96PZ82apbi4OP31r39tkZBfddVV+sc//qGXXnpJU6dO9R7/z3/+o7KyMl133XVau3Zth+L5yU9+okGDBnk/Xrx4sYqKinTzzTcrPT1dpaWl3nOdnSC53W7V19erT58+ioyM7NTHOp0Tb4B0R7169dL06dO9H2dmZmrs2LF65pln9OCDD2rw4MEBe6zw8HCZzWa/xoaFhfk9FgDQfbBkHQDQ5WJiYtSnTx/16tXyvvBZZ52ltLQ0rV692ud4UVGRzjvvPI0cObJTYsrIyNCtt96qzZs365VXXvEeb20P+Zo1a3ThhRdqwIABioqK0nnnnadHHnlE0vFl+unp6ZKkH/7wh97l0Z59xN/+9rc1efJkvfzyy/re976nPn366NFHH/Wea76H3OPw4cOaM2eOzjjjDEVFRenmm2/W119/7TMmLCxM9913X4vPbX7N08XW2h7yzz//3HsDxWw26/zzz9df/vIXnzGe/c9//OMfVVhYqLPPPluRkZG66KKL9Pbbb7f6/W7N6b7OW265RYMGDdLRo0dbfO4VV1yh4cOH+/1YHuHh4d6v2bOM35+vWTr1/wOp5R7y8ePH68UXX1R5ebn3e+/5v3WyPeSvvfaaLrnkEvXr108xMTGaOnWq3n//fZ8xnq0YH3/8sWbMmKGYmBhFR0frZz/7mQ4fPtzm7wkAoOswQw4A6HS1tbX68ssv5Xa79fnnn+vPf/6zvvnmG5+ZyuZuvPFGzZs3T99884369++vY8eOqbi4WPPnz+/wcvVTuemmm1RYWKh//etfuvzyy1sd88orr+iGG27QZZddpt/97neSpPfff19vvfWW5s2bp7S0NP3iF7/Qn/70J91777367ne/K0nev6XjS9NvuOEGzZkzR7fddttpE8k77rhDMTExuu+++7R7924tW7ZM5eXl3oTPX/7E1tyRI0c0fvx4ffzxx7rjjjuUlJSk4uJizZgxQzU1NZo3b57P+NWrV+vgwYOaM2eOwsLC9Pvf/14//vGPtXfvXr9WGpzu67zpppv09NNP6+WXX/ZZWVFZWanXXntNdrvd7+9Fc3v27JEknXHGGX5/zaf7f9CahQsXqra2Vp999pkeeughSTpl7YONGzdq4sSJSk5O1n333acjR47oz3/+s1JTU/Xuu++2uFH005/+VElJSbr//vv17rvv6rHHHtOZZ57pjQ8AEITcAAB0kieffNItqcWfyMhI91NPPdVivCR3VlaWu7q62h0REeFeuXKl2+12u1988UV3WFiY+5NPPnHb7Xa3JPcXX3zh/bxbbrnF3a9fv9PG09rnNvf111+7Jbl/9KMf+Vw7MTHR+/G8efPcUVFR7mPHjp30cYqLi92S3K+//nqLc4mJiW5J7n/+85+tnrvlllu8H3u+fxdeeKG7sbHRe/z3v/+9W5J73bp13mOS3Ha7/bTXPFVsP/jBD9w/+MEPvB8//PDDbknuVatWeY81Nja6bTabu3///u66ujq32+12l5WVuSW5zzjjDHd1dbV37Lp169yS3OvXr2/xWM35+3W6XC73kCFD3NOmTfP5/AcffNAdFhbm3rt37ykfx/P/5IsvvnB/8cUX7o8//tj929/+1h0WFua2Wq1t+pr9+X/w+uuvt/heX3311T7/nzw838Mnn3zSe2zUqFHuM8880/3VV195j/2///f/3OHh4e6bb77Ze8zz/3rmzJk+1/zRj37kPuOMM075PQEAGIsl6wCATpefn69XXnlFr7zyilatWqUf/vCHuvXWW/X3v/+91fEDBw7UVVddpb/+9a+Sjs+8XnzxxUpMTOzUOD2zlQcPHjzpmJiYGB06dMhnWXtbJSUl6corr/R7/OzZs31mmOfOnatevXppw4YN7Y7BHxs2bJDFYtENN9zgPda7d2/94he/0DfffKNNmzb5jJ82bZoGDhzo/fiSSy6RJO3du9evxzvd1xkeHq6MjAz94x//8PkZFRUV6eKLL1ZSUtJpH+PQoUP61re+pW9961v6zne+o3vvvVc2m03PPfdcm77mQPw/OJUDBw5o+/btmjFjhmJjY73HrVarLr/88lZ/9rfffrvPx5dccom++uor1dXVdUqMAICOIyEHAHS6MWPGaMKECZowYYIyMjL04osv6txzz9Udd9yhxsbGVj/nxhtv1CuvvKKKigo9//zzuvHGGzs9zm+++UaSNGDAgJOOyczM1LBhwzRx4kQNGTJEM2fO1D//+c82PY4/iWNz55xzjs/H/fv3V3x8fKe3LisvL9c555zTovK7Z4l7eXm5z/GEhASfjz3J+Yn73U/Gn6/z5ptv1pEjR7wJ9O7du/XOO+/opptu8usxzGaz9+aQw+HQp59+qrfeekvJycner8mfrzkQ/w9OxfM4rW1n+O53v6svv/xShw4d8jne0e8/AKDrkZADALpceHi4fvjDH+rAgQP66KOPWh1zzTXXKDIyUrfccosaGhr005/+tNPj2rlzpyTpO9/5zknHnHnmmdq+fbv+8Y9/6JprrtHrr7+uiRMn6pZbbvH7cfr06dPhWP3lcrm67LFMJlOrx91ud8Ae49xzz9WFF16oVatWSZJWrVqliIgIv/9/mEwm782hSy65REOGDGlXHIH4fxBoXfH9BwAEFgk5AMAQx44dk/S/WekT9enTR9dee63eeOMNXX755T5tyjrLypUrJem0y8kjIiI0ZcoUFRQUaM+ePZozZ46efvppffzxx5LUpkJr/jjxpsU333yjAwcO+BT1GjhwoGpqanzGNTY26sCBAz7H2hJbYmKiPvrooxZ92D/44APv+UDy5+uUjs+Sv/baazpw4IBWr16tq6++2mepfEe05Ws+3f+D1vj7/fc8zu7du1uc++CDDzRo0CD169fPr2sBAIIXCTkAoMsdPXpU//rXvxQREXHSCt+SdPfdd8tut2vRokWdHtPq1av12GOPyWaz6bLLLjvpuK+++srn4/DwcFmtVklSQ0ODJHkTpRMT5PYqLCz0afW1bNkyHTt2TBMnTvQeO/vss+VwOFp83okz5G2JbdKkSaqsrNQzzzzjPXbs2DH9+c9/Vv/+/fWDH/ygPV/OSfnzdUrSDTfcoLCwMM2bN0979+49abX+9vD3a/bn/0Fr+vXrp9ra2tPGER8fr1GjRukvf/mLz89q586d+te//qVJkya15csCAAQp2p4BADrdSy+95J1h/Pzzz7V69Wp99NFH+vWvf62oqKiTft7555+v888/P+Dx/O1vf1P//v3V2Nioffv26eWXX9Zbb72l888/X8XFxaf83FtvvVXV1dW69NJLNWTIEJWXl+vPf/6zRo0a5b25MGrUKJlMJv3ud79TbW2tIiMjdemll+rMM89sV7yNjY267LLL9NOf/lS7d+9WQUGBvv/97+uaa67xiev222/Xddddp8svv1z/7//9P7388sstVha0JbbZs2fr0Ucf1YwZM/TOO+/o29/+tv72t7/prbfe0sMPP3zKvfad9XVK0re+9S1dddVVKi4uVkxMjK6++uqAxeDv1+zP/4PWXHjhhXrmmWc0f/58XXTRRerfv7+mTJnS6tg//OEPmjhxomw2m2bNmuVtexYdHd1qz3kAQOghIQcAdLrFixd7/202mzVixAgtW7ZMc+bMMSSeuXPnemMZNGiQRo0apSeeeEI33nijIiMjT/m506dPV2FhoQoKClRTUyOLxaJp06bpvvvu8xYCs1gsWr58ue6//37NmjVLLpdLr7/+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pKS0OF9WVuYzDuioqqoq1dbWtvvzy8vLff5ur+joaCp0B7GGhoaAjgMQfMxms1+z2omJicx+dwMk5MApmEwm/frXv9bixYv19ddfa+nSpS3G3HPPPewh7oasVqssFouKiop89pBLUlNTk4qKihQfH0/LOwREVVWVpt90s442djyJysvL69Dn946I1KqVT5OUB6lvvvnG++/evXvr6NGjrX7cfFxX8GfPq783jdjzCqAnISEH/utkbyYsFotuv/12Pfvssz7Lk8844wylp6fLYrHoww8/9Pkc3kyEPpPJpMzMTNntdmVnZysjI0NJSUkqKytTUVGRSkpKlJOTw80YBERtba2ONjboSPIP1GQ2rjp2eH2ttHeTamtrSciD1JEjR7z/bp6Mn/hx83FdoS17Xk9304g9r+gMFEpDsCIhB/6rrQU0vvrqKy1fvrzVc7yZ6B7S0tKUk5OjgoICZWVleY/Hx8crJyeHPuQIuCZztJr6DTI6DASxfv36qb6+3q9xXel0e17bei0g0CiUhmBFQg78lz9vJvwtosGbie4jLS1NqampLVreMTPefi6XS7t375Yk7d69W2effTbfT8BPY8aM0UsvveT9eMiQIRowYIAOHjyozz77zGdcV/J3zytgFN7nIViRkAP/1ZY3ExTR6Flaa3mHUzvZ0sB3333XZ/vH0qVL9eSTT+qnP/3pSYsjsjQQ+J/Bgwf7fNw8CT/VOKCn430eghUJOQAg4NqyNLC6uvqk2z8klgaGEgp7dT7P6pJAjQMAGIuEHAAQcCcuDWxqatLdd9+tb775RlarVZMmTdLgwYO1f/9+bdiwQU6nUwMGDNAf/vAHn4r2nmshNFDYK/BOvMlx7NgxSdJZZ52lffv2tRjv+b06duwYBUcBIASQkAMAAu7EpYHvvPOOvvnmG5133nl6+OGHvUm31WrVFVdcoXnz5mnHjh06dOiQLrzwQqPCRgdR2CvwTnaTo7VkXJL2798vSSotLVVpaanPOW5yAEDwISEHAHS67du3S5J+9rOftZgBDw8P14wZM3TXXXdp+/btJOQhjMJegdfaapNf/vKXqq+vV//+/XXJJZfopZde0sSJE/Xvf/9b33zzjfr06aOHHnqoR682CT9S06MfH0DoICEHAHQZt9ttdAjAablcrqDprNDaTY57771Xixcv1jfffOOtuN688vqCBQs0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"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Visualize relationships between pairs of features</span>
<span class="n">sns</span><span class="o">.</span><span class="n">pairplot</span><span class="p">(</span><span class="n">data</span><span class="p">[[</span><span class="s1">'BMI'</span><span class="p">,</span> <span class="s1">'40yd'</span><span class="p">,</span> <span class="s1">'Vertical'</span><span class="p">,</span> <span class="s1">'Bench'</span><span class="p">,</span> <span class="s1">'Broad Jump'</span><span class="p">,</span> <span class="s1">'3Cone'</span><span class="p">,</span> <span class="s1">'Shuttle'</span><span class="p">,</span> <span class="s1">'drafted'</span><span class="p">]],</span> <span class="n">hue</span><span class="o">=</span><span class="s1">'drafted'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h3 id="Feature-Selection">Feature Selection<a class="anchor-link" href="#Feature-Selection">¶</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Scale the data</span>
<span class="n">X</span> <span class="o">=</span> <span class="n">data</span><span class="p">[[</span><span class="s1">'Ht'</span><span class="p">,</span> <span class="s1">'40yd'</span><span class="p">,</span> <span class="s1">'Vertical'</span><span class="p">,</span> <span class="s1">'Bench'</span><span class="p">,</span> <span class="s1">'Age'</span><span class="p">]]</span>  
<span class="n">y</span> <span class="o">=</span> <span class="n">data</span><span class="p">[</span><span class="s1">'drafted'</span><span class="p">]</span>  

<span class="c1"># Initialize the StandardScaler</span>
<span class="n">scaler</span> <span class="o">=</span> <span class="n">StandardScaler</span><span class="p">()</span>

<span class="c1"># Fit and transform the scaler on your data</span>
<span class="n">X_scaled</span> <span class="o">=</span> <span class="n">scaler</span><span class="o">.</span><span class="n">fit_transform</span><span class="p">(</span><span class="n">X</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Create a logistic regression classifier</span>
<span class="n">model</span> <span class="o">=</span> <span class="n">LogisticRegression</span><span class="p">(</span><span class="n">max_iter</span><span class="o">=</span><span class="mi">1000</span><span class="p">)</span>  

<span class="c1"># Create the RFE model and select 5 attributes</span>
<span class="n">rfe</span> <span class="o">=</span> <span class="n">RFE</span><span class="p">(</span><span class="n">model</span><span class="p">,</span> <span class="n">n_features_to_select</span><span class="o">=</span><span class="mi">5</span><span class="p">)</span>
<span class="n">rfe</span> <span class="o">=</span> <span class="n">rfe</span><span class="o">.</span><span class="n">fit</span><span class="p">(</span><span class="n">X_scaled</span><span class="p">,</span> <span class="n">y</span><span class="p">)</span>

<span class="c1"># Summarize the selection of the attributes</span>
<span class="nb">print</span><span class="p">(</span><span class="s1">'Selected features:'</span><span class="p">,</span> <span class="n">X</span><span class="o">.</span><span class="n">columns</span><span class="p">[</span><span class="n">rfe</span><span class="o">.</span><span class="n">support_</span><span class="p">])</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Selected features: Index(['Ht', '40yd', 'Vertical', 'Bench', 'Age'], dtype='object')
</pre>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h3 id="Data-Splitting">Data Splitting<a class="anchor-link" href="#Data-Splitting">¶</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">X_train</span><span class="p">,</span> <span class="n">X_test</span><span class="p">,</span> <span class="n">y_train</span><span class="p">,</span> <span class="n">y_test</span> <span class="o">=</span> <span class="n">train_test_split</span><span class="p">(</span><span class="n">X_scaled</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">test_size</span><span class="o">=</span><span class="mf">0.2</span><span class="p">,</span> <span class="n">random_state</span><span class="o">=</span><span class="mi">42</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h3 id="Model-Training">Model Training<a class="anchor-link" href="#Model-Training">¶</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">rf_model</span> <span class="o">=</span> <span class="n">RandomForestClassifier</span><span class="p">(</span><span class="n">random_state</span><span class="o">=</span><span class="mi">42</span><span class="p">)</span>
<span class="n">rf_model</span><span class="o">.</span><span class="n">fit</span><span class="p">(</span><span class="n">X_train</span><span class="p">,</span> <span class="n">y_train</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[ ]:</div>
<div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html" tabindex="0">
<style>#sk-container-id-1 {color: black;}#sk-container-id-1 pre{padding: 0;}#sk-container-id-1 div.sk-toggleable {background-color: white;}#sk-container-id-1 label.sk-toggleable__label {cursor: pointer;display: block;width: 100%;margin-bottom: 0;padding: 0.3em;box-sizing: border-box;text-align: center;}#sk-container-id-1 label.sk-toggleable__label-arrow:before {content: "▸";float: left;margin-right: 0.25em;color: #696969;}#sk-container-id-1 label.sk-toggleable__label-arrow:hover:before {color: black;}#sk-container-id-1 div.sk-estimator:hover label.sk-toggleable__label-arrow:before {color: black;}#sk-container-id-1 div.sk-toggleable__content {max-height: 0;max-width: 0;overflow: hidden;text-align: left;background-color: #f0f8ff;}#sk-container-id-1 div.sk-toggleable__content pre {margin: 0.2em;color: black;border-radius: 0.25em;background-color: #f0f8ff;}#sk-container-id-1 input.sk-toggleable__control:checked~div.sk-toggleable__content {max-height: 200px;max-width: 100%;overflow: auto;}#sk-container-id-1 input.sk-toggleable__control:checked~label.sk-toggleable__label-arrow:before {content: "▾";}#sk-container-id-1 div.sk-estimator input.sk-toggleable__control:checked~label.sk-toggleable__label {background-color: #d4ebff;}#sk-container-id-1 div.sk-label input.sk-toggleable__control:checked~label.sk-toggleable__label {background-color: #d4ebff;}#sk-container-id-1 input.sk-hidden--visually {border: 0;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);height: 1px;margin: -1px;overflow: hidden;padding: 0;position: absolute;width: 1px;}#sk-container-id-1 div.sk-estimator {font-family: monospace;background-color: #f0f8ff;border: 1px dotted black;border-radius: 0.25em;box-sizing: border-box;margin-bottom: 0.5em;}#sk-container-id-1 div.sk-estimator:hover {background-color: #d4ebff;}#sk-container-id-1 div.sk-parallel-item::after {content: "";width: 100%;border-bottom: 1px solid gray;flex-grow: 1;}#sk-container-id-1 div.sk-label:hover label.sk-toggleable__label {background-color: #d4ebff;}#sk-container-id-1 div.sk-serial::before {content: "";position: absolute;border-left: 1px solid gray;box-sizing: border-box;top: 0;bottom: 0;left: 50%;z-index: 0;}#sk-container-id-1 div.sk-serial {display: flex;flex-direction: column;align-items: center;background-color: white;padding-right: 0.2em;padding-left: 0.2em;position: relative;}#sk-container-id-1 div.sk-item {position: relative;z-index: 1;}#sk-container-id-1 div.sk-parallel {display: flex;align-items: stretch;justify-content: center;background-color: white;position: relative;}#sk-container-id-1 div.sk-item::before, #sk-container-id-1 div.sk-parallel-item::before {content: "";position: absolute;border-left: 1px solid gray;box-sizing: border-box;top: 0;bottom: 0;left: 50%;z-index: -1;}#sk-container-id-1 div.sk-parallel-item {display: flex;flex-direction: column;z-index: 1;position: relative;background-color: white;}#sk-container-id-1 div.sk-parallel-item:first-child::after {align-self: flex-end;width: 50%;}#sk-container-id-1 div.sk-parallel-item:last-child::after {align-self: flex-start;width: 50%;}#sk-container-id-1 div.sk-parallel-item:only-child::after {width: 0;}#sk-container-id-1 div.sk-dashed-wrapped {border: 1px dashed gray;margin: 0 0.4em 0.5em 0.4em;box-sizing: border-box;padding-bottom: 0.4em;background-color: white;}#sk-container-id-1 div.sk-label label {font-family: monospace;font-weight: bold;display: inline-block;line-height: 1.2em;}#sk-container-id-1 div.sk-label-container {text-align: center;}#sk-container-id-1 div.sk-container {/* jupyter's \\`normalize.less\\` sets \\`[hidden] { display: none; }\\` but bootstrap.min.css set \\`[hidden] { display: none !important; }\\` so we also need the \\`!important\\` here to be able to override the default hidden behavior on the sphinx rendered scikit-learn.org. See: https://github.com/scikit-learn/scikit-learn/issues/21755 */display: inline-block !important;position: relative;}#sk-container-id-1 div.sk-text-repr-fallback {display: none;}</style><div class="sk-top-container" id="sk-container-id-1"><div class="sk-text-repr-fallback"><pre>RandomForestClassifier(random_state=42)</pre><b>In a Jupyter environment, please rerun this cell to show the HTML representation or trust the notebook. <br/>On GitHub, the HTML representation is unable to render, please try loading this page with nbviewer.org.</b></div><div class="sk-container" hidden=""><div class="sk-item"><div class="sk-estimator sk-toggleable"><input checked="" class="sk-toggleable__control sk-hidden--visually" id="sk-estimator-id-1" type="checkbox"/><label class="sk-toggleable__label sk-toggleable__label-arrow" for="sk-estimator-id-1">RandomForestClassifier</label><div class="sk-toggleable__content"><pre>RandomForestClassifier(random_state=42)</pre></div></div></div></div></div>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h3 id="Model-Evaluation">Model Evaluation<a class="anchor-link" href="#Model-Evaluation">¶</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Predictions on the test set</span>
<span class="n">y_pred</span> <span class="o">=</span> <span class="n">rf_model</span><span class="o">.</span><span class="n">predict</span><span class="p">(</span><span class="n">X_test</span><span class="p">)</span>

<span class="c1"># Evaluate the model</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Accuracy:"</span><span class="p">,</span> <span class="n">accuracy_score</span><span class="p">(</span><span class="n">y_test</span><span class="p">,</span> <span class="n">y_pred</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">classification_report</span><span class="p">(</span><span class="n">y_test</span><span class="p">,</span> <span class="n">y_pred</span><span class="p">))</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Accuracy: 0.723667100130039
              precision    recall  f1-score   support

           0       0.62      0.60      0.61       556
           1       0.78      0.80      0.79       982

    accuracy                           0.72      1538
   macro avg       0.70      0.70      0.70      1538
weighted avg       0.72      0.72      0.72      1538

</pre>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="n">param_grid</span> <span class="o">=</span> <span class="p">{</span>
    <span class="s1">'n_estimators'</span><span class="p">:</span> <span class="p">[</span><span class="mi">100</span><span class="p">,</span> <span class="mi">200</span><span class="p">,</span> <span class="mi">300</span><span class="p">],</span>
    <span class="s1">'max_features'</span><span class="p">:</span> <span class="p">[</span><span class="s1">'sqrt'</span><span class="p">,</span> <span class="s1">'log2'</span><span class="p">,</span> <span class="kc">None</span><span class="p">],</span>
    <span class="s1">'max_depth'</span> <span class="p">:</span> <span class="p">[</span><span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">8</span><span class="p">],</span>
    <span class="s1">'criterion'</span> <span class="p">:[</span><span class="s1">'gini'</span><span class="p">,</span> <span class="s1">'entropy'</span><span class="p">]</span>
<span class="p">}</span>

<span class="n">CV_rfc</span> <span class="o">=</span> <span class="n">GridSearchCV</span><span class="p">(</span><span class="n">estimator</span><span class="o">=</span><span class="n">rf_model</span><span class="p">,</span> <span class="n">param_grid</span><span class="o">=</span><span class="n">param_grid</span><span class="p">,</span> <span class="n">cv</span><span class="o">=</span><span class="mi">5</span><span class="p">)</span>
<span class="n">CV_rfc</span><span class="o">.</span><span class="n">fit</span><span class="p">(</span><span class="n">X_train</span><span class="p">,</span> <span class="n">y_train</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[ ]:</div>
<div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html" tabindex="0">
<style>#sk-container-id-3 {color: black;}#sk-container-id-3 pre{padding: 0;}#sk-container-id-3 div.sk-toggleable {background-color: white;}#sk-container-id-3 label.sk-toggleable__label {cursor: pointer;display: block;width: 100%;margin-bottom: 0;padding: 0.3em;box-sizing: border-box;text-align: center;}#sk-container-id-3 label.sk-toggleable__label-arrow:before {content: "▸";float: left;margin-right: 0.25em;color: #696969;}#sk-container-id-3 label.sk-toggleable__label-arrow:hover:before {color: black;}#sk-container-id-3 div.sk-estimator:hover label.sk-toggleable__label-arrow:before {color: black;}#sk-container-id-3 div.sk-toggleable__content {max-height: 0;max-width: 0;overflow: hidden;text-align: left;background-color: #f0f8ff;}#sk-container-id-3 div.sk-toggleable__content pre {margin: 0.2em;color: black;border-radius: 0.25em;background-color: #f0f8ff;}#sk-container-id-3 input.sk-toggleable__control:checked~div.sk-toggleable__content {max-height: 200px;max-width: 100%;overflow: auto;}#sk-container-id-3 input.sk-toggleable__control:checked~label.sk-toggleable__label-arrow:before {content: "▾";}#sk-container-id-3 div.sk-estimator input.sk-toggleable__control:checked~label.sk-toggleable__label {background-color: #d4ebff;}#sk-container-id-3 div.sk-label input.sk-toggleable__control:checked~label.sk-toggleable__label {background-color: #d4ebff;}#sk-container-id-3 input.sk-hidden--visually {border: 0;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);height: 1px;margin: -1px;overflow: hidden;padding: 0;position: absolute;width: 1px;}#sk-container-id-3 div.sk-estimator {font-family: monospace;background-color: #f0f8ff;border: 1px dotted black;border-radius: 0.25em;box-sizing: border-box;margin-bottom: 0.5em;}#sk-container-id-3 div.sk-estimator:hover {background-color: #d4ebff;}#sk-container-id-3 div.sk-parallel-item::after {content: "";width: 100%;border-bottom: 1px solid gray;flex-grow: 1;}#sk-container-id-3 div.sk-label:hover label.sk-toggleable__label {background-color: #d4ebff;}#sk-container-id-3 div.sk-serial::before {content: "";position: absolute;border-left: 1px solid gray;box-sizing: border-box;top: 0;bottom: 0;left: 50%;z-index: 0;}#sk-container-id-3 div.sk-serial {display: flex;flex-direction: column;align-items: center;background-color: white;padding-right: 0.2em;padding-left: 0.2em;position: relative;}#sk-container-id-3 div.sk-item {position: relative;z-index: 1;}#sk-container-id-3 div.sk-parallel {display: flex;align-items: stretch;justify-content: center;background-color: white;position: relative;}#sk-container-id-3 div.sk-item::before, #sk-container-id-3 div.sk-parallel-item::before {content: "";position: absolute;border-left: 1px solid gray;box-sizing: border-box;top: 0;bottom: 0;left: 50%;z-index: -1;}#sk-container-id-3 div.sk-parallel-item {display: flex;flex-direction: column;z-index: 1;position: relative;background-color: white;}#sk-container-id-3 div.sk-parallel-item:first-child::after {align-self: flex-end;width: 50%;}#sk-container-id-3 div.sk-parallel-item:last-child::after {align-self: flex-start;width: 50%;}#sk-container-id-3 div.sk-parallel-item:only-child::after {width: 0;}#sk-container-id-3 div.sk-dashed-wrapped {border: 1px dashed gray;margin: 0 0.4em 0.5em 0.4em;box-sizing: border-box;padding-bottom: 0.4em;background-color: white;}#sk-container-id-3 div.sk-label label {font-family: monospace;font-weight: bold;display: inline-block;line-height: 1.2em;}#sk-container-id-3 div.sk-label-container {text-align: center;}#sk-container-id-3 div.sk-container {/* jupyter's \\`normalize.less\\` sets \\`[hidden] { display: none; }\\` but bootstrap.min.css set \\`[hidden] { display: none !important; }\\` so we also need the \\`!important\\` here to be able to override the default hidden behavior on the sphinx rendered scikit-learn.org. See: https://github.com/scikit-learn/scikit-learn/issues/21755 */display: inline-block !important;position: relative;}#sk-container-id-3 div.sk-text-repr-fallback {display: none;}</style><div class="sk-top-container" id="sk-container-id-3"><div class="sk-text-repr-fallback"><pre>GridSearchCV(cv=5, estimator=RandomForestClassifier(random_state=42),
             param_grid={'criterion': ['gini', 'entropy'],
                         'max_depth': [4, 5, 6, 7, 8],
                         'max_features': ['sqrt', 'log2', None],
                         'n_estimators': [100, 200, 300]})</pre><b>In a Jupyter environment, please rerun this cell to show the HTML representation or trust the notebook. <br/>On GitHub, the HTML representation is unable to render, please try loading this page with nbviewer.org.</b></div><div class="sk-container" hidden=""><div class="sk-item sk-dashed-wrapped"><div class="sk-label-container"><div class="sk-label sk-toggleable"><input class="sk-toggleable__control sk-hidden--visually" id="sk-estimator-id-5" type="checkbox"/><label class="sk-toggleable__label sk-toggleable__label-arrow" for="sk-estimator-id-5">GridSearchCV</label><div class="sk-toggleable__content"><pre>GridSearchCV(cv=5, estimator=RandomForestClassifier(random_state=42),
             param_grid={'criterion': ['gini', 'entropy'],
                         'max_depth': [4, 5, 6, 7, 8],
                         'max_features': ['sqrt', 'log2', None],
                         'n_estimators': [100, 200, 300]})</pre></div></div></div><div class="sk-parallel"><div class="sk-parallel-item"><div class="sk-item"><div class="sk-label-container"><div class="sk-label sk-toggleable"><input class="sk-toggleable__control sk-hidden--visually" id="sk-estimator-id-6" type="checkbox"/><label class="sk-toggleable__label sk-toggleable__label-arrow" for="sk-estimator-id-6">estimator: RandomForestClassifier</label><div class="sk-toggleable__content"><pre>RandomForestClassifier(random_state=42)</pre></div></div></div><div class="sk-serial"><div class="sk-item"><div class="sk-estimator sk-toggleable"><input class="sk-toggleable__control sk-hidden--visually" id="sk-estimator-id-7" type="checkbox"/><label class="sk-toggleable__label sk-toggleable__label-arrow" for="sk-estimator-id-7">RandomForestClassifier</label><div class="sk-toggleable__content"><pre>RandomForestClassifier(random_state=42)</pre></div></div></div></div></div></div></div></div></div></div>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [ ]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Save the best model from grid search</span>
<span class="n">joblib</span><span class="o">.</span><span class="n">dump</span><span class="p">(</span><span class="n">CV_rfc</span><span class="o">.</span><span class="n">best_estimator_</span><span class="p">,</span> <span class="s1">'optimized_random_forest_model.joblib'</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child jp-OutputArea-executeResult">
<div class="jp-OutputPrompt jp-OutputArea-prompt">Out[ ]:</div>
<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain" tabindex="0">
<pre>['optimized_random_forest_model.joblib']</pre>
</div>
</div>
</div>
</div>
</div>
</main>
</body>
</html>

`;