import Link from "next/link";

export const getStaticProps = async () => {
	const res = await fetch(
		"https://express-student-api-production.up.railway.app/api/students"
	);
	const data = await res.json();

	return {
		props: { content: await data },
		revalidate: 60,
	};
};

const Home = ({ content }) => {
	return (
		<div>
			<div className="grid grid-cols-3 text-center m-10 items-center">
				{content.map((data) => (
					<Link href={"/" + data._id} key={data._id}>
						<a>
							<h3 className="border-4 border-blue-500 rounded-2xl m-3 px-6 py-2">
								{data.name}
							</h3>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;
