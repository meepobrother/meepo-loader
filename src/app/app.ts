import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoaderService, LOADER_CONFIG_TOKEN, SystemLoaderConfig } from './loader';
@NgModule({
    providers: [
        LoaderService
    ],
})
export class LoaderModule {
    public static forRoot(cfg: SystemLoaderConfig): ModuleWithProviders {
        return {
            ngModule: LoaderModule,
            providers: [
                {
                    provide: LOADER_CONFIG_TOKEN,
                    useValue: cfg
                }
            ]
        }
    }
}
export { LoaderService } from './loader';
