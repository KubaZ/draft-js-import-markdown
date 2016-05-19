'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateFromMarkdown;

var _draftJsImportElement = require('draft-js-import-element');

var _remark = require('remark');

var _remark2 = _interopRequireDefault(_remark);

var _remarkHtml = require('remark-html');

var _remarkHtml2 = _interopRequireDefault(_remarkHtml);

var _parseHTML = require('./parseHTML');

var _parseHTML2 = _interopRequireDefault(_parseHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markdownProcessor = (0, _remark2.default)().use(_remarkHtml2.default);

function stateFromMarkdown(markdown) {
  var htmlString = markdownProcessor.process(markdown);
  // temporary fix for removing inner paragraph from blockquote
  htmlString = htmlString.replace(/\n/g, '').replace(/<blockquote><p>(.+)<\/p><\/blockquote>/g, '<blockquote>$1</blockquote>');
  return (0, _draftJsImportElement.stateFromElement)((0, _parseHTML2.default)(htmlString));
}