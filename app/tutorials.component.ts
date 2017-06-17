import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2>My new component</h2>
                <h4>Header 4 from Tutorials Component</h4>`,
    styles: [`h4{
        color: red;
    }`]            
})

export class TutorialsComponent { }