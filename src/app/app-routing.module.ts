import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/libs/components/left-toolbar/sub-components/about-us/about-us.component';

// const routes: Routes = [];

const routes: Routes = [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: 'about-us',
      component: AboutUsComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
