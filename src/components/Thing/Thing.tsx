import React from 'react';

export const THING_TEST = {
	CHILDREN: 'thing-children'
}

export type ThingProps = {
	/**
	* Children
	  */
	children: React.ReactNode
}

export const Thing: React.FC<ThingProps> = ({ children }) => {
	return (
		<div className='px-[24px] py-[16px] text-white bg-primary rounded-[20px] inline-block lg:text-[24px] text-[16px]' data-testid={THING_TEST.CHILDREN}>
			{children}
		</div>
	)
}
