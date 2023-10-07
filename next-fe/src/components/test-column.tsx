import React from 'react';
import { Button } from './ui/button';

interface TestResponse {
	time: number;
}

const TestColumn: React.FC<{
	title: string;
	scope: string;
	data: number[];
	setData: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ title, scope, data, setData }) => {
	const fetchEndpoint = async (
		setTimes: React.Dispatch<React.SetStateAction<number[]>>
	) => {
		try {
			const response: Response = await fetch(`/api/test/${scope}/`);
			if (!response.ok) {
				console.log('Error fetching data from');
			} else {
				const data: TestResponse = await response.json();
				setTimes((times) => [...times, data.time]);
			}
		} catch (error) {
			console.error('Error fetching data', error);
		}
	};

	const calculateAverage = (times: number[]): number => {
		if (times.length === 0) return 0;
		const sum = times.reduce((acc, time) => acc + time, 0);
		return sum / times.length;
	};

	const triggerFetch = (counter: number) => {
		fetchEndpoint(setData).then(() => {
			setTimeout(() => {
				if (counter < 20) {
					triggerFetch(counter + 1);
				}
			}, 500);
		});
	};

	return (
		<>
			<div className="flex justify-between">
				<Button variant={'ghost'} onClick={() => triggerFetch(0)}>
					{title}
				</Button>
				<span className="self-center">
					Avg: {calculateAverage(data).toFixed(2)} ms
				</span>
			</div>
			<div className="border-solid border-t border-black">
				<ul>
					{data.map((time, index) => (
						<li className="p-2" key={index}>
							{time} ms
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default TestColumn;
