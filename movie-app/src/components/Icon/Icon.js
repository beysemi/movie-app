import React from 'react';
import {Add,ArrowRight,CloseSquare,EyeSlash,Eye,Filter,KeySquare,Like,Link,Logout,Placeholder,SearchNormal,Sms,Star,Thankyou,TickCircle,UserSquare,VideoPlay,VideoTick} from '../Icons';

const renderIcon = (icon,fill="transparent",stroke="white") => {
    switch(icon){
        case 'Add':
            return <Add fill={fill} stroke={stroke} />;
        case 'ArrowRight':
            return <ArrowRight fill={fill} stroke={stroke}/>;
        case 'CloseSquare':
            return <CloseSquare fill={fill} stroke={stroke}/>;
        case 'EyeSlash':
            return <EyeSlash fill={fill} stroke={stroke}/>;
        case 'Eye':
            return <Eye fill={fill} stroke={stroke}/>;
        case 'Filter':
            return <Filter fill={fill} stroke={stroke}/>;
        case 'KeySquare':
            return <KeySquare fill={fill} stroke={stroke}/>;
        case 'Like':
            return <Like fill={fill} stroke={stroke}/>;
        case 'Link':
            return <Link fill={fill} stroke={stroke}/>;
        case 'Logout':
            return <Logout fill={fill} stroke={stroke}/>;
        case 'Placeholder':
            return <Placeholder fill={fill} stroke={stroke}/>;
        case 'SearchNormal':
            return <SearchNormal fill={fill} stroke={stroke}/>;
        case 'Sms':
            return <Sms fill={fill} stroke={stroke}/>;
        case 'Star':
            return <Star fill={fill} stroke={stroke}/>;
        case 'Thankyou':
            return <Thankyou fill={fill} stroke={stroke}/>;
        case 'TickCircle':
            return <TickCircle fill={fill} stroke={stroke}/>;
        case 'UserSquare':
            return <UserSquare fill={fill} stroke={stroke}/>;
        case 'VideoPlay':
            return <VideoPlay fill={fill} stroke={stroke}/>;
        case 'VideoTick':
            return <VideoTick fill={fill} stroke={stroke}/>;
        default:
            return <></>;
    }
}
const Icon = ({iconName,fill,stroke}) => {
    return (
        <>
            {renderIcon(iconName,fill,stroke)}
        </>
    );
}

export default Icon;
