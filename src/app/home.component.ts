import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template:`
    <section class="section-home">
        <div class="home-container">
            <div class="home-content">
                <div class="intro">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit optio repudiandae 
                        eaque asperiores, reprehenderit, obcaecati nostrum nisi enim perspiciatis harum quidem sunt 
                        blanditiis laborum ab, laudantium architecto rem laboriosam iusto.
                    </p>
                    <div class="logo">
                        <img src="https://www.fillmurray.com/640/360" alt="">
                    </div>
                </div>
                <div class="intro-reverse">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit optio repudiandae 
                        eaque asperiores, reprehenderit, obcaecati nostrum nisi enim perspiciatis harum quidem sunt 
                        blanditiis laborum ab, laudantium architecto rem laboriosam iusto.
                    </p>
                    <div class="logo">
                        <img src="https://www.fillmurray.com/640/360" alt="">
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    `,
    styleUrls:['home.component.css']
})

export class HomeComponent {

}