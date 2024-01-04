import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Link } from 'react-router-dom';
import { Button } from '@progress/kendo-react-buttons';

export const SignUp = () => {
   return (
      <div className="App">
      <div className="sign-in-page">
 <div className="sign-in-wrapper">
     <div className="logo-wrapper">
         <div className="logo">
         <img src={require('../assets/signin.png')} alt={'sign in icon'} /> :
         </div>
         <div className='banner'>
             Sign In
         </div>
         <div className="account">
         Already have an account?  <Link style={{ textDecoration: 'none' }} to="/">Sign In</Link>
         </div>
     </div>
     <div className="inputs-wrapper">
     <Form  render={formRenderProps => <FormElement style={{
maxWidth: 650
}}>
   <fieldset className={'k-form-fieldset'}> 
   <div className="mb-3">
              <Field
                name={"fullName"}
                component={Input}
                label={"Full Name"}
              />
            </div>        
       <div className="mb-3">
         <Field name={"email"} type={"email"} component={Input} label={"Email"} />
       </div>
       <div className="mb-3">
         <Field name={"password"} type={"password"} component={Input} label={"Password"} />
         <div className="mb-3">
              <Field
                name={"Company"}
                component={Input}
                label={"Company"}
              />
            </div> 
       </div>
       
     </fieldset>
   
     <fieldset className={'k-form-fieldset'}>         
     <div className="mb-3" style={{display: 'flex'}}>
     <Checkbox />
     <p> &nbsp; I agree to the <span style={{color: 'blue', textDecoration: 'underline'}}>Terms of Services </span> and <br></br>  <span style={{color: 'blue', textDecoration: 'underline'}}>Privacy Policy</span> </p>
       </div>
       <div className="k-form-buttons">
       <Link to="/home/dashboard" className="dashboard-button">
       <Button type={'submit'} className="sign-button">
         Create Free Account 
        </Button>
        </Link>
     </div>
       </fieldset>


   </FormElement>} />
         
     </div>

 </div>
 <div className="frame-wrapper">
     <div className="text-wrapper">
     <h2>How Does Kendo UI Cut Development Time?</h2>
     <h4>Kendo UI delivers everything you need to build modern, beautiful, responsive apps.</h4>
         <div className="image-wrapper">
             <img src={require('../assets/kendoka.png')} alt={'kendoka'} className="kendoka"/>
         </div>
         
         </div>
 </div>


</div>
<div className="second-image-wrapper">
  <svg shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 877 455" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="c" x1="-215.96" x2="-193.81" y1="3.9321" y2="481.35" gradientTransform="translate(0)" gradientUnits="userSpaceOnUse">
<stop stopColor="#3a55da" offset="0"/>
<stop stopColor="#282f89" offset="1"/>
</linearGradient>
<linearGradient id="b" x1="193" x2="189.69" y1="110.04" y2="467.14" gradientTransform="translate(0)" gradientUnits="userSpaceOnUse">
<stop stopColor="#5777ea" offset="0"/>
<stop stopColor="#282f89" offset="1"/>
</linearGradient>
</defs>
<g clipPath="url(#a)">
<path d="m508 252.23c-19.813 7.858-44.698 9.642-67.066 4.808l-372.33-80.47c-7.925-1.743-16.67-2.659-25.545-2.676h-347.11c-11.369-0.043-22.465-1.524-31.943-4.263l-227.01-63.749v349.12h1440v-349.12l-369 146.35z" fill="url(#c)"/>
<path transform="translate(0 -1.2096)" d="m614.43 65.522c-21.739-4.7239-45.629-2.7433-64.836 5.3758l-144.06 60.901c-19.56 8.268-43.951 10.162-65.973 5.121l-266.89-61.085c-7.7988-1.8116-16.334-2.7596-24.984-2.775h-341.68c-18.461 0-36.273 4.4105-50.027 12.387l-218.98 127v242.56h1440v-332.44l-262.57-57.043z" fill="url(#b)" opacity=".237"/>
<clipPath id="a">
<rect width="877" height="455" rx="0" ry="0" fill="#fff"/>
</clipPath>
</g>
</svg>
   </div>
 </div>
   )
}