import { Component } from "@angular/core";

@Component({
    selector:'not-found',
    template:`
    <section class="not-found">
        <div>
            <h1>Page Not Found</h1>
            <h3><a routerLink="/"> &#8592; Go to home page </a></h3>
        </div>
    </section>    
    `,
    styleUrls:['not-found.component.css']
})

export class NotFoundComponent {

}