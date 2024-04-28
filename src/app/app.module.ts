import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxPayPalModule } from 'ngx-paypal';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllProductsComponent,
    ViewProductsComponent,
    CartComponent,
    WishlistComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
