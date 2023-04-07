import React from 'react';
import classNames from 'classnames';


export const BUTTON_TEST = {
	CONTAINER: 'button-container',
	ICON: 'button-icon',
	CHILDREN: 'button-children',
}

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
	/**
	* Children
	*/
	children: React.ReactNode,
	/**
	* Variant
	*/
	variant: 'contained' | 'outlined';
}

export const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
	return (
		<button className={classNames('text-[16px] h-12 px-[34px] rounded-full capitalize relative font-semibold hover:bg-button_hover ease-in duration-200',
			{
				'bg-secondary text-white':
					variant === 'contained'
			},
			{
				'bg-transperent text-black':
					variant === 'outlined'
			},
		)}
			data-testid={BUTTON_TEST.CONTAINER}
			{...rest}
		>
			<span className='rounded-full w-12 h-12 border-[1px] border-secondary absolute left-0 top-0 z-[-1]' data-testid={BUTTON_TEST.ICON}></span>
			<span data-testid={BUTTON_TEST.CHILDREN}>{children}</span>
		</button>
	)
};
