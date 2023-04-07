import React from 'react';

export const TYPOGRAPHY_TEST = {
	CONTAINER: 'typography-container'
}

export type TypographyTag = 'h1' | 'h2' | 'h3' | 'span' | 'div' | 'p';

export type TypographyProps = {
	children: React.ReactNode;
	tag?: TypographyTag;
};

export const Typography: React.FC<TypographyProps> = ({ children, tag: Tag = 'div' }) => {
	return (
		<Tag className={Tag} data-testid={TYPOGRAPHY_TEST.CONTAINER}>
			{children}
		</Tag>
	)
};
