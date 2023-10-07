'use client';

import React, { useState } from 'react';
import TestColumn from './test-column';

const AppRouterTest = () => {
	const [spaceTimes, setSpaceTimes] = useState<number[]>([]);
	const [subaccountTimes, setSubaccountTimes] = useState<number[]>([]);
	const [regionTimes, setRegionTimes] = useState<number[]>([]);

	return (
		<>
			<div className="container grid grid-cols-3 gap-4">
				<div>
					<TestColumn
						title={'Fetch Space'}
						scope={'space'}
						data={spaceTimes}
						setData={setSpaceTimes}
					/>
				</div>
				<div>
					<TestColumn
						title={'Fetch Subaccount'}
						scope={'subaccount'}
						data={subaccountTimes}
						setData={setSubaccountTimes}
					/>
				</div>
				<div>
					<TestColumn
						title={'Fetch Region'}
						scope={'region'}
						data={regionTimes}
						setData={setRegionTimes}
					/>
				</div>
			</div>
		</>
	);
};

export default AppRouterTest;
