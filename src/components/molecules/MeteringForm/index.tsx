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
    address: '',
    meterid: '',
    mainmeter: '',
    submeter1: '',
    submeter2: '',
    annotation: '',
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
            value={formValue.address}
            name='address'
            placeholder='Straße und Hausnummer'
            onChange={onChange}
            id='validationCustom05'
            required
            label='Adresse'
            validation='Pflichtfeld!'
            invalid
          />
        </div>
        <div className='col-md-12'>
          <MDBInput
            value={formValue.meterid}
            name='meterid'
            placeholder='Zählernummer'
            onChange={onChange}
            id='validationCustom07'
            label='Zählernummer'
            type='number'
            validation='Bitte geben Sie einen gültigen Zählernummer ein!'
            invalid
          />
        </div>
        <div className='col-md-12'>
          <MDBInput
            value={formValue.mainmeter}
            name='mainmeter'
            placeholder='Hauptzählerstand'
            onChange={onChange}
            id='validationCustom08'
            label='Hauptzählerstand'
            type='number'
            validation='Bitte geben Sie einen gültigen Zählerstand ein!'
            invalid
          />
        </div>
        <div className='col-md-12'>
          <MDBInput
            value={formValue.submeter1}
            name='submeter1'
            placeholder='1. Subzähler'
            onChange={onChange}
            id='validationCustom09'
            label='1. Subzähler'
            type='number'
            validation='Bitte geben Sie einen gültigen Zählerstand ein!'
            invalid
          />
        </div>
        <div className='col-md-12'>
          <MDBInput
            value={formValue.submeter2}
            name='submeter2'
            placeholder='2. Subzähler'
            onChange={onChange}
            id='validationCustom10'
            label='2. Subzähler'
            type='number'
            validation='Bitte geben Sie einen gültigen Zählerstand ein!'
            invalid
          />
        </div>
        <div className='col-md-12'>
          <MDBInput 
            value={formValue.annotation}
            name='annotation'
            placeholder='Hier können Sie Ihre Anmerkungen schreiben.'
            onChange={onChange}
            label='Anmerkungen'
            // validation='Please provide a valid zip.'
            id='validationCustom11'
            textarea rows={4}
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
          <MDBBtn type='submit' onClick={() => BridgeDrop.buildIn.mutations.doJaenEmailFormPageMutation({url: "/wg-metering", values:{git_remote: "fhk-at/wg-st-jakob-ros-front", form_first_name: formValue.fname, form_last_name: formValue.lname, telephone: formValue.telephone, address: formValue.address, meterid: formValue.meterid, mainmeter: formValue.mainmeter, submeter1: formValue.submeter1, submeter2: formValue.submeter1, annotion: formValue.annotation}})}>Submit form</MDBBtn>
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
  