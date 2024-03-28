import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { HistoryComponent } from './components/history/history.component';


const routes: Routes = [
  { path:'', component:PageComponent },
  { path:'history', component:HistoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
