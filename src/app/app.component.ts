import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeCapitals = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  length = 0

  onChangeLength(event: Event) {
    const parsedValue = parseInt((event.target as HTMLInputElement).value)

    if(!isNaN(parsedValue)) {
      this.length = parsedValue
    }
    this.password = ''
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    this.password = ''
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    this.password = ''
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    this.password = ''
  }

  onChangeUseCapitals() {
    this.includeCapitals = !this.includeCapitals;
    this.password = ''
  }

  onButtonClick() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    let validChars = '';

    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeCapitals) {
      validChars += capitals
    }
    if(this.includeNumbers) {
      validChars += numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = ''

    for(let i =0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)

      generatedPassword += validChars[index]
    }
    this.password = generatedPassword
    console.log(this.password)

  }
}
