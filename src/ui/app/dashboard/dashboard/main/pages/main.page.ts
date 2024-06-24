import { Component } from '@angular/core';
import { MainModule } from '../main.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [ MainModule ],
  templateUrl: './main.page.html',
})
export class MainPage {}
