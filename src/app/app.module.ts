import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [],
    bootstrap: [], 
    imports: [], 
        providers: [provideHttpClient(withInterceptorsFromDi())] 
    })
export class AppModule { }
