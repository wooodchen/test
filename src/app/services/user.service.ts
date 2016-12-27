import { Injectable } from '@angular/core';

import { Users } from '../mock/user-data.mock';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class UserService{
    constructor(private LoggerService:LoggerService){

    }
    getUsers(){
        this.LoggerService.log('get users');
        return Users;
    }
}