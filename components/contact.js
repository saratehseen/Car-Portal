import Form from './form'

export default function Contact() {
  return (
    <div className="body mt-10" id="contactform">
      <div className="container">
        <div className="row pt-2">
          <div className="col-md-12">
            <h2 className="text-center">Contact Now</h2>
            <Form/>
          </div>
        </div>
      </div>
  </div>
  )
}