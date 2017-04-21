import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { authHttpServiceFactory, AuthGuard, AuthService } from './auth';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthGuard,
    AuthService,
    UserService
  ]
})
export class CoreModule {}
