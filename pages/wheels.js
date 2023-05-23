import Layout from '../components/layout'
import Breadcrumbs from '../components/breadcrumbs'

export default function Wheels() {
  return (
    <Layout>
      <Breadcrumbs background="/images/wheels.jpg"/>
      <div className="body mt-10">
        <div className="container">
          <div className="row pt-2">
            <div className="col-md-12">
              <div> 
                <h4 className="text-left">Types of Two Wheels Cars</h4>
                <h6 className="pt-2">There are four types of two wheel vehicles available:</h6>
                <ol className="list-decimal">
                  <li>Motorcycle</li>
                  <li>Bicycle</li>
                  <li>Scooter</li>
                  <li>Plug in Hybrid Electric Vehicle (BEV)</li>
                </ol>
              </div>
              <div className="pb-5"> 
                <h4 className="text-left">Parts of Two Wheels Cars</h4>
                <ol className="list-disc">
                  <li>Engine - The engine of a bike or scooter is often called its heart. This is what powers a two-wheeler and is responsible for its performance.</li>
                  <li>Brakes - They are one of the most important components of a two-wheeler. They are used to decrease the speed of the vehicle. There are two types of brakes – disc brakes and drum brakes.</li>
                  <li>Tyres - The tyres separate a vehicle from the road. As the name suggests, every "two-wheeler" is equipped with two tyre – one at the front and one at the rear.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}