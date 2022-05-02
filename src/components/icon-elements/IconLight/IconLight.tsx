import React from 'react';

import { Colors, Sizes } from '@utils/component-utils';
import { colorMapping, proportinsMapping, shapeMapping } from 'components/icon-elements/IconLight/mappings';
import { IconElementProps } from '../../../utils/component-utils';
import IconWrapper from '@common/IconWrapper';

const IconLight = ({
    Icon,
    info,
    size = Sizes.SM,
    color = Colors.Blue,
}: IconElementProps) => {
    return(
        <IconWrapper
            Icon = { Icon }
            info={ info }
            { ...colorMapping[color] }
            { ...proportinsMapping[size] }
            { ...shapeMapping }
        />
    );
};

export default IconLight;