export const getStaticPaths = async () => {
	const res = await fetch(
		"https://express-student-api-production.up.railway.app/api/students"
	);
	const data = await res.json();

	const paths = data.map((doc) => {
		return {
			params: { id: doc._id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(
		"https://express-student-api-production.up.railway.app/api/students/" +
			id
	);
	const data = await res.json();

	return {
		props: { student: data },
		revalidate: 60,
	};
};

const DataView = ({ student }) => {
	return (
		<div>
			<h1>{student.name}</h1>
			<h1>{student.roll}</h1>
			<h1>{student.present.toString()}</h1>
		</div>
	);
};

export default DataView;
