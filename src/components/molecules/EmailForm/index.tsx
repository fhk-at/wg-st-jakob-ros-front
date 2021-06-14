//> Additional modules
//> Additional modules
// Parallax
// import { Parallax } from "react-scroll-parallax";

// Parallax
// Scroll
// import { Link } from "react-scroll";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { useState } from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBValidation,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

  
//> CSS
import "./index.scss";

//> Images
// Coffee center image
//import localImage from "../../../../common/img/content/bg/bg1.jpg";

// Placeholder image
// import Drop from "@common/img/content/water/drop.png";
// import Faucet from "@common/img/content/water/faucet.png";
// import Fountain from "@common/img/content/water/fountain.png";
// import Glass from "@common/img/content/water/glass.png";


const EmailForm = (): JSX.Element => {
  const [formValue, setFormValue] = useState({
    fname: '',
    lname: '',
    email: '',
    subject: '',
    state: '',
    message: '',
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="cmstable">
      <MDBValidation className='row g-3' noValidate>
        <div className='col-md-4'>
          <MDBInput
            value={formValue.fname}
            name='fname'
            onChange={onChange}
            id='validationCustom01'
            required
            label='Vorname'
            validation='Pflichtfeld!'
            invalid
          />
        </div>
        <div className='col-md-4'>
          <MDBInput
            value={formValue.lname}
            name='lname'
            onChange={onChange}
            id='validationCustom02'
            required
            label='Nachname'
            validation='Pflichtfeld!'
            invalid
          />
        </div>
        <div className='col-md-4'>
          <MDBInput
            value={formValue.email}
            name='email'
            onChange={onChange}
            id='validationCustom02'
            required
            label='Email' 
            type='email'
            validation='Bitte geben Sie eine gültige Email-Adresse ein!'
            invalid
          />
        </div>
        <div className='col-md-12'>
          <MDBInput
            value={formValue.subject}
            name='telephone'
            onChange={onChange}
            id='validationCustom03'
            label='Telefonnummer (optional)'
            type='tel'
            validation='Bitte geben Sie eine gültige Telefonnummer ein!'
            invalid
          />
        </div>
        <div className='col-md-12'>
          <MDBInput
            value={formValue.subject}
            name='subject'
            onChange={onChange}
            id='validationCustom03'
            required
            label='Betreff'
            validation='Pflichtfeld!'
            invalid
          />
        </div>
        <div className='col-md-12'>
          <MDBInput 
            value={formValue.message}
            name='message'
            onChange={onChange}
            label='Message'
            validation='Please provide a valid zip.'
            id='validationCustom05'
            textarea rows={4}
            required
            invalid
          />
        </div>
        <div className='col-12'>
          <MDBCheckbox
            label='Datenschutzerklärung'
            id='invalidCheck'
            validation='Pflichtfeld!'
            invalid
            required
          />
          <div id='textExample1' className='form-text'>
          Hiermit nehme Ich die Datenschutzerklärung der Wassergenossenschaft St. Jakob im Rosental an. Ich nehme zur Kenntnis, dass die von mir eingebenen Daten von der Wassergenossenchaft ausgewertet werden dürfen. Weitere Informationen finden Sie unter  Datenschutzerklärung.
          </div>
        </div>
        <div className='col-12'>
          <MDBBtn type='submit'>Submit form</MDBBtn>
        </div>
      </MDBValidation>
    </div>
  )
}

export default EmailForm
  
  /**
   * SPDX-License-Identifier: (EUPL-1.2)
   * Copyright © 2020 Werbeagentur Christian Aichner
   */
  