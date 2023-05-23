
export default function Breadcrumbs(props) {
  return (
    <div className="titleBarWrap"
     style={{
      backgroundImage: `url(${props.background})`
     }}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
            <div className="titleBar">
            </div>
					</div>
				</div>
			</div>
		</div>
  );
}