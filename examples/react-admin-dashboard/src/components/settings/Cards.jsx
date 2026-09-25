import * as React from "react";
import { Card, CardTitle, CardBody } from '@progress/kendo-react-layout';
import { FinancialForm } from "../settings/FinancialForm";


export const Cards = () => {


   return <div>
   <div>
      <div className="billing-card-deck">
          <Card className="billing-card">
          <CardBody>
           <CardTitle className="billing-card-name">Starter</CardTitle>
           <CardTitle className="billing-card-price">Free</CardTitle>
           <p className="billing-card-description">STARTER PLAN FOR INDIVIDUALS</p>
          </CardBody>
        </Card>
        <Card className="billing-card">
         <CardBody>
           <CardTitle className="billing-card-name">Team </CardTitle>
           <CardTitle className="billing-card-price">$20/Month</CardTitle>
           <p className="billing-card-description">COLLABORATE UP TO 16 PEOPLE</p>
          </CardBody>
        </Card>
        <Card className="billing-card">
         <CardBody>
           <CardTitle className="billing-card-name">Enterprise</CardTitle>
           <CardTitle className="billing-card-price">$40/Month</CardTitle>
           <p className="billing-card-description">FOR BIGGER BUSINESSES</p>
          </CardBody>
        </Card>

    </div>
    </div>

 <FinancialForm/>
   </div>
}
