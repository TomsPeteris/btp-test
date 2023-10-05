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
						endpoint={'https://api.publicapis.org/entries'}
						title={'Fetch Space'}
						data={spaceTimes}
						setData={setSpaceTimes}
					/>
				</div>
				<div>
					<TestColumn
						endpoint={'https://api.publicapis.org/entries'}
						title={'Fetch Subaccount'}
						data={subaccountTimes}
						setData={setSubaccountTimes}
					/>
				</div>
				<div>
					<TestColumn
						endpoint={'https://api.publicapis.org/entries'}
						title={'Fetch Region'}
						data={regionTimes}
						setData={setRegionTimes}
					/>
				</div>
			</div>
		</>
	);
};

export default AppRouterTest;
