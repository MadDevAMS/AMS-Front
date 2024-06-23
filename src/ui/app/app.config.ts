import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
import { UserService } from './shared/services/user.service';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(UsuarioDataModule, UserService),
    provideRouter(routes), 
    provideAnimationsAsync(), 
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic'
      }
    },
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: {
        animation: {
          enterDuration: 300,
          exitDuration: 300
        }
      } as RippleGlobalOptions
    }
  ],
};
