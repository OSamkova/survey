import React from 'react';

const SurveyResult = ( {results} ) => {

		return <div>
					{ results && results.final
						? <div className='result-container'>
								<div className='result-item title'>
									{results.final.title}
								</div>
								<div className='result-item body'>
									{results.final.description}
								</div>
							</div>
						: null
					}
				</div>
}

export default SurveyResult;