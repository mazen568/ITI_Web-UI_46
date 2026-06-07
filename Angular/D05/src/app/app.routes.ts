import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { WebComponent } from './components/web/web.component';
import { MobileComponent } from './components/mobile/mobile.component';

export const routes: Routes = [
    {
      path:'',
      component:LayoutComponent,
      children:[
        {
            path:'',
            component:HomeComponent
        },
        {
            path:'home',
            component:HomeComponent
        },
        {
            path:'about',
            component:AboutComponent
        },
        {
            path:'users',
            component:UsersComponent
        },
        {
            path:'users/:id',
            component:ProfileComponent
        },
        {
            path:'profile',
            component:ProfileComponent
        },
        {
            path:'tracks',
            component:TracksComponent,
            children:[
                {
                   path:'',
                   component:WebComponent
                },
                {
                    path:'web',
                    component:WebComponent
                 },
                {
                    path:'mobile',
                    component:MobileComponent
                 },
            ]
        },
      ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path:"**",
        component:NotfoundComponent

    },
    //not found has to be the last route in the array because it will match any path that is not matched by the previous routes ****rule
];
