import { Directive, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { MessageBoxComponent } from './message-box.component';

@Directive({
    selector: '[messageBox]'
})

export class MessageBoxDirective {

    constructor(private viewContainerRef : ViewContainerRef, private factoryResolver : ComponentFactoryResolver){

    }

    createDialog(box : {new () : MessageBoxComponent}) : ComponentRef<MessageBoxComponent> {
        this.viewContainerRef.clear();
        let dialogComponentFactory = this.factoryResolver.resolveComponentFactory(box);
        let dialogComponentRef = this.viewContainerRef.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(
            () => {
                dialogComponentRef.destroy();
            }
        );
        return dialogComponentRef;
    }
}