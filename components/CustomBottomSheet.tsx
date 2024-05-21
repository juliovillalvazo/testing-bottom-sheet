import { View, Text } from 'react-native';
import React, { forwardRef } from 'react';
import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';

type CustomBottomSheetProps = {
    children: React.ReactNode;
} & BottomSheetProps &
    React.RefAttributes<BottomSheet>;

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = forwardRef(
    ({ children, ...props }, ref) => {
        return (
            <BottomSheet {...props} ref={ref}>
                {children}
            </BottomSheet>
        );
    },
);

export default CustomBottomSheet;
