import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
// Конвертер в доллары
var currency = prompt('Введите количество средств в гривне!');
alert('Сейчас будет выполнено конвертирование в доллары!');
var newCurrensy = currency / 26.36;
console.log(newCurrensy.toFixed(2));