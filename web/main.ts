import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
//noinspection TypeScriptCheckImport

// depending on the env mode, enable prod mode or add debugging modules
//noinspection TypeScriptUnresolvedVariable
if (process.env.ENV === 'build') {
    enableProdMode();
}

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}
