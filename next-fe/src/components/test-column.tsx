import React from 'react';
import { Button } from './ui/button';

const TestColumn: React.FC<{
	endpoint: string;
	title: string;
	data: number[];
	setData: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ title, endpoint, data, setData }) => {
	const fetchEndpoint = async (
		endpoint: string,
		setTimes: React.Dispatch<React.SetStateAction<number[]>>
	) => {
		const start = new Date().getTime();
		try {
			await fetch(endpoint, {
				method: 'GET',
				mode: 'no-cors',
				cache: 'no-cache',
			});
			const timeTaken = new Date().getTime() - start;
			setTimes((times) => [...times, timeTaken]);
		} catch (error) {
			console.error('Error fetching data from', endpoint, error);
		}
	};

	const calculateAverage = (times: number[]): number => {
		if (times.length === 0) return 0;
		const sum = times.reduce((acc, time) => acc + time, 0);
		return sum / times.length;
	};

	const triggerFetch = async () => {
		for (let i = 0; i < 5; i++) {
			await fetchEndpoint(endpoint, setData);
		}
	};

	return (
		<>
			<div className="flex justify-between">
				<Button variant={'ghost'} onClick={triggerFetch}>
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
