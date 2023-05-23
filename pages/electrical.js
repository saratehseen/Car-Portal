import Layout from '../components/layout'
import Breadcrumbs from '../components/breadcrumbs'

export default function Electrical() {
  return (
    <Layout>
      <Breadcrumbs background="/images/electric-car.avif"/>
      <div className="body mt-10">
        <div className="container">
          <div className="row pt-2">
            <div className="col-md-12">
              <div> 
                <h4 className="text-left">Types of Electric Cars</h4>
                <h6 className="pt-2">There are four types of electric vehicles available:</h6>
                <ol className="list-decimal">
                  <li>Battery Electric Vehicle (BEV)</li>
                  <li>Hybrid Electric Vehicle (BEV)</li>
                  <li>Fuel Cell Electric Vehicle (BEV)</li>
                  <li>Plug in Hybrid Electric Vehicle (BEV)</li>
                </ol>
              </div>
              <div className="pb-5"> 
                <h4 className="text-left">Parts of Electric Cars</h4>
                <ol className="list-disc">
                  <li>Traction Battery Pack - The function of the battery in an electric car is as an electrical energy storage system in the form of direct-current electricity (DC)</li>
                  <li>Power Inverter - The inverter functions to change the direct current (DC) on the battery into an alternating current (AC) and then this alternating current is used by an electric motor.</li>
                  <li>Controller - The main function of the controller is as a regulator of electrical energy from batteries and inverters that will be distributed to electric motors.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}