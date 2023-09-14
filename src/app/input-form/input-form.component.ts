import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'; // npm install --save-dev @types/crypto-js to solve the "crypto-js module" error

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  formData: any = {
    number: null,
    text: '',
    date: '',
    hidden: 'hello there'
  };

  onSubmit(){
    //Get MD5 hash of the nr
    const md5_hash = CryptoJS.MD5(this.formData.number.toString()).toString();

    //Create a JSON with values and hash
    const data_obj = {
      number: this.formData.number,
      text: this.formData.text,
      date: this.formData.date,
      hidden: this.formData.hidden,
      md5_hash: md5_hash
    };

    //Convert JSON to str and display it and reset it
    const json_data = JSON.stringify(data_obj);
    console.log(json_data);
    this.resetForm(); //Reset here
  }

  //Reset function
  resetForm(){
    this.formData = {
      number: null,
      text: '',
      date: '',
      hidden: 'hello there'
    };
  }
}
