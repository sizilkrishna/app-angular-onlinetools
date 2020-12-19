import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HashgenComponent } from './components/projects/hashgen/hashgen.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { EclipseComponent } from './components/projects/eclipse/eclipse.component';
import { ThebookComponent } from './components/projects/thebook/thebook.component';
import { TypingComponent } from './components/projects/typing/typing.component';

const routes: Routes =  [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'projects', 
    children: [
      { path: '', component: ProjectsComponent , canActivate: [AuthGuard] },
      { path: 'sjcl', component: HashgenComponent, canActivate: [AuthGuard]  },
      { path: 'eclipse', component: EclipseComponent, canActivate: [AuthGuard]  },
      { path: 'thebook', component: ThebookComponent, canActivate: [AuthGuard]  },
      { path: 'typing', component: TypingComponent, canActivate: [AuthGuard]  },

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
