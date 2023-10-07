import type { NextApiRequest, NextApiResponse } from 'next';

interface TestResponse {
	root: boolean;
	environment: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { scope } = req.query;
	const start = new Date().getTime();

	try {
		const response: Response = await fetch(
			`https://approuter_test.cfapps.eu10.hana.ondemand.com/${scope}/`
		);

		console.log('response', response);
		if (!response.ok) {
			console.log('Response not ok');
		}
		const data: TestResponse = await response.json();

		if (data?.environment === scope) {
			const timeTaken = new Date().getTime() - start;
			res.status(200).json({ time: timeTaken });
		} else {
			res.status(500).json({ error: 'Error fetching data' });
		}
	} catch (error) {
		console.error('Error fetching data', error);
	}
}
