/// <reference types="react" />
import { VDomRenderer } from '@jupyterlab/apputils';
import { CommandRegistry } from '@phosphor/commands';
import { Token, ReadonlyJSONObject } from '@phosphor/coreutils';
import { IDisposable } from '@phosphor/disposable';
export declare class Custom extends VDomRenderer<any> {
    constructor(options: ICustom.IOptions);
    change: () => void;
    showModal: () => void;
    render(): JSX.Element;
    private _commands;
    private _callback;
    private _cwd;
}
export declare const ICustom: Token<ICustom>;
export declare namespace ICustom {
    interface IOptions {
        cwd: string;
        commands: CommandRegistry;
        callback: (widget: string) => void;
    }
    interface IItemOptions {
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
