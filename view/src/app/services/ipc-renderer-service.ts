import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export abstract class IpcRendererService {

    abstract on(channel: string): Observable<any>;
    abstract send(channel: string, data?: any): void;
    abstract invoke(channel: string, ...data: any): Observable<any>;

}
