"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const apputils_1 = require("@jupyterlab/apputils");
// import { Widget } from '@phosphor/widgets';
const coreutils_1 = require("@phosphor/coreutils");
class Custom extends apputils_1.VDomRenderer {
    constructor(options) {
        super();
        this.change = () => {
            console.log(this._cwd);
            console.log(this._callback);
            this._callback('str');
            console.log(this._commands);
        };
        this.showModal = () => {
            apputils_1.showDialog({
                title: '弹框标题',
                body: react_1.default.createElement("div", { style: { width: 400 } }, "\u5F39\u6846\u5185\u5BB9"),
                buttons: [apputils_1.Dialog.okButton()]
            });
        };
        this._cwd = '';
        this._cwd = options.cwd;
        this._callback = options.callback;
        this._commands = options.commands;
        // this.addClass(LAUNCHER_CLASS);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null, "\u65B0\u5EFA\u4E00\u4E2A\u6768\u6D69"),
            react_1.default.createElement("div", null, "\u65B0\u5EFA\u4E00\u4E2A\u6768\u6D69"),
            react_1.default.createElement("div", null, "\u65B0\u5EFA\u4E00\u4E2A\u6768\u6D69"),
            react_1.default.createElement("div", null, "\u65B0\u5EFA\u4E00\u4E2A\u6768\u6D69"),
            react_1.default.createElement("div", null, "\u65B0\u5EFA\u4E00\u4E2A\u6768\u6D69"),
            react_1.default.createElement("div", null, "\u65B0\u5EFA\u4E00\u4E2A\u6768\u6D69"),
            react_1.default.createElement("div", null, "\u65B0\u5EFA\u4E00\u4E2A\u6768\u6D69"),
            react_1.default.createElement("button", { onClick: this.change }, "\u4FEE\u6539title\u72B6\u6001"),
            react_1.default.createElement("button", { onClick: this.showModal }, "\u6253\u5F00\u5F39\u7A97")));
    }
}
exports.Custom = Custom;
exports.ICustom = new coreutils_1.Token('@jupyterlab/launcher:ILauncher');
