import { Component, EventEmitter, HostListener, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnDestroy {
  @Input() titulo_banner: string = '';
  @Input() back: string = '';

    constructor(
    ) {

    }

    ngOnDestroy(): void {

    }

    ngAfterViewInit(): void {
    }


}
