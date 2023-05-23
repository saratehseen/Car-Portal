import Layout from '../components/layout'
import Breadcrumbs from '../components/breadcrumbs'

export default function Sports() {
  return (
    <Layout>
      <Breadcrumbs background="/images/sports-car.jpg"/>
      <div className="body mt-10">
        <div className="container">
          <div className="row pt-2">
            <div className="col-md-12">
              <div className="pb-5"> 
                <h4 className="text-left">Parts of Sports Cars</h4>
                <ol className="list-disc">
                  <li>Racing Whell Caps - Made of visible carbon fiber, these wheel-cups satisfy all customers who want greater lightness and sportiness.</li>
                  <li>Carbon Fiber Filter Boxes - The carbon fibre filter boxes are lighter than the standard parts. Carbon fibre is an ultralight, heat resistant material that is also durable thanks to its technical and aesthetic properties and the clear protective layer that covers it.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}