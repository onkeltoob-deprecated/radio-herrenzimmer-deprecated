import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { HomeComponent }   from './component/home/home.component';
import { RouterExampleComponent }     from './component/router-example/router-example.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const appRoutes: Routes = [
    { path: 'router-example', component: RouterExampleComponent },
    { path: 'music', component: HomeComponent },
    { path: '',   redirectTo: '/music', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}