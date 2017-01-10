import { Injectable } from '@angular/core';

export class LoggerService{
    private logs:string[] = [];
    log(msg:string){
        this.logs.push(msg);
        console.warn('From logger class:' + msg);
    }
}