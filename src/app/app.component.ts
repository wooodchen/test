import { Component } from '@angular/core';

import { User } from './classes/User';
import { LoggerService } from './services/logger.service';
import { BetterLoggerService } from './services/better-logger.service';
import { UserService } from './services/user.service';

// 为 AppComponent 组件类添加注解
@Component({
    selector: 'my-app',
    templateUrl: './app/templates/main.tmpl.html',
    providers:[
        [{provide:LoggerService, useClass:BetterLoggerService}],
        UserService
    ]
})

export class AppComponent {
    users:User[];
    constructor(private UserService:UserService){
        this.users = UserService.getUsers();
    }
}