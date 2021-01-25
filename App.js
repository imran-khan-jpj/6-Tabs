import {useState, useEffect} from 'react';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

	const [loading, setLoading] = useState(true);
	const [value, setValue] = useState(0);
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {

		const response = await fetch(url);
		const data = await response.json();
		setData(data);
		setLoading(false);	
	}

	if(loading){
		return <div className="container">
			<div className="row text-center">
				<h1>Loading...</h1>
			</div>
		</div>
	}

	// console.log(data[0]);
	const {title, dates, duties, company} = data[value];
	return (
			<div className="container">
				<div className="row mt-5 text-center justify-content-center">
					<div className="col-3">
						<h1 className="font-weight-bold">Experience</h1>
						<hr className="bg-info" style={{width: '40%', height: '5px'}} />
					</div>
					
				</div>
				<div className="row">
					<div className="col-2">
					{
						data.map((d, index) => {
							return <div className="text-center border-left" key={index}>
							<button className={`btn ${index === value ? 'btn-info' : null}`} onClick={() => setValue(index)}>{d.company}</button>
						</div>
						})
					}
					</div>
					<div className="col-10">
						<h2>{title}</h2>
						<div><button className="btn btn-info">{company}</button></div>
						<div className="m-2">{dates}</div>
						{
							duties.map((duty, index) => {
								return <div className="row" key={index}>
							<div className="col-1 text-center font-weight-bold">
								<h3 className="text-info">{'>>'}</h3>
							</div>
							<div className="col-11">
								<p>{duty}</p>
							</div>
						</div>
							})
						}
						

					</div>
				</div>
			</div>
		
	)
}
export default App;