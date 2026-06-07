import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-two',
  imports: [],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TwoComponent {


  get dis(){
    console.log("two component");
    return ''
    
   }
}
