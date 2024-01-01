import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthenComponent } from "./pages/authen/authen.component";
import { MainComponent } from "./pages/main/main.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        AuthenComponent,
        MainComponent
    ]
})
export class AppComponent {
  title = 'assignment-1';
}
