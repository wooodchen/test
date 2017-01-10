import { Injectable } from '@angular/core';

export class BetterLoggerService{
    private logs:string[] = [];
    log(msg:string){
        this.logs.push(msg);
        console.warn('From better logger class:' + msg);
    }
}