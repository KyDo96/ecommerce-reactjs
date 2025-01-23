import React, { FC } from 'react';

type Props = {
    type: 'fb' | 'ins' | 'yt';
    href: string;
};

const BoxIcon: FC<Props> = ({ type, href }) => {
    return <div>{type}</div>;
};

export default BoxIcon;
