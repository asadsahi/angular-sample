import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  { path: '', component: TodoComponent, pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
