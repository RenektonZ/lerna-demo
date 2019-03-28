import React from 'react';
import { VDomRenderer, Dialog, showDialog } from '@jupyterlab/apputils';
import { CommandRegistry } from '@phosphor/commands';
// import { Widget } from '@phosphor/widgets';
import { Token, ReadonlyJSONObject } from '@phosphor/coreutils';
import { IDisposable } from '@phosphor/disposable';
export class Custom extends VDomRenderer<any> {
  constructor(options: ICustom.IOptions) {
    super();
    this._cwd = options.cwd;
    this._callback = options.callback;
    this._commands = options.commands;
    // this.addClass(LAUNCHER_CLASS);
  }

  change = () => {
    console.log(this._cwd);
    console.log(this._callback);
    this._callback('str');
    console.log( this._commands);
  }
  showModal = () => {
    showDialog({
      title: '弹框标题',
      body: <div style={{width: 400}}>弹框内容</div>,
      buttons: [Dialog.okButton()]
    });
  }
  render() {
    return (
      <div>
        <div>新建一个杨浩</div>
        <div>新建一个杨浩</div>
        <div>新建一个杨浩</div>
        <div>新建一个杨浩</div>
        <div>新建一个杨浩</div>
        <div>新建一个杨浩</div>
        <div>新建一个杨浩</div>
        <button onClick={this.change}>修改title状态</button>
        <button onClick={this.showModal}>打开弹窗</button>
      </div>
    );
  }
  private _commands: CommandRegistry;
  private _callback: (widget: string) => void;
  private _cwd = '';
}
export const ICustom = new Token<ICustom>('@jupyterlab/launcher:ILauncher');
export namespace ICustom {
  export interface IOptions {
    cwd: string;
    commands: CommandRegistry;
    callback: (widget: string) => void;
  }
  export interface IItemOptions {
    command: string;
    args?: ReadonlyJSONObject;
    category?: string;
    rank?: number;
    kernelIconUrl?: string;
  }
}
export interface ICustom {
  add(options: ICustom.IItemOptions): IDisposable;
}

