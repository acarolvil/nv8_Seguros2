import { Injectable } from '@angular/core';
import { Header } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwipeService {
private messageSource = new BehaviorSubject<string>('')
  constructor(
    private header: Header
  ) { }

  setDirection(message: string){
    this.messageSource.next(message)
  }

  // public swipePrevious(){
  //   this.header.setMenuAside(false)
  //   this.setDirection('previous')
  // }

  // public swipeNext(){
  //   this.header.setMenuAside(false)
  //   this.setDirection('next')
  // }
}
