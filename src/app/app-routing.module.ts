import { GameGaborComponent } from './game-gabor/game-gabor.component';
import { GameMatch3Component } from './game-match3/game-match3.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundBackgroundComponent } from './page-not-found-background/page-not-found-background.component';

const routes: Routes = [
  { path: '', children: [
  { path: 'gabor', component: GameGaborComponent },
  { path: 'match3', component: GameMatch3Component },
  { path: '',   redirectTo: '/gabor', pathMatch: 'full' },
  { path: '', component: MenuComponent, outlet: 'menu' },
]},
  { path: '**', children: [
    { path: '', component: PageNotFoundBackgroundComponent },
    { path: '', component: PageNotFoundComponent, outlet: 'menu' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
