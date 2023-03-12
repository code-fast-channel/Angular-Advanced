import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[OnlyDecimal]'
})
export class OnlyDecimal {
    private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
constructor(private el: ElementRef) {
}
@HostListener('keydown', ['$event'])
onKeyDown(event: KeyboardEvent) {
  // Allow Backspace, tab, end, and home keys
  if (this.specialKeys.indexOf(event.key) !== -1) {
    return;
  }
  let current: string = this.el.nativeElement.value;
  const position = this.el.nativeElement.selectionStart;
  const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
  if (next && !String(next).match(this.regex)) {
    event.preventDefault();
  }
}
@HostListener('input', ['$event'])
public onInput(event:any) {
  let val: string = this.el.nativeElement.value;
  const position = this.el.nativeElement.selectionStart;
  if(event.data == '.' && val.split('.').length > 2){
    console.log("This restricts the additional decimal.")
    this.el.nativeElement.value = val.slice(0, position-1);
  }
}

}