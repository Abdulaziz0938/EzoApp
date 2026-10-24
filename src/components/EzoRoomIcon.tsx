import React from 'react';
import Svg, { Path, Text as SvgText, G } from 'react-native-svg';

interface Props {
  isActive?: boolean;
  size?: number;
}

export default function EzoRoomIcon({ isActive = false, size = 32 }: Props) {
  // الألوان: 
  // لما تكون نشطة: خلفية خضراء، نص أبيض
  // لما تكون غير نشطة: خلفية رمادية داكنة (متل باقي الأيقونات)، نص رمادي فاتح
  const bgColor = isActive ? '#10B981' : '#2C2C2E'; 
  const textColor = isActive ? '#FFFFFF' : '#888888';

  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <G>
        {/* شكل الدرع بحواف ناعمة */}
        <Path
          d="M 50 8 L 85 32 L 85 82 Q 85 95 72 95 L 28 95 Q 15 95 15 82 L 15 32 Z"
          fill={bgColor}
        />
        {/* استخدام الرموز النصية المائلة اللي طلبتها */}
        <SvgText
          x="50"
          y="67"
          fill={textColor}
          fontSize="36"
          fontWeight="bold"
          textAnchor="middle"
        >
          𝓔𝔃𝓸
        </SvgText>
      </G>
    </Svg>
  );
}
