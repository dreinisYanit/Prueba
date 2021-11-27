import { Component, HostBinding, OnInit, ViewChild } from '@angular/core'; //CORE
import { FormBuilder, FormGroup } from '@angular/forms'; //REACTIVOS
import { OverlayContainer } from '@angular/cdk/overlay'; //THEMES
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';
  @HostBinding('class') componentCssClass : any;
  form: FormGroup;
  over:OverlayContainer;
  switch:boolean;

  constructor(over:OverlayContainer, formBuilder:FormBuilder) 
  {
    this.over = over;
    this.build(formBuilder);
  }

  ngOnInit(){
    this.form.controls.switchTheme.valueChanges.subscribe(
      data => {
        this.switch = data;
        this.onSetTheme(data);
      }
    );
  }

  controls(){
    return this.form.controls;
  }

  private build(fb:FormBuilder){
    this.form = fb.group({
      switchTheme: this.switch,
    });
  }
  
  private onSetTheme(o:boolean){
    this.over.getContainerElement().classList.add(o?'dark-theme':'light-theme');
    this.componentCssClass = o?'dark-theme':'light-theme';
  }

}
