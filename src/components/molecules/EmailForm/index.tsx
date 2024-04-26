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

import BridgeDrop from 'drop'


const EmailForm = (): JSX.Element => {
  const [formValue, setFormValue] = useState({
    fname: '',
    lname: '',
    email: '',
    telephone: '',
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
            placeholder='Vorname'
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
            placeholder='Nachname'
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
            placeholder='z. B. wasser@stjakob.at'
            onChange={onChange}
            id='validationCustom03'
            required
            label='Email' 
            type='email'
            validation='Bitte geben Sie eine gültige Email-Adresse ein!'
            invalid
          />
        </div>
        <div className='col-md-12'>
          <MDBInput
            value={formValue.telephone}
            name='telephone'
            placeholder='Telefonnummer'
            onChange={onChange}
            id='validationCustom04'
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
            placeholder='Betreff'
            onChange={onChange}
            id='validationCustom05'
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
            placeholder='Bitte geben Sie Ihre Nachricht ein.'
            onChange={onChange}
            label='Message'
            validation='Please provide a valid zip.'
            id='validationCustom06'
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
          Hiermit nehme Ich die Datenschutzerklärung der Wassergenossenschaft St. Dominik im Rosental an. Ich nehme zur Kenntnis, dass die von mir eingebenen Daten von der Wassergenossenchaft ausgewertet werden dürfen. Weitere Informationen finden Sie unter  Datenschutzerklärung.
          </div>
        </div>
        <div className='col-12'>
          <MDBBtn type='submit' onClick={() => BridgeDrop.buildIn.mutations.doJaenEmailFormPageMutation({url: "/wg-contact", values:{git_remote: "fhk-at/wg-st-jakob-ros-front", form_first_name: formValue.fname, form_last_name: formValue.lname, telephone: formValue.telephone, subject: formValue.subject, html_message: formValue.message}})}>Submit form</MDBBtn>
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
  